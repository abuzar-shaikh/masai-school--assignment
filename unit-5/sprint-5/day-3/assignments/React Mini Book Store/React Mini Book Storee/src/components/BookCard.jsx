export default function BookCard({ elem }) {
  return (
    <div
      data-testid="book-card"
      style={{
        boxShadow: "0px 0px 10px black",
        margin: "30px",
        padding: "10px",
      }}
    >
      <img
        src={elem.img}
        alt={""}
        style={{ width: "200px", height: "300px" }}
      />
      <b>
        <div data-testid="book-card-title">
          {elem.title}
          <span>({elem.year})</span>
        </div>
      </b>
      <div data-testid="book-card-author">{elem.author}</div>
      <div data-testid="book-card-price">Price:{elem.price}</div>
    </div>
  );
}
