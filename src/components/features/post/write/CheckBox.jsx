function CheckBox({ text }) {
  return (
    <div className="form-control">
      <label className="label cursor-pointer">
        <span className="label-text">{text}</span>
        <input type="checkbox" defaultChecked className="checkbox" />
      </label>
    </div>
  );
}

export default CheckBox;
