import Link from 'next/link';

import { CenterStack, PageLayout, Stack } from '@repo/ui/components/Layout';
import { Text } from '@repo/ui/components/Text';

import { KakaoLogo } from './assets/KakaoLogo';
import { LoginCharacter } from './assets/LoginCharacter';
import { LoginLogo } from './assets/LoginLogo';

export default function LoginPage() {
  return (
    <PageLayout>
      <Stack className="h-full px-4 py-[50]">
        <CenterStack className="grow">
          <LoginCharacter />
          <CenterStack className="gap-2">
            <LoginLogo />
            <Text type="Title1" weight="medium" className="text-gray-500">
              스부키와 함께하는 독서의 시간
            </Text>
          </CenterStack>
        </CenterStack>
        <CenterStack className="gap-3">
          <Link
            href={`${process.env.API_ENDPOINT}/login/kakao`}
            className="flex w-full items-center justify-center gap-1 rounded-lg bg-[#ffcc00] py-3"
          >
            <KakaoLogo />
            <Text type="Heading1" weight="semibold" className="text-color-900">
              카카오로 로그인
            </Text>
          </Link>
          <Text type="caption" weight="medium" className="text-center text-gray-400">
            {`회원가입 시 서비스 약관 및 개인정보${'\n'}취급방침에 동의하게 됩니다.`}
          </Text>
        </CenterStack>
      </Stack>
    </PageLayout>
  );
}
