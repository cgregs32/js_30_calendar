import React from 'react'
import styled from 'styled-components'
import { Segment, Header } from 'semantic-ui-react'
import calendarData from '../calendarData'
import { Link } from 'react-router-dom'


const PageWrapper = styled.div`
  .calendarStyle{
    display: grid;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    max-width: 85%;
    grid-auto-rows: 150px;
    margin: 0 auto;
  }

  div:nth-child(odd){
    background-color: yellow;
  }

  h1{
    text-align: center;
  }
`

class Calendar extends React.Component {

  generateCalendar = () => {
    let myDivs = [];
    for(let i = 0; i < 30; i++){
      myDivs.push(<div key={i}></div>)
    }
    return myDivs
  }

  render () {
    return(
      <PageWrapper basic>
        <Segment as='h1'>Javascript 30 Challenge</Segment>
        <Segment className='calendarStyle'>
          {this.generateCalendar()}
        </Segment>
      </PageWrapper>
    )
  }
}

export default Calendar;
