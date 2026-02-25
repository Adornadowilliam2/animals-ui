import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import admin from "./firebaseAdmin.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const db = admin.firestore(); // ✅ THIS WAS MISSING

// GET pets
app.get("/api/pets", async (req, res) => {
  try {
    const snapshot = await db
      .collection("pets")
      .orderBy("createdAt", "desc")
      .get();

    const pets = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));

    res.json({ ok: true, data: pets });
  } catch (err) {
    console.error(err);
    res.status(500).json({ ok: false, message: err.message });
  }
});

// POST pet
app.post("/api/pets", async (req, res) => {
  try {
    const { name, type, image } = req.body;

    if (!name || !type) {
      return res
        .status(400)
        .json({ ok: false, message: "Name & type required" });
    }

    const docRef = await db.collection("pets").add({
      name,
      type,
      image,
      createdAt: new Date(),
    });

    res.json({
      ok: true,
      message: "Pet added successfully",
      data: { id: docRef.id, name, type, image },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ ok: false, message: err.message });
  }
});

const PORT = 3000;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);