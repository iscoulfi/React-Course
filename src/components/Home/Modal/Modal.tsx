import { useState, useEffect } from 'react';
import axios from 'axios';
import { RxCrossCircled } from 'react-icons/rx';
import Indicator from '../Indicator';
import { CardData } from '../../../types/formTypes';

interface ModalProps {
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  id: number;
}

const Modal = ({ openModal, setOpenModal, id }: ModalProps) => {
  const [card, setCard] = useState<CardData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (openModal)
      (async () => {
        try {
          const { data } = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
          setCard(data);
          console.log(data);
          setLoading(false);
        } catch (e) {
          console.log(e);
        }
      })();
  }, [id, openModal]);

  if (!openModal) return null;
  return (
    <div className="overlay" onClick={() => setOpenModal(false)}>
      <div className="content" onClick={(e) => e.stopPropagation()}>
        <RxCrossCircled className="closeBtn" onClick={() => setOpenModal(false)} />
        {loading ? (
          <Indicator />
        ) : (
          <div className="data">
            <img src={card?.image} alt="picture" />
            <div>
              <div>
                <span>ID:</span>
                <b> {card?.id}</b>
              </div>
              <div>
                <span>Name:</span>
                <b> {card?.name}</b>
              </div>
              <div>
                <span>Gender:</span>
                <b> {card?.gender}</b>
              </div>
              <div>
                <span>Species:</span>
                <b> {card?.species}</b>
              </div>
              <div>
                <span>Status:</span>
                <b> {card?.status}</b>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
