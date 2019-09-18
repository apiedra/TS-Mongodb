import express, { Request, Response } from "express";
import * as logController from "./controllers/logController";

// Our Express APP config
const app = express();
app.use(express.json());
app.set("port", process.env.PORT || 3000);

// API Endpoints
app.post("/log", logController.addLog);

const server = app.listen(app.get("port"), () => {
  console.log("App is running on http://localhost:%d", app.get("port"));
});