// import { useContext } from "react";
import {
  ButtonAddToCart,
  ButtonCartCheckout,
  ButtonRemoveToCart,
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
import { useContext } from "react";

import iconeCartWhite from "../../../../assets/icons/cart-white.svg";

export function Showcase() {
  const { products, handleAddProductToCart, handleRemoveProductToCart, quantityProducts } =
    useContext(CoffeeDeliveryContext);

  return (
    <ContainerShowcase>
      <h2>Nossos cafés</h2>

      <ContainerCardsProducts>
        {products.map((product) => {
          const { src, category, name, description, price } = product;

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
                    <ButtonAddToCart onClick={handleRemoveProductToCart}>-</ButtonAddToCart>
                    <QuantityProducs>{quantityProducts}</QuantityProducs>
                    <ButtonRemoveToCart onClick={handleAddProductToCart}>+</ButtonRemoveToCart>
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
