import styled from "styled-components";

export const ContainerShowcase = styled.section`
 margin-top: 7.5rem;

 h2 {
  font-size: 2rem;
  font-weight: 900;

  color: ${props => props.theme["base-subtitle"]};

  margin-bottom: 2.5rem;
 }
`

export const CardShowCase = styled.div`
  width: 16rem;
  height: 25rem;

  display: flex;
  align-items: center;
  flex-direction: column;

  background-color: ${props => props.theme["base-card"]};

`

export const ContainerImgCoffee = styled.figure`
    width: 7.5rem;
    height: 7.5rem;

    img {
      width: 100%;
      object-fit: cover;
    }

`

export const CategoryTypeCoffee = styled.span`
  background-color: ${props => props.theme["yellow-light"]};
  color: ${props => props.theme["yellow-dark"]};

  padding: .5rem;
  margin: 1rem 0;

  border-radius: 8px;
`

export const TitleAndDescriptionCoffeeContainer = styled.div`
  text-align: center;

  h3 {
    font-size: 1.25rem;
    color: ${props => props.theme["base-subtitle"]};

    margin-bottom: 1rem;
  }

  span {
    color: ${props => props.theme["base-label"]};
  }

`

export const ContainerPriceAndQuantityChekout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  margin-top: 3rem;
`

export const PriceContent = styled.span`
  font-size: 2.5rem;
  color: ${props => props.theme["base-text"]};
  font-family: ${props => props.theme["font-ballo2"]};

  &::before {
    content: "R$";
    font-size: 0.875rem;
    color: ${props => props.theme["base-text"]};

    margin-right: .25rem;
    font-family: ${props => props.theme["font-default"]};
  }
`

const BaseButtonCart = styled.button`
  display: felx;
  align-items: center;
  justify-content: center;

  color: ${props => props.theme["purple"]};

  font-size: 2rem;

  border: 0;
  border-radius: 8px;
  background-color: transparent;
  padding: .5rem .2rem;

  cursor: pointer;
`

export const ContainerButtonsCheckout = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

export const ContainerGenericButtons = styled.div`
  display: flex;
  align-items: center;
`

export const ButtonAddToCart = styled(BaseButtonCart)`

`

export const ButtonRemoveToCart = styled(BaseButtonCart)`

`

export const QuantityProducs = styled.span`
  display: flex;
  justify-content: center;
  width: 1.4375rem;
  padding: 0 1rem;

  font-size: 2rem;
  color: ${props => props.theme["base-title"]};

`

export const ButtonCartCheckout = styled.button`
  width: 2.375rem;
  height: 2.375rem;
  background-color: ${props => props.theme["purple-dark"]};
  border-radius: 6px;

  display: felx;
  align-items: center;

  cursor: pointer;

  transition: .3s all;

 img {
  width: 1.15rem;
 }

 &:hover {
  opacity: .9;
 }
`