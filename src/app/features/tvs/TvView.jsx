import tv from "../../../images/tv.png"
import { useSelector, useDispatch } from "react-redux";
import {tvs as tvsAction} from "./tvSlice";

const TvView = () => {

  const {tvs} = useSelector((state) => state.tv)

  const dispatch = useDispatch()

  return (
   <div className="container">
      <img src={tv} alt="tv" />
      <p>Disponibilité :
        <span className="count"> {tvs}</span>
      </p>

      <div className="btnContainer">
        <button onClick={() => dispatch(tvsAction())}>Acheter</button>
      </div>
    </div>
  )
}

export default TvView;
