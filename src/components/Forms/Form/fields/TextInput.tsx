import { FieldErrors, UseFormRegister } from 'react-hook-form/dist/types';
import { Inputs } from '../../../../types/formTypes';

type TextInputProps = { register: UseFormRegister<Inputs>; errors: FieldErrors<Inputs> };

const TextInput = ({ register, errors }: TextInputProps) => {
  return (
    <div className="field">
      <div className="field_input">
        <label>Username</label>
        <input
          className="input"
          type="text"
          placeholder="Enter username..."
          autoComplete="off"
          {...register('username', {
            required: 'Please enter username',
            minLength: {
              value: 3,
              message: 'Length must be 3 or more',
            },
          })}
        />
      </div>
      {errors.username ? <p>{errors.username.message}</p> : <br />}
    </div>
  );
};

export default TextInput;
