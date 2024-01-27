import express from "express";
import clerkClient from "@clerk/clerk-sdk-node";
const router = express.Router();

router.get("/userlist", async (req, res) => {
  const userList = await clerkClient.users.getUserList();
  res.json(userList);
});

router.get("/getuser/:username", async (req, res) => {
  const { username } = req.params;
  const user = await clerkClient.users.getUserList({ username });
  res.json(user);
});

export default router;
