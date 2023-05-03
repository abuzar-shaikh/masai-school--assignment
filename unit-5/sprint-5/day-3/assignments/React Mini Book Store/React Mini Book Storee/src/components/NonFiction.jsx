import BookCard from "./BookCard";
export default function NonFiction({ nondata, props }) {
  return (
    <div data-testid="books-nonfiction">
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
          /* Display all Non-Fiction books here */

          nondata.map((elem) => (
            <BookCard elem={elem} />
          ))
        }
      </div>
    </div>
  );
}
