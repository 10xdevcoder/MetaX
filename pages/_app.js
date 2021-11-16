import '../styles/globals.css'
import Link from 'next/link'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <nav className="border-b px-12 py-6">
        <p className="text-xl">MetaX</p>
        <div className="flex mt-4">
          <Link href="/">
            <a className="mr-4 text-blue-500">
              MarketPlace
            </a>
          </Link>
          <Link href="/Xplay">
            <a className="mr-4 text-blue-500">
              Xplay
            </a>
          </Link>
          <Link href="/create-item">
            <a className="mr-4 text-blue-500">
              Create NFT
            </a>
          </Link>
          <Link href="/EnsLogic">
            <a className="mr-4 text-blue-500">
              Search ENS
            </a>
          </Link>
          <Link href="/my-nfts">
            <a className="mr-4 text-blue-500">
              My NFTS
            </a>
          </Link>
          <Link href="/CreatorProfile">
            <a className="mr-4 text-blue-500">
              Creator Profile
            </a>
          </Link>
        </div>
      </nav>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
