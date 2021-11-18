import '../styles/globals.css'
const ethers = require('ethers');
const provider = new ethers.providers.JsonRpcProvider(`https://eth-rinkeby.alchemyapi.io/v2/avpSFE4CFF97rciebprxcggQd2cF18mJ`);
const signer = provider.getSigner()
//const [walletAddress, setWallet] = useState("");

import React, { useState, useEffect } from 'react';
import Link from 'next/link'
async function onClickConnect() {
  try {
    // Will open the MetaMask UI
    await ethereum.request({ method: 'eth_requestAccounts' });

  } catch (error) {
    console.error(error);
  }

};

function MyApp({ Component, pageProps }) {


  return (
    <div>
      <nav className="border-b px-12 py-6">
        <p className="text-xl">MetaX</p>
        <div className="flex mt-4"
        >
          <Link href="/index">
            <a className="mr-4 text-blue-500"
            >
              Home
            </a>
          </Link>
          <Link href="/Marketplace">
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
          <Link href="/creatorDashboard">
            <a className="mr-4 text-blue-500">
              Creator Profile
            </a>
          </Link>
          <button type='button' onClick={onClickConnect} >Connect</button>
        </div>
      </nav >
      <Component {...pageProps} />
    </div >
  )
}

export default MyApp;
