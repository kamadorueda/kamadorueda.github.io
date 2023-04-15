import styled from "styled-components";

export const Title = styled.h1`
  color: ${(props) => props.theme.black.dark};
  font-size: 2rem;
  font-weight: 500;
  position: sticky;
  text-align: center;
`;

export const SubTitle = styled.span`
  color: ${(props) => props.theme.black.medium};
  position: sticky;
  text-align: center;
`;

export const LinkGroup = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  padding-bottom: 0.5rem;
  padding-top: 1rem;
  position: sticky;
`;

export const Link = styled.a`
  align-items: center;
  border-color: ${(props) => props.theme.primary.medium};
  border-radius: 0.5rem;
  border-style: solid;
  border-width: 0.0625rem;
  color: ${(props) => props.theme.primary.medium};
  display: flex;
  height: 2rem;
  justify-content: center;
  padding: 0 1rem;

  :hover {
    text-decoration: underline;
  }
`;
