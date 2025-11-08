import * as sdk from "node-appwrite";

// Server-side environment variables
const ENDPOINT = process.env.ENDPOINT!;
const PROJECT_ID = process.env.PROJECT_ID!;
const API_KEY = process.env.API_KEY!;
const DATABASE_ID = process.env.DATABASE_ID!;
const PATIENT_TABLE_ID = process.env.PATIENT_TABLE_ID!;
const DOCTOR_TABLE_ID = process.env.DOCTOR_TABLE_ID!;
const APPOINTMENT_TABLE_ID = process.env.APPOINTMENT_TABLE_ID!;

// Client-side variable
const BUCKET_ID = process.env.NEXT_PUBLIC_BUCKET_ID!;

// Check for missing critical env vars
if (!ENDPOINT || !PROJECT_ID || !API_KEY) {
  console.error("❌ Missing Appwrite environment variables:", { ENDPOINT, PROJECT_ID, API_KEY });
}

// Initialize Appwrite client
const client = new sdk.Client();
client.setEndpoint(ENDPOINT).setProject(PROJECT_ID).setKey(API_KEY);

// Export Appwrite services
export const databases = new sdk.Databases(client);
export const users = new sdk.Users(client);
export const messaging = new sdk.Messaging(client);
export const storage = new sdk.Storage(client);

// ✅ Export constants so other files can import them
export {
  ENDPOINT,
  PROJECT_ID,
  API_KEY,
  DATABASE_ID,
  PATIENT_TABLE_ID,
  DOCTOR_TABLE_ID,
  APPOINTMENT_TABLE_ID,
  BUCKET_ID,
};
