import express from "express";
import htmlToPDF from "../helpers/html-to-pdf.js";

const router = express.Router();

router.post("/", async (req, res) => {
  req.setMaxListeners(0);
  const { html } = req.body;

  if (!html) {
    res.status(400).send("Request body should contain an html property.");
    return;
  }

  try {
    const pdf = await htmlToPDF(html);
    res.contentType("application/pdf").send(pdf);
  } catch (error) {
    console.error("Error generating PDF:", error);
    res.status(500).send("Internal server error");
  }
});

router.get("/", async (req, res) => {
  res.status(200).send("Server Alive");
});

export default router;
