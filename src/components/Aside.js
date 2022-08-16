function Aside({ dogs }) {
  return (
    <aside>
      <h3>Roster:</h3>
      <ol>
        {dogs.map((dog) =>
          dog.present ? <li key={dog.name}>{dog.name}</li> : null
        )}
      </ol>
    </aside>
  );
}

export default Aside;
