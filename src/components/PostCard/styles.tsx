import { Link } from "react-router-dom";
import styled from "styled-components";
import { Image } from "~/components/Image";

export const Layout = styled.div`
  background-color: ${(props) => props.theme.white.medium};
  border-color: ${(props) => props.theme.white.dark};
  border-radius: 0.5rem;
  border-style: solid;
  border-width: 0.0625rem;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
`;

export const Cover = styled(Image)`
  /* border-radius: 0.5rem; */
`;

export const Title = styled.h2`
  color: ${(props) => props.theme.black.dark};
  font-weight: 500;
  margin: 0 1rem;
`;

export const Description = styled.p`
  color: ${(props) => props.theme.black.medium};
  font-size: 0.75rem;
  margin: 0 1rem;
  text-align: justify;
`;

export const Read = styled(Link)`
  color: ${(props) => props.theme.primary.medium};
  font-size: 0.75rem;
  height: 2rem;
  margin: 0 1rem;
  text-decoration: underline;
`;
