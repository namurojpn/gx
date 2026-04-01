import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const AUTH_COOKIE = 'auth-session';
const AUTH_VALUE = 'akkodis-authenticated';

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const isAuthenticated = request.cookies.get(AUTH_COOKIE)?.value === AUTH_VALUE;

  // ログイン済みでログインページへアクセス → トップへリダイレクト
  if (isAuthenticated && pathname === '/login') {
    return NextResponse.redirect(new URL('/', request.url));
  }

  // 未認証かつ保護対象ページ → ログインへリダイレクト
  if (!isAuthenticated && pathname !== '/login') {
    const loginUrl = new URL('/login', request.url);
    const res = NextResponse.redirect(loginUrl);
    res.headers.set('X-Robots-Tag', 'noindex, nofollow');
    return res;
  }

  const res = NextResponse.next();
  res.headers.set('X-Robots-Tag', 'noindex, nofollow');
  return res;
}

export const config = {
  matcher: [
    '/((?!api/auth|_next/static|_next/image|images|favicon.ico).*)',
  ],
};
