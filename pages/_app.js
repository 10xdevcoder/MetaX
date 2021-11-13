import '../styles/globals.css'
import Link from 'next/link'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <nav className="border-b px-15 py-6">
        <p className="text-xl">MetaX</p>
        <div className="flex mt-4">
          <Link href="/">
            <a className="mr-4 text-blue-500">
              X Verse
            </a>
          </Link>
          <Link href="/create-item">
            <a className="mr-4 text-blue-500">
              Create Digital MetaX
            </a>
          </Link>
          <Link href="/my-nfts">
            <a className="mr-4 text-blue-500">
              My MetaX
            </a>
          </Link>
          <Link href="/creator-dashboard">
            <a className="mr-6 text-pink-500">
              Creator Dashboard
            </a>
          </Link>
        </div>
      </nav>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
