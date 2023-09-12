import { redirect } from "next/navigation";

import { initialProfile } from "@/lib/initial-profile";
import { db } from "@/lib/db";

const SetupPage = async () => {
  const profile = await initialProfile();

  // We are going to attempt to find the first server this profile is connected to immediately load it
  const server = await db.server.findFirst({
    where: {
      members: {
        some: {
          profileId: profile.id,
        },
      },
    },
  });

  if (server) {
    return redirect(`/servers/${server.id}`);
  }

  return <div>Create a Server</div>;
};

export default SetupPage;
