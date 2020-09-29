<<<<<<< HEAD
import React from 'react';

import Product from '../Product';
import Header from '../Header';
import Footer from '../Footer';
import { Container, Wrapper} from './styles';
=======
import React from "react";

import Product from "../Product";

import { Container, Wrapper } from "./styles";
>>>>>>> 6e1c478324dce85790a6eda7a49ebd51d11df922

const Layout: React.FC = () => {
  return (
    <Container>
<<<<<<< HEAD
      <Header/>

      <Wrapper>
        <Product/>
      </Wrapper>

      <Footer/>
=======
      <Wrapper>
        <Product />
      </Wrapper>
>>>>>>> 6e1c478324dce85790a6eda7a49ebd51d11df922
    </Container>
  );
};

export default Layout;
