import { getAllTodo } from "../services/TodoService";

const DisplayBoard = ({ numberOfBooks, getAllBook, getAllTodo, setIsBook }) => {
  return (
    <div className="display-wrapper">
      <div className="display-box">
        <div className="display-board">
          <h4>생성된 수</h4>
          <div className="number">{numberOfBooks}</div>
        </div>
        <div className="get-button">
          <button
            onClick={() => {
              getAllTodo();
              setIsBook(false);
            }}
          >
            Get all Todos
          </button>
        </div>
        <div className="get-button">
          <button
            onClick={() => {
              getAllBook();
              setIsBook(true);
            }}
          >
            Get all Books
          </button>
        </div>
      </div>
    </div>
  );
};

export default DisplayBoard;
