const todoStyles = {
  todosMainContainer: {
    backgroundColor: "#f9fbfe",
    height: "100vh",
  },

  todosChildContainer: {
    width: { xs: "90%", md: "80%", lg: "60%" },
    margin: "auto",
    // border: "1px solid red",
    height: "100vh",
  },

  todosHeading: {
    textAlign: "center",
    fontFamily: "Roboto",
    fontSize: { xs: "33px", sm: "40px", md: "46px" },
    fontWeight: "500",
    marginTop: "20px",
    marginBottom: "20px",
    // border: "1px solid red",
  },

  createTaskContainer: {
    // border: "1px solid green",
    width: "100%",
    margin: { md: "auto" },
  },

  createTaskHeading: {
    fontFamily: "Roboto",
    fontSize: { xs: "23px", sm: "32px" },
    fontWeight: "700",
  },

  createTaskHeadingSubpart: {
    fontFamily: "Roboto",
    fontSize: { xs: "23px", sm: "32px" },
    fontWeight: "500",
  },

  todoUserInput: {
    backgroundColor: "white",
    width: "100%",
    marginTop: "14px",
  },

  todoButton: {
    color: "white !important",
    backgroundColor: "#4c63b6 !important",
    fontFamily: "Roboto",
    fontSize: { xs: "12px", md: "17px" },
    borderWidth: "0",
    borderRadius: "4px",
    marginTop: "20px",
    marginBottom: "35px",
    paddingTop: "5px",
    paddingBottom: "5px",
    paddingRight: "25px",
    paddingLeft: "25px",
    outline: "none",
    cursor: "pointer",
  },

  myTasksContainer: {
    border: "10px solid pink",
  },

  unorderedList: {
    padding: "0",
    listStyleType: "none",
    // border: "10px solid green",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    marginTop: "10px",
  },

  errorMsg: {
    fontSize: "13px",
    color: "red",
    paddingTop: "10px",
  },
};

export default todoStyles;
