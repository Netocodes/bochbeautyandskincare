require("dotenv").config();
const express = require("express");
const cors = require("cors");
const rateLimiter = require("express-rate-limit");
const helmet = require("helmet");

const bodyParser = require("body-parser");
const Email = require("./routes/email");
const Suscribe = require("./routes/suscribe");
const Proof = require("./routes/proof");
let port = process.env.PORT_NUMBER || 5000;
const limiter = rateLimiter({
  windowMs: 1 * 60 * 1000, // 15 minutes
  max: 20, // Limit each IP to 100 requests per window
  standardHeaders: true, // Return rate limit info in headers
  legacyHeaders: false, // Disable deprecated headers
});
const app = express();
//middleWare
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(helmet());
app.disable("x-powered-by");
app.use(limiter);

app.post("/send-email", Email);
// app.get('/', Email)

app.post("/suscribe", Suscribe);
app.post("/upload-proof", Proof);

app.listen(port, () => {
  console.log(`server is live at: port ${port}`);
});
