import GoogleProvider from 'next-auth/providers/google';
import FacebookProvider from 'next-auth/providers/facebook';
import GitHubProvider from "next-auth/providers/github";

export const options = {
    providers: [
        GoogleProvider({
            profile(profile) {
                console.log("Profile google: ", profile);
                return {
                    ...profile,
                    id: profile.sub,
                    role: "user",
                    image: profile.picture,
                };
            },
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
        FacebookProvider({
            clientId: process.env.FACEBOOK_CLIENT_ID,
            clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
        }),
        GitHubProvider({
            profile(profile) {
                console.log("Profile Github: ", profile);
                let userRole = "user"
                if(profile?.email == "macjessie.bartolome@gmail.com"){
                    userRole = "admin"
                }
                return {
                    ...profile,
                    role: userRole,
                    image: profile.avatar_url,
                }
            },
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET,
        }),
    ],
    callbacks: {
        async jwt({token, user}) {
            if(user) token.role = user.role;
            return token;
        },
        async session({session, token}) {
            if(session?.user) {
                session.user.role = token.role;
            }
            return session;
        }
    }
}