import { useSelector, useDispatch } from "react-redux";
import SeatRow from "./SeatRow";
import { toggleSeat } from "../store/seatActions";

export default function SeatMap() {
  const dispatch = useDispatch();
  const { seats, selected = [] } = useSelector((s) => s.booking);

  // Gom ghế theo hàng
  const grouped = seats.reduce((acc, seat) => {
    if (!acc[seat.row]) acc[seat.row] = [];
    acc[seat.row].push(seat);
    return acc;
  }, {});

  // Sắp xếp hàng theo alphabet
  const rows = Object.keys(grouped).sort();

  return (
    <div className="seatmap">
      <div className="screen">Màn hình</div>
      {rows.map((row) => (
        <SeatRow
          key={row}
          rowLabel={row}
          seats={grouped[row]}
          selectedIds={selected}
          onToggle={(id) => dispatch(toggleSeat(id))}
        />
      ))}
    </div>
  );
}
