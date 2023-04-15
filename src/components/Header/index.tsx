import { Link, LinkGroup, SubTitle, Title } from "./styles";

export const Header = () => (
  <>
    <Title>Kevin Amado</Title>
    <SubTitle>Welcome to my personal website</SubTitle>
    <LinkGroup>
      <Link
        href="https://linkedin.com/in/kamadorueda"
        rel="noopener noreferrer"
        target="_blank"
      >
        LinkedIn
      </Link>
      <Link
        href="https://github.com/kamadorueda"
        rel="noopener noreferrer"
        target="_blank"
      >
        GitHub
      </Link>
      <Link
        href="mailto:kamadorueda@gmail.com"
        rel="noopener noreferrer"
        target="_blank"
      >
        Email
      </Link>
    </LinkGroup>
  </>
);
