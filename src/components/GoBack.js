import React from 'react'
import { Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import styled from 'styled-components';

const Wrapper = styled.div`
  text-align: left;
  padding: 3% 0 0 3%;
  position: absolute;
  color: white;
  i{
    color: white;
    text-decoration: none;
  }
  font-size: 22px;
  i:hover {
    color: teal;
  }
`

class GoBack extends React.Component {
  render () {
    return(
      <Wrapper>
        <Link to='/'>
          <Icon name='arrow circle left'>&nbsp;Back</Icon>
        </Link>
      </Wrapper>
    )
  }
}

export default GoBack;
