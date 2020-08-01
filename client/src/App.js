import React from "react";
import { useQuery, gql } from "@apollo/react-hooks";
import Button from "./Button";
const LIST_BOOK = gql`
  query GetAllBooks {
    getAllBooks {
      id
      title
      description
    }
  }
`;

function App() {
  const { loading, data } = useQuery(LIST_BOOK);

  return (
    <div>
      <h1>All books</h1>
      {loading && <div>Loading...</div>}

      {!loading && data.getAllBooks && (
        <ul>
          {data.getAllBooks.map((book) => (
            <li key={book.id}>
              {book.title} {book.description}
              <Button book={book} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
