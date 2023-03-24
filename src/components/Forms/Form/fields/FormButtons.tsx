import React from 'react';

class FormButtons extends React.Component {
  render() {
    return (
      <div className="field_flex">
        <input className="btn" type="submit" value="Accept" />
        <input className="btn" type="reset" value="Reset" />
      </div>
    );
  }
}

export default FormButtons;
