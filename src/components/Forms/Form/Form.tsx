import React from 'react';
import { FormProps, ICard } from '../../../types/formTypes';

class Form extends React.Component<FormProps, ICard> {
  constructor(props: FormProps) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  nameRef = React.createRef<HTMLInputElement>();
  birthRef = React.createRef<HTMLInputElement>();
  genderRef1 = React.createRef<HTMLInputElement>();
  genderRef2 = React.createRef<HTMLInputElement>();
  imageRef = React.createRef<HTMLInputElement>();
  checkboxRef = React.createRef<HTMLInputElement>();
  selectRef = React.createRef<HTMLSelectElement>();

  handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log(this.nameRef.current?.value);
    console.log(this.birthRef.current?.value);
    console.log(this.genderRef1.current?.checked);
    console.log(this.genderRef2.current?.checked);
    if (this.imageRef.current?.files) {
      console.log(URL.createObjectURL(this.imageRef.current.files[0]));
    }
    console.log(this.checkboxRef.current?.checked);
    console.log(this.selectRef.current?.value);
  }

  addCard() {
    this.props.refreshCards({ ...this.state });
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Username
          <br />
          <input type="text" ref={this.nameRef} />
        </label>
        <br />

        <label>
          Birthday
          <br />
          <input type="date" ref={this.birthRef} />
        </label>
        <br />

        <label>
          <input type="radio" name="gender" ref={this.genderRef1} />
          Male
        </label>
        <label>
          <input type="radio" name="gender" ref={this.genderRef2} />
          Female
        </label>
        <br />

        <label>
          Upload image
          <input type="file" name="myImage" accept="image/*" ref={this.imageRef} />
        </label>
        <br />

        <label>
          <input type="checkbox" ref={this.checkboxRef} />I consent to my personal data
        </label>
        <br />

        <label>
          Choose a country:
          <select name="country" ref={this.selectRef}>
            <option value="canada">Canada</option>
            <option value="usa">USA</option>
            <option value="china">China</option>
          </select>
        </label>

        <input type="submit" value="Click me!" />
      </form>
    );
  }
}

export default Form;
