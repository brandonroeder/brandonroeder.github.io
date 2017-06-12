import React from 'react'
import styled from 'styled-components'
import Title from '../components/title'

const HeaderContainer = styled.header`
  display: block;
  max-width: 640px;
  margin: 3rem auto 4rem;
`

const Header = (props) => {
  return(
    <HeaderContainer>
      <Title>
        <a href="/" rel="home">Brandon Roeder</a>
      </Title>
    </HeaderContainer>
  )
}

export default Header
