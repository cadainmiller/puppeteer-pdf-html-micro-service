import cookieParser from "cookie-parser";
import cors from "cors";
import { config as dotenvConfig } from "dotenv";
import express from "express";
import path from "path";
import generateController from "./controllers/generate.js";
dotenvConfig();
const app = express();

const PORT = process.env.PORT || 8080;
const __dirname = path.dirname(new URL(import.meta.url).pathname);

app.use(express.json({ limit: "25mb" }));
app.use(express.urlencoded({ limit: "25mb", extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use(cors());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Max-Age", "1800");
  res.setHeader("Access-Control-Allow-Headers", "content-type");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "PUT, POST, GET, DELETE, PATCH, OPTIONS"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  next();
});

app.use("/api/generate", generateController);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
