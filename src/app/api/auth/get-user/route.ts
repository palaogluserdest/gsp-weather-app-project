// Kullanıcı bilgilerini getiren bir örnek API
import { NextRequest, NextResponse } from 'next/server';
import { jwtVerify } from 'jose';
import { getUserFromFS } from '@/app/libs/user';

const JWT_TOKEN = new TextEncoder().encode(process.env.JWT_SECRET!);

export const GET = async (req: NextRequest) => {
  const token = req.cookies.get('authToken')?.value;

  if (!token) {
    return NextResponse.json({ message: 'No token provided' }, { status: 401 });
  }

  try {
    const { payload } = await jwtVerify(token, JWT_TOKEN);
    const userId = payload.id as string;

    const user = await getUserFromFS(userId);

    if (!user) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }

    return NextResponse.json({ user }, { status: 200 });
  } catch (error) {
    console.log('Error verifying token:', error);
    return NextResponse.json({ message: 'Invalid token' }, { status: 401 });
  }
};
