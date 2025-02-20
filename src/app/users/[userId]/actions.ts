'use server'

import { updateUser } from "@/app/data-access/user";
import { revalidatePath } from "next/cache";

export async function updateNameAction (prevState:{
    userId: string,
    name: string,
}, formData: FormData) {
    //sleep 1sec
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const userId = prevState.userId;
    const newName = formData.get("name") as string;
    await updateUser(userId, newName);
    revalidatePath(`/users/${userId}`);
    return {
        userId: userId,
        name: "",
        message: "succes"
    }
}