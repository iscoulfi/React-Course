import { FieldErrors, UseFormRegister } from 'react-hook-form/dist/types';
import { Inputs } from '../../../../types/formTypes';

type CheckboxInputProps = { register: UseFormRegister<Inputs>; errors: FieldErrors<Inputs> };

const CheckboxInput = ({ register, errors }: CheckboxInputProps) => {
  return (
    <div className="field">
      <div>
        <input
          type="checkbox"
          {...register('agreement', { required: 'Please accept the terms and conditions' })}
        />
        <label> I accept the terms and conditions</label>
      </div>
      {errors.agreement ? <p>{errors.agreement.message}</p> : <br />}
    </div>
  );
};

export default CheckboxInput;
