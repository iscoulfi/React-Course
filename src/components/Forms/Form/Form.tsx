import React from 'react';
import { FormProps, ICard } from '../../../types/formTypes';

class Form extends React.Component<FormProps, ICard> {
  constructor(props: FormProps) {
    super(props);
    this.state = { username: '', date: '', gender: '', image: '', checkbox: false, select: '' };
  }

  logInfo(e: React.FormEvent) {
    e.preventDefault();
    console.log(this.state);
  }

  addCard() {
    this.props.refreshCards({ ...this.state });
  }
  render() {
    return (
      <form onSubmit={(e) => this.logInfo(e)}>
        <label>
          Username
          <br />
          <input type="text" />
        </label>
        <br />

        <label>
          Birthday
          <br />
          <input type="date" />
        </label>
        <br />

        <label>
          <input type="radio" name="gender" />
          Male
        </label>
        <label>
          <input type="radio" name="gender" />
          Female
        </label>
        <br />

        <label>
          Upload image
          <input type="file" name="myImage" accept="image/*" />
        </label>
        <br />

        <label>
          <input type="checkbox" />I consent to my personal data
        </label>
        <br />

        <label>
          Choose a car:
          <select name="cars">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
        </label>

        <input type="submit" value="Click me!" />
      </form>
    );
  }
}

export default Form;
