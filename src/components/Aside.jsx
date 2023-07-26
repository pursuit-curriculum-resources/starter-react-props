import React from "react";

function Aside({ dogs }) {
  console.log(dogs);
  return (
    <aside>
      <h3>Roster:</h3>
      {dogs.map((dog) =>
        dog.present ? <li key={dog.name}>{dog.name}</li> : null
      )}
    </aside>
  );
}

export default Aside;
