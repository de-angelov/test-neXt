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
    const finalFirst = parseInt(first);
    const finalSecond = parseInt(second);

    if(typeof finalFirst !== 'number' || typeof finalSecond !== 'number') {
       return { error: 'invalid arguments ' };
    }

    redirect(`/userprofile/${finalFirst+finalSecond}`)
}


export { redirectTo };


// "use server"

// import { redirect } from "next/navigation";

// const multiply  = async (formdata: FormData) => {
//     const first = formdata.get('number1');
//     const second = formdata.get('number');

//     console.log('first', first);
//     console.log('second', second);


//     if(typeof first !== 'number' || typeof second !== "number") {
//         return { success: false, message: 'Need to be numbers' };
//     }

//     const result = first * second;

//     await new Promise((resolve) => setTimeout(resolve, 1000));

//     return { success: true, message: result };
// }


// export { multiply };