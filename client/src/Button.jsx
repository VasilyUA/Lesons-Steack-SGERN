import React from "react";
import { useMutation, gql } from "@apollo/react-hooks";
const REMOVE_BOOK = gql`
  mutation RemoveBook($id: ID!) {
    removeBoock(id: $id)
  }
`;
export default function Button(props) {
  const { book } = props;
  const [removeBoock, { data }] = useMutation(REMOVE_BOOK);
  console.log(data);
  return (
    <div>
      <button onClick={() => removeBoock({ variables: { id: book.id } })}>
        delete
      </button>
    </div>
  );
}
