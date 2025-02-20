'use client'

import {updateNameAction} from "./actions";
import { useFormState} from "react-dom";
import { SubmitButton } from "./button";
import { useRef } from "react";

export default function Form ({ userId } : {userId:string}){
    const formRef = useRef<HTMLFormElement>(null);
    const [state, action] = useFormState(updateNameAction, {
        userId,
        name: "",
        message: '',
    })

    if(state.message === "success"){
        formRef.current?.reset();
    }

    return (
                <form
                    ref={formRef}
                    className="flex gap-4"
                    action={action}
                >
                    <input
                        className="text-black border border-gray-400 px-4 py-2 leading-tight focus:outline-none"
                        type="text" name="name"/>

                    <SubmitButton />
                </form>
    );
}

