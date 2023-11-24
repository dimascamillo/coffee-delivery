import styled from "styled-components";

export const ContainerBanner = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  margin-top: 9.5rem;

  background-image: url('../../../../assets/background-banner-home.svg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`

export const ContainerTextBanner = styled.div`
  width: 60%;

  display: flex;
  flex-direction: column;
  gap: 4.125rem;
`

export const ContainerImgBanner = styled.figure`
  width: 40%;

  img {
    width: 100%;
    object-fit: cover;
  }
`

export const ContainerTitleBanner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h1 {
    width: 100%;

    color: ${props => props.theme["base-title"]};

    font-weight: 900;
    font-family: ${props => props.theme["font-ballo2"]};
    font-size: 2.875rem;
    line-height: 130%;
  }

  p {
    width: 100%;

    font-size: 1.25rem;
    line-height: 130%;
  }
`

export const ContainerDescriptionBanner = styled.div`
  width: 50%;

  display: flex;
  gap: 2.5rem;
  flex-wrap: wrap;

.cardDescriptionBanner {
  display: flex;
  align-items: center;
  gap: 1rem;

  p {
    color: ${props => props.theme["base-text"]};
  }
}
`