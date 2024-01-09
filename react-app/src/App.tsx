import ListGroup from "./Components/ListGroup";
function App() {
  let listCity = ["New York", "NC", "WashingTon"];

  return (
    <div>
      {" "}
      <ListGroup listCity={listCity} heading="Cities" />{" "}
    </div>
  );
}

export default App;
