<<<<<<< HEAD
import React from 'react';

import { 
=======
import React from "react";

import {
>>>>>>> 6e1c478324dce85790a6eda7a49ebd51d11df922
  Container,
  Condition,
  Row,
  HeartIcon,
  DispatchTag,
  PriceCard,
  PriceRow,
  InstallmentsInfo,
  StockStatus,
  MethodCard,
  CheckIcon,
  Actions,
  Button,
  Benefits,
  ShieldIcon,
<<<<<<< HEAD
  } from './styles';
=======
} from "./styles";
>>>>>>> 6e1c478324dce85790a6eda7a49ebd51d11df922

const ProductAction: React.FC = () => {
  return (
    <Container>
      <Condition>Novo</Condition>

      <Row>
<<<<<<< HEAD
        <h1>Bola Nike - Brasileirão 2020</h1>
        <HeartIcon/>
      </Row>

      <DispatchTag>Enviando Normalmente</DispatchTag>
=======
        <h1>Camiseta Branca da Marca Desconhecida</h1>
        <HeartIcon />
      </Row>

      <DispatchTag>Enviando normalmente</DispatchTag>
>>>>>>> 6e1c478324dce85790a6eda7a49ebd51d11df922

      <PriceCard>
        <PriceRow>
          <span className="symbol">R$</span>
<<<<<<< HEAD
          <span className="fraction">199</span>
          <span className="cents">99</span>
        </PriceRow>

        <InstallmentsInfo>em 2x de R$ 100,00</InstallmentsInfo>
        <InstallmentsInfo>em 4x de R$ 50,00</InstallmentsInfo>
        <InstallmentsInfo>em 5x de R$ 40,00</InstallmentsInfo>
        <InstallmentsInfo>em 10x de R$ 20,00</InstallmentsInfo>
=======
          <span className="fraction">34</span>
          <span className="cents">99</span>
        </PriceRow>

        <InstallmentsInfo>em 3x de R$ 11,67</InstallmentsInfo>
>>>>>>> 6e1c478324dce85790a6eda7a49ebd51d11df922
      </PriceCard>

      <StockStatus>Estoque disponível</StockStatus>

      <MethodCard>
<<<<<<< HEAD
        <CheckIcon/>

        <div>
          <span className="title">Frete grátis</span>
          <span className="details">Para todo Brasil</span>
=======
        <CheckIcon />

        <div>
          <span className="title">Frete grátis</span>
          <span className="details">Benefício Lorem Ipsum</span>
>>>>>>> 6e1c478324dce85790a6eda7a49ebd51d11df922
          <a href="#" className="more">
            Ver mais opções
          </a>
        </div>
      </MethodCard>

      <Actions>
        <Button solid>Comprar agora</Button>
        <Button>Adicionar ao carrinho</Button>
      </Actions>

      <Benefits>
        <li>
          <ShieldIcon />
          <p>
<<<<<<< HEAD
            Compra Garantida, receba o produto que está esperando ou devolvemos seu dinheiro
=======
            Compra Garantida, receba o produto que está esperando ou devolvemos
            seu dinheiro.
>>>>>>> 6e1c478324dce85790a6eda7a49ebd51d11df922
          </p>
        </li>
      </Benefits>
    </Container>
  );
};

export default ProductAction;
