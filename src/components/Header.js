function Header({ todaysDate, name }) {
  return (
    <header>
      <h1>{name}</h1>
      <h2>{todaysDate}</h2>
    </header>
  );
}

export default Header;
