import { getUser, updateUser } from "../../data-access/user";
import {revalidatePath} from "next/cache";

export default async function userPage ({ params ,} : {
    params: {
        userId: string;
    };
}){
    const user = await getUser(params.userId);

    return (
        <main className="flex flex-col gap-8 row-start-2 items-center w-full h-lvh justify-center">
            <div className="flex gap-4 items-center flex-col sm:flex-row">
                <h1
                className="text-2xl font-semibold text-gray-900"
                >Users {user.name}</h1>

                <form
                    className="flex gap-4"
                    action={async(formData: FormData) => {
                    'use server'
                    const newName = formData.get("name") as string;
                    await updateUser(user.id, newName);
                    revalidatePath(`/users/${user.id}`);
                }}
                >
                    <input
                        className="text-black border border-gray-400"
                        type="text" name="name"/>

                    <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4"
                    >Submit</button>
                </form>
            </div>
        </main>
    );
}
