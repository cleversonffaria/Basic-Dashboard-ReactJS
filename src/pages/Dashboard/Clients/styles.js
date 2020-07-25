import styled from "styled-components";
import { Input } from "antd";
export const InputForm = styled(Input)`
  margin-bottom: 15px;
`;

export const Button = styled.button`
  color: var(--white);
  background: rgb(24, 144, 255);
  border: 1px solid var(--white);
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;

  :hover {
    color: rgb(24, 144, 255);
    background: var(--white);
    border: 1px solid rgb(24, 144, 255);
    > h3 {
      color: var(--white);
    }
  }
`;
