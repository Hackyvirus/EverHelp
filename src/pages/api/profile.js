// pages/api/profile.js
import { connectToDatabase } from "@/lib/mongodb";
import { verifyToken } from "@/lib/jwt";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  const auth = req.headers.authorization || "";
  const token = auth.replace("Bearer ", "");
  const decoded = verifyToken(token);
  if (!decoded) {
    return res.status(401).json({ error: "Not authenticated" });
  }

  const userId = decoded.userId;
  const { db } = await connectToDatabase();

  if (req.method === "GET") {
    const profile = await db
      .collection("profiles")
      .findOne({ userId }, { projection: { _id: 0 } });
    return res.status(200).json(profile || {});
  }

  if (req.method === "POST") {
    const { fullName, familyCount } = req.body;
    if (
      typeof fullName !== "string" ||
      fullName.trim() === "" ||
      typeof familyCount !== "number" ||
      familyCount < 0
    ) {
      return res.status(400).json({ error: "Invalid input" });
    }

    await db.collection("profiles").updateOne(
      { userId },
      {
        $set: {
          userId,
          fullName: fullName.trim(),
          familyCount,
          updatedAt: new Date(),
        },
      },
      { upsert: true }
    );
    return res.status(200).json({ success: true });
  }

  return res.status(405).end();
}
