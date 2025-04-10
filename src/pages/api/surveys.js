// pages/api/surveys.js
import dbConnect from '../../lib/dbConnect';
import StudentFeedback from '../../models/StudentFeedback';

export default async function handler(req, res) {
  try {
    await dbConnect();

    if (req.method === 'GET') {
      try {
        const feedbacks = await StudentFeedback.find({});
        res.status(200).json({ success: true, data: feedbacks });
      } catch (error) {
        console.error('Error fetching student feedback:', error);
        res.status(500).json({ success: false, message: 'Failed to fetch feedback', error: error.message });
      }
    } else {
      res.status(405).json({ success: false, message: 'Method not allowed' });
    }
  } catch (error) {
    console.error('Database connection failed:', error);
    res.status(500).json({ success: false, message: 'Database connection error', error: error.message });
  }
}
