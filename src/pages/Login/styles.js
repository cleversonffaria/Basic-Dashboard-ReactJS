import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--white);
  background-image: linear-gradient(to top, var(--primary), var(--secondary));
  min-height: 100vh;
  min-width: 100vw;

  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 480px) {
    background: var(--white);
  }
`;

export const Card = styled.div`
  background-color: var(--white);
  border-radius: 5px;

  width: 400px;
  height: 500px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.button`
  background-color: var(--dark-light);
  background-image: linear-gradient(
    to left,
    var(--primary),
    var(--primary-light)
  );

  border-radius: 5px;
  color: var(--white);
  font-weight: bold;

  width: 100%;
  padding: 10px;
  margin-top: 10px;
  border: none;

  cursor: pointer;
  :focus {
    outline: none;
  }
`;

export const Title = styled.h2`
  font-size: 32px;
  font-weight: bold;
  color: var(--primary);

  margin-bottom: 30px;
`;

export const LabelInput = styled.span`
  font-size: 14px;
  font-weight: bold;
  color: var(--primary-light);
`;
export const ContainerInput = styled.div`
  margin-bottom: 23px;
`;

export const SubTitle = styled.p`
  margin-bottom: 10px;
  font-size: 14px;
  color: var(--dark-light);
  width: 250px;
  @media (max-width: 480px) {
    width: 80vw;
  }
`;
