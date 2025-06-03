import ShareUI from "./share.presenter";
import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";

export default function Share(){
    const [files, setFiles] = useState<FileList | null>(null);
    // const [name, setName] = useState("");

    // const onNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    //     setName(e.target.value);
    // };

    // const onEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    //     setEmail(e.target.value);
    // };
    
    // const handleSubmit = (e: FormEvent<HTMLInputElement>) => {
    //    e.preventDefault();
    //    alert(`이름: ${name}\n이메일: ${email}`);
    // };
    
    

    return (<ShareUI files={files} setFiles={setFiles}/>)
}