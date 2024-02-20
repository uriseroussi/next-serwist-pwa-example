'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Page() {
  const [isComplete, setIsComplete] = useState(false);

  const cacheContent = async () => {
    const res = await window.serwist.messageSW({ action: 'cache-on-demand' });
    setIsComplete(res);
  };

  return (
    <div>
      <h1>Cache content on demand!</h1>
      <p>
        Clicking the button will cache an image available at
        &apos;images/cache-me-outside.jpg&apos;
      </p>
      <p>
        Try clicking it, and then navigating to the image page when you are
        offline. The page is prefetched and the image is cached so you will be
        able to see it.
      </p>
      <button onClick={cacheContent} className="mt-2">
        Cache an image
      </button>
      {isComplete && (
        <>
          <p>Image cached!</p>
          <span>
            Go offline and navigate to{' '}
            <Link href="/cache-on-demand/cached" className="inline-block">
              image page
            </Link>
          </span>
        </>
      )}
    </div>
  );
}
