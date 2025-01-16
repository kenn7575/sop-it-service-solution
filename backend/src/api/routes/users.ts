import { Router } from "express";
import { getLdapUsers } from "@/functions";

const router = Router();

router.get("/ldap", async (req, res) => {
  getLdapUsers(res);
});

export default router;
