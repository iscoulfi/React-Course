import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useForm, SubmitHandler } from 'react-hook-form';
import { FormProps, ICard, Inputs } from '../../../types/formTypes';
import CheckboxInput from './fields/CheckboxInput';
import DateInput from './fields/DateInput';
import FormButtons from './fields/FormButtons';
import ImageInput from './fields/ImageInput';
import RadioInput from './fields/RadioInput';
import Select from './fields/Select';
import TextInput from './fields/TextInput';

const Form = ({ refreshCards }: FormProps) => {
  const [message, setMessage] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>({ mode: 'onSubmit', reValidateMode: 'onSubmit' });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const cardInfo: ICard = {
      id: uuidv4(),
      username: data.username,
      birthday: data.birthday,
      gender: data.gender,
      image: URL.createObjectURL(data.image[0]),
      agreement: 'agree',
      language: data.language,
    };

    addCard(cardInfo);

    displayMessage();

    reset();
  };

  const addCard = (card: ICard) => {
    refreshCards(card);
  };

  const displayMessage = () => {
    setMessage('Data has been saved');
    setTimeout(() => {
      setMessage('');
    }, 2000);
  };

  return (
    <form noValidate className="form" onSubmit={handleSubmit(onSubmit)}>
      <TextInput register={register} errors={errors} />

      <DateInput register={register} errors={errors} />

      <RadioInput register={register} errors={errors} />

      <Select register={register} errors={errors} />

      <ImageInput register={register} errors={errors} />

      <CheckboxInput register={register} errors={errors} />

      <FormButtons />

      {message ? <p className="form_success">{message}</p> : <br />}
    </form>
  );
};

export default Form;
