import { NextApiRequest, NextApiResponse } from 'next';
import { google } from 'googleapis';

// Load the service account key JSON file
// You should use environment variables for this in production
const serviceAccount = require('../../path-to-your-service-account-key.json');

// Initialize the Google Sheets API
const sheets = google.sheets('v4');

// Authenticate using the service account credentials
const auth = new google.auth.JWT({
  email: serviceAccount.client_email,
  key: serviceAccount.private_key,
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { firstName, lastName, email, phone, companyName, designation, linkedinProfile } = req.body;

    //@ts-ignore
    const response = await sheets.spreadsheets.values.append({
        spreadsheetId: process.env.GOOGLE_SHEET_ID, // Use an environment variable for this
        range: 'Sheet1!A1', // Adjust this to your sheet name and desired range
        valueInputOption: 'USER_ENTERED',
        resource: {
          values: [[firstName, lastName, email, phone, companyName, designation, linkedinProfile]],
        },
      });

    res.status(200).json({ message: 'Data appended successfully' });
  } catch (error) {
    console.error('Error appending data:', error);
    res.status(500).json({ error: 'Failed to append data' });
  }
}