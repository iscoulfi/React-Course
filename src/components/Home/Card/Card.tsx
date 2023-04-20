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
          <p data-testid="character-name">{props.name}</p>
        </div>
      </div>
      <Modal openModal={openModal} setOpenModal={setOpenModal} id={props.id} />
    </div>
  );
};

export default Card;
