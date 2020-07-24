import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  div {
    display: flex;
    flex-direction: row;
  }
`;

export const Card = styled(Link)`
  color: rgb(24, 144, 255);
  background: var(--white);
  border: 1px solid rgb(24, 144, 255);

  border-radius: 5px;
  text-align: center;
  padding: 5px 15px;
  margin-left: 15px;

  display: flex;
  flex-direction: column;

  cursor: pointer;
  > span {
    font-size: 20px;
  }
  > h3 {
    color: rgb(24, 144, 255);
  }
  :hover {
    color: var(--white);
    background: rgb(24, 144, 255);
    border: 1px solid rgb(24, 144, 255);
    > h3 {
      color: var(--white);
    }
  }
`;
