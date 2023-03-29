import { FieldErrors, UseFormRegister } from 'react-hook-form/dist/types';
import { Inputs } from '../../../../types/formTypes';

type SelectProps = { register: UseFormRegister<Inputs>; errors: FieldErrors<Inputs> };

const Select = ({ register, errors }: SelectProps) => {
  return (
    <div className="field">
      <div className="field_input">
        <label>Choose a language</label>
        <select
          className="input"
          {...register('language', { required: 'Please choose your language' })}
        >
          <option value="" hidden>
            Choose
          </option>
          <option value="english">English</option>
          <option value="spanish">Spanish</option>
          <option value="german">German</option>
        </select>
      </div>
      {errors.language ? <p>{errors.language.message}</p> : <br />}
    </div>
  );
};

export default Select;
