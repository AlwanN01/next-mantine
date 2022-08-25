import { Button, Tooltip } from '@mantine/core'
import { NextLink } from '@mantine/next'
import Button2 from 'components/Button'
import type { NextPage } from 'next'
const Hello: NextPage = () => {
  return (
    <>
      <header>Hello</header>
      <Tooltip label='Tooltip'>
        <Button component={NextLink} href='/'>
          Next link button
        </Button>
      </Tooltip>
      <Button2 />
    </>
  )
}

export default Hello
