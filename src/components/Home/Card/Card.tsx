import { useState } from 'react';
import { CardData } from '../../../types/formTypes';
import Modal from '../Modal/Modal';
const Card = (props: CardData) => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div>
      <div className="card" data-testid="card" onClick={() => setOpenModal(true)}>
        <img height={200} src={props.image} alt="Image" />
        <div className="person">
          <p>{props.name}</p>
        </div>
      </div>
      <Modal openModal={openModal} setOpenModal={setOpenModal} data={props} />
    </div>
  );
};

export default Card;
