import styled from "styled-components";

export const Container = styled.div`
  background-color: #333;
  background-image: linear-gradient(to top, #6454f0, #6ee2f5);
  height: 100vh;
  width: 100vw;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Card = styled.div`
  background-color: #fff;
  border-radius: 5px;

  width: 400px;
  height: 500px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.button`
  border-color: #000;
  border: 1px solid;
  background-color: #fff;
`;

export const Title = styled.h2`
  margin-bottom: 10px;
`;

export const LabelInput = styled.span`
  font-size: 18px;
`;
export const ContainerInput = styled.div`
  margin-bottom: 23px;
`;
