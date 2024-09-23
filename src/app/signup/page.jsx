import Signup from "@/components/custom/signup"
import { getServerSession } from "next-auth";
import { redirect } from 'next/navigation';
import { options } from "../api/auth/[...nextauth]/options";

export const metadata = {
    title: "Signup"
};

export default async function page() {
    const session = await getServerSession(options);

    if(!session) {
        return <Signup />
    }
    return redirect("/home");
}
