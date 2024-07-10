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

import { USER_TITLE_FIELD } from "../user/UserTitle";
import { RACE_TITLE_FIELD } from "./RaceTitle";

export const RaceShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="name" source="name" />
        <TextField label="date" source="date" />
        <TextField label="location" source="location" />
        <TextField label="results" source="results" />
        <TextField label="schedule" source="schedule" />
        <ReferenceManyField reference="Bet" target="raceId" label="Bets">
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
