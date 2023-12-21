import Header from '@/Header'
import Head from 'next/head'
import Image from 'next/image'
//all code in head will go to head component of html
export default function Home() {
  return (
    <div>
      <Head>
        <title>Hulu-clone</title>
        <link rel="icon" href="/favicon.io"/>
      </Head> 

      <h1>lets get startes</h1>
      {/** Header */}
      <Header />
       {/**Nav */}
        {/** Results*/}
    </div>
  )
}
