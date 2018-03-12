import React from 'react';
import { Table, Header, Button } from 'semantic-ui-react';
import { inventors, people } from '../data/4_Cardio1';
import styled from 'styled-components';
import GoBack from './GoBack'

const Wrapper = styled.div`
  background: linear-gradient(#4AC29A, #4AC29A);
  padding: 3% 7% 0 7%;
`;

class Cardio1 extends React.Component {
  state = { filtered: inventors, ans1: false, ans4: false };

  generateHeaders = () => {
    const headers = ['(Index)', 'First', 'Last', 'Year', 'Passed'];
    return headers.map((header, i) => (
      <Table.HeaderCell key={i}>{header}</Table.HeaderCell>
    ));
  };

  generateRows = () => {
    return this.state.filtered.map((inv, i) => (
      <Table.Row key={i}>
        <Table.Cell>{i}</Table.Cell>
        <Table.Cell>{inv.first}</Table.Cell>
        <Table.Cell>{inv.last}</Table.Cell>
        <Table.Cell>{inv.year}</Table.Cell>
        <Table.Cell>{inv.passed}</Table.Cell>
      </Table.Row>
    ));
  };

  answer_1 = () => {
    const filtered = inventors.filter(
      inventor => inventor.year > 1500 && inventor.year < 1600
    );
    this.setState({ filtered: filtered });
  };

  answer_2 = () => {
    return inventors.map(inventor => {
      return <li>{inventor.first + ' ' + inventor.last}</li>;
    });
  };

  answer_3 = () => {
    const filtered = inventors.sort((a,b) => {
      return a.year > b.year ? 1 : -1
    })
    this.setState({ filtered: filtered })
  }

  answer_4 = () => {
    return inventors.map(inventor => {
      return(
        <li>
          {inventor.first + ' ' + inventor.last}
           | age: {inventor.passed - inventor.year} |
        </li>
      )
    });
  }

  answer_5 = () => {
    const filtered = inventors.sort((a,b) => {
      return a.passed - a.year > b.passed - b.year ? 1 : -1
    })
    this.setState({ filtered: filtered })
  }

  render() {
    return (
      <Wrapper className="container">
        <GoBack />
        <Table celled fixed singleLine>
          <Table.Header>
            <Table.Row>{this.generateHeaders()}</Table.Row>
          </Table.Header>
          <Table.Body>{this.generateRows()}</Table.Body>
        </Table>
        <div>
          <Header>
            1. Filter the list of inventors for those who were born in the
            1500's
          </Header>
          <Button onClick={this.answer_1}>Go!</Button>
        </div>
        <div>
          <Header>
            2. Give us an array of the inventors first and last names
          </Header>
          <Button onClick={() => this.setState({ ans1: true })}>Go!</Button>
          <ul>{this.state.ans1 && this.answer_2()}</ul>
        </div>
        <div>
          <Header>
            3. Sort the inventors by birthdate, oldest to youngest
          </Header>
          <Button onClick={this.answer_3}>Go!</Button>
        </div>
        <div>
          <Header>
            4. How many years did all the inventors live?
          </Header>
          <Button onClick={() => this.setState({ ans4: true })}>Go!</Button>
          <ul>{this.state.ans4 && this.answer_4()}</ul>
        </div>
        <div>
          <Header>
            5. Sort the inventors by years lived
          </Header>
          <Button onClick={this.answer_5}>Go!</Button>
        </div>
      </Wrapper>
    );
  }
}

export default Cardio1;
