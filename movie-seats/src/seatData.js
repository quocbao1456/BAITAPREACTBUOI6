
export function convertSeatData(jsonData) {
  const seats = [];

  jsonData.forEach((row) => {
    row.danhSachGhe.forEach((ghe, index) => {
      seats.push({
        id: ghe.soGhe,
        row: row.hang,
        number: index + 1,
        price: ghe.gia,
        booked: ghe.daDat,
      });
    });
  });

  return seats;
}
