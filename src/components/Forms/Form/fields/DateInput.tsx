import { FieldErrors, UseFormRegister } from 'react-hook-form/dist/types';
import { Inputs } from '../../../../types/formTypes';

type DateInputProps = { register: UseFormRegister<Inputs>; errors: FieldErrors<Inputs> };

const DateInput = ({ register, errors }: DateInputProps) => {
  return (
    <div className="field">
      <div className="field_input">
        <label>Birthday</label>
        <input
          className="input"
          type="date"
          {...register('birthday', {
            required: 'Please enter your birthday',
            validate: {
              validBirthday: (today) => new Date(today) < new Date() || 'Please enter valid date',
            },
          })}
        />
      </div>
      {errors.birthday ? <p>{errors.birthday.message}</p> : <br />}
    </div>
  );
};

export default DateInput;
