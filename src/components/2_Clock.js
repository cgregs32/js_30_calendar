import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  html {
    background:#018DED url(http://unsplash.it/1500/1000?image=881&blur=50);
    background-size:cover;
    font-family:'helvetica neue';
    text-align: center;
    font-size: 10px;
  }

  body {
    margin: 0;
    font-size: 2rem;
    display:flex;
    flex:1;
    min-height: 100vh;
    align-items: center;
  }

  .clock {
    width: 30rem;
    height: 30rem;
    border:20px solid white;
    border-radius:50%;
    margin:50px auto;
    position: relative;
    padding:2rem;
    box-shadow:
      0 0 0 4px rgba(0,0,0,0.1),
      inset 0 0 0 3px #EFEFEF,
      inset 0 0 10px black,
      0 0 10px rgba(0,0,0,0.2);
  }

  .clock-face {
    position: relative;
    width: 100%;
    height: 100%;
    transform: translateY(-3px); /* account for the height of the clock hands */
  }

  .hand {
    width:50%;
    height:6px;
    background:black;
    position: absolute;
    top:50%;
  }
`

class Clock extends React.Component {
  render () {
    return(
      <div className="clock">
        <div className="clock-face">
          <div className="hand hour-hand"></div>
          <div className="hand min-hand"></div>
          <div className="hand second-hand"></div>
        </div>
      </div>
    )
  }
}

export default Clock;
