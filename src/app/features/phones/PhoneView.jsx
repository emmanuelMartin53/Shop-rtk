import phone from "../../../images/phone.png"
import tablet from "../../../images/tablet.png"
import { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { phones as phonesAction} from "./phoneSlice";
import {tablets as tabletsAction} from "./phoneSlice";


const PhoneView = () => {

  const { phones, tablets } =  useSelector((state) => state.phone)


  const dispatch = useDispatch()

  return (
    <Fragment>
    <div className="container">
        <img src={phone} alt="phone" />
        <p>Disponibilité :
          <span className="count"> {phones}</span>
        </p>

        <div className="btnContainer">
          <button onClick={() => dispatch(phonesAction())}>Acheter</button>
        </div>
      </div>

      <div className="container">
        <img src={tablet} alt="tablet" />
        <p>Disponibilité :
          <span className="count"> {tablets}</span>
        </p>

        <div className="btnContainer">
          <button onClick={() => dispatch(tabletsAction(2))}>Acheter</button>
        </div>
      </div>
    </Fragment>
  )
}

export default PhoneView;
