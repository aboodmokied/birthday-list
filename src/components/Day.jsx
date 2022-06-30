import React from "react";
export default function Day(props){

    return(
        <div className="day flex items-center mb-[20px] shadow-sm shadow-black/50 py-1 px-2 rounded">
                        <div className="poster min-w-[10%] bg-rose-400 p-5 w-7 h-7 flex items-center justify-center rounded-full">
                            <h1 className="index font-bold">{props.no}</h1>
                            </div>
                        <div className="details p-3 text-sm max-w-[80%] overflow-hidden">
                            <h1 className="font-bold ">{props.name}</h1>
                            <div className="flex">
                            <h1 className="opacity-90">{props.age} years</h1>
                            <h1 className="opacity-90 ml-3">id:{props.id}</h1>
                            </div>
                        </div>
                        <div className="delete  grow min-w-[10%]">
                            <div className="w-fit ml-[90%] hover:text-red-500 cursor-pointer"
                            onClick={()=>props.deleteFun(props.id)}
                            >X</div>
                            </div>
                    </div>
        )
}