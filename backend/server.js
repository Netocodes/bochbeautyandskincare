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
`
// Set rate limiting to prevent abuse`;
const limiter = rateLimiter({
  windowMs: 1 * 60 * 1000, // 15 minutes
  max: 30, // Limit each IP to 30 requests per window
  standardHeaders: true, // Return rate limit info in headers
  legacyHeaders: false, // Disable deprecated headers
});

// create an Express application
const app = express();

// Add middleWare
app.use(cors());

// Parse JSON and URL-encoded data
app.use(_json());
app.set("trust proxy", 1);

// Parse URL-encoded data with extended option
app.use(urlencoded({ extended: true }));

// Set security headers
app.use(helmet());

// Disable the 'X-Powered-By' header to use a prefered security practice (old is gold)
app.disable("x-powered-by");

// Use the rate limiter
app.use(limiter);

// Set the routes for the application
app.use("", router);

// Handle 404 errors
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});
// Handle errors globally
app.use((err, req, res, next) => {
  console.error(err.stack); // Log the error stack trace
  res.status(500).json({ error: "Internal Server Error" }); // Respond with a 500 status code
});
// Start the server
app.listen(port, "0.0.0.0", () => {
  console.log(`server is live at: port ${port}`);
});
