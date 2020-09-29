import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 80px;
  background: var(--color-header);
  border-bottom: 1px solid var(--color-black);

  > div{
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
