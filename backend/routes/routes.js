import dotenv from "dotenv";
dotenv.config();
import { Router } from "express";
import multer, { memoryStorage } from "multer";
import { SendOrder } from "../controllers/send-orders.js";
import { Suscriber } from "../controllers/suscribe.js";
import { Proof } from "../controllers/proof.js";
const router = Router();
// Configure Multer for file uploads (in memory)
const upload = multer({ storage: memoryStorage() });

// Home route
router.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to the server" });
});

// Send email route
router.post("/send-email", SendOrder);

router.post("/suscribe", Suscriber);
router.post("/upload-proof", upload.single("file"), Proof);

export default router;
