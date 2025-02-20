import { getUser } from "../../data-access/user";
import Form from "./form";


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

                <Form
                    userId={user.id}
                />
            </div>
        </main>
    );
}
