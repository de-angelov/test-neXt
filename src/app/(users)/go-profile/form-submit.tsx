"use client";
import { useFormStatus } from "react-dom";

const FormSubmit = () => {

    const status = useFormStatus();

    if(status.pending){
        return <span> Form Submit is Pending ...</span>
    }


    return (
        <button className="p-1 justify-self-end bg-emerald-200 border-2 border-emerald-700" type="submit" > Submit </button>
    )

};

export { FormSubmit };