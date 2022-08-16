function Main({ dogs }) {
  const getAverage = (dogs) => {
    let sum = 0;
    for (let dog of dogs) {
      sum += parseInt(dog.grade);
    }
    return (sum / dogs.length).toFixed(2);
  };
  const average = getAverage(dogs);
  return (
    <main>
      <h2>Class Average:{average}</h2>
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
