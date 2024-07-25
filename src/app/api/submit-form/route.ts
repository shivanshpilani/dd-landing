import { NextResponse } from 'next/server';
import { google } from 'googleapis';

const serviceAccount = require('../../../../secret.json');

const sheets = google.sheets('v4');

const auth = new google.auth.JWT({
  email: serviceAccount.client_email,
  key: serviceAccount.private_key,
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, companyName, designation, linkedinProfile } = body;

    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: 'Sheet1!A1', 
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[firstName, lastName, email, phone, companyName, designation, linkedinProfile]],
      },
      auth: auth,
    });

    return NextResponse.json({ message: 'Data appended successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error appending data:', error);
    return NextResponse.json({ error: 'Failed to append data' }, { status: 500 });
  }
}