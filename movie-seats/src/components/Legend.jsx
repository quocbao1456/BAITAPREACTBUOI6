export default function Legend() {
  return (
    <div className="legend">
      <span className="legend-item">
        <span className="legend-box available" /> Ghế trống
      </span>
      <span className="legend-item">
        <span className="legend-box selected" /> Đang chọn
      </span>
      <span className="legend-item">
        <span className="legend-box booked" /> Đã đặt
      </span>
    </div>
  );
}
