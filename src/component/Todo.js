function Todo(props) {
  function deleteHandler() {
    console.log("clicked");
    console.log(props.title);
  }

  return (
    <div className="card">
      <h2>{props.title}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default Todo;
