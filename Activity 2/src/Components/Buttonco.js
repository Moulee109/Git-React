import {useState} from "react";

const Buttonco = () => {
    const[data,setdata]=useState('green')
    const handleColor = () =>{
        if(data==='green')
            setdata('red')
        else
            setdata('green')
    }
    return(
        <>
        
        <div style={{width:"10vw", height:"10vh",backgroundColor:`${data}`}}></div>
            <button onClick={handleColor}>Change</button>
        </>
    )
}
export default Buttonco;