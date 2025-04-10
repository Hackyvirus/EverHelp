import dbConnect from '@/lib/dbConnect';
import Contact from '@/models/Contact';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      await dbConnect();
      const { name, email, message } = req.body;

      if (!name || !email || !message) {
        return res.status(400).json({ error: 'All fields are required.' });
      }

      const newMessage = new Contact({ name, email, message });
      await newMessage.save();

      return res.status(200).json({ success: true, message: 'Message saved successfully.' });
    } catch (error) {
      console.error('Contact form error:', error);
      return res.status(500).json({ error: 'Something went wrong.' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed.' });
  }
}
