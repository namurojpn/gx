import { NextResponse } from 'next/server';

const VALID_ID = 'akkodis';
const VALID_PASSWORD = 'akkodis';
const AUTH_COOKIE = 'auth-session';
const AUTH_VALUE = 'akkodis-authenticated';

export async function POST(request: Request) {
  const body = await request.json();
  const { id, password } = body as { id: string; password: string };

  if (id === VALID_ID && password === VALID_PASSWORD) {
    const response = NextResponse.json({ ok: true });
    response.cookies.set(AUTH_COOKIE, AUTH_VALUE, {
      httpOnly: true,
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 8, // 8時間
    });
    return response;
  }

  return NextResponse.json({ ok: false, error: 'IDまたはパスワードが正しくありません' }, { status: 401 });
}
