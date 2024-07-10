import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { RACE_TITLE_FIELD } from "../race/RaceTitle";

export const BetList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Bets"}
      perPage={50}
      pagination={<Pagination />}
    >
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
    </List>
  );
};
