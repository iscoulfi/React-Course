import React from 'react';
import { FormProps, ICard } from '../../../types/formTypes';
import CheckboxInput from './fields/CheckboxInput';
import DateInput from './fields/DateInput';
import FormButtons from './fields/FormButtons';
import ImageInput from './fields/ImageInput';
import RadioInput from './fields/RadioInput';
import Select from './fields/Select';
import TextInput from './fields/TextInput';

class Form extends React.Component<FormProps, ICard> {
  constructor(props: FormProps) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  formRef = React.createRef<HTMLFormElement>();
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
    this.resetForm();
  }

  addCard() {
    this.props.refreshCards({ ...this.state });
  }

  resetForm() {
    this.formRef.current?.reset();
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit} ref={this.formRef}>
        <TextInput nameRef={this.nameRef} />
        <DateInput birthRef={this.birthRef} />
        <RadioInput genderRef1={this.genderRef1} genderRef2={this.genderRef2} />
        <ImageInput imageRef={this.imageRef} />
        <CheckboxInput checkboxRef={this.checkboxRef} />
        <Select selectRef={this.selectRef} />
        <FormButtons />
      </form>
    );
  }
}

export default Form;
