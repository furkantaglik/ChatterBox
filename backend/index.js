import express from "express";
const app = express();
import http from "http";
const server = http.createServer(app);
import { Server } from "socket.io";
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  },
});

import cors from "cors";
import dotenv from "dotenv";
import userRouter from "./api/userRouter.js";

dotenv.config();
app.use(cors({}));
app.use(express.json());

io.on("connection", (socket) => {
  socket.on("message", (data) => {
    const { to, from, content, image } = data;
    io.emit("message", content, to, from, image);
    console.log(`message sent to : ${content}`);
  });
});

app.use("/api/user", userRouter);
server.listen(5000, () => {
  console.log("Uygulama 5000 portunda çalışıyor.");
});
