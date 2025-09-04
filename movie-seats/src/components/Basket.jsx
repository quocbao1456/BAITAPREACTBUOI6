import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { resetSelection, confirmBooking } from "../store/seatActions";
import Modal from "./Modal";

export default function Basket() {
  const dispatch = useDispatch();
  const { selected, seats, total } = useSelector((s) => s.booking);
  const [customerName, setCustomerName] = useState("");
  const [showModal, setShowModal] = useState(false);

  const selectedSeats = selected
    .slice()
    .sort((a, b) => a.localeCompare(b))
    .map((id) => seats.find((s) => s.id === id));

  const handleConfirm = () => {
    if (!customerName.trim()) {
      alert("Vui lòng nhập tên khách hàng");
      return;
    }
    if (selectedSeats.length === 0) {
      alert("Chưa chọn ghế nào");
      return;
    }
    setShowModal(true);
  };

  const handleFinish = () => {
    dispatch(confirmBooking());
    setCustomerName("");
    setShowModal(false);
  };

  return (
    <>
      <aside className="basket">
        <h2>Thông tin vé</h2>

        <div className="basket-row">
          <span>Tên khách hàng:</span>
          <input
            type="text"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            placeholder="Nhập tên..."
            className="input-name"
          />
        </div>

        <div className="basket-row">
          <span>Ghế đã chọn:</span>
          {selectedSeats.length === 0 ? (
            <em>Chưa chọn</em>
          ) : (
            <div className="chips">
              {selectedSeats.map((s) => (
                <span key={s.id} className="chip">
                  {s.id}
                </span>
              ))}
            </div>
          )}
        </div>

        <div className="basket-row">
          <span>Tạm tính:</span>
          <strong>{total.toLocaleString("vi-VN")} đ</strong>
        </div>

        <div className="basket-actions">
          <button
            className="btn secondary"
            onClick={() => dispatch(resetSelection())}
            disabled={selectedSeats.length === 0}
          >
            Hủy chọn
          </button>
          <button
            className="btn primary"
            onClick={handleConfirm}
            disabled={selectedSeats.length === 0}
          >
            Đặt vé
          </button>
        </div>
      </aside>

      <Modal open={showModal} onClose={() => setShowModal(false)}>
  <div className="modal-header">
    <span className="modal-icon">🎟️</span>
    <h3>Xác nhận đặt vé</h3>
  </div>
  <p>
    <strong>{customerName}</strong> – {selectedSeats.length} ghế:{" "}
    {selectedSeats.map((s) => s.id).join(", ")}
  </p>
  <p>
    Tổng tiền:{" "}
    <strong>{total.toLocaleString("vi-VN")} đ</strong>
  </p>
  <div className="basket-actions">
    <button className="btn secondary" onClick={() => setShowModal(false)}>
      Hủy
    </button>
    <button className="btn primary" onClick={handleFinish}>
      ✅ Xác nhận
    </button>
  </div>
</Modal>

    </>
  );
}
