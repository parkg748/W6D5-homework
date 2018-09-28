import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: 0,
      num1: '',
      num2: '',
    };

    this.setNum1 = this.setNum1.bind(this);
    this.setNum2 = this.setNum2.bind(this);
    this.clear = this.clear.bind(this);
    this.adding = this.adding.bind(this);
    this.subtracting = this.subtracting.bind(this);
    this.multiplying = this.multiplying.bind(this);
    this.dividing = this.dividing.bind(this);
  }

  setNum1(e) {
    const num1 = e.target.value ? parseInt(e.target.value) : '';
    this.setState({ num1 });
  }

  setNum2(e) {
    const num2 = e.target.value ? parseInt(e.target.value) : '';
    this.setState({ num2 });
  }

  adding(e) {
    e.preventDefault();
    const result = this.state.num1 + this.state.num2;
    this.setState({ result });
  }

  subtracting(e) {
    e.preventDefault();
    const result = this.state.num1 - this.state.num2;
    this.setState({ result });
  }

  multiplying(e) {
    e.preventDefault();
    const result = this.state.num1 * this.state.num2;
    this.setState({ result });
  }

  dividing(e) {
    e.preventDefault();
    const result = this.state.num1 / this.state.num2;
    this.setState({ result });
  }

  clear(e) {
    e.preventDefault();
    this.setState({ result: 0, num1: '', num2: '' });
  }

  render() {
    const { result, num1, num2 } = this.state;
    return (
      <div>
        <h1>{result}</h1>
        <br />
        <input onChange={this.setNum1} value={num1} />
        <input onChange={this.setNum2} value={num2} />
        <button onClick={this.clear}>Clear</button>
        <button onClick={this.adding}>+</button>
        <button onClick={this.subtracting}>-</button>
        <button onClick={this.multiplying}>*</button>
        <button onClick={this.dividing}>/</button>
      </div>
    );
  }
}

export default Calculator;
