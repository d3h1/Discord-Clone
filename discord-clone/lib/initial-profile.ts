import { currentUser, redirectToSignIn } from "@clerk/nextjs";
import { db } from "@/lib/db";

// Using this to try to find an existing profile 
export const initialProfile = async () => {
    const user = await currentUser();

    // If not logged in
    if (!user) {
        return redirectToSignIn();
    };

    const profile = await db.profile.findUnique({
        where: {
            userId: user.id
        }
    });

    if (profile) {
        return profile
    };

    // If no profile, then create it
    const newProfile = await db.profile.create({
        data: {
            userId: user.id,
            name: `${user.firstName} ${user.lastName}`,
            imageUrl: user.imageUrl,
            email: user.emailAddresses[0].emailAddress
        }
    });
    return newProfile;
}

