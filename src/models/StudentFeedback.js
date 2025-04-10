import mongoose from 'mongoose';

const StudentFeedbackSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  age: { type: Number, required: true },
  gender: { type: String, required: true },
  educationStatus: { type: String, required: true },
  biggestChallenges: { type: [String], required: true },
  curriculumPreparedness: { type: String, required: true },
  careerGuidance: { type: String, required: true },
  scholarshipAccess: { type: String, required: true },
  lackingFacilities: { type: [String], required: true },
  oneThingToImprove: { type: String, required: true },
});

export default mongoose.models.StudentFeedback || mongoose.model('StudentFeedback', StudentFeedbackSchema);
