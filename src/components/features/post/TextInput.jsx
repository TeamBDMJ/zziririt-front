function TextInput({
  title,
  topRightLabel,
  bottomLeftLabel,
  bottomRightLabel,
  placeholder,
  onChange,
}) {
  return (
    <label className="form-control w-full">
      <div className="label">
        <span className="label-text">{title}</span>
        <span className="label-text-alt">{topRightLabel}</span>
      </div>
      <input
        onChange={onChange}
        type="text"
        placeholder={placeholder}
        className="input input-bordered w-full"
      />
      <div className="label">
        <span className="label-text-alt">{bottomLeftLabel}</span>
        <span className="label-text-alt">{bottomRightLabel}</span>
      </div>
    </label>
  );
}

export default TextInput;
