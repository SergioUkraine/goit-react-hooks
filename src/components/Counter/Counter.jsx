import React, { Component } from 'react';
class Counter extends Component {
  state = {
    counterA: 0,
    counterB: 0,
  };

  handelCounterAIncriment = () => {
    this.setState(({ counterA }) => ({ counterA: counterA + 1 }));
  };

  handelCounterBIncriment = () => {
    this.setState(({ counterB }) => ({ counterB: counterB + 1 }));
  };

  componentDidMount() {
    const { counterA, counterB } = this.state;
    const totalClick = counterA + counterB;

    document.title = `Всего кликнули ${totalClick} раз`;
  }

  componentDidUpdate(prevProps, prevState) {
    const { counterA, counterB } = this.state;

    if (prevState.counterA !== counterA || prevState.counterB !== counterB) {
      const totalClick = counterA + counterB;
      document.title = `Всего кликнули ${totalClick} раз`;
    }
  }

  render() {
    return (
      <>
        <button type="button" onClick={this.handelCounterAIncriment}>
          Counter A
        </button>
        <p>CLick A: {this.state.counterA}</p>
        <button type="button" onClick={this.handelCounterBIncriment}>
          Counter B
        </button>
        <p>CLick B: {this.state.counterB}</p>
      </>
    );
  }
}

export { Counter };
