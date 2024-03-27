function PostTitleInput({ placeholder, onChange, value }) {
  return (
    <label className="form-control w-full">
      <input
        onChange={onChange}
        type="text"
        placeholder={placeholder}
        className="input input-bordered w-full"
        value={value}
      />
    </label>
  );
}

export default PostTitleInput;
