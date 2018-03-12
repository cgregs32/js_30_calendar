import React from 'react'
import styled from 'styled-components';
import GoBack from './GoBack'

const Container = styled.div`
  height: 100vh;
  text-align: center;
  background: #193549;
  color: white;
  font-family: 'helvetica neue', sans-serif;
  font-weight: 100;
  font-size: 50px;

.controls {
  margin-bottom: 50px;
}

input {
  width:100px;
}

img{
  padding: ${ (props) => props.children[2]._self.state.spacing }px;
  background: ${ (props) => props.children[2]._self.state.base };
  filter: blur(${ (props) => props.children[2]._self.state.blur }px);
}

.hl{
  color: ${ (props) => props.children[0]._self.state.base };
}
`


class Variables extends React.Component {
  state = { spacing: 10, blur: 10, base:'#ffc600' }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
    console.log(value)
  }

  render () {
    const { spacing, blur, base } = this.state
    return(
      <Container>
        <GoBack />
        <h2>Update Properties with <span className='hl'>ReactJS</span></h2>

        <div className="controls">
          <label htmlFor="spacing">Spacing:</label>
          <input onChange={this.handleChange} id="spacing" type="range" name="spacing" min="10" max="200" value={spacing} data-sizing="px" />

          <label htmlFor="blur">Blur:</label>
          <input onChange={this.handleChange} id="blur" type="range" name="blur" min="0" max="25" value={blur} data-sizing="px" />

          <label htmlFor="base">Base Color</label>
          <input onChange={this.handleChange} id="base" type="color" name="base" value={base} />
        </div>

        <img src="https://source.unsplash.com/7bwQXzbF6KE/800x500" />

      </Container>
    )
  }
}

export default Variables;
