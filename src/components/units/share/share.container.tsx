import ShareUI from "./share.presenter";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "Axios";

export default function Share(){
    const navigate = useNavigate();
    const [files, setFiles] = useState<FileList | null>(null);
    const [code, setCode] = useState("");
    const [showAlert, setShowAlert] = useState(false);
    const submit = async () => {
        if(code===""||!files)
            return;
        const formData = new FormData();
        formData.append("code", code);
        if(files){
            for (let i = 0; i < files.length; i++) {
                const sizeInMB = files[i].size / (1024 * 1024);
                
                // 개당 5MB 제한
                if(sizeInMB > 5) {
                    setShowAlert(true)
                    setTimeout(()=>{setShowAlert(false)},5000);
                    return;
                }
                formData.append("files", files[i]);
            }
        }


        try {
            const response = await axios.post("https://filesave.live/file/upload", formData, {
                withCredentials: true,
            });

            navigate(`/files?code=${response.data.code}`)
        } catch (error) {
            console.error(error);
        }
    };
    const getCode = () => {
        axios.get('https://filesave.live/file/code').then((res)=>{
            setCode(res.data.code)
        });
    };
    return (<ShareUI
        files={files}
        setFiles={setFiles}
        code={code}
        setCode={setCode}
        submit={submit}
        getCode={getCode}
        showAlert={showAlert}
        setShowAlert={setShowAlert}
    />)
}