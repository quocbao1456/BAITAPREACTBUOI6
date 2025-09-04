import {
  LOAD_SEATMAP,
  TOGGLE_SEAT,
  RESET_SELECTION,
  CONFIRM_BOOKING,
} from "./seatActions";

const initialState = {
  seats: [],
  selected: [],
  total: 0,
};

export default function seatReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_SEATMAP:
      return { ...state, seats: action.payload, selected: [], total: 0 };

    case TOGGLE_SEAT: {
      const id = action.payload;
      const seat = state.seats.find((s) => s.id === id);
      if (!seat || seat.booked) return state;

      const selected = state.selected.includes(id)
        ? state.selected.filter((x) => x !== id)
        : [...state.selected, id];

      const total = selected.reduce((sum, sid) => {
        const s = state.seats.find((g) => g.id === sid);
        return sum + (s ? s.price : 0);
      }, 0);

      return { ...state, selected, total };
    }

    case RESET_SELECTION:
      return { ...state, selected: [], total: 0 };

    case CONFIRM_BOOKING: {
      if (state.selected.length === 0) return state;

      const updatedSeats = state.seats.map((s) =>
        state.selected.includes(s.id) ? { ...s, booked: true } : s
      );

      return { ...state, seats: updatedSeats, selected: [], total: 0 };
    }

    default:
      return state;
  }
}
