import { CSSProperties } from 'react'
import Image from 'next/image'
import { Spacer, Text, useTheme } from '@nextui-org/react'

const style: CSSProperties = {
  display: 'flex',
  width: '100%',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'start',
  padding: '0px 20px',
}

const Navbar = () => {
  const { theme } = useTheme()
  return (
    <div style={{ ...style, backgroundColor: theme?.colors.gray900.value }}>
      <Image 
        width={70} height={70} alt="pokemon icon"
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/132.png" 
      />

      <Text color='white' h2>P</Text>
      <Text color='white' h3>okemon</Text>
      
      <Spacer css={{flex: 1}} />
      <Text color='white'>Favorites</Text>
    </div>
  )
}

export default Navbar
