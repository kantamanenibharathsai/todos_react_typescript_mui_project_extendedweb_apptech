import React from "react";
import { Box } from "@mui/material";
import todoItemStyles from "./TodoItem.Styles";
import EditOffIcon from "@mui/icons-material/EditOff";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

interface TodoObject {
  todoId: number;
  taskName: string;
  isTaskCompleted: boolean;
}

interface IProps {
  eachTodo: TodoObject;
  updateTodoHandler: (checkBoxId: string, isTicked: boolean) => void;
  deleteTodoHandler: (id: number) => void;
  saveEditedTodoEventHandler: (
    todoId: number,
    editedTodoTaskName: string
  ) => void;
}

const TodoItem: React.FC<IProps> = ({
  eachTodo,
  updateTodoHandler,
  deleteTodoHandler,
  saveEditedTodoEventHandler,
}) => {
  return (
    <Box sx={todoItemStyles.todoItemContainer}>
      <Box
        type="checkbox"
        component="input"
        sx={todoItemStyles.checkBox}
        id={`checkboxId${eachTodo.todoId}`}
        checked={eachTodo.isTaskCompleted}
        onChange={(e) => updateTodoHandler(e.target.id, e.target.checked)}
      />
      <Box sx={todoItemStyles.labelContainer}>
        <Box
          component="label"
          sx={{
            ...todoItemStyles.checkboxLabel,
            textDecoration: eachTodo.isTaskCompleted ? "line-through" : "none",
          }}
          htmlFor={`checkboxId${eachTodo.todoId}`}
        >
          {eachTodo.taskName}
        </Box>
        <Box sx={todoItemStyles.deleteIconContainer}>
          <EditOffIcon
            sx={todoItemStyles.icon}
            onClick={() =>
              saveEditedTodoEventHandler(eachTodo.todoId, eachTodo.taskName)
            }
          />
          <DeleteIcon
            sx={todoItemStyles.icon}
            onClick={() => deleteTodoHandler(eachTodo.todoId)}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default TodoItem;
