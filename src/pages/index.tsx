import Link from 'next/link'
import { Button, SimpleGrid } from '@mantine/core'
import type { NextPage } from 'next'
import Head from 'next/head'
import CallHai from 'components/CallHai'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name='description' content='Generated by Home' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <header>Home</header>
      <Link href='/hello' passHref>
        <Button classNames={{ root: 'btn btn-primary' }} unstyled component='a' color='red'>
          Next link button
        </Button>
      </Link>
      <Button<'a'>
        component='a'
        href='#'
        // events and ref types cannot be inferred when component prop is set
        // unless you set type explicitly
        onClick={event => console.log(event)}
        ref={node => console.log(node)}>
        Open in new tab
      </Button>
      <CallHai>{(e: any) => <p>{e}</p>}</CallHai>
      <SimpleGrid cols={2}>
        <h1>1</h1>
        <h2>2</h2>
        <div>3</div>
        <div>4</div>
      </SimpleGrid>
    </>
  )
}

export default Home
