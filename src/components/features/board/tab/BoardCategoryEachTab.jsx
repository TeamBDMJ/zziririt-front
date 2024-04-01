function BoardCategoryEachTab({
  categoryId,
  onClick,
  index,
  tabName,
  isTabActive,
}) {
  return (
    <a
      role="tab"
      id={`${JSON.stringify({ index: index + 1, categoryId: categoryId })}`}
      key={categoryId}
      onClick={onClick}
      className={'hover:bg-primary/90 tab' + ` ${isTabActive}`}
    >
      {tabName}
    </a>
  );
}

export default BoardCategoryEachTab;
