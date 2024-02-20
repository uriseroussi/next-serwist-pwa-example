import Link from 'next/link';

export default function Page() {
  return (
    <main>
      <h1>Home</h1>
      <div>
        <p>
          The route below is not prefetched. If you go offline before visiting
          it, you will fallback to an offline page (wait for it..).
        </p>
        <p>
          If you visit it while online, come back here, and then go offline, it
          will then be available offline - served from cache.
        </p>
        <Link href="/cached-on-nav" prefetch={false}>
          cache on nav
        </Link>
      </div>
      <div className="mt-2">
        <p>
          The route below is prefetched. If you have not visited it before but
          go offline, it will be available offline.
        </p>
        <Link href="/cache-on-demand">cache on demand</Link>
      </div>
    </main>
  );
}
