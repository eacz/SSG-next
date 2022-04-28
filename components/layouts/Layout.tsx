import Head from 'next/head'
import { PropsWithChildren } from 'react'
import { Navbar } from '../ui'

interface Props {
  title?: string
}

const Layout = ({ children, title }: PropsWithChildren<Props>) => {
  return (
    <>
      <Head>
        <title>{title || 'Pokemon App'}</title>
        <meta name='author' content='eacz' />
        <meta name='description' content='information about {poke}' />
        <meta name='keywords' content='{poke}, pokemon, pokedex' />
      </Head>
      <Navbar />
      <main style={{ padding: '0px 20px' }}>{children}</main>
    </>
  )
}

export default Layout
