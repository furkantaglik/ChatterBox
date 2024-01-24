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
  socket.on("join room", (roomID) => {
    socket.join(roomID);
    console.log(`${socket.id} joined room ${roomID}`);
  });

  socket.on("leave room", (roomID) => {
    socket.leave(roomID);
    console.log(`${socket.id} left room ${roomID}`);
  });

  // Özel mesajları dinleme
  socket.on("private message", (data) => {
    const { content, to, from, image } = data;
    const roomID = `${from}-${to}`;

    io.emit("private message", content, to, from, image);
    console.log(`Private message sent to room ${roomID}: ${content}`);
  });
});
app.use("/api/user", userRouter);
server.listen(5000, () => {
  console.log("Uygulama 5000 portunda çalışıyor.");
});
