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
              href="https://thirdweb.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              thirdweb
            </a>
            .      
          </p>
          <p>
            I was set on studying philosophical logic and set theory, until I read&nbsp;
            <a
              href="https://medium.com/@VitalikButerin/the-meaning-of-decentralization-a0c92b76a274"
              target="_blank"
              rel="noopener noreferrer"
            >
              'The Meaning of Decentralization'
            </a>
            {' '}in the begining of the COVID pandemic. Soon enough, I rushed out of college to go build a whole new 
            web with some kickass builders.
          </p>
          <p>
            I grew up in Mumbai, India, and now live in Brooklyn, NY. I am always down to chat about philosophy, math, crypto,
            and the other ten thousand things that interest me.
          </p>
          <p>
            {`You can contact me at krishang@thirdweb.com or drop by on twitter at`}&nbsp;
            <a
              href="https://twitter.com/MonkeyMeaning"
              target="_blank"
              rel="noopener noreferrer"
            >
              MonkeyMeaning.
            </a>
          </p>  
        </div>
      </div>
    </Container>
  );
}
