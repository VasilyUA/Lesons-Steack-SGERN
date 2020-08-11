import React from "react";
import { BrowserRouter as Routs, Route, Switch } from "react-router-dom";

//Static
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "jquery";
import "./App.scss";

//Components
import Header from "./Components/Layouts/Header";
import Footer from "./Components/Layouts/Footer";
import ERORR from "./Components/ERORR/ERORR";
import Book from "./Components/Book/Book";
import Todo from "./Components/Todo/Todo";
import OneBook from "./Components/Book/OneBook";
import AddBook from "./Components/Book/AddBook";
import UpdateBook from "./Components/Book/UpdateBook";

function App() {
  return (
    <Routs>
      <Header />
      <main>
        <Switch>
          <Route exact path="/book/:id" render={() => <OneBook />} />
          <Route exact path="/update/:id" render={() => <UpdateBook />} />
          <Route exact path="/addbook" render={() => <AddBook />} />
          <Route exact path="/books" render={() => <Book />} />
          <Route exact path="/todos" render={() => <Todo />} />
          <Route path="/*" exact render={() => <ERORR />} />
        </Switch>
      </main>
      <Footer />
    </Routs>
  );
}

export default App;
