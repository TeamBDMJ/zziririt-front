import BoardCategoryEachTab from './BoardCategoryEachTab';

function BoardCategoryTab({ childBoards }) {
  return (
    <div role="tablist" className="tabs tabs-boxed">
      {childBoards &&
        childBoards.map((boardName, index) => (
          <BoardCategoryEachTab index={index} tabName={boardName} />
        ))}
    </div>
  );
}

export default BoardCategoryTab;
