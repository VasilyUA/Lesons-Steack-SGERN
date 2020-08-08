import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import { ADD_BOOK } from "../../GraphQL/Mutation/Book";
import { useHistory } from "react-router-dom";
import { GET_LIST_BOOK } from "../../GraphQL/Query/Book";

export default function AddBook() {
  const [addBook] = useMutation(ADD_BOOK);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [Error, setError] = useState("");
  const history = useHistory();
  const Validity = () => {
    let Error = "";
    //name
    if (!title || !description) {
      Error = "Всі поля мають буть заповнені";
    }
    if (Error) {
      setError(Error);
      return false;
    }
    return true;
  };
  const onServer = (e) => {
    e.preventDefault();
    const valid = Validity();
    if (valid) {
      addBook({
        variables: { title: title, description: description },
        refetchQueries: [{ query: GET_LIST_BOOK }],
      });
      history.push("/books");
      setError("");
    }
  };
  return (
    <div>
      <h1>Add</h1>
      <form onSubmit={onServer}>
        {Error === "" ? (
          <label>title</label>
        ) : (
          <label style={Error !== "" ? { color: "red" } : null}>{Error}</label>
        )}
        <br />
        <input
          type="text"
          style={Error !== "" ? { border: "2px solid red" } : null}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        {Error === "" ? (
          <label>description</label>
        ) : (
          <label style={Error !== "" ? { color: "red" } : null}>{Error}</label>
        )}
        <br />
        <input
          type="text"
          style={Error !== "" ? { border: "2px solid red" } : null}
          onChange={(e) => setDescription(e.target.value)}
        />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
