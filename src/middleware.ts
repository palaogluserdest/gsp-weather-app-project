import { jwtVerify } from 'jose';
import { NextRequest, NextResponse } from 'next/server';

const JWT_TOKEN = new TextEncoder().encode(process.env.JWT_SECRET!);

export const middleware = async (req: NextRequest) => {
  const token = req.cookies.get('authToken')?.value;
  const reqURLPath = req.nextUrl.pathname;

  // If user no have authentication and want to see profile page
  if (!token && reqURLPath === '/profile') return NextResponse.redirect(new URL('/user-auth', req.url));

  if (token) {
    try {
      const { payload } = await jwtVerify(token, JWT_TOKEN);

      if (!payload && reqURLPath === '/profile') {
        return NextResponse.redirect(new URL('/user-auth', req.url));
      }

      if (payload && reqURLPath === '/user-auth') {
        return NextResponse.redirect(new URL('/', req.url));
      }

      return NextResponse.next();
    } catch (error) {
      console.error('Token doğrulama hatası:', error);
      return NextResponse.redirect(new URL('/user-auth', req.url));
    }
  }
};
