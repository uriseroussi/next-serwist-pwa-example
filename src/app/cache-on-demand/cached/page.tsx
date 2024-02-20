import Link from 'next/link';

export default function Page() {
  return (
    <div>
      <h1>This page is available offline!</h1>
      <img src="/images/cache-me-outside.jpg" />
      <Link href="/">back home</Link>
    </div>
  );
}
