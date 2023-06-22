import React, { useState } from "react";
import "./App.css";
import uuid from "react-uuid";
import Input from "./components/Input";
import TodoList from "./components/TodoList";
import Header from "./components/Header";

function App() {
  const initalState = [
    {
      id: 1,
      title: "제목",
      contests: "내용",
      isDone: false,
    },
    {
      id: 2,
      title: "제목2",
      contests: "내용2",
      isDone: false,
    },
    {
      id: 3,
      title: "제목3",
      contests: "내용3",
      isDone: true,
    },
  ];

  const [todos, setTodos] = useState([initalState]);

  return (
    <div
      style={{
        margin: "0 auto",
        maxWidth: "1200px",
        minWidth: "800px",
      }}
    >
      <Header />
      <main
        style={{
          padding: "10px",
        }}
      >
        <Input todos={todos} setTodos={setTodos} />
        <div
          style={{
            backgroundColor: "#DDE6ED",
            padding: "10px",
            marginTop: "10px",
          }}
        >
          <TodoList todos={todos} setTodos={setTodos} listIsDone={false} />
          <TodoList todos={todos} setTodos={setTodos} listIsDone={true} />
        </div>
      </main>
    </div>
  );
}

export default App;
