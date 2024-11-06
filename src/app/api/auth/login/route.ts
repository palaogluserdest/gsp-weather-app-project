// import { signInFB } from '@/app/libs/user';
import { NextResponse } from 'next/server';
import { serialize } from 'cookie';
import { SignJWT } from 'jose';
import { auth } from '@/app/libs/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

const JWT_TOKEN = new TextEncoder().encode(process.env.JWT_SECRET!);

export const POST = async (req: Request) => {
  if (req.method !== 'POST') return NextResponse.json({ message: 'Invalid method' }, { status: 401 });

  try {
    const { email, password } = await req.json();

    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    if (!user) return NextResponse.json({ message: 'giriş başarılı' }, { status: 401 });

    const payload = {
      id: user.uid,
      email: user.email,
    };

    const token = await new SignJWT(payload)
      .setProtectedHeader({ alg: 'HS256' })
      .setExpirationTime('1h')
      .sign(JWT_TOKEN);

    const response = NextResponse.json({ message: 'giriş başarılı', user }, { status: 200 });

    const cookie = serialize('authToken', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      path: '/',
      maxAge: 60 * 60,
    });

    response.headers.append('Set-Cookie', cookie);

    return response;
  } catch (error) {
    console.log('error:', error);
    return NextResponse.json({ message: 'giriş başarılı' }, { status: 500 });
  }
};

export const runtime = 'nodejs';
