import { NextResponse } from 'next/server';
import User from '@/models/user';
import { connectToDB } from '@/utils/database';

export async function POST(request) {
  try {
    const body = await request.json();
    const { id, username, email, bio } = body;

    if (!id || !username || !email) {
      return NextResponse.json({ message: 'ID, Username, and Email are required' }, { status: 400 });
    }

    await connectToDB();

    const user = await User.findById(id);

    if (!user) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }

    user.username = username;
    user.email = email;
    user.bio = bio;

    await user.save();

    return NextResponse.json({ message: 'Profile updated successfully' }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Failed to update profile' }, { status: 500 });
  }
}
