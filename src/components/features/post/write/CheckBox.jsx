function CheckBox({ onChange, text, checked }) {
  return (
    <div className="form-control">
      <label className="label cursor-pointer">
        <span className="label-text px-3">{text}</span>
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
