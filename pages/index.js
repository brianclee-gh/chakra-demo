import Head from 'next/head'
import Image from 'next/image'
import ThemeSwitcher from './components/ThemeSwitcher.js'
import styles from '../styles/Home.module.css'
import { Flex, Heading, FormControl, Button, Input, useColorModeValue } from '@chakra-ui/react'

export default function Home() {
  const formBackground = useColorModeValue('gray.100', 'gray.700');
  const inputBackground = useColorModeValue('gray.100', 'gray.700')
  return (
    <>
    <Flex><ThemeSwitcher /></Flex>
    <Flex
      height="100vh"
      justify="center"
      align="center">
      <Flex
        p={12}
        rounded={6}
        backgroundColor={formBackground}
        direction="column">
        <Heading mb={3}>Login</Heading>
        <FormControl>
          <Input variant="filled" type="email" placeholder="email" mb={3}></Input>
          <Input variant="filled" type="password" placeholder="password" mb={3}></Input>
          <Button color="white" backgroundColor="teal" mb={3}>Login</Button>
        </FormControl>
      </Flex>
    </Flex>
    </>
  )
}
