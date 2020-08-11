import React, { Fragment } from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { GET_LIST_BOOK } from "../../GraphQL/Query/Book";
import { NavLink } from "react-router-dom";
import { REMOVE_BOOK } from "../../GraphQL/Mutation/Book";

export default function Book() {
  const { loading, data = [] } = useQuery(GET_LIST_BOOK);
  const [RemoveBook] = useMutation(REMOVE_BOOK);

  return (
    <div className="container" id="list-book">
      {loading && <div>Loading...</div>}
      {data === undefined ? null : (
        <Fragment>
          {!loading && data.getAllBooks && (
            <div className="row">
              <div className="col-md-12">
                <div className="box box-aqua">
                  <div
                    className="box-header ui-sortable-handle"
                    style={{ cursor: "move" }}
                  >
                    <i className="ion ion-clipboard"></i>
                    <h3 className="box-title">All books</h3>
                  </div>

                  <div className="box-body">
                    <ul className="todo-list ui-sortable">
                      {data.getAllBooks.map((book) => (
                        <li key={book.id}>
                          <input
                            type="checkbox"
                            style={{ marginRight: "10px" }}
                            value=""
                            name=""
                          />
                          <span className="text">
                            <NavLink to={`/book/${book.id}`}>
                              {book.title}
                            </NavLink>
                          </span>
                          <small className="label label-danger">
                            <i className="fa fa-clock-o"></i> 2 mins
                          </small>
                          <div className="tools">
                            <NavLink
                              to={`/update/${book.id}`}
                              className="btn btn-sm btn-outline-primary"
                            >
                              <i className="fa fa-edit"></i>
                            </NavLink>
                            <button
                              className="btn btn-sm btn-outline-danger"
                              type="button"
                              onClick={() =>
                                RemoveBook({
                                  variables: { id: book.id },
                                  refetchQueries: [{ query: GET_LIST_BOOK }],
                                })
                              }
                            >
                              <i className="fa fa-trash-o"></i>
                            </button>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="box-footer clearfix no-border">
                    <NavLink
                      to="/addbook"
                      type="button"
                      className="btn btn-default pull-right"
                    >
                      <i className="fa fa-plus"></i> Add item
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          )}
        </Fragment>
      )}
    </div>
  );
}
