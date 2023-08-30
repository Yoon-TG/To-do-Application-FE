import React from "react";
import './App.css';
import Todo from "./Todo";
import { Container, List, Paper } from "@mui/material";
import AddTodo from "./AddTodo";
import { call } from "./service/ApiService";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [{ id: 0, title: "기본 설정값", done: true },
      ],
    };
  }

  componentDidMount() {
    call("/todo", "GET", null).then((response) =>
      this.setState({ items: response.data })
    );
  }

  //item 추가(add)
  add = (item) => {
    call("/todo", "POST", item).then((response) =>
      this.setState({ items: response.data })
    );
  };

  //item 삭제(delete)
  delete = (item) => {
    call("/todo", "DELETE", item).then((response) =>
      this.setState({ items: response.data })
    );
  };

  //item 수정(update)
  update = (item) => {
    call("/todo", "PUT", item).then((response) =>
      this.setState({ items: response.data })
    );
  };

  render() {
    var todoItems = this.state.items.length > 0 && (
      <Paper style={{ margin: 16 }}>
        <List>
          {this.state.items.map((item, idx) => (
            <Todo 
              item={item} 
              key={item.id} 
              delete={this.delete}
              update={this.update}
              />
          ))}
        </List>
      </Paper>
    )

    return (
      <div className="App">
        <Container maxWidth="md">
          <AddTodo add={this.add} />
          <div className="TodoList">{todoItems}</div>
        </Container>
      </div>
    );
  }
}

export default App;