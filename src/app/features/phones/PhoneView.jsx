import phone from "../../../images/phone.png"
import { useSelector, useDispatch } from "react-redux";
import { phones as phonesAction} from "./phoneSlice";


const PhoneView = () => {

  const { phones } =  useSelector((state) => state.phone)

  const dispatch = useDispatch()

  return (
   <div className="container">
      <img src={phone} alt="phone" />
      <p>Disponibilité :
        <span className="count"> {phones}</span>
      </p>

      <div className="btnContainer">
        <button onClick={() => dispatch(phonesAction())}>Acheter</button>
      </div>
    </div>
  )
}

export default PhoneView;
