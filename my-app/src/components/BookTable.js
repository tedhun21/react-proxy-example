const BookTable = ({ books, isBook }) => {
  if (books.length === 0) return null;

  console.log(books);
  return (
    <div className="table-wrapper">
      <div className="table-box">
        <h2>{isBook ? "My Books" : "My Todos"}</h2>
        <div className="table-scroll">
          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>{isBook ? "Book" : "Todo"}</th>
                <th>Category</th>
                <th>{isBook ? "Author" : "isComplete"}</th>
              </tr>
            </thead>
            <tbody>
              {books.map((book, index) => {
                return (
                  <tr key={index} className={index % 2 === 0 ? "odd" : "even"}>
                    <td>{index + 1}</td>
                    <td>{isBook ? book.book : book.todo}</td>
                    <td>{book.category}</td>
                    <td>{isBook ? book.author : String(book.isComplete)}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BookTable;
