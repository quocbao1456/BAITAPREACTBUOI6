import Seat from './Seat';

export default function SeatRow({rowLabel, seats, selectedIds, onToggle}) {
  return (
    <div className="seat-row">
      <div className="row-label">{rowLabel}</div>
      <div className="row-seats">
        {seats.map (s => (
          <Seat
            key={s.id}
            seat={s}
            isSelected={selectedIds.includes (s.id)}
            onToggle={onToggle}
          />
        ))}
      </div>
    </div>
  );
}
