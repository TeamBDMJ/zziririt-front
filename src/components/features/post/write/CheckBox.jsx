function CheckBox({ onChange, text, checked }) {
  return (
    <div className="form-control">
      <label className="label cursor-pointer flex space-x-1">
        <span className="label-text">{text}</span>
        <input
          onChange={onChange}
          checked={checked}
          type="checkbox"
          className="checkbox"
        />
      </label>
    </div>
  );
}

export default CheckBox;
