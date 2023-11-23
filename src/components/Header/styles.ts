import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const LogoContainer = styled.figure`
  width: 8rem;
`

export const LogoContent = styled.img`
  width: 100%;
  object-fit: cover;
`

export const ContainerMenu = styled.nav`
  display: flex;
  align-items: center;
  gap: 1rem;

  .iconHomePage {
    padding: .5rem;
    border-radius: 8px;
    background-color: ${props => props.theme["purple"]};
    border: 1px solid ${props => props.theme["purple-light"]};

    transition: .3s all;

    svg {
      color: ${props => props.theme["purple-light"]};
    }


    &:hover {
      background-color: ${props => props.theme["purple-light"]};
      border: 1px solid ${props => props.theme["purple-dark"]};

      svg {
      color: ${props => props.theme["purple-dark"]};
    }
    }
  }
`

export const LocationClient = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: .5rem;

  padding: 0.625rem .5rem;
  border-radius: 8px;

  background-color: ${props => props.theme["purple-light"]};
  color: ${props => props.theme["purple-dark"]};

transition: .3s all;

&:hover {
  background-color: ${props => props.theme["purple-dark"]};
  color: ${props => props.theme["purple-light"]};
}
`

export const LocationIcon = styled.img`
  width: 1.25rem;
`

export const ButtonCartContainer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: .7rem .5rem;
  border-radius: 8px;
  border: 1px solid transparent;

  background-color: ${props => props.theme["yellow-light"]};

  cursor: pointer;

  transition: .3s all;

&:hover {

  border: 1px solid ${props => props.theme["yellow-dark"]};
}
`

export const ButtonCartIcon = styled.img`
  width: 1.5rem;
`