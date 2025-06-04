interface AlertUIProps {
    showAlert: boolean;
    setShowAlert: (showAlert: boolean)=>void;
    classString: string;
    content: string;
}
export default function AlertComponent({setShowAlert,classString,content}:AlertUIProps){
    return (
    <div className="absolute w-full bottom-[20%] left-0 text-center text-4xl" onClick={()=>{setShowAlert(false);}}>
        <div className="w-full flex flex-row justify-center">
            <div className={classString}>
                {content}
            </div>
        </div>
    </div>)
}