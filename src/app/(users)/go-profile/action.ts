"use server"

import { redirect } from "next/navigation";

const redirectTo  = async ( _state: { error: string }, formdata: FormData) => {
    const first = formdata.get('number1');
    const second = formdata.get('number2');

    console.log('===================');
    console.log('first', typeof first, first);
    console.log('second', typeof second, second);
    console.log('===================');
    await new Promise((r) => setTimeout(r, 500));
    if(typeof first !== 'string' || typeof second !== 'string') {
       return { error: 'invalid arguments ' };
    }

    await new Promise((r) => setTimeout(r, 500));
    const finalFirst = Number.parseInt(first);
    const finalSecond = Number.parseInt(second);

    if(typeof finalFirst !== 'number' || typeof finalSecond !== 'number') {
       return { error: 'invalid arguments ' };
    }

    redirect(`/userprofile/${finalFirst+finalSecond}/dynamic`)
}


export { redirectTo };

