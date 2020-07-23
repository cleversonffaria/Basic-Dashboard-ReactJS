import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  background-color: #fff;
  background-image: linear-gradient(to top, #6454f0, #6ee2f5);
  min-height: 100vh;
  min-width: 100vw;

  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 480px) {
    background: #fff;
  }
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
  background-color: #333;
  background-image: linear-gradient(to left, #6454f0, #9283fc);

  border-radius: 5px;
  color: #fff;
  font-weight: bold;

  width: 100%;
  padding: 10px;
  margin-top: 10px;
  border: none;
  :focus {
    outline: none;
  }
`;

export const Title = styled.h2`
  font-size: 32px;
  font-weight: bold;
  color: #6454f0;

  margin-bottom: 30px;
`;

export const LabelInput = styled.span`
  font-size: 14px;
  font-weight: bold;
  color: #9283fc;
`;
export const ContainerInput = styled.div`
  margin-bottom: 23px;
`;

export const RecoverPassword = styled(Link)`
  float: right;
  text-decoration: none;
  color: #6454f0;
  margin-top: 10px;
  font-size: 14px;
`;

export const SubTitle = styled.p`
  margin-bottom: 10px;
  font-size: 14px;
  color: #333;
  width: 250px;
  @media (max-width: 480px) {
    width: 80vw;
  }
`;
