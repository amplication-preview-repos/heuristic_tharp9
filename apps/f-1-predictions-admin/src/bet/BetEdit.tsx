import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";
import { RaceTitle } from "../race/RaceTitle";

export const BetEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="amount" source="amount" />
        <div />
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <ReferenceInput source="race.id" reference="Race" label="Race">
          <SelectInput optionText={RaceTitle} />
        </ReferenceInput>
        <TextInput label="UserReference" source="userReference" />
        <TextInput label="RaceReference" source="raceReference" />
        <div />
        <TextInput label="UserRelation" source="userRelation" />
        <TextInput label="RaceRelation" source="raceRelation" />
      </SimpleForm>
    </Edit>
  );
};
