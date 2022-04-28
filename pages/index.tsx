import { Button } from '@nextui-org/react'
import { NextPage } from 'next'
import { Layout } from '../components/layouts'

const HomePage: NextPage = () => {
  return (
    <Layout title='Pokemon List'>
      <Button color='gradient'>Hello World</Button>
    </Layout>
  )
}

export default HomePage
