export default function AccessUI() {
    return (
    <div className="flex flex-row justify-center">
        <div className="flex flex-col justify-center h-full w-full text-center px-16 gap-3 py-8">
            <div className="text-3xl font-bold">Access Your File</div>
            <div>Enter the authcode to access your files</div>
            <div className="flex flex-row justify-center w-full py-2">
                <input placeholder="Auth Code Here" className="bg-[#E8EDF2] rounded-xl p-4 w-full max-w-96"></input>
            </div>
            <div className="flex flex-row justify-center w-full">
                <button className="rounded-xl p-4 w-full max-w-32 text-[#F7FAFC] font-bold bg-[#1A78E5]">Access Files</button>
            </div>
        </div>
    </div>)
}