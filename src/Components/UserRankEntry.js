import React from "react";
import { Table, Icon } from "semantic-ui-react";

export default function UserRankEntry() {
  return (
    <React.Fragment>
      <Table.Row>
        <Table.Cell>
          <Icon name="user circle" size={"big"} />
        </Table.Cell>
        <Table.Cell>Username</Table.Cell>
        <Table.Cell>24</Table.Cell>
        <Table.Cell>50</Table.Cell>
        <Table.Cell>22</Table.Cell>
      </Table.Row>
    </React.Fragment>
  );
}
