import { Fragment, useState } from "react";
interface Props {
  listCity: string[];
  heading: string;
  onSelectItem: (listCity: string) => void;
}

function ListGroup({ listCity, heading, onSelectItem }: Props) {
  //Hook - function that help react to understand.
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1> {heading} </h1>
      {listCity.length === 0 && <p> no item found</p>}
      <ul className="list-group">
        {listCity.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
