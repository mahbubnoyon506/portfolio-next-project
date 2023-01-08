import { Button } from '@mui/material';
import Head from 'next/head'
import Image from 'next/image';
import About from '../components/home/about';
import Banner from '../components/home/banner';
import dynamic from 'next/dynamic';
import bgImage from '../public/images/portflio-bg.jpg'
import Projects from '../components/home/projects';


export default function Home() {
  const Layout = dynamic(import('../components/layout'), { ssr: false });

  return (
    <>
      <Layout home>
        <Head>
          <title>My Portfolio</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Banner />
        <div className=''>
          <About />
          <Projects/>
        </div>
      </Layout>
    </>
  )
}



