//rooms routes
const express = require("express");
const rooms = express.Router();
const {
  createRoom,
  SearchRoom,
  JoinRoom,
  LeaveRoom,
  getRoom,
  sendInvoice,
  generateToken
} = require("../controllers/roomController");

rooms.post("/create", createRoom);
rooms.get("/search", SearchRoom);
rooms.get("/JoinRoom", JoinRoom);
rooms.get("/leave", LeaveRoom);
rooms.get("/getRoom", getRoom);
rooms.post("/send-invoice", sendInvoice);
rooms.get("/generate-token",generateToken)
module.exports = rooms;
