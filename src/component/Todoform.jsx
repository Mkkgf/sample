import { TextField, Button, List, Paper } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

import React, { useState, useEffect } from "react";

function Todoform() {
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");

  const addtodo = (todo) => {
    const newTodo = {
      id: Math.random(),
      todo: todo,
    };
    setList([...list, newTodo]);

    setInput("");
  };

  const deletetodo = (id) => {
    const newList = list.filter((todo) => todo.id !== id);

    setList(newList);
  };

  return (
    <>
      <TextField
        sx={{ mr: "20px" }}
        id="outlined-textarea"
        placeholder="task"
        multiline
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <Button
        sx={{ mt: "10px" }}
        variant="contained"
        type="submit"
        onClick={() => addtodo(input)}
      >
        {" "}
        Add task
      </Button>
      <List>
        {list.map((todo) => (
          <Paper elevation={4}>
            <li
              key={todo.id}
              style={{
                listStyleType: "none",
                padding: "15px",
                margin: "10px",
                // width: "100px",
              }}
            >
              {todo.todo}
              <button
                style={{
                  margin: "10px",
                  padding: "10px",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <DeleteIcon onClick={() => deletetodo(todo.id)} />
              </button>
            </li>
          </Paper>
        ))}
      </List>
    </>
  );
}

export default Todoform;
