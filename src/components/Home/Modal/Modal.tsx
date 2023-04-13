import { useEffect } from 'react';
import { RxCrossCircled } from 'react-icons/rx';
import Indicator from '../Indicator';
import { useAppDispatch, useAppSelector } from '../../../redux/store';
import { getCharacter } from '../../../redux/slices/search/asyncActions';

interface ModalProps {
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  id: number;
}

const Modal = ({ openModal, setOpenModal, id }: ModalProps) => {
  const dispatch = useAppDispatch();
  const { card, statusCard } = useAppSelector((state) => state.search);

  useEffect(() => {
    if (openModal) dispatch(getCharacter(id));
  }, [id, openModal, dispatch]);

  if (!openModal) return null;
  return (
    <div className="overlay" onClick={() => setOpenModal(false)}>
      <div className="content" onClick={(e) => e.stopPropagation()}>
        <RxCrossCircled className="closeBtn" onClick={() => setOpenModal(false)} />
        {statusCard === 'loading' ? (
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
