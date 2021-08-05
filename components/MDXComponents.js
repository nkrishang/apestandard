import Link from 'next/link';
import Image from 'next/image';
import Tweet from '@/components/Tweet';
import Latex from 'react-latex-next'
import 'katex/dist/katex.min.css'

const CustomLink = (props) => {
  const href = props.href;
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));

  if (isInternalLink) {
    return (
      <Link href={href}>
        <a {...props} />
      </Link>
    );
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
};

const Center = ({children}) => {
    return (
        <div className="flex justify-center">
            <div>
                {children}
            </div>
        </div>
    )
}

const Wordloops = () => {
    return (
        <div className="flex justify-start w-full">
            <p className="mr-2 text-sm">Written in</p>
            <div>
                <a target="_blank" rel="noopener noreferrer" href="https://www.wordloops.com/">
                    <Image src="/static/images/wordloops-logo.png" height={40} width={76.177} className="border border-black"/>
                </a>
            </div>
        </div>
    )
}

const Video = () => {
    return (
        // <Center>
            <video src={"/static/images/multichain-future/multi-chain-future-banner.mp4"} autoPlay loop />
        // </Center>
    )
}

const MDXComponents = {
  Image,
  a: CustomLink,
  Tweet,
  Latex,
  Center,
  Wordloops,
  Video
};

export default MDXComponents;
