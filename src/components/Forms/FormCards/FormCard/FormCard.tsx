import { ICard } from '../../../../types/formTypes';

const FormCard = (props: ICard) => {
  return (
    <div className="formcard">
      <img width={180} height={150} src={props.image} alt="Image" />
      <div>
        <div>
          <span>Username:</span>
          <b> {props.username}</b>
        </div>
        <div>
          <span>Birthday:</span>
          <b> {props.birthday}</b>
        </div>
        <div>
          <span>Gender:</span>
          <b> {props.gender}</b>
        </div>
        <div>
          <span>Native language:</span>
          <b> {props.language}</b>
        </div>
        <div>
          <span>Agreement:</span>
          <b> {props.agreement}</b>
        </div>
      </div>
    </div>
  );
};

export default FormCard;
