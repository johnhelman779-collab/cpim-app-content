import { Router } from "express";
import { devices, protocols } from "../data/devices";

const router = Router();

router.get("/devices", (_req, res) => {
  res.json({ devices });
});

router.get("/devices/:id", (req, res) => {
  const device = devices.find((d) => d.id === req.params.id);
  if (!device) {
    res.status(404).json({ error: "Device not found" });
    return;
  }
  res.json({ device });
});

router.get("/protocols", (_req, res) => {
  res.json({ protocols });
});

export default router;
