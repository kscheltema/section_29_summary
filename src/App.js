import Todo from "./component/Todo";
import Modal from "./component/Modal";
import Backdrop from "./component/Backdrop";

function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo title="first" />
      <Todo title="second" />
      <Todo title="third" />
      <Modal />
      <Backdrop />
    </div>
  );
}

export default App;
//need to write code in child and parent component for individual attributes
