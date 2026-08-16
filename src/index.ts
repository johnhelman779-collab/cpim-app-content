import cors from "cors";
import express from "express";
import routes from "./routes/devices";

const app = express();
const port = Number(process.env.PORT ?? 3003);

app.use(cors());
app.use(express.json());

app.get("/health", (_req, res) => {
  res.json({ service: "cpim-app-content", status: "ok", version: "0.1.1" });
});

app.use(routes);

app.listen(port, () => {
  console.log(`cpim-app-content listening on http://localhost:${port}`);
});
