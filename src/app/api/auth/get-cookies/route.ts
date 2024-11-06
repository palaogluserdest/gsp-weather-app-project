import { jwtVerify } from 'jose';
import { NextRequest, NextResponse } from 'next/server';

const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET!);

export const GET = async (req: NextRequest) => {
  if (req.method !== 'GET') return NextResponse.json({ message: 'Invalid method' }, { status: 401 });

  const token = req.cookies.get('authToken')?.value;

  if (!token) {
    return NextResponse.json({ message: 'No token!' }, { status: 200 });
  }

  try {
    const { payload } = await jwtVerify(token, JWT_SECRET);
    return NextResponse.json({ message: 'Token was bought', userToken: payload }, { status: 200 });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return NextResponse.json({ message: 'Token invalid!', errorMessage: error.message }, { status: 401 });
  }
};
