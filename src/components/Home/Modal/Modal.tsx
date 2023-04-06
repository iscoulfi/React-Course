import { RxCrossCircled } from 'react-icons/rx';
import { CardData } from '../../../types/formTypes';

interface ModalProps {
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  data: CardData;
}

const Modal = ({ openModal, setOpenModal, data }: ModalProps) => {
  if (!openModal) return null;
  return (
    <div className="overlay" onClick={() => setOpenModal(false)}>
      <div className="content" onClick={(e) => e.stopPropagation()}>
        <RxCrossCircled className="closeBtn" onClick={() => setOpenModal(false)} />
        <div className="data">
          <img src={data.image} alt="picture" />
          <div>
            <div>
              <span>ID:</span>
              <b> {data.id}</b>
            </div>
            <div>
              <span>Name:</span>
              <b> {data.name}</b>
            </div>
            <div>
              <span>Gender:</span>
              <b> {data.gender}</b>
            </div>
            <div>
              <span>Species:</span>
              <b> {data.species}</b>
            </div>
            <div>
              <span>Status:</span>
              <b> {data.status}</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
