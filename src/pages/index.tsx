import styled from "styled-components";

export default function Home() {
  return (
    <Componente>
      <h1>Teste</h1>
    </Componente>
  );
}

const Componente = styled.div`
  width: 30px;
  height: 100vh;
  color: ${({ theme }) => theme.colors.secondary};
`;
