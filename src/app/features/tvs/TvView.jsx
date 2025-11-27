import tv from "../../../images/tv.png"
import { useSelector, useDispatch } from "react-redux";
import {tvs as tvsAction} from "./tvSlice";
import {useState} from "react";

const TvView = () => {

  const [tvNumber, setTvNumber] = useState("");
  const {tvs} = useSelector((state) => state.tv)

  const dispatch = useDispatch()


 const handleDipatchTvs = () => {
   dispatch(tvsAction(tvNumber));
   setTvNumber(1)

 }

  return (
   <div className="container">
      <img src={tv} alt="tv" />
      <p>Disponibilité :
        <span className="count"> {tvs}</span>
      </p>

      {
        tvs > 0 && (
          <div className="btnContainer">
            <button onClick={handleDipatchTvs}>Acheter</button>
            <input
              type="number"
              min="1"
               max={tvs}
              value={tvNumber}
              onChange={(event) => setTvNumber(event.target.value)}
            />
          </div>
      )

    }
    </div>

  )
}

export default TvView;
