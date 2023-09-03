import React, { Component } from 'react';
import { Container, ColorTab, Label } from './Colorpicker.styled';

class Colorpicker extends Component {
  state = {
    activeIdx: 0,
  };

  setActiveIndex = index => {
    console.log(index);
    this.setState({ activeIdx: index });
  };

  render() {
    const { colors } = this.props;
    return (
      <Container>
        {colors.map((color, index) => {
          return (
            <ColorTab
              key={color.id}
              active={index === this.state.activeIdx}
              onClick={() => {
                this.setActiveIndex(index);
              }}
              color={color.color}
            >
              {index === this.state.activeIdx && <Label>{color.label}</Label>}
            </ColorTab>
          );
        })}
      </Container>
    );
  }
}

export default Colorpicker;
