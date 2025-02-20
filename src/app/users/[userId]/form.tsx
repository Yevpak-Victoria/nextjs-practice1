'use client'

import {updateNameAction} from "./actions";
import { useFormState} from "react-dom";
import { SubmitButton } from "./button";

export default function Form ({ userId } : {userId:string}){
    const [state, action] = useFormState(updateNameAction, {
        userId,
    })

    return (
                <form
                    className="flex gap-4"
                    action={action}
                >
                    <input
                        className="text-black border border-gray-400"
                        type="text" name="name"/>

                    <SubmitButton />
                </form>
    );
}

