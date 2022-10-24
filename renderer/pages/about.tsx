import Link from 'next/link'
import Layout from '../components/Layout'
import Image from 'next/image'

const AboutPage = () => (
  <Layout title="About | Next.js + TypeScript + Electron Example">
    <h1>About</h1>
    <p>This is the about page</p>
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
    <Image src="/images/loading-l-5.gif" width={64} height={64}/>
    <Image src="/images/run_gopher.ico" width={128} height={128}/>
  </Layout>
)

export default AboutPage
