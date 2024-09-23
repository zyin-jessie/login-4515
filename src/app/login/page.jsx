import Login from "@/components/custom/login"
import { getServerSession } from "next-auth";
import { redirect } from 'next/navigation';
import { options } from "../api/auth/[...nextauth]/options";

export const metadata = {
    title: "Login"
};

export default async function Page() {
    const session = await getServerSession(options);

    if(!session) {
        return <Login />
    }
    return redirect("/home");

}
