import React from "react";

function Main({ dogs }) {
  console.log(dogs);
  return (
    <main>
      <h2>Class Average:</h2>
      <h3>Notable performances and grades:</h3>
      <ul>
        {dogs.map((dog) => {
          return (
            <li key={dog.name}>
              <span>{dog.name}:</span> {dog.notes}
              <span>&nbsp; Grade:</span> {dog.grade}
            </li>
          );
        })}
      </ul>
    </main>
  );
}
export default Main;
