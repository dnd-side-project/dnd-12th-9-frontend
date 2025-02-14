import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const cookieList = await cookies();
  const refreshToken = cookieList.get('refreshToken');

  console.log('all cookies', cookieList.getAll());
  console.log(refreshToken);
  console.log('refreshToken', refreshToken?.value);

  try {
    cookieList.set('refreshToken', refreshToken?.value ?? '');
    const response = await fetch('https://api.sbooky.net/dev/api/auth/reissue', {
      credentials: 'include',
      headers: {
        Cookie: `refreshToken=${refreshToken?.value}`, // 쿠키를 직접 헤더에 설정
      },
    });

    const data = await response.json();

    console.log('data: ', data);

    return NextResponse.redirect(new URL('/', request.url));
  } catch (error) {
    console.warn(error);
    return NextResponse.redirect(new URL('/login?error=auth_failed', request.url));
  }
}

// export async function POST(request: NextRequest) {
//   try {
//     const response = await fetch('https://api.sbooky.net/dev/api/auth/reissue', {
//       credentials: 'include', // 쿠키 포함
//     });

//     console.log('response: ', response);

//     const data = await response.json();

//     console.log('data: ', data);
//     // 3. 받아온 데이터 처리 후 리다이렉트
//     return NextResponse.redirect(new URL('/', request.url));
//   } catch (error) {
//     console.warn(error);
//     return NextResponse.redirect(new URL('/login?error=auth_failed', request.url));
//   }
// }
