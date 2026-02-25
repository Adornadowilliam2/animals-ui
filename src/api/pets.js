import admin from "../firebaseAdmin.js";

const db = admin.firestore();

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const snapshot = await db
        .collection("pets")
        .orderBy("createdAt", "desc")
        .get();

      const pets = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      return res.status(200).json({ ok: true, data: pets });
    } catch (error) {
      return res.status(500).json({ ok: false, message: error.message });
    }
  }

  if (req.method === "POST") {
    try {
      const { name, type, image } = req.body;

      if (!name || !type) {
        return res
          .status(400)
          .json({ ok: false, message: "Name & type required" });
      }

      const petData = {
        name,
        type,
        createdAt: new Date(),
      };

      if (image) petData.image = image;

      const docRef = await db.collection("pets").add(petData);

      return res.status(200).json({
        ok: true,
        data: { id: docRef.id, ...petData },
      });
    } catch (error) {
      return res.status(500).json({ ok: false, message: error.message });
    }
  }

  return res.status(405).json({ message: "Method not allowed" });
}