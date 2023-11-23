import { NavLink } from "react-router-dom";

import {
  ContainerMenu,
  HeaderContainer,
  LocationClient,
  LogoContainer,
  LogoContent,
  LocationIcon,
  ButtonCartContainer,
  ButtonCartIcon,
} from "./styles";

import { House } from "phosphor-react";

import logoCoffeeDelivery from "../../assets/logo.svg";
import locationIcon from "../../assets/location.svg";
import iconCart from "../../assets/cart.svg";

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/">
        <LogoContainer>
          <LogoContent src={logoCoffeeDelivery} />
        </LogoContainer>
      </NavLink>

      <ContainerMenu>
        <LocationClient>
          <LocationIcon src={locationIcon} />
          Rio de Janeiro, RJ
        </LocationClient>

        <NavLink className="iconHomePage" to="/">
          <House size={15} />
        </NavLink>

        <NavLink to="/checkout">
          <ButtonCartContainer>
            <ButtonCartIcon src={iconCart} />
          </ButtonCartContainer>
        </NavLink>
      </ContainerMenu>
    </HeaderContainer>
  );
}
