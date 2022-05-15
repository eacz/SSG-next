import Head from 'next/head'
import { PropsWithChildren } from 'react'
import { Navbar } from '../ui'

interface Props {
  title?: string
}

const origin = typeof window === 'undefined' ? '' : window.location.origin

const Layout = ({ children, title }: PropsWithChildren<Props>) => {
  return (
    <>
      <Head>
        <title>{title || 'Pokemon App'}</title>
        <meta name='author' content='eacz' />
        <meta name='description' content={`information about ${title}`} />
        <meta name='keywords' content={`${title}, pokemon, pokedex`} />
        <meta property='og:title' content={`Information about ${title}`} />
        <meta property='og:description' content={`This page contains information about ${title}`} />
        <meta property='og:image' content={`${origin}/images/banner.png`} />
      </Head>
      <Navbar />
      <main style={{ padding: '0px 20px' }}>{children}</main>
    </>
  )
}

export default Layout
