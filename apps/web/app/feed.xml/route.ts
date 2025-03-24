import RSS from 'rss';

export async function GET() {
  const feed = new RSS({
    title: '독서로 만나는 유령, 마법 도서관 스부키',
    description: '책을 읽고 기록하며 포인트를 모으고, 개성 있는 유령 캐릭터를 획득하세요.',
    site_url: 'https://www.sbooky.net/',
    feed_url: 'https://www.sbooky.net/feed.xml',
    copyright: '@sbooky',
    language: 'ko',
    pubDate: new Date(),
  });

  return new Response(feed.xml(), {
    headers: {
      'Content-Type': 'application/atom+xml; charset=utf-8',
    },
  });
}
