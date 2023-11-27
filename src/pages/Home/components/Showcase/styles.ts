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
  height: 20rem;

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

  margin-top: 3rem;
`

export const PriceContent = styled.span`
  font-size: 1.5rem;
  color: ${props => props.theme["base-text"]};

  &::before {
    content: "R$";
    font-size: 0.875rem;
    color: ${props => props.theme["base-text"]};
    margin-right: .25rem;
  }
`