import React from "react";

export default function Count(){
    const [count,setCount] = React.useState(1000000000)

    return(
        <>
        <span className="count" onClick={()=>{
            setCount(count +1)
        }}>+</span>
        <h1 onClick={()=>{
            setCount(0)
        }}>{count}</h1>
        <span className="count" onClick={()=>{
            if(count > 0){
                setCount(count -1)
            }
        }}>-</span>
        </>
    )
}