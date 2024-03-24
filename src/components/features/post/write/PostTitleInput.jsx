function PostTitleInput({ placeholder, onChange }) {
  return (
    <label className="form-control w-full">
      <input
        onChange={onChange}
        type="text"
        placeholder={placeholder}
        className="input input-bordered w-full"
      />
    </label>
  );
}

export default PostTitleInput;
