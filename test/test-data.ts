import * as GraphQL from "graphql";
import gql from "graphql-tag";

export interface OneTest {
  readonly name: string;
  readonly fields: ReadonlyArray<string>;
  readonly withoutFields: GraphQL.DocumentNode;
  readonly withFields: GraphQL.DocumentNode;
}

export const testData: ReadonlyArray<OneTest> = [
  {
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
  },
  {
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
  }
];
