import { getServerSession } from 'next-auth'
import { options } from '../api/auth/[...nextauth]/options'
import { redirect } from 'next/navigation';
import Home from "@/components/custom/home"

export const metadata = {
    title: "Home"
};

export default async function Page() {
    const session = await getServerSession(options);

    if(session) {
        return <Home session={session} />
    }
    return redirect("/login")
}