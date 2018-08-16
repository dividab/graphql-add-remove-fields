import * as GraphQL from "graphql";

export function addFields(
  query: GraphQL.DocumentNode,
  fieldNames: ReadonlyArray<string>
): GraphQL.DocumentNode {
  // When using visit() to edit an AST, the original AST will not be modified,
  // and a new version of the AST with the changes applied will be returned from the visit function.
  return GraphQL.visit(query, {
    SelectionSet: {
      leave(
        node: GraphQL.SelectionSetNode,
        _key: string,
        _parent: GraphQL.ASTNode,
        _path: string
      ): {} | undefined {
        // @return
        //   undefined: no action
        //   false: no action
        //   visitor.BREAK: stop visiting altogether
        //   null: delete this node
        //   any value: replace this node with the returned value

        // // Don't add to the top-level selection-set
        // if (parent && parent.kind === GraphQL.Kind.OPERATION_DEFINITION) {
        //   return undefined;
        // }

        const fieldsToAdd: Array<GraphQL.FieldNode> = [];
        for (const fieldName of fieldNames) {
          if (!hasField(fieldName)(node.selections)) {
            const fieldToAdd = createField(fieldName);
            fieldsToAdd.push(fieldToAdd);
          }
        }
        if (fieldsToAdd.length > 0) {
          const newNode = {
            ...node,
            selections: [...node.selections, ...fieldsToAdd]
          };
          return newNode;
        }
        return false;
      }
    }
  });
}

function hasField(
  name: string
): (selectionSet: GraphQL.SelectionNode[]) => boolean {
  return selectionSet =>
    selectionSet
      .filter(s => s.kind === "Field")
      .some(({ name: { value } }: GraphQL.FieldNode) => value === name);
}

function createField(name: string): GraphQL.FieldNode {
  return {
    kind: "Field",
    alias: undefined,
    name: {
      kind: "Name",
      value: name
    },
    // tslint:disable-next-line:no-arguments
    arguments: [],
    directives: [],
    selectionSet: undefined
  };
}
