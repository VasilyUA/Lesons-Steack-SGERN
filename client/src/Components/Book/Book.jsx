import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { GET_LIST_BOOK } from "../../GraphQL/Query/Book";
import { NavLink } from "react-router-dom";

export default function Book() {
  const { loading, data } = useQuery(GET_LIST_BOOK);
  return (
    <div>
      <h1>All books</h1>
      {loading && <div>Loading...</div>}

      {!loading && data.getAllBooks && (
        <ul>
          {data.getAllBooks.map((book) => (
            <li key={book.id}>
              <NavLink to={`/book/${book.id}`}>{book.title}</NavLink>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
