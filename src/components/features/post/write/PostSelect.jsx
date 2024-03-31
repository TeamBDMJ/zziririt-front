function PostSelect({ categories, categoryId, setCategoryId }) {
  const onSelectHandler = (e) => {
    const obj = JSON.parse(e.target.id);
    setCategoryId(obj.categoryId);
  };

  return (
    <div className="mr-2">
      <select
        className="select select-bordered max-w-xs"
        onChange={onSelectHandler}
      >
        {categories &&
          categories.map((category, index) => (
            <option
              id={`${JSON.stringify({ index: index, categoryId: category.categoryId })}`}
              selected={category.categoryId === categoryId}
            >
              {category.categoryName}
            </option>
          ))}
      </select>
    </div>
  );
}

export default PostSelect;
