import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { addProductToCard } from '../store/modules/cart/actions';
import { IProduct } from '../store/modules/cart/types';

interface CatalogItemProps {
  product: IProduct;
}

const CatalogItem: React.FC<CatalogItemProps> = ({ product }) => {
  const dispath = useDispatch();

  const handleAddProductToCart = useCallback(() => {
    dispath(addProductToCard(product));
  }, [dispath, product]);

  return (
    <article>
      <strong>{product.title}</strong>
      {' - '}
      <span>{product.price}</span>
      {'   '}
      <button type="button" onClick={handleAddProductToCart}>
        Comprar
      </button>
    </article>
  );
};

export default CatalogItem;
