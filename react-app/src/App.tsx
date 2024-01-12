import { Alert } from "./Components/Alert";

function App() {
  return (
    <div>
      <Alert>
        {" "}
        Hello <span>world </span>
      </Alert>
    </div>
  );
}

export default App;

//// Pass data to Parent
// import ListGroup from "./Components/ListGroup";
// function App() {
//   let listCity = ["New York", "NC", "WashingTon"];
//   const handleSelectItem = (listCity: any) => {
//     console.log(listCity);
//   };
//   return (
//     <div>
//       {" "}
//       <ListGroup
//         listCity={listCity}
//         heading="Cities"
//         onSelectItem={handleSelectItem}
//       />{" "}
//     </div>
//   );
// }

// export default App;
