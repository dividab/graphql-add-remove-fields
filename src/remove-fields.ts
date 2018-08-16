import { DocumentNode, visit } from "graphql";

export function removeFields(
  query: DocumentNode,
  fieldstoRemove: ReadonlyArray<string>
): DocumentNode {
  return visit(query, {
    // tslint:disable-next-line:function-name
    Field: {
      enter(node) {
        return fieldstoRemove.indexOf(node.name.value) > -1 ? null : undefined;
      }
    }
  });
}
