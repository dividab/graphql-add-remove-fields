import * as GraphQL from "graphql";
import gql from "graphql-tag";

export interface OneTest {
  readonly name: string;
  readonly fields: ReadonlyArray<string>;
  readonly withoutFields: GraphQL.DocumentNode;
  readonly withFields: GraphQL.DocumentNode;
}

const typenameAddRemoveTest = {
  name: "__typename",
  fields: ["__typename"],
  withoutFields: gql`
    query olle {
      root {
        name
        nisse
      }
    }
  `,
  withFields: gql`
    query olle {
      root {
        name
        nisse
        __typename
      }
      __typename
    }
  `
};

const idTypenameAddRemoveTest = {
  name: "id and __typename",
  fields: ["id", "__typename"],
  withoutFields: gql`
    query olle {
      root {
        name
        nisse
      }
    }
  `,
  withFields: gql`
    query olle {
      root {
        name
        nisse
        id
        __typename
      }
      id
      __typename
    }
  `
};

export const addFieldsTestData: ReadonlyArray<OneTest> = [
  typenameAddRemoveTest,
  idTypenameAddRemoveTest,
  {
    name: "already exists id and __typename should do nothing",
    fields: ["id", "__typename"],
    withoutFields: gql`
      query olle {
        root {
          name
          nisse
          id
          __typename
        }
        id
        __typename
      }
    `,
    withFields: gql`
      query olle {
        root {
          name
          nisse
          id
          __typename
        }
        id
        __typename
      }
    `
  }
];

export const removeFieldsTestData: ReadonlyArray<OneTest> = [
  typenameAddRemoveTest,
  idTypenameAddRemoveTest
];
