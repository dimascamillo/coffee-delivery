import {
  ContainerBanner,
  ContainerDescriptionBanner,
  ContainerImgBanner,
  ContainerTextBanner,
  ContainerTitleBanner,
} from "./styles";

import bannerHome from "../../../../assets/banner-home.svg";

import iconCart from "../../../../assets/icons/cart.svg";
import iconPackage from "../../../../assets/icons/package.svg";
import iconTimer from "../../../../assets/icons/timer.svg";
import iconCoffee from "../../../../assets/icons/coffee.svg";

export function Banner() {
  return (
    <ContainerBanner>
      <ContainerTextBanner>
        <ContainerTitleBanner>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
        </ContainerTitleBanner>

        <ContainerDescriptionBanner>
          <div className="cardDescriptionBanner">
            <img src={iconCart} />
            <p>Compra simples e segura</p>
          </div>

          <div className="cardDescriptionBanner">
            <img src={iconPackage} />
            <p>Embalagem mantém o café intacto</p>
          </div>

          <div className="cardDescriptionBanner">
            <img src={iconTimer} />
            <p>Entrega rápida e rastreada</p>
          </div>

          <div className="cardDescriptionBanner">
            <img src={iconCoffee} />
            <p>O café chega fresquinho até você</p>
          </div>
        </ContainerDescriptionBanner>
      </ContainerTextBanner>

      <ContainerImgBanner>
        <img src={bannerHome} />
      </ContainerImgBanner>
    </ContainerBanner>
  );
}
