const todoItemStyles = {
  todoItemContainer: {
    display: "flex",
    // border: "2px solid red",
    alignItems: "center",
  },

  checkBox: {
    width: { xs: "16px !important", sm: "20px" },
    height: { xs: "16px !important", sm: "20px" },
    marginRight: "12px",
  },

  labelContainer: {
    backgroundColor: "#e6f6ff",
    width: "100%",
    // border: "1px solid #e4e7eb",
    borderRadius: "4px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: { xs: "13px 5px", md: "15px 13px" },
  },

  checkboxLabel: {
    fontFamily: "Roboto",
    fontSize: "16px",
    fontWeight: "400",
    margin: "0",
  },

  deleteIconContainer: {
    // border: "2px solid red",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: { xs: "10px", sm: "16px" },
  },

  checked: {
    textDecoration: "line-through",
  },

  icon: {
    width: { xs: "16px", sm: "20px" },
    height: { xs: "16px", sm: "20px" },
    cursor: "pointer",
  },
};

export default todoItemStyles;
