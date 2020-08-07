import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { useParams } from "react-router-dom";
import { GET_BOOK } from "../../GraphQL/Query/Book";

export default function OneBook() {
  let { id } = useParams();
  const { data, loading } = useQuery(GET_BOOK, {
    variables: {
      id: id,
    },
  });
  const book = data ? data.getBook : null;

  return book ? (
    <div>
      <h1>{book.title}</h1>
      <p>{book.description}</p>
    </div>
  ) : (
    <div>{loading && <div>Loading...</div>}</div>
  );
}
