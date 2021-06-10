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

const MDXComponents = {
  Image,
  a: CustomLink,
  Tweet,
  Latex
};

export default MDXComponents;
