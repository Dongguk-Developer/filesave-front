import { useNavigate } from "react-router-dom"
export default function MainUI() {
    const navigate = useNavigate();
    return (
        <div className="min-h-[calc(100vh-90px)] flex flex-col justify-center">
            <div className="flex flex-row justify-center h-full gap-4">
                <div 
                    className="flex flex-col justify-center h-full w-full text-center md:px-16 gap-3 py-8 bg-[#CFCFCF] hover:bg-[#AFAFAF] rounded-xl cursor-pointer"
                    onClick={()=>{navigate('/access')}}
                >
                    <div className="text-3xl font-bold">Access Your File</div>
                    <div>Enter the authcode to access your files</div>
                </div>
                <div 
                    className="flex flex-col justify-center h-full w-full text-center md:px-16 gap-3 py-8 bg-[#CFCFCF] hover:bg-[#AFAFAF] rounded-xl cursor-pointer"
                    onClick={()=>{navigate('/share')}}    
                >
                    <div className="text-3xl font-bold">Share Your File</div>
                    <div>Select files to upload and share with others</div>
                </div>
            </div>
        </div>
    )
}