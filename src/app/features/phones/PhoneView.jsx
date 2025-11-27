import phone from "../../../images/phone.png"
import tablet from "../../../images/tablet.png"
import { Fragment, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { phones as phonesAction} from "./phoneSlice";
import {tablets as tabletsAction} from "./phoneSlice";


const PhoneView = () => {

  const [phoneNumber, setPhoneNumber] = useState("")
  const [tabletNumber, setTabletNumber] = useState("")

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
          <button onClick={() => dispatch(phonesAction(phoneNumber))}>Acheter</button>
           <input
            type="number"
            min="1"
            max={phones}
            value={phoneNumber}
            onChange={(event) => setPhoneNumber(event.target.value)}
          />
        </div>
      </div>

      <div className="container">
        <img src={tablet} alt="tablet" />
        <p>Disponibilité :
          <span className="count"> {tablets}</span>
        </p>

        <div className="btnContainer">
          <button onClick={() => dispatch(tabletsAction(tabletNumber))}>Acheter</button>
          <input
            type="number"
            min="1"
             max={tablets}
            value={tabletNumber}
            onChange={(event) => setTabletNumber(event.target.value)}
          />
        </div>
      </div>
    </Fragment>
  )
}

export default PhoneView;
