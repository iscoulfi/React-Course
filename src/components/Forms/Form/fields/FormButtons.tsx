const FormButtons = () => {
  return (
    <div className="field_flex">
      <input className="btn" type="submit" value="Accept" data-testid="submit-form" />
      <input className="btn" type="reset" value="Reset" />
    </div>
  );
};

export default FormButtons;
