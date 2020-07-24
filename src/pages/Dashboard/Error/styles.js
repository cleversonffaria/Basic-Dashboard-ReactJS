import styled from "styled-components";
import { Link } from "react-router-dom";
export const Container = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: var(--dark-light);
  background-image: linear-gradient(
    to left,
    var(--primary),
    var(--primary-light)
  );
  > span {
    color: #fafafa;
    font-size: 8rem;
  }
  > h1 {
    color: var(--white);
    font-size: 5rem;
    margin: 0;
  }
  > h3 {
    color: var(--white);
    font-size: 1.2rem;
  }
  > p {
    color: var(--white);
  }
`;
export const Return = styled(Link)`
  font-weight: bold;
  color: #fafafa;
  font-size: 1.2rem;
  :hover {
    color: #fafafa;
  }
`;
