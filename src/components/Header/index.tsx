import React from "react";

import Logo from '../../assets/logo.png';

import { Container} from "./styles";

const Header: React.FC = () => {
  return (
    <Container>
      <div>
        <img src={Logo} alt="Logo"/>
      </div>
    </Container>
  );
};

export default Header;
