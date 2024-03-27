function Accordion({ title, content }) {
  return (
    <div className="collapse collapse-arrow bg-base-200 m-2">
      <input type="radio" name="my-accordion-2" defaultChecked />
      <div className="collapse-title text-xl font-medium">{title}</div>
      <div className="collapse-content">
        <p>{content}</p>
      </div>
    </div>
  );
}

export default Accordion;
