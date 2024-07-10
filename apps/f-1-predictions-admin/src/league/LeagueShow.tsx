import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const LeagueShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="name" source="name" />
        <TextField label="users" source="users" />
        <TextField label="predictionHistory" source="predictionHistory" />
        <TextField label="points" source="points" />
        <TextField label="races" source="races" />
      </SimpleShowLayout>
    </Show>
  );
};
