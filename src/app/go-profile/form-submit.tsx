"use client";
import { useFormStatus } from "react-dom";

const FormSubmit = () => {

    const status = useFormStatus();

    if(status.pending){
        return <span> Form Submit is Pending ...</span>
    }


    return (
        <button style={{border: '1px solid red'}} type="submit" > Submit </button>
    )

};

export { FormSubmit };