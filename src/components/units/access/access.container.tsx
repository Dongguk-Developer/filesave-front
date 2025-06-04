import { useState } from "react"
import AccessUI from "./access.presenter"
import { useNavigate } from "react-router-dom";
export default function Access(){
    const navigate = useNavigate();
    const [code,setCode] = useState("");
    const tryAccess = ()=>{
        if(code!="")
            navigate(`/files?code=${code}`)
    }
    return (<AccessUI setCode={setCode} tryAccess={tryAccess}/>)
}