import { NextResponse } from 'next/server';
import { connectDB } from '@/config/mongodb';
import Contact from '@/model/Contact';

export async function POST(req) {
  try {
    const { fullName, email, phone, subject, message } = await req.json();

    if (!fullName || !email || !phone || !subject || !message) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
    }

    await connectDB();

    await Contact.create({
      fullName,
      email,
      phone,
      subject,
      message
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Error submitting contact form:', error);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
