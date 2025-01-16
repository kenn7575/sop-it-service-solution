import prisma from "@/configs/prisma.config";
import { addFullname, getLdapUsers } from "@/functions";
import { users_view } from "@prisma/client";

export async function getAll(): Promise<IResponse> {
  const ldapUsers = await getLdapUsers();

  const dbUsers = await prisma.users_view.findMany();

  const users: users_view[] = [];

  for (let ldapUser of ldapUsers.data) {
    let dbUser = dbUsers.find(
      ({ Brugernavn }) => Brugernavn == ldapUser.username
    );

    if (!dbUser) {
      const newUser = await prisma.users.create({
        data: { username: ldapUser.username },
      });

      dbUser = {
        UUID: newUser.UUID,
        Brugernavn: newUser.username,
        Navn: ldapUser.fullName,
        Oprettet: new Date(),
        Opdateret: new Date(),
      };
    }

    users.push(dbUser);
  }

  await addFullname(users, "Brugernavn");

  return {
    status: 200,
    data: { headers: Object.keys(prisma.users_view.fields), data: users },
  };
}
