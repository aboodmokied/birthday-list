import React from "react";
import { motion } from "framer-motion";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Add(props) {
    let idValidation=(id)=>{
        let myData=props.data
        let isValid=myData.every((ele)=>ele.id!==id)
        return isValid
    }


    let isAllFilled=()=>{
        let allFilled=formData.name!==""&&formData.id!==0&&formData.age!==0
        return allFilled
    }
    let notify=(success)=>{
        let allFilled=isAllFilled()
        if(success&&allFilled)toast.success("Added successfully")
        else if(!success&&allFilled) toast.error("The id already exists")
        else toast.error("You Should Fill All Fields!!")
    }

    let [formData,setFormData]=React.useState({
        name:"",
        age:0,
        id:0,
    })


    let updateFormData=(event)=>{
        let aim=event.target.name
        let value=event.target.value
        
        setFormData(prev=>({...prev,[aim]:value}))

    }
    const vatiant={
        init:{y:"-100%"},
        animate:{
            y:0,
            transition:{duration:.5}
        },
        out:{
            // y:"-100%",
            opacity:0,
            // transition:{duration:.5}
        },
        
    }
    let whenSubmit=(event)=>{
        event.preventDefault()
        let idIsValid=idValidation(formData.id)
        let allFilled=isAllFilled()
        notify(idIsValid)
        if(idIsValid&&allFilled){
            props.setData(prev=>([...prev,formData]))
            setFormData({
                name:"",
                age:0,
                id:0,
            })
        }
    }

    return (
        
        
        <motion.div 
            variants={vatiant}
            initial="init"
            animate="animate"
            exit="out"
            className="here w-full h-full bg-black/50 absolute flex justify-center items-center" >
                <div className="bg-white  w-[300px] rounded p-3">
                    <h1 className="text-center font-bold text-rose-400 mb-5">Add New Birthday<span onClick={()=>props.setShow(false)} className="float-right text-red-600 cursor-pointer block mr-1">X</span></h1>
                    <form action="" onSubmit={e=>whenSubmit(e)}>
                        <div className="name mb-5">
                            <label htmlFor="name" className="text-sm">Enter Name</label>
                            <input className="text-black float-right border-2 border-rose-400 rounded outline-none " type="text"
                            name="name"
                            id="name" value={formData.name}
                            onChange={e=>updateFormData(e)} />
                        </div>
                        <div className="age name mb-5">
                            <label htmlFor="age" className="text-sm">Enter age</label>
                            <input className="text-black float-right border-2 border-rose-400 rounded outline-none "
                            type="number" name="age"
                            id="age" 
                            value={formData.age}
                            onChange={e=>updateFormData(e)}/>
                        </div>
                        <div className="id name mb-8">
                            <label htmlFor="id" className="text-sm">Enter id</label>
                            <input className="text-black float-right border-2 border-rose-400 rounded outline-none "
                            type="number"
                            name="id" id="id"
                            onChange={e=>updateFormData(e)}
                            value={formData.id}
                            />
                        </div>
                        <input className="block w-[80%] m-auto rounded bg-rose-400 cursor-pointer hover:shadow-sm hover:shadow-black transition-shadow" type="submit"/>
                    </form>
                    <ToastContainer/>
                </div>
            </motion.div>

    );
}

export default Add;