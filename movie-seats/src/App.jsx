import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadSeatmap } from "./store/seatActions";
import { convertSeatData } from "./seatData";
import SeatMap from "./components/SeatMap";
import Basket from "./components/Basket";
import Legend from "./components/Legend";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("/danhSachGhe.json")
      .then((res) => res.json())
      .then((data) => dispatch(loadSeatmap(convertSeatData(data))));
  }, [dispatch]);

  return (
    <div className="container">
      <h1>Đặt vé xem phim</h1>
      <div className="layout">
        <div className="left">
          <SeatMap />
        </div>
        <Basket />
      </div>
    </div>
  );
}
