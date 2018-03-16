import React from 'react';
import GoBack from './GoBack'
import styled from 'styled-components';

const Container = styled.div`
  margin: 0;
`;

class Canvas extends React.Component {
  state = { drawing: false, lastX: 0, lastY: 0, hue: 0, direction: true };

  componentDidMount() {
    const canvas = document.getElementById('draw');
    const ctx = canvas.getContext('2d');
    ctx.strokeStyle = '#BADASS';
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';
    ctx.lineWidth = 3;
    this.setState({ ctx: ctx });
  }

  draw = e => {
    if (!this.state.drawing) return;
    const { lastX, lastY, ctx, hue, direction } = this.state;

    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.clientX, e.clientY);
    ctx.stroke();
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;

    this.setState({
      lastX: e.clientX,
      lastY: e.clientY,
      hue: hue >= 360 ? 0 : hue + 1
    });

    direction ? (ctx.lineWidth += 1) : (ctx.lineWidth -= 1);

    if (ctx.lineWidth >= 75 || ctx.lineWidth <= 1)
      this.setState({ direction: !direction });
  };

  mouseDown = e => {
    this.setState({ drawing: true, lastX: e.clientX, lastY: e.clientY });
  };

  render() {
    return (
      <Container>
        <GoBack />
        <canvas
          id="draw"
          width={window.innerWidth}
          height={window.innerHeight}
          onMouseMove={this.draw}
          onMouseDown={this.mouseDown}
          onMouseUp={() => this.setState({ drawing: false })}
          onMouseOut={() => this.setState({ drawing: false })}
        />
      </Container>
    );
  }
}

export default Canvas;
