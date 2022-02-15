import styled from "styled-components";

export const Container = styled.nav`
  background-color: var(--blue);
`;
export const Content = styled.div`
  margin: 0 auto;
  padding: 2rem 1rem 12rem;
  max-width: 1120px;
  display: flex;
  align-items: center;
  justify-content: space-between;

button {
    border-radius: 0.3rem;
    border: none;
    color: white;
    background-color: var(--blueLight);
    font-weight: 600;
    padding: 0 2rem;
    cursor: pointer;
    height: 48px;
  }

button:hover {
    filter: brightness(0.9);
  }
`;
