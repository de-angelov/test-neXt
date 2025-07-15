"use client"
import { redirectTo } from "./action";
import Form from 'next/form';
import { FormSubmit } from "./form-submit";
import { useActionState } from "react";

 const GoProfile = () => {

    const [state, formAction ] = useActionState(redirectTo, { error: '' }, );


    return (
        <Form action={formAction}> 
        Status: {state.error ?? <div> ready to submit:  </div> }
        <br />

        <span> Go to userProfile id = sum of the numbers</span>
        
        <br />
        
        <input style={{border: '1px solid red'}} type="number" name="number1" />
        
        <br />

        <input style={{border: '1px solid red'}} type="number" name="number2" />
        
        <br />

        <FormSubmit />
    </Form>
    );
};

export default GoProfile;