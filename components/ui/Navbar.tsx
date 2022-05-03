import { CSSProperties } from 'react'
import { Spacer, Text, useTheme, Link as UILink } from '@nextui-org/react'
import Link from 'next/link'
import Image from 'next/image'

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
      <Link href='/' passHref>
        <UILink css={{ display: 'flex', alignItems: 'center' }}>
          <Image
            width={70}
            height={70}
            alt='pokemon icon'
            src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/132.png'
          />

          <Text color='white' h2>
            P
          </Text>
          <Text color='white' h3>
            okemon
          </Text>
        </UILink>
      </Link>

      <Spacer css={{ flex: 1 }} />
      <Link href='/favorites' passHref>
        <UILink>
          <Text color='white'>Favorites</Text>
        </UILink>
      </Link>
    </div>
  )
}

export default Navbar
