<<<<<<< HEAD
import React from 'react';

import { 
  Container, 
  Title,
  LocationCard,
  LocationIcon,
  Reputationcard,
=======
import React from "react";

import {
  Container,
  Title,
  LocationCard,
  LocationIcon,
  ReputationCard,
>>>>>>> 6e1c478324dce85790a6eda7a49ebd51d11df922
  ReputationThermometer,
  ReputationRow,
  SupportIcon,
  ClockIcon,
  More,
<<<<<<< HEAD
  } from './styles';
=======
} from "./styles";
>>>>>>> 6e1c478324dce85790a6eda7a49ebd51d11df922

const SellerInfo: React.FC = () => {
  return (
    <Container>
<<<<<<< HEAD
      <Title>Informações sobre o Vendendor</Title>
=======
      <Title>Informações sobre o vendedor</Title>
>>>>>>> 6e1c478324dce85790a6eda7a49ebd51d11df922

      <LocationCard>
        <LocationIcon />

        <div>
          <p>Localização</p>
<<<<<<< HEAD
          <strong>Salto, São Paulo</strong>
        </div>
      </LocationCard>

      <Reputationcard>
        <ReputationThermometer>
          <li/>
          <li/>
          <li/>
          <li/>
          <li className="active"/>
=======
          <strong>São Paulo, São Paulo</strong>
        </div>
      </LocationCard>

      <ReputationCard>
        <ReputationThermometer>
          <li />
          <li />
          <li />
          <li />
          <li className="active" />
>>>>>>> 6e1c478324dce85790a6eda7a49ebd51d11df922
        </ReputationThermometer>

        <ReputationRow>
          <div>
<<<<<<< HEAD
            <strong>222</strong>
            <span>Vendas nos ultimos 4 meses</span>
          </div>

          <div>
            <strong><SupportIcon /></strong>
            <span>Presta um bom atendimento</span>
          </div>

          <div>
            <strong><ClockIcon/></strong>
            <span>Vendas nos ultimos 4 meses</span>
          </div>
        </ReputationRow>
      </Reputationcard>

      <More href="#">Ver mais dados do vendendor</More>
=======
            <strong>561</strong>
            <span>vendas nos últimos 4 meses</span>
          </div>
          <div>
            <strong>
              <SupportIcon />
            </strong>
            <span>Presta um bom atendimento</span>
          </div>
          <div>
            <strong>
              <ClockIcon />
            </strong>
            <span>Entrega os produtos dentro do prazo</span>
          </div>
        </ReputationRow>
      </ReputationCard>

      <More href="#">Ver mais dados do vendedor</More>
>>>>>>> 6e1c478324dce85790a6eda7a49ebd51d11df922
    </Container>
  );
};

export default SellerInfo;
