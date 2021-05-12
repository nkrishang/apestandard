import Link from 'next/link';

import Container from '@/components/Container';

export default function NotFound() {
  return (
    <Container title="404 – The Ape Standard">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Only the autodidacts are free.
        </h1>      
        <div className="mb-8 prose leading-6 text-gray-600 dark:text-gray-400">
          <p>
            {`What you're trying to find isn't here (unless it's a clip of David Bowie marvelling at the`}&nbsp;
            <a
              href="https://www.youtube.com/watch?v=8tCC9yxUIdw"
              target="_blank"
              rel="noopener noreferrer"
            >
              internet
            </a>
            ).
          </p>
        </div>
        <Link href="/">
          <a className="p-1 sm:p-4 w-64 font-bold mx-auto bg-gray-100 dark:bg-gray-900 text-center rounded-md text-black dark:text-white">
            Return Home
          </a>
        </Link>
      </div>
    </Container>
  );
}
