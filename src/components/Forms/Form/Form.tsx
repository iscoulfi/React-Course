import React from 'react';
import { FormErrors, FormProps, FormState } from '../../../types/formTypes';
import CheckboxInput from './fields/CheckboxInput';
import DateInput from './fields/DateInput';
import FormButtons from './fields/FormButtons';
import ImageInput from './fields/ImageInput';
import RadioInput from './fields/RadioInput';
import Select from './fields/Select';
import TextInput from './fields/TextInput';

class Form extends React.Component<FormProps, FormState> {
  constructor(props: FormProps) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      errors: {
        nameError: '',
        dateError: '',
        genderError: '',
        imageError: '',
        checkboxError: '',
        selectError: '',
      },
    };
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
    if (this.validate()) {
      console.log(this.nameRef.current?.value);
      console.log(this.birthRef.current?.value);
      console.log(this.genderRef1.current?.checked);
      console.log(this.genderRef2.current?.checked);
      console.log(this.checkboxRef.current?.checked);
      console.log(this.selectRef.current?.value);
      if (this.imageRef.current?.files) {
        console.log(this.imageRef.current.value);
      }
      this.resetForm();
    }
  }

  validate() {
    let isValid = true;
    const errors: FormErrors = {
      nameError: '',
      dateError: '',
      genderError: '',
      imageError: '',
      checkboxError: '',
      selectError: '',
    };

    if (typeof this.nameRef.current?.value === 'string' && this.nameRef.current?.value.length < 3) {
      isValid = false;
      errors.nameError = 'Username must be at least three characters long';
    }

    if (!this.birthRef.current?.value) {
      isValid = false;
      errors.dateError = 'Please enter your birthday';
    }

    if (!this.genderRef1.current?.checked && !this.genderRef2.current?.checked) {
      isValid = false;
      errors.genderError = 'Please choose your gender';
    }

    if (!this.selectRef.current?.value) {
      isValid = false;
      errors.selectError = 'Please choose your language';
    }

    if (!this.imageRef.current?.value) {
      isValid = false;
      errors.imageError = 'Please upload an image';
    }

    if (!this.checkboxRef.current?.checked) {
      isValid = false;
      errors.checkboxError = 'Please accept the terms and conditions';
    }

    this.setState({ errors: errors });

    return isValid;
  }

  addCard() {}

  resetForm() {
    this.formRef.current?.reset();
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit} ref={this.formRef}>
        <TextInput nameRef={this.nameRef} nameError={this.state.errors.nameError} />

        <DateInput birthRef={this.birthRef} dateError={this.state.errors.dateError} />

        <RadioInput
          genderRef1={this.genderRef1}
          genderRef2={this.genderRef2}
          genderError={this.state.errors.genderError}
        />

        <Select selectRef={this.selectRef} selectError={this.state.errors.selectError} />

        <ImageInput imageRef={this.imageRef} imageError={this.state.errors.imageError} />

        <CheckboxInput
          checkboxRef={this.checkboxRef}
          checkboxError={this.state.errors.checkboxError}
        />

        <FormButtons />
      </form>
    );
  }
}

export default Form;
