import styled from "styled-components";
import { Image } from "~/components/Image";

export const Layout = styled.div`
  background-color: ${(props) => props.theme.white.light};
  height: 100vh;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem;
`;

export const Card = styled.div`
  background-color: ${(props) => props.theme.white.medium};
  border-color: ${(props) => props.theme.white.dark};
  border-radius: 0.5rem;
  border-style: solid;
  border-width: 0.0625rem;
  display: flex;
  flex-direction: column;
  max-width: 65rem;
  padding-bottom: 1rem;
  row-gap: 1rem;
  width: 100%;
`;

export const Cover = styled(Image)`
  border-radius: 0.5rem;
`;

export const Title = styled.h1`
  align-items: center;
  background-color: ${(props) => props.theme.black.dark};

  color: ${(props) => props.theme.white.medium};
  display: flex;
  font-size: 2rem;
  font-weight: 500;
  font-weight: 500;
  height: 8rem;
  justify-content: center;
  width: 100%;
`;

export const Paragraph = styled.div`
  color: ${(props) => props.theme.black.medium};
  font-size: 1rem;
  margin: 0 1rem;
  text-align: justify;
`;

export const Citation = styled.div`
  color: ${(props) => props.theme.black.medium};
  font-size: 1rem;
  font-style: italic;
  margin: 0 2rem;
`;

export const Link = styled.a`
  color: ${(props) => props.theme.primary.medium};
  display: inline;
  :hover {
    text-decoration: underline;
  }
`;

export const UnorderedList = styled.ul`
  color: ${(props) => props.theme.black.medium};
  list-style-position: outside;
  list-style-type: "- ";
  outline-color: ${(props) => props.theme.black.medium};
  outline-width: 0.0625rem;
`;

export const UnorderedListItem = styled.li`
  color: ${(props) => props.theme.black.medium};
  display: list-item;
  margin-left: 1rem;
  overflow: unset;
`;
