import styled from "styled-components";

export const Container = styled.div`
  height: 45px;
`;
export const TextInput = styled.input`
  border: none;
  border-bottom: 2px solid var(--primary-light);
  padding: 10px;
  background: none;
  width: 250px;
  :focus {
    outline: none;
  }

  @media (max-width: 480px) {
    width: 80vw;
  }
`;

export const Message = styled.div`
  margin-top: 5px;
  font-size: 12px;
  color: var(--error);
`;
