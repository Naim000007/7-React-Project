import React from 'react'
import {HStack,Button} from '@chakra-ui/react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
      <HStack p={4} shadow={"base"} bgColor={"blackAlpha.900"}>
        <Button variant={"unstyled"} color={"white"}>
            <Link to='/'>Home</Link>
        </Button>
        <Button variant={"unstyled"} color={"white"}>
            <Link to='/coins'>Coin</Link>
        </Button>
        <Button variant={"unstyled"} color={"white"}>
            <Link to='/exchange'>Exchange</Link>
        </Button>
        
      </HStack>
    </div>
  )
}

export default Header
