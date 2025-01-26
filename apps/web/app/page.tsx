//TODO 예시 버튼때문에 빌드 에러나서 임시로 use client 추가 추후에 삭제 예정
'use client';

import { Button } from '@repo/ui/components/Button';

export default function Home() {
  return (
    <div>
      <Button>dd</Button>
      <footer className="text-blue-500">footer</footer>
    </div>
  );
}
