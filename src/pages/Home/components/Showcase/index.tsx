import {
  ButtonAddToCart,
  ButtonCartCheckout,
  CardShowCase,
  CategoryTypeCoffee,
  ContainerButtonsCheckout,
  ContainerCardsProducts,
  ContainerGenericButtons,
  ContainerImgCoffee,
  ContainerPriceAndQuantityChekout,
  ContainerShowcase,
  PriceContent,
  QuantityProducs,
  TitleAndDescriptionCoffeeContainer,
} from "./styles";
import { CoffeeDeliveryContext } from "../../../../contexts/CoffeeDeliveryContext";
import { useContext, useState } from "react";

import iconeCartWhite from "../../../../assets/icons/cart-white.svg";

export function Showcase() {
  const [quantities, setQuantities] = useState<Record<number, number>>({});

  const { products } = useContext(CoffeeDeliveryContext);

  function handleAddProductToCart(id: number) {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: (prevQuantities[id] || 0) + 1,
    }));
  }

  function handleRemoveProductToCart(id: number) {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: Math.max((prevQuantities[id] || 0) - 1, 0),
    }));
  }

  return (
    <ContainerShowcase>
      <h2>Nossos cafés</h2>

      <ContainerCardsProducts>
        {products.map((product) => {
          const { src, category, name, description, price, id } = product;

          const priceReplaceString = price.replace(".", ",");

          return (
            <CardShowCase>
              <ContainerImgCoffee>
                <img src={src} />
              </ContainerImgCoffee>

              <CategoryTypeCoffee>{category}</CategoryTypeCoffee>

              <TitleAndDescriptionCoffeeContainer>
                <h3>{name}</h3>
                <span>{description}</span>
              </TitleAndDescriptionCoffeeContainer>

              <ContainerPriceAndQuantityChekout>
                <PriceContent>{priceReplaceString}</PriceContent>
                <ContainerButtonsCheckout>
                  <ContainerGenericButtons>
                    <ButtonAddToCart onClick={() => handleRemoveProductToCart(id)}>-</ButtonAddToCart>
                    <QuantityProducs type="number" value={quantities[id] || 0} />
                    <ButtonAddToCart onClick={() => handleAddProductToCart(id)}>+</ButtonAddToCart>
                  </ContainerGenericButtons>
                  <ButtonCartCheckout>
                    <img src={iconeCartWhite} />
                  </ButtonCartCheckout>
                </ContainerButtonsCheckout>
              </ContainerPriceAndQuantityChekout>
            </CardShowCase>
          );
        })}
      </ContainerCardsProducts>
    </ContainerShowcase>
  );
}
