import Link from 'next/link';

export default function LoginPage() {
  return <Link href={`${process.env.API_ENDPOINT}/login/kakao`}>로그인</Link>;
}
