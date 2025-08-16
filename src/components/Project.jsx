import { useEffect } from "react";

export default function Project() {

    useEffect(()=>{
        fetch("http://localhost:3001/projects")
        .then((res)=> res.json())
        .then((data)=> {console.log("Projects Data", data);
        })
        .catch((err)=> console.error("Error in Fetch Projects",err))
    },[])

return (
    <div>
        <h2>Projects Section</h2>
    </div>
)
}
