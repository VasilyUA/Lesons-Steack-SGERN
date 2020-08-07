import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import { ADD_BOOK } from "../../GraphQL/Mutation/Book";

export default function AddBook() {
  const [addBook, { data }] = useMutation(ADD_BOOK);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const onServer = (e) => {
    e.preventDefault();
    addBook({ variables: { title: title, description: description } });
  };
  console.log(data);
  return (
    <div>
      <h1>Add</h1>
      <form onSubmit={onServer}>
        <label>title</label>
        <input type="text" onChange={(e) => setTitle(e.target.value)} />
        <br />
        <label>description</label>
        <input type="text" onChange={(e) => setDescription(e.target.value)} />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
