import Link from 'next/link'
import Layout from '../components/Layout'
import Image from 'next/image'
import { useState } from "react";
import { cwd } from 'process';

const AboutPage = () =>  {
  const [isShow, setIsShow] = useState(false);
  const [appName, setBgApp] = useState(process.cwd());
  return (
  <Layout title="About | Next.js + TypeScript + Electron Example">
    <h1>About</h1>
    <p>This is the about page</p>
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
      <Link href="/about2">
        <a>Go about2</a>
      </Link>
      <div>
        <h1>{isShow ? `ON` : `OFF`}</h1>
      </div>
      <div>
        <button onClick={()=> setIsShow(!isShow)}>change</button>
      </div>
    </p>
    <h3>{appName}</h3>
    <>{ShowLoading(isShow)}</>
    <img src="/images/run_gopher.ico" width={128} height={128}/>
  </Layout>
)};

const ShowLoading = (props) => {
  if(props) {
    return (
        <img src="/images/loading-l-5.gif" width={64} height={64}/>
    );
  }
}

export default AboutPage
