import { useEffect } from 'react'
import Link from 'next/link'
import Layout from '../components/Layout'

const IndexPage = () => {
  useEffect(() => {
    const handleMessage = (_event, args) => alert(args)

    // add a listener to 'message' channel
    global.ipcRenderer.addListener('message', handleMessage)

    return () => {
      global.ipcRenderer.removeListener('message', handleMessage)
    }
  }, [])

  const onSayHiClick = () => {
    global.ipcRenderer.send('message', 'hi from next')
  }

  return (
    <Layout title="Home | Next.js + TypeScript + Electron Example">
      <h1>execute behind install</h1>
      <button onClick={onSayHiClick}>Start 4exe app</button>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>

      <p>
        <Link href="/about2">
          <a>About2</a>
        </Link>
      </p>
    </Layout>
  )
}

export default IndexPage
