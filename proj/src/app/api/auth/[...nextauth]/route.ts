import NextAuth, { type NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import AppleProvider from "next-auth/providers/apple";
import TwitterProvider from "next-auth/providers/twitter";
import {z} from "zod";
import bcrypt from "bcryptjs";

const credentialsSchema = z.object({
    email:z.email().max(254).transform(x=>x.trim().toLowerCase()),
    password:z.string().min(8).max(72)
});

export const authOptions: NextAuthOptions = ({
    providers:[

        CredentialsProvider({
            name:"Credentials",
            credentials:{
                email: {label:"email",type:"text",placeholder:"s@example.com"},
                password: {label:"password",type:"password"}
            },


            async authorize(credentials){
                const parsed = credentialsSchema.safeParse(credentials);
                if(!parsed.success){
                    return null;
                }
                //parse email and password
                const {email,password} = parsed.data;

                // fecth user
                try{
                    const userExists = await UserDb.findOne({email});

                }catch(err){
                    throw new Error("Error: ",{cause:err});
                }
                //if user exists validate password
                if(userExists){
                    const validate = await bcrypt.compare(password,userExists.password);
                    if(!validate){
                        return null;
                        throw new Error("Could not validate password");
                    }
                }
            }
        }),

        GoogleProvider({
            clientId:process.env.GOOGLE_ID as string,
            clientSecret:process.env.GOOGLE_SECRET as string
        }),

        GithubProvider({
            clientId:process.env.GITHUB_ID as string,
            clientSecret:process.env.GITHUB_SECRET as string
        }),

        AppleProvider({
            clientId:process.env.APPLE_ID as string,
            clientSecret:process.env.APPLE__SECRET as string
        }),

        TwitterProvider({
            clientId:process.env.TWITTER_ID as string,
            clientSecret:process.env.TWITTER_SECRET as string
        }),

    ],
    session:{strategy:"jwt"},
    callbacks:{
        async jwt({token,user,account}){
            if(user) token.uid = (user).id;
            if(account?.provider){
                token.provider = account.provider;
            }
            return token;
        },
        async session({session,token}){
            if (session.user && token?.uid) {
                (session.user).id = token.uid;
                (session.user).provider = token.provider;
              }
              return session;
        },
    },
    secret: process.env.NEXTAUTH_SECRET,
})

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };