import * as GraphQL from "graphql";
import gql from "graphql-tag";
import * as test from "tape";
import { addFields } from "../src/add-fields";

test("Add required fields", t => {
  addFieldTestData.forEach(testCase => {
    t.test(testCase.name, st => {
      const actual = addFields(testCase.beforegql, testCase.fieldsToAdd);
      //   console.log("WE WANT!!");
      //   console.log(JSON.stringify(testCase.aftergql.definitions));
      //   console.log("WE GOT!!");
      //   console.log(JSON.stringify(actual.definitions));
      st.deepEqual(actual.definitions, testCase.aftergql.definitions);
      st.end();
    });
  });
});

interface AddFieldsTest {
  readonly name: string;
  readonly fieldsToAdd: ReadonlyArray<string>;
  readonly beforegql: GraphQL.DocumentNode;
  readonly aftergql: GraphQL.DocumentNode;
}

const addFieldTestData: ReadonlyArray<AddFieldsTest> = [
  {
    name: "default should add __typename",
    fieldsToAdd: ["__typename"],
    beforegql: gql`
      query olle {
        root {
          name
          nisse
        }
      }
    `,
    aftergql: gql`
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
    name: "should add id and __typename",
    fieldsToAdd: ["id", "__typename"],
    beforegql: gql`
      query olle {
        root {
          name
          nisse
        }
      }
    `,
    aftergql: gql`
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
