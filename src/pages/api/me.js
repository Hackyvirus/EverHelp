// pages/api/me.js
import { verifyToken } from "@/lib/jwt";

export default async function handler(req, res) {
  if (req.method !== "GET") return res.status(405).end();

  const auth = req.headers.authorization || "";
  const token = auth.replace("Bearer ", "");
  const decoded = verifyToken(token);

  if (!decoded) {
    return res.status(401).json({ error: "Not authenticated" });
  }

  // return only the info you need on client
  return res.status(200).json({ user: { email: decoded.email } });
}
