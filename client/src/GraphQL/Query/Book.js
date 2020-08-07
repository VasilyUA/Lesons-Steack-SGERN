import { gql } from "@apollo/react-hooks";

export const GET_LIST_BOOK = gql`
  query GetAllBooks {
    getAllBooks {
      id
      title
      description
    }
  }
`;

export const GET_BOOK = gql`
  query GetBook($id: ID!) {
    getBook(id: $id) {
      id
      title
      description
    }
  }
`;
