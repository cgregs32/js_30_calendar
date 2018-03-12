import React from 'react';
import { Table } from 'semantic-ui-react';
import { inventors, people } from '../data/4_Cardio1';
import styled from 'styled-components';

const Wrapper = styled.div`

`

class Cardio1 extends React.Component {
  generateHeaders = () => {
    const headers = ['(Index)', 'First', 'Last', 'Year', 'Passed'];
    return headers.map(header => <Table.HeaderCell>{header}</Table.HeaderCell>);
  };

  generateRows = () => {
    return inventors.map((inv, i) => {
      return (
        <Table.Row key={i}>
          <Table.Cell>{i}</Table.Cell>
          <Table.Cell>{inv.first}</Table.Cell>
          <Table.Cell>{inv.last}</Table.Cell>
          <Table.Cell>{inv.year}</Table.Cell>
          <Table.Cell>{inv.passed}</Table.Cell>
        </Table.Row>
      );
    });
  };

  render() {
    return (
      <Wrapper className='container'>
        <Table celled fixed singleLine>
          <Table.Header>
            <Table.Row>{this.generateHeaders()}</Table.Row>
          </Table.Header>
          <Table.Body>{this.generateRows()}</Table.Body>
        </Table>
      </Wrapper>
    );
  }
}

export default Cardio1;
