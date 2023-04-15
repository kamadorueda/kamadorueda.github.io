import styled from "styled-components";

export const Layout = styled.div`
  background-color: ${(props) => props.theme.white.light};
  height: 100vh;
`;

export const PostsSection = styled.div`
  align-items: center;
  background-color: ${(props) => props.theme.black.dark};
  color: ${(props) => props.theme.white.medium};
  display: flex;
  font-weight: 500;
  height: 8rem;
  justify-content: center;
  width: 100%;
`;

export const Posts = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(auto, 20rem));
  justify-content: center;
  max-width: 65rem;
  padding: 1rem 1rem 0;
  width: 100%;
`;
