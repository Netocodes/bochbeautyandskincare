import "dotenv/config";
import express from "express";
import cors from "cors";
import rateLimiter from "express-rate-limit";
import helmet from "helmet";
import router from "./routes/routes.js";
import pkg from "body-parser";
const { json: _json, urlencoded } = pkg;

let port = process.env.PORT || 8081;
if (!process.env.PORT) {
  console.log("No PORT specified, using default port 8081");
}

// ✅ Allowlist your frontend origins
const allowedOrigins = [
  "http://localhost:5173", // Vite dev
  "http://localhost:3000", // React dev alt
  "https://bochbeautyandskincare.netlify.app", // example if deployed frontend
  "https://bochbeautyandskincare.vercel.app",
  "https://bochbeautyandskincare.onrender.com",
];

// ✅ CORS options
const corsOptions = {
  origin: (origin, callback) => {
    // Allow requests with no origin (e.g. mobile apps, Postman)
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
};

// ✅ Rate limiter to prevent abuse
const limiter = rateLimiter({
  windowMs: 1 * 60 * 1000,
  max: 30,
  standardHeaders: true,
  legacyHeaders: false,
});

const app = express();

// ✅ Apply CORS **before all routes**
app.use(cors(corsOptions));

// ✅ Handle OPTIONS preflight globally
app.options("*", cors(corsOptions));

// Parse JSON and URL-encoded data
app.use(_json());
app.set("trust proxy", 1);
app.use(urlencoded({ extended: true }));

// Security headers
app.use(helmet());
app.disable("x-powered-by");

// Rate limiter
app.use(limiter);

// Routes
app.use("", router);

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

// Global error handler (includes CORS errors)
app.use((err, req, res, next) => {
  console.error("❌ Global Error:", err.message);
  if (err.message === "Not allowed by CORS") {
    return res.status(403).json({ error: "CORS: Origin not allowed" });
  }
  res.status(500).json({ error: "Internal Server Error" });
});

// Start server
app.listen(port, "0.0.0.0", () => {
  console.log(`🚀 Server is live at port ${port}`);
});
