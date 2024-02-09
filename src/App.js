
import { store } from "./redux/state/store";
import { deposit } from "./redux/state/actions";
import { withdrawl } from "./redux/state/actions";
import { useState } from "react";
import { accountBalance } from "./redux/state/reducer";
import { useDispatch, useSelector } from "react-redux";

function App() {
 
  const [Num, setNum] = useState();
  const accountBalance=useSelector((state)=>state.accountBalance)
  const dispatch=useDispatch()
  
  const display=()=>{
  console.log(store.getState())
  
  }
  const HanldeDeposit=()=>{
    store.dispatch(deposit(Num))
  }
  const HandleWithdrawl=()=>{
    store.dispatch(withdrawl(Num))
  }
  return (
    <>
    <input value={Num} onChange={(e) => setNum(Number(e.target.value))} />
    <button onClick={HanldeDeposit}>Deposit</button>
    <button onClick={HandleWithdrawl}>Withdrawal</button> 
    <button onClick={display}>Get Wallet Details</button>
<hr/>
<h1>Production grade working</h1>
    <>wallet balance: {accountBalance}</>
    <button onClick={()=>dispatch(deposit(1000))}>Deposit 1000</button>
    <button onClick={()=>dispatch(withdrawl(500))}>Withdraw 500</button>
    
   
  </>

    
      
  );
}

export default App;
