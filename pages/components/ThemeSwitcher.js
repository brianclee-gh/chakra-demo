import { IconButton, useColorMode } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'

export default function ThemeSwitcher() {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <IconButton
      aria-label="Toggle Theme"
      onClick={toggleColorMode}
      size="lg"
      m={3}
      icon={colorMode === 'dark' ? <MoonIcon /> : <SunIcon />}>
    </IconButton>
)
}