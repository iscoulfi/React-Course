import { FieldErrors, UseFormRegister } from 'react-hook-form/dist/types';
import { Inputs } from '../../../../types/formTypes';

type ImageInputProps = { register: UseFormRegister<Inputs>; errors: FieldErrors<Inputs> };

const ImageInput = ({ register, errors }: ImageInputProps) => {
  return (
    <div className="field field_input">
      <input
        type="file"
        accept="image/*"
        data-testid="image-upload"
        {...register('image', { required: 'Please upload an image' })}
      />
      {errors.image ? <p>{errors.image.message}</p> : <br />}
    </div>
  );
};

export default ImageInput;
