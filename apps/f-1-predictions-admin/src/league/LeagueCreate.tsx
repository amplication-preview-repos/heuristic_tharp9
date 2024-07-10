import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  SelectArrayInput,
  NumberInput,
} from "react-admin";

export const LeagueCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="name" source="name" />
        <SelectArrayInput
          label="users"
          source="users"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          optionValue="value"
        />
        <div />
        <NumberInput step={1} label="points" source="points" />
        <SelectArrayInput
          label="races"
          source="races"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          optionValue="value"
        />
      </SimpleForm>
    </Create>
  );
};
