import { TwitterTweetEmbed } from 'react-twitter-embed';

/**
 * Supports plain text, images, quote tweets.
 *
 * Needs support for images, GIFs, and replies maybe?
 * Styles use !important to override Tailwind .prose inside MDX.
 */
export default function Tweet({ tweetId }) {
  return (
    <TwitterTweetEmbed tweetId={tweetId}/>
  )
}
