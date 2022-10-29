import Link from 'next/link'
import Layout from '../components/Layout'
import { useState } from "react";

const AboutPage2 = () =>  {
  return (
  <Layout title="About2">
    <h1>About2</h1>
    <p>This is the about page2</p>
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
      
    </p>
    <p>
      <Link href="/about">
        <a>Go about</a>
      </Link>
    </p>
  </Layout>
)};


export default AboutPage2
