export const LOAD_SEATMAP = "LOAD_SEATMAP";
export const TOGGLE_SEAT = "TOGGLE_SEAT";
export const RESET_SELECTION = "RESET_SELECTION";
export const CONFIRM_BOOKING = "CONFIRM_BOOKING";

export const loadSeatmap = (seats) => ({
  type: LOAD_SEATMAP,
  payload: seats,
});

export const toggleSeat = (seatId) => ({
  type: TOGGLE_SEAT,
  payload: seatId,
});

export const resetSelection = () => ({
  type: RESET_SELECTION,
});

export const confirmBooking = () => ({
  type: CONFIRM_BOOKING,
});
