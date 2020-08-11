import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { useParams, NavLink } from "react-router-dom";
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
    <div className="container">
      <div className="card" style={{ width: "100%" }}>
        <div className="card-body">
          <h1 className="card-title display-1">{book.title}</h1>
          <p className="card-text">{book.description}.</p>
          <NavLink to="/books" className="btn btn-primary">
            Go books
          </NavLink>
        </div>
      </div>
    </div>
  ) : (
    <div>{loading && <p>Loading...</p>}</div>
  );
}
