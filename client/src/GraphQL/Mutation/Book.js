import { gql } from "@apollo/react-hooks";

export const REMOVE_BOOK = gql`
  mutation RemoveBook($id: ID!) {
    removeBoock(id: $id)
  }
`;

export const ADD_BOOK = gql`
  mutation AddBook($title: String!, $description: String!) {
    addBook(book: { title: $title, description: $description }) {
      id
      title
      description
    }
  }
`;
