const ExternalLink = ({ href, children }) => (
  <a
    className="text-gray-500 hover:text-gray-600 transition"
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    {children}
  </a>
);

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-start max-w-2xl mx-auto w-full mb-8">
      <hr className="w-full border-1 border-gray-200 dark:border-gray-800 mb-8" />

      <div className="w-full max-w-2xl grid grid-cols-1 pb-16 sm:grid-cols-3">
        <ExternalLink href="https://github.com/leerob">Discord</ExternalLink>
        <ExternalLink href="https://github.com/leerob">GitHub</ExternalLink>
        <ExternalLink href="https://twitter.com/leeerob">
          Twitter
        </ExternalLink>
      </div>
    </footer>
  );
}
