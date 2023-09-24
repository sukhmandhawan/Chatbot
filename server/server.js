import express from "express";
import userRoutes from "./program/channel_1.js";
import chatRoutes from "./program/chat_1.js";
import replyRoutes from "./program/reply_1.js";
import subReplyRoutes from "./program/nested_reply_1.js";
import authRoutes from "./program/permission_1.js";
import relationshipRoutes from "./program/connection_1.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import multer from "multer";

const app = express();
const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../public/upload");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({ storage: storage });

app.post("/api/upload", upload.single("file"), (req, res) => {
  const file = req.file;
  res.status(200).json(file.filename);
});
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/relationships", relationshipRoutes);
app.use("/api/posts", chatRoutes);
app.use("/api/comments", replyRoutes);
app.use("/api/subreply", subReplyRoutes);
app.listen(8000, () => {
  console.log(`Express server listening on 8000`);
});
