import React, { Component } from 'react';
import { Input } from './Input';
import { PrimaryButton, SecondaryButton } from './Button';
import { Spin } from './Spin';
import { StyledSearch } from './Search';
import styled from 'styled-components';

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-around;
  width: 100%;
`;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
      search: '',
    }
  }

  render() {
    const { text, search } = this.state;

    return (
      <Container>
        <Spin>
          <span role="img" aria-label="Happy face">😁</span>
        </Spin>
        <div>
          <Input
            onChange={this.handleChange}
            placeholder="Your text goes here"
            value={text}
          />
          <PrimaryButton
            onClick={this.handleSearchClick}
          >
            Search
          </PrimaryButton>
          <SecondaryButton
            onClick={this.handleClearClick}
          >
            Clear
          </SecondaryButton>
        </div>
        <StyledSearch
          search={search}
        />
      </Container>
    );
  }

  handleChange = (e) => {
    this.setState({
      text: e.currentTarget.value,
    })
  }

  handleClearClick = () => {
    this.setState({
      text: '',
      search: '',
    })
  }

  handleSearchClick = () => {
    this.setState({
      search: this.state.text,
      text: '',
    })
  }
}

export default App;
