// import { useContext } from "react";
import {
  CardShowCase,
  CategoryTypeCoffee,
  ContainerImgCoffee,
  ContainerPriceAndQuantityChekout,
  ContainerShowcase,
  PriceContent,
  TitleAndDescriptionCoffeeContainer,
} from "./styles";
import { CoffeeDeliveryContext } from "../../../../contexts/CoffeeDeliveryContext";
import { useContext } from "react";

export function Showcase() {
  const { products } = useContext(CoffeeDeliveryContext);

  return (
    <ContainerShowcase>
      <h2>Nossos cafés</h2>

      {products.map((product) => {
        const { src, category, name, description, price } = product;

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
              <PriceContent>{price}</PriceContent>
            </ContainerPriceAndQuantityChekout>
          </CardShowCase>
        );
      })}
    </ContainerShowcase>
  );
}
