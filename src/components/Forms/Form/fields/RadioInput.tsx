import { FieldErrors, UseFormRegister } from 'react-hook-form/dist/types';
import { Inputs } from '../../../../types/formTypes';

type RadioInputProps = { register: UseFormRegister<Inputs>; errors: FieldErrors<Inputs> };

const RadioInput = ({ register, errors }: RadioInputProps) => {
  return (
    <div className="field">
      <div className="field_flex">
        <div>
          <input
            type="radio"
            value="male"
            {...register('gender', { required: 'Please choose your gender' })}
          />
          <label> Male</label>
        </div>
        <div>
          <input
            type="radio"
            value="female"
            {...register('gender', { required: 'Please choose your gender' })}
          />
          <label> Female</label>
        </div>
      </div>
      {errors.gender ? <p>{errors.gender.message}</p> : <br />}
    </div>
  );
};

export default RadioInput;
