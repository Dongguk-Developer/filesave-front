import FilesUI from "./files.presenter";
import { useSearchParams } from "react-router-dom";
import axios from 'Axios';
import { useEffect, useState } from "react";
interface FileItem {
  filename: string;
  createdAt: string;
  filesize: number;
}

export default function Files(){
    const [searchParams] = useSearchParams();
    const [files, setFiles] = useState<FileItem[] | null>(null);
    const [sortBy, setSortBy] = useState<string | "">("filename");
    const query = searchParams.get('code');
    useEffect(()=>{
        const loadFiles = async()=>{
            const response = await axios.get(`http://localhost:8081/file/code/${query}`)
            setFiles(response.data.files)
        }
        loadFiles();
    },[query])
    return (<FilesUI files={files} sortBy={sortBy} setSortBy={setSortBy}/>)
}