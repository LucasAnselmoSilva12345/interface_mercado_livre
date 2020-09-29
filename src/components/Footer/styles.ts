import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 48px;
  background: var(--color-blue);
  border-top: 1px solid var(--color-black);
  

  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 30px;
  > a{
    color: var(--color-white);
    text-decoration: none;
    cursor: pointer;
  }
`;