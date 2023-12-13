import React, { useState } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import todoStyles from "./Todo.Styles";
import TodoItem from "../components/todo_item/TodoItem";

interface TodoObject {
  todoId: number;
  taskName: string;
  isTaskCompleted: boolean;
}

interface IState {
  enteredTaskName: string;
  todosList: TodoObject[];
  errorMsg: string;
  todosCount: number;
  editedArray: [boolean, null | number];
}
const localStorageData: null | TodoObject[] = JSON.parse(
  localStorage.getItem("todosArray") as string
);

const Todo: React.FC = () => {
  const [enteredTaskName, setEnteredTaskName] =
    useState<IState["enteredTaskName"]>("");
  const [todosList, setTodosList] = useState<IState["todosList"]>(
    localStorageData ? localStorageData : []
  );
  const [errorMsg, setErrorMsg] = useState<IState["errorMsg"]>("");
  const [todosCount, setTodosCount] = useState<IState["todosCount"]>(
    localStorageData ? localStorageData.length : 0
  );
  const [editedArray, setEditedArray] = useState<IState["editedArray"]>([
    false,
    null,
  ]);

  const checkIsTaskAlreadyPresentOrNot = () => {
    let istaskPresent: boolean = false;
    todosList.forEach((eachTodo: TodoObject) => {
      if (eachTodo.taskName.toLowerCase() === enteredTaskName.toLowerCase()) {
        istaskPresent = true;
      }
    });
    return istaskPresent;
  };

  const errorHandlingFunction = (errorMessage: string) => {
    setErrorMsg(`*${errorMessage}`);
  };

  const addTodoHandler = () => {
    const addTodoToTheTodoList = () => {
      const newTodoObj: TodoObject = {
        todoId: todosCount,
        taskName: enteredTaskName,
        isTaskCompleted: false,
      };
      setTodosList((prevTodosList: TodoObject[]) => {
        return [...prevTodosList, newTodoObj];
      });
      setErrorMsg("");
      setTodosCount(todosCount + 1);
      setEnteredTaskName("");
    };

    switch (true) {
      case todosList.length === 0 && enteredTaskName.trim().length === 0:
        errorHandlingFunction("Please Enter Valid Task Name");
        break;

      case todosList.length !== 0 && enteredTaskName.trim().length === 0:
        errorHandlingFunction("Please Enter Valid Task Name");
        break;

      case todosList.length === 0 && enteredTaskName.trim().length !== 0:
        addTodoToTheTodoList();
        break;

      case todosList.length !== 0 && enteredTaskName.trim().length !== 0:
        if (checkIsTaskAlreadyPresentOrNot() === false) {
          addTodoToTheTodoList();
        } else {
          errorHandlingFunction("Task Already Exists");
        }
        break;
      default:
        break;
    }
  };

  const updateTodoHandler = (checkboxId: string, isTicked: boolean) => {
    const updatedTodoList: TodoObject[] = todosList.map(
      (eachTodo: TodoObject) =>
        `checkboxId${eachTodo.todoId}` === checkboxId
          ? { ...eachTodo, isTaskCompleted: isTicked }
          : eachTodo
    );
    setTodosList(updatedTodoList);
  };

  const deleteTodoHandler = (todoId: number) => {
    const updatedTodoListWithDeletedTodoItem = todosList.filter(
      (eachTodo: TodoObject) => eachTodo.todoId !== todoId
    );
    setTodosList(updatedTodoListWithDeletedTodoItem);
  };

  const saveEditedTodoEventHandler = (
    todoId: number,
    editedTodoTaskName: string
  ) => {
    setEnteredTaskName(editedTodoTaskName);
    setEditedArray([true, todoId]);
    setErrorMsg("");
  };

  const updateEditedTodoHandler = () => {
    if (enteredTaskName === "") {
      errorHandlingFunction("Please Enter Valid Task Name");
    } else {
      const updatedTodoList = todosList.map((eachTodo) => {
        if (eachTodo.todoId === editedArray[1]) {
          const checkEditedTaskCompleted =
            eachTodo.taskName === enteredTaskName;
          return {
            ...eachTodo,
            isTaskCompleted: checkEditedTaskCompleted,
            taskName: enteredTaskName,
          };
        }
        return eachTodo;
      });
      setEditedArray([false, null]);
      setEnteredTaskName("");
      setTodosList(updatedTodoList);
      setErrorMsg("");
    }
  };

  return (
    <Box sx={todoStyles.todosMainContainer}>
      <Box sx={todoStyles.todosChildContainer}>
        <Typography component="h1" sx={todoStyles.todosHeading}>
          Todos
        </Typography>
        <Box sx={todoStyles.createTaskContainer}>
          <Typography component="h2" sx={todoStyles.createTaskHeading}>
            Create{" "}
            <Box component="span" sx={todoStyles.createTaskHeadingSubpart}>
              Task
            </Box>
          </Typography>
          <TextField
            type="text"
            label="What needs to be done?"
            placeholder="What needs to be done?"
            sx={todoStyles.todoUserInput}
            onChange={(e) => setEnteredTaskName(e.target.value)}
            value={enteredTaskName}
          />
          {errorMsg && (
            <Typography component="p" sx={todoStyles.errorMsg}>
              {errorMsg}
            </Typography>
          )}
          {!editedArray[0] ? (
            <Button
              onClick={addTodoHandler}
              sx={todoStyles.todoButton}
              type="button"
            >
              Add
            </Button>
          ) : (
            <Button
              onClick={updateEditedTodoHandler}
              sx={{
                ...todoStyles.todoButton,
                backgroundColor: "#51e40d !important",
              }}
            >
              Update
            </Button>
          )}
        </Box>

        <Box sx={todoStyles.createTaskContainer}>
          <Typography component="h2" sx={todoStyles.createTaskHeading}>
            My{" "}
            <Box component="span" sx={todoStyles.createTaskHeadingSubpart}>
              Tasks
            </Box>
          </Typography>
        </Box>
        <Box component="ul" sx={todoStyles.unorderedList}>
          {todosList.map((eachTodo: TodoObject) => (
            <TodoItem
              key={eachTodo.todoId}
              eachTodo={eachTodo}
              updateTodoHandler={updateTodoHandler}
              deleteTodoHandler={deleteTodoHandler}
              saveEditedTodoEventHandler={saveEditedTodoEventHandler}
            />
          ))}
        </Box>
        <Button
          type="button"
          sx={{ ...todoStyles.todoButton, marginTop: "30px" }}
          disabled={!todosList.length}
          onClick={() => {
            localStorage.setItem("todosArray", JSON.stringify(todosList));
          }}
        >
          Save
        </Button>
      </Box>
    </Box>
  );
};

export default Todo;
