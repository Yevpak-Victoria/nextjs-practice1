'use client'

import {updateNameAction} from "./actions";
import { useFormState } from "react-dom";

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

                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4"
                    >Submit</button>
                </form>
    );
}
