import { Header } from '@sbooky/ui/components/Header';
import { PageLayout } from '@sbooky/ui/components/Layout';
import { BackButton } from 'app/_components/BackButton';

import { SettingList } from './_components/SettingList';

const SettingPage = () => {
  return (
    <PageLayout
      header={
        <Header left={<BackButton />} className="bg-white" borderBottom>
          설정
        </Header>
      }
      className="bg-white"
    >
      <SettingList />
    </PageLayout>
  );
};

export default SettingPage;
