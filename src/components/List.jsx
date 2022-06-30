import React from "react";
import Day from "./Day";
import Add from "./Add";

import { AnimatePresence } from "framer-motion";
export default function List(){
    let [data,setData]=React.useState([])
    let [myList,setList]=React.useState([])
    
    React.useEffect(()=>{
        let d=window.localStorage.getItem("data");
        console.log(d)
        if(d)
        setData(JSON.parse(d))
        
    },[])
    
    React.useEffect(()=>{
        localStorage.setItem('data', JSON.stringify(data));
        if(data.length===0)setList([])
        else  setList(data.map((obj,index)=><Day key={index} {...obj} no={index+1} deleteFun={del} />))
    },[data])


    let del=(id)=>{
        setData(prev=>{
            let newArr=prev.filter((ele)=>{
                return ele.id!==id
            })
                return newArr
        })
    }
    
    let clear=()=>{
        setData([])
    }
    let [show,setShow]=React.useState(false)
    
    return (
        <div className="relative bg-rose-400 h-full flex justify-center items-center">
            <div className="py-3 px-5 font-semibold font-sans bg-white shadow-md shadow-black rounded-md max-h-[500px] w-[400px]">
                <h1>{data.length} birthdays today</h1>
                <div className="list mt-2 mb-5 max-h-[250px] overflow-y-auto">
                    
                    {data.length>0&&myList}
                    {!data.length&&<h1 className="text-xl text-center m-3 opacity-50">empty</h1>}
                </div>
                <div className="add-clear ">
                    <button onClick={()=>setShow(true)} className="add rounded cursor-pointer block w-full text-center mb-2 bg-rose-400">Add Birthday</button>
                    <button className="clear rounded cursor-pointer block w-full bg-rose-400"
                    onClick={clear}
                    >Clear</button>
                </div>
            </div>
            
            <AnimatePresence>
            {show&&<Add setData={setData} setShow={setShow} data={data}/>}
            
            </AnimatePresence>
        </div>
    )
}