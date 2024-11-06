import { NextResponse } from 'next/server';
import { serialize } from 'cookie';

export const POST = async (req: Request) => {
  if (req.method !== 'POST') return NextResponse.json({ message: 'Invalid method' }, { status: 401 });

  try {
    const response = NextResponse.json({ message: 'Çıkış başarılı' }, { status: 200 });

    // authToken çerezini silmek için maxAge'i 0 olarak ayarlıyoruz
    const cookie = serialize('authToken', '', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      path: '/',
      maxAge: 0,
    });

    response.headers.append('Set-Cookie', cookie);

    return response;
  } catch (error) {
    console.log('error:', error);
    return NextResponse.json({ message: 'Logout failed' }, { status: 500 });
  }
};

export const runtime = 'nodejs';
