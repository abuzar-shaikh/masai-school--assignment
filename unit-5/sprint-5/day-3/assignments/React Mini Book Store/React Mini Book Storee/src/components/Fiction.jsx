import BookCard from "./BookCard";
export default function Fiction({ data, props }) {
  return (
    <div data-testid="books-fiction">
      <h1 data-testid="books-container-title">{props}</h1>

      <div
        className="books-container"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          width: "80%",
          margin: "auto",
        }}
      >
        {
          /* Map all Fictional Books here */ data.map((elem) => (
            <BookCard elem={elem} />
          ))
        }
      </div>
    </div>
  );
}
