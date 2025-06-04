import { useState } from "react"
import AccessUI from "./access.presenter"
import axios from 'Axios';
import { useNavigate } from "react-router-dom";
export default function Access(){
    const navigate = useNavigate();
    const [code,setCode] = useState("");
    const tryAccess = ()=>{
        navigate(`/files?code=${code}`)
    }
    return (<AccessUI code={code} setCode={setCode} tryAccess={tryAccess}/>)
}