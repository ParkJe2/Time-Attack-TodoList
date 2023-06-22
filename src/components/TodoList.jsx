import React from "react";

function TodoList({ todos, setTodos, listIsDone }) {
  return (
    <div>
      <div>
        <h2
          style={{
            paddingLeft: "10px",
          }}
        >
          {listIsDone ? "Done List" : "Working List"}
        </h2>
        {todos
          .filter((t) => t.isDone === listIsDone)
          .map((t) => {
            return (
              <div
                key={t.id}
                style={{
                  border: "1px solid black",
                  margin: "10px",
                  paddingLeft: "10px",
                  paddingBottom: "15px",
                }}
              >
                <p>ID : {t.id}</p>
                <h3>제목 : {t.title}</h3>
                <p>내용 : {t.contents}</p>
                <button
                  onClick={() => {
                    const newTodos = todos.map((item) => {
                      if (item.id === t.id) {
                        return {
                          ...item,
                          isDone: !item.isDone,
                        };
                      } else {
                        return item;
                      }
                    });
                    setTodos(newTodos);
                  }}
                >
                  {listIsDone ? "취소" : "완료"}
                </button>
                <button
                  style={{
                    marginLeft: "5px",
                  }}
                  onClick={() => {
                    const deletedTodos = todos.filter((item) => {
                      return item.id !== t.id;
                    });
                    setTodos(deletedTodos);
                  }}
                >
                  삭제
                </button>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default TodoList;
