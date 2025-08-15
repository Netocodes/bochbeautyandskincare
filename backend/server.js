import "dotenv/config";
import express from "express";
import cors from "cors";
import rateLimiter from "express-rate-limit";
import helmet from "helmet";
import router from "./routes/email.js";
import pkg from "body-parser";
const { json: _json, urlencoded } = pkg;

let port = process.env.PORT || 8081;

const limiter = rateLimiter({
  windowMs: 1 * 60 * 1000, // 15 minutes
  max: 20, // Limit each IP to 100 requests per window
  standardHeaders: true, // Return rate limit info in headers
  legacyHeaders: false, // Disable deprecated headers
});
const app = express();
//middleWare
app.use(cors());
app.use(_json());
app.use(urlencoded({ extended: true }));
app.use(helmet());
app.disable("x-powered-by");
app.use(limiter);
app.use("", router);

app.listen(port, () => {
  console.log(`server is live at: port ${port}`);
});
