import { useFormStatus } from "react-dom";

export function SubmitButton(){
    const status = useFormStatus();
    return <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4"
        >{status.pending ? "Saving..." : "Save"}</button>
}