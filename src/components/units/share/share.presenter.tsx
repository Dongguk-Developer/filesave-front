import AlertComponent from "../../common/alert/Alert";

interface ShareUIProps {
  files: FileList | null;
  setFiles: (files: FileList | null) => void;
  code: string;
  setCode: (code: string) => void;
  submit: ()=>void;
  getCode: ()=>void;
  showAlert: boolean;
  setShowAlert: (showAlert: boolean)=>void;
}
export default function ShareUI({ files, setFiles, code, setCode, submit, getCode, showAlert, setShowAlert }: ShareUIProps) {
    return (
    <div className="flex flex-row justify-center">
        <div className="flex flex-col justify-center h-full w-full text-center px-16 gap-3 py-8">
            <div className="text-3xl font-bold">Share Files</div>
            <div>Select files to upload and share with others</div>
            <div className="flex flex-row justify-center w-full py-2">
                <div className="relative w-full">
                    <input type="file" onChange={(e)=>{setFiles(e.target.files)}} className="w-full h-full cursor-pointer absolute left-0 top-0 opacity-0" multiple></input>
                    <div className="flex flex-col gap-1 border-dashed border-2 border-[#D1DBE8] w-full py-8 rounded-lg p-4">
                    {files&&files.length!=0?(
                            <div className="flex flex-row flex-wrap gap-4 justify-center">
                                {Array.from(files).map((file,index) => (
                                            <div key={file.name} className="w-20 h-20 border-2 border-black truncate rounded-xl flex flex-col">
                                                <div className="relative">

                                                    <div className="absolute top-[1px] right-[1px] bg-black rounded-full z-0 text-white w-6 h-6 cursor-pointer"
                                                        onClick={() => {
                                                                if (!files) return;
                                                                const filtered = Array.from(files).filter((_, i) => i !== index);
                                                                if (filtered.length === 0) {
                                                                    setFiles(null); // 모두 제거된 경우 null 처리
                                                                } else {
                                                                    const dataTransfer = new DataTransfer();
                                                                    filtered.forEach((file) => dataTransfer.items.add(file));
                                                                    const newFileList = dataTransfer.files;
                                                                    setFiles(newFileList);
                                                                }
                                                            }}>X</div>
                                                    <div className="w-fll flex flex-row justify-center py-3">
                                                        <img src="/src/assets/document.png" className="w-8"/>
                                                    </div>
                                                </div>
                                                <div className="text-xs">{file.name}</div>
                                            </div>
                                ))}
                                </div>
                            ):(<>
                                <div className="font-bold text-lg">Drag and drop files here</div>
                                <div>Or click to select files</div>
                                </>)
                    }
                    </div>
                </div>
            </div>
            
            <div className="flex flex-row w-full justify-center">
                <div className="flex flex-col w-full gap-8">
                    <div className="font-semibold text-center">
                        Authorization Code
                    </div>
                    <div className="flex flex-row w-full gap-4 justify-center">
                        <input placeholder="Enter Code" className="bg-[#E8EDF2] rounded-xl p-4 w-full max-w-64" value={code ?? ''} onChange={(e)=>{setCode(e.target.value)}}></input>
                        <button className="rounded-xl p-4 w-full max-w-64 text-[#F7FAFC] font-bold bg-[#1A78E5]" onClick={()=>{getCode()}}>Get Random Auth Code</button>
                    </div>
                </div>
            </div>
            <div className="flex flex-row justify-center w-full py-12">
                <button className={`rounded-xl p-4 w-full max-w-32 text-[#F7FAFC] font-bold ${code!==""&&files?"bg-[#1A78E5]":"bg-[#AAAAAA]"}`} onClick={()=>{submit();}}>Upload</button>
            </div>
        </div>
        {showAlert&&<AlertComponent showAlert={showAlert} setShowAlert={setShowAlert} classString={"rounded-lg bg-red-400 cursor-pointer p-3 text-white font-bold"} content={"파일의 최대 용량은 5MB입니다."}/>}
        
    </div>)
}