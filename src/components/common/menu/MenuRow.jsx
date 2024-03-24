function MenuRow({ onClick, icon, menuName }) {
  return (
    <li>
      <a onClick={onClick}>
        {icon}
        {menuName}
      </a>
    </li>
  );
}

export default MenuRow;
