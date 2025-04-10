// pages/api/student-feedback.js
import dbConnect from "@/lib/dbConnect";
import StudentFeedback from "../../models/StudentFeedback";

export default async function handler(req, res) {
  await dbConnect();

  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  const {
    fullName,
    age,
    gender,
    educationStatus,
    biggestChallenges,
    curriculumPreparedness,
    careerGuidance,
    scholarshipAccess,
    lackingFacilities,
    improvementSuggestion,
  } = req.body;

  // Prepare the object to be saved, including only the fields that are provided
  const feedbackData = {
    fullName,
    age,
    gender,
    educationStatus,
    biggestChallenges,
    curriculumPreparedness,
    careerGuidance,
    scholarshipAccess,
    lackingFacilities,
    oneThingToImprove:improvementSuggestion,
  };

  try {
    // Create the feedback document using the feedbackData object
    const feedback = await StudentFeedback.create(feedbackData);

    return res.status(201).json({ id: feedback._id });
  } catch (error) {
    console.error("Error saving feedback:", error.message);
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
}
