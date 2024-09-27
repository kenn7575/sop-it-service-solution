import { Router } from "express";
import prisma from "@/prisma.config";
import { addFullname, getLdapUsers } from "../functions";
import { users_view } from "@prisma/client";

const router = Router();

router.get("/", async (req, res) => {
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

  res.json({ headers: Object.keys(prisma.users_view.fields), data: users });
});

export default router;
