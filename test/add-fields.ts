import * as test from "tape";
import { addFields } from "../src";
import { addFieldsTestData } from "./test-data";

test("Add fields", t => {
  addFieldsTestData.forEach(testCase => {
    t.test(testCase.name, st => {
      const actual = addFields(testCase.withoutFields, testCase.fields);
      //   console.log("WE WANT!!");
      //   console.log(JSON.stringify(testCase.aftergql.definitions));
      //   console.log("WE GOT!!");
      //   console.log(JSON.stringify(actual.definitions));
      st.deepEqual(actual.definitions, testCase.withFields.definitions);
      st.end();
    });
  });
});
