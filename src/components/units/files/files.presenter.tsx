interface FileItem {
  filename: string;
  createdAt: string;
  filesize: number;
}

interface FilesUIProps {
  files: Array<FileItem> | null;
  setFiles: (files: Array<FileItem> | null) => void;
  code: string;
  setCode: (code: string) => void;
  sortBy: string;
  setSortBy: (sortBy: string) => void;
}
export default function FilesUI({ files, setFiles, code, setCode, sortBy, setSortBy}: FilesUIProps) {
    return (
    <div className="flex flex-row justify-center">
        <div className="flex flex-col justify-center h-full w-full text-center px-32 gap-3 py-8">
            <div className="text-3xl font-bold">Access Your File</div>
            <div>Here are the files associated with your account.</div>
            <div className="border-2 border-[#D1DBE8] rounded-xl min-w-[500px]">
                <table className="w-full border-collapse overflow-hidden">
                    <thead className="cursor-pointer">
                        <td onClick={()=>setSortBy("filename")}>Filename {sortBy==="filename"?"▼":""}</td>
                        <td onClick={()=>setSortBy("filesize")}>Size {sortBy==="filesize"?"▼":""}</td>
                        <td onClick={()=>setSortBy("createdAt")}>Date Modified {sortBy==="createdAt"?"▼":""}</td>
                        
                    </thead>
                    {files ? [...files].sort((a, b) => {
                            switch (sortBy) {
                                case "filename":
                                    return a.filename.localeCompare(b.filename);
                                case "filesize":
                                    return a.filesize - b.filesize;
                                case "createdAt":
                                    return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
                                default:
                                    return 0;
                            }
                        })
                    .map((file, index) => {
                        return (<tr key={index} className="hover:bg-slate-300 cursor-pointer" onClick={()=>{window.open(`http://localhost:8081/file/download?filename=${file.filename.split("\\")[file.filename.split("\\").length-1]}&timestamp=${file.createdAt}`,"_blank")}}>
                            <td className="text-left px-4 font-medium">{file.filename.split("\\")[file.filename.split("\\").length-1]}</td><td className="text-[#4F7096] font-medium">{file.filesize}byte</td><td className="text-[#4F7096] font-medium">{file.createdAt.split("T")[0]}</td></tr>)
                    }) : <></>}
                </table>
            </div>
            <div>
                
            </div>
        </div>
    </div>)
}