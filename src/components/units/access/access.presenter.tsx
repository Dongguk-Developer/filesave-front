interface AccessUIProps {
  setCode: (code: string) => void;
  tryAccess: () => void;
}
export default function AccessUI({ setCode, tryAccess}: AccessUIProps) {
    return (
    <div className="flex flex-row justify-center">
        <div className="flex flex-col justify-center h-full w-full text-center px-16 gap-3 py-8">
            <div className="text-3xl font-bold">Access Your File</div>
            <div>Enter the authcode to access your files</div>
            <div className="flex flex-row justify-center w-full py-2">
                <input placeholder="Auth Code Here" className="bg-[#E8EDF2] rounded-xl p-4 w-full max-w-96" onChange={(e)=>{setCode(e.target.value)}}></input>
            </div>
            <div className="flex flex-row justify-center w-full">
                <button className="rounded-xl p-4 w-full max-w-32 text-[#F7FAFC] font-bold bg-[#1A78E5]" onClick={()=>{tryAccess();}}>Access Files</button>
            </div>
        </div>
    </div>)
}