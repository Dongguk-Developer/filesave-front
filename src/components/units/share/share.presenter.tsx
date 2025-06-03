export default function ShareUI() {
    return (
    <div className="flex flex-row justify-center">
        <div className="flex flex-col justify-center h-full w-full text-center px-16 gap-3 py-8">
            <div className="text-3xl font-bold">Upload Files</div>
            <div>Select files to upload and share with others</div>
            <div className="flex flex-row justify-center w-full py-2">
                <div className="relative w-full">
                    <input type="file" id="file" className="w-full h-full cursor-pointer absolute left-0 top-0 opacity-0" multiple></input>
                    <div className="flex flex-col gap-1 border-dashed border-2 border-[#D1DBE8] w-full py-8 rounded-lg">
                        <div className="font-bold text-lg">Drag and drop files here</div>
                        <div>Or click to select files</div>
                    </div>
                </div>
            </div>
            
            <div className="flex flex-row w-full justify-center">
                <div className="flex flex-col w-full gap-8">
                    <div className="font-semibold text-center">
                        Authorization Code
                    </div>
                    <div className="flex flex-row w-full gap-4 justify-center">
                        <input placeholder="Enter Code" className="bg-[#E8EDF2] rounded-xl p-4 w-full max-w-64"></input>
                        <button className="rounded-xl p-4 w-full max-w-64 text-[#F7FAFC] font-bold bg-[#1A78E5]">Get Random Auth Code</button>
                    </div>
                </div>
            </div>
            <div className="flex flex-row justify-center w-full py-12">
                <button className="rounded-xl p-4 w-full max-w-32 text-[#F7FAFC] font-bold bg-[#1A78E5]">Upload</button>
            </div>
        </div>
    </div>)
}