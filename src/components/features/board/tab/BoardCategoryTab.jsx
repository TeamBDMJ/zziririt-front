import BoardCategoryEachTab from './BoardCategoryEachTab';
import React, { useEffect, useState } from 'react';
import { IoHomeOutline } from 'react-icons/io5';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

function BoardCategoryTab({ categories, setCategoryId }) {
  const location = useLocation();
  const navigate = useNavigate();
  const params = useParams();
  const activeClassName = 'tab-active';
  const nonActiveClassName = '';

  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  // const [activeCategoryArr, setActiveCategoryArr] = useState(
  //   Array.isArray(categories) &&
  //     categories.map((_, index) => {
  //       if (index === 0) {
  //         return activeClassName;
  //       } else {
  //         return nonActiveClassName;
  //       }
  //     })
  // );
  const array = new Array(categories.length + 1);
  const [activeCategoryArr, setActiveCategoryArr] = useState(
    Array.from({ length: categories.length }, (_, index) =>
      index === 0 ? activeClassName : nonActiveClassName
    )
  );

  const onClickTabHandler = (e) => {
    const obj = JSON.parse(e.target.id);
    setCategoryId(obj.categoryId);
    if (obj.categoryId === 0) {
      navigate(location.pathname);
    } else {
      navigate(`.?categoryId=${obj.categoryId}`);
    }
    // setActiveCategoryIndex(Number(obj.index)-1);
  };

  useEffect(() => {
    setActiveCategoryArr(setTabActive);
  }, [activeCategoryIndex]);

  const setTabActive = () => {
    return array.map((_, index) => {
      if (index === Number(activeCategoryIndex)) {
        return activeClassName;
      } else {
        return nonActiveClassName;
      }
    });
  };

  return (
    <div role="tablist" className="tabs tabs-boxed">
      <a
        role="tab"
        id={`${JSON.stringify({ index: 0, categoryId: 0 })}`}
        onClick={onClickTabHandler}
        className={'hover:bg-primary/90 tab' + ` ${activeCategoryArr[0]}`}
      >
        {/*<IoHomeOutline />*/}
        all
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
