import { useSelector, useDispatch } from "react-redux";
import { addPhones as addPhonesAction, addTablets as addTabletsAction } from "../phones/phoneSlice";
import { addTvs as addTvsAction } from "../tvs/tvSlice";
import { useState } from "react";
import StockInfos from "../../components/StockInfos";

const container = {
  width: "300px",
  padding: "20px",
  border: "1px solid grey",
  margin: "10px auto"
}

const btnContainer = {
  display: "flex",
  marginBottom: "12px"
}




const AdminView = () => {

  const [phones, setPhones] = useState(1)
  const [tablets, setTablets] = useState(1)
  const [tvs, setTvs] = useState(1)

 const phone = useSelector((state) => state.phone)
 const tv = useSelector((state) => state.tv)


  console.log(phone)
  console.log(tv)


  const dispatch = useDispatch()




  return (
    <div style={container}>
      <h2>Admin</h2>
        <StockInfos product="Téléphones" stock={phone.phones}/>
      <div style={btnContainer}>
        <input
          type="number"
          min="1" value={phones}
          onChange={(event) =>  setPhones(event.target.value)}
        />
        <button onClick={() => dispatch(addPhonesAction(+phones))}>Augmenter le stock</button>
      </div>

         <StockInfos product="Tablettes" stock={phone.tablets} />
       <div style={btnContainer}>
        <input
          type="number"
          min="1" value={tablets}
          onChange={(event) =>  setTablets(event.target.value)}
        />
        <button onClick={() => dispatch(addTabletsAction(+tablets))}>Augmenter le stock</button>
      </div>

          <StockInfos product="Télévisions" stock={tv.tvs}/>
       <div style={btnContainer}>
        <input
          type="number"
          min="1"
          value={tvs}
          onChange={(event) => setTvs(event.target.value)}
        />
        <button onClick={() => dispatch(addTvsAction(+tvs))}>Augmenter le stock</button>
      </div>
    </div>
  )
}



export default AdminView;
