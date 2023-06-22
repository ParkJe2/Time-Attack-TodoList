import React, { useState } from "react";
import uuid from "react-uuid";

function Input({ todos, setTodos }) {
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  return (
    <div
      style={{
        backgroundColor: "#F5EFE7",
        padding: "30px",
      }}
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();

          if (!title) return alert("제목을 입력해주세요");
          if (!contents) return alert("내용을 입력해주세요");

          const newTodo = {
            id: uuid(),
            title,
            contents,
            isDone: false,
          };
          setTodos([...todos, newTodo]);
          setTitle("");
          setContents("");
        }}
      >
        <input
          style={{
            width: "20%",
            height: "25px",
            paddingLeft: "10px",
          }}
          placeholder="제목을 입력해주세요"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <input
          style={{
            marginLeft: "10px",
            width: "20%",
            height: "25px",
            paddingLeft: "10px",
          }}
          placeholder="내용을 입력해주세요"
          value={contents}
          onChange={(e) => {
            setContents(e.target.value);
          }}
        />
        <button
          style={{
            marginLeft: "15px",
            width: "60px",
            height: "30px",
          }}
          type="submit"
        >
          등록
        </button>
      </form>
    </div>
  );
}

export default Input;
