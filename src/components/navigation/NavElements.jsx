const NavElements = ({ handleClick, ...props }) => {
  const handleLiClick = (to) => {
    console.log("li is clicked");
    if (handleClick) handleClick();
  };
  return (
    <ul {...props}>
      <li onClick={handleLiClick}>Home</li>
      <li onClick={handleLiClick}>About</li>
      <li onClick={handleLiClick}>Expertise</li>
      <li onClick={handleLiClick}>Works</li>
    </ul>
  );
};

export default NavElements;
