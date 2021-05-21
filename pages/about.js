import Container from '@/components/Container';

export default function About() {
  return (
    <Container title="About – The Ape Standard">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          About Me
        </h1>
        <div className="mb-8 prose leading-6 text-gray-600 dark:text-gray-400">
          <p>
            Hey there 👋 I'm Krishang - NYU Philosophy alum and founding engineer at&nbsp;
            <a
              href="https://nftlabs.co"
              target="_blank"
              rel="noopener noreferrer"
            >
              NFT labs.
            </a>            
          </p>
          <p>
            Here at The Ape Standard, I write about my technical and philosophical
            explorations, largely in the crypto world. I am currently building&nbsp;
            <a
              href="https://www.notion.so/fdotinc/OpenApe-Docs-ce6504e20ca14d38bdb1d879bc33830b"
              target="_blank"
              rel="noopener noreferrer"
            >
              OpenApe.
            </a>
          </p>
          <p>
            I grew up in Mumbai, India, and now live in Brooklyn, NY. I am always down to chat about philosophy, math, crypto,
            and the other ten thousand things that interest me. {`You can contact me at krishang@nftlabs.co or drop by on twitter at`}&nbsp;
            <a
              href="https://twitter.com/MonkeyMeaning"
              target="_blank"
              rel="noopener noreferrer"
            >
              MonkeyMeaning.
            </a>
          </p>

          <p>
            {`I'm but an ape; this website's a fork of`}&nbsp;
            <a
              href="https://leerob.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              leerob.io.
            </a>
          </p>          
        </div>
      </div>
    </Container>
  );
}
