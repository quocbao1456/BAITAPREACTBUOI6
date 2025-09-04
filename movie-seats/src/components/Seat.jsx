export default function Seat({ seat, isSelected, onToggle }) {
  const className = [
    "seat",
    seat.booked ? "booked" : isSelected ? "selected" : "available",
  ].join(" ");

  return (
    <button
      type="button"
      className={className}
      onClick={() => onToggle(seat.id)}
      disabled={seat.booked}
      title={`${seat.id} • ${seat.price.toLocaleString("vi-VN")} đ`}
    >
      {seat.number}
    </button>
  );
}
