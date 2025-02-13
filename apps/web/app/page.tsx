//TODO 예시 버튼때문에 빌드 에러나서 임시로 use client 추가 추후에 삭제 예정
'use client';

import { useState } from 'react';

import { Button } from '@repo/ui/components/Button';
import { Chip } from '@repo/ui/components/Chip';

export default function Home() {
  const [value, setValue] = useState<string>('');

  const handleChipClick = (value: string) => {
    if (value === '칩') {
      return setValue('');
    }
    return setValue('칩');
  };

  return (
    <div>
      <Button>dd</Button>
      <footer className="text-blue-500">
        <Chip
          value={value}
          active={value === '칩'}
          onClick={() => handleChipClick(value)}
          variant="keyword"
        >
          칩
        </Chip>
      </footer>
    </div>
  );
}
