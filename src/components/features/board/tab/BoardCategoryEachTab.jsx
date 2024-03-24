function BoardCategoryEachTab({ index, tabName }) {
  const setTabActive = () => {
    if (index === 0) return 'tab-active';
  };
  return (
    <a role="tab" className={'tab' + ` ${setTabActive()}`}>
      {tabName}
    </a>
  );
}

export default BoardCategoryEachTab;
