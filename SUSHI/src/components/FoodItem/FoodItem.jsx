import { useState } from 'react';

import IngredientModal from '../IngredientModal/IngredientModal';
import './FoodItem.css'

// eslint-disable-next-line react/prop-types
const FoodItem = ({ id, name, price, description_qua, description, image }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const onOpenModal = () => {
    setIsOpenModal(true);
  };

  const onCloseModal = () => {
    setIsOpenModal(false);
  };

  return (
    <>
      <div
        onClick={onOpenModal}
        className='food__item'
      >
        <div className="food__item-img-container">
          <img className='food__item-img' src={image} alt="" />
        </div>

        <div className="food__item-info">
          <div className="food__item-name">
            <p>{name}</p>
          </div>
          { description_qua && <p className='food__item-desc'>{description_qua}</p>}
          <p className='fod__item-price'>{price}₽</p>
        </div>
      </div>

      <IngredientModal
        isOpen={isOpenModal}
        onClose={onCloseModal}
        image={image}
        title={name}
        description={description}
      >
      </IngredientModal>
    </>
  );
}


export default FoodItem