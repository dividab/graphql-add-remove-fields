import * as test from "tape";
import { removeFields } from "../src";
import { testData } from "./test-data";

test("Remove fields", t => {
  testData.forEach(testCase => {
    t.test(testCase.name, st => {
      const actual = removeFields(testCase.withFields, testCase.fields);
      st.deepEqual(actual.definitions, testCase.withoutFields.definitions);
      st.end();
    });
  });
});
