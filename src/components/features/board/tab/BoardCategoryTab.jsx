import BoardCategoryEachTab from './BoardCategoryEachTab';
import React, { useEffect, useState } from 'react';
import { IoHomeOutline } from 'react-icons/io5';

function BoardCategoryTab({ categories, setCategoryId }) {
  const activeClassName = 'tab-active';
  const nonActiveClassName = '';

  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const [activeCategoryArr, setActiveCategoryArr] = useState(
    Array.isArray(categories) &&
      categories.map((_, index) => {
        if (index === 0) {
          return activeClassName;
        } else {
          return nonActiveClassName;
        }
      })
  );

  const onClickTabHandler = (e) => {
    const obj = JSON.parse(e.target.id);
    setCategoryId(obj.categoryId);
    setActiveCategoryIndex(obj.index);
  };

  useEffect(() => {
    setActiveCategoryArr(setTabActive);
  }, [activeCategoryIndex]);

  const setTabActive = () => {
    return (
      Array.isArray(categories) &&
      categories.map((_, index) => {
        if (index === Number(activeCategoryIndex)) {
          return activeClassName;
        } else {
          return nonActiveClassName;
        }
      })
    );
  };

  return (
    <div role="tablist" className="tabs tabs-boxed">
      <a
        role="tab"
        id={`${JSON.stringify({ index: 0, categoryId: 0 })}`}
        onClick={onClickTabHandler}
        className={'tab' + ` ${activeCategoryArr[-1]}`}
      >
        {<IoHomeOutline />}
      </a>
      {Array.isArray(categories) &&
        categories.map((category, index) => (
          <BoardCategoryEachTab
            onClick={onClickTabHandler}
            isTabActive={activeCategoryArr[index]}
            categoryId={category.categoryId}
            index={index}
            tabName={category.categoryName}
          />
        ))}
    </div>
  );
}

export default BoardCategoryTab;
