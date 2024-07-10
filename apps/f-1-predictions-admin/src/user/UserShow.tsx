import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { USER_TITLE_FIELD } from "./UserTitle";
import { RACE_TITLE_FIELD } from "../race/RaceTitle";

export const UserShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="First Name" source="firstName" />
        <TextField label="Last Name" source="lastName" />
        <TextField label="Username" source="username" />
        <TextField label="Email" source="email" />
        <TextField label="Roles" source="roles" />
        <TextField label="nickname" source="nickname" />
        <TextField label="familyName" source="familyName" />
        <TextField label="displayName" source="displayName" />
        <TextField label="givenName" source="givenName" />
        <ReferenceManyField reference="Bet" target="userId" label="Bets">
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="amount" source="amount" />
            <TextField label="prediction" source="prediction" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="Race" source="race.id" reference="Race">
              <TextField source={RACE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="UserReference" source="userReference" />
            <TextField label="RaceReference" source="raceReference" />
            <TextField label="PredictionDetails" source="predictionDetails" />
            <TextField label="UserRelation" source="userRelation" />
            <TextField label="RaceRelation" source="raceRelation" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
