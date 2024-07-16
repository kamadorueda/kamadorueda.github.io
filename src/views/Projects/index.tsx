import { FC } from "react";
import { Helmet } from "react-helmet";
import { Body } from "~/components/Body";
import { Footer } from "~/components/Footer";
import { Main } from "~/components/Main";
import { Nav } from "~/components/Nav";
import {
  ExternalLink,
  Header,
  Header2,
  ListItem,
  Paragraph,
  UnorderedList,
} from "~/components/Typography";

type Project = {
  name: string;
  url: string;
  description: string;
  icon?: string;
};

const PERSONAL_PROJECTS: readonly Project[] = [
  {
    name: "Alejandra",
    url: "https://github.com/kamadorueda/alejandra",
    description: "The uncompromising Nix code formatter",
    icon: "rust",
  },
  {
    name: "Makes",
    url: "https://github.com/fluidattacks/makes",
    description: "A software supply chain framework powered by Nix",
    icon: "nix",
  },
  {
    name: "Machine",
    url: "https://github.com/kamadorueda/machine",
    description: "My OS, development tools, and dotfiles, as code",
    icon: "nix",
  },
  {
    name: "Nixel",
    url: "https://github.com/kamadorueda/nixel",
    description: "Parser for the Nix Expressions Language",
    icon: "rust",
  },
  {
    name: "Aioextensions",
    url: "https://github.com/fluidattacks/aioextensions",
    description: "High performance functions to work with the async IO",
    icon: "python",
  },
] as const;

const PROFESSIONAL_CONTRIBUTIONS: readonly Project[] = [
  {
    name: "Fluid Attacks",
    url: "https://gitlab.com/fluidattacks/universe/-/merge_requests?scope=all&state=all&author_username=kamadoatfluid",
    description: "Core software repository",
  },
] as const;

const OPEN_SOURCE_CONTRIBUTIONS: readonly Project[] = [
  {
    name: "Nix",
    url: "https://github.com/NixOS/nix",
    description: "The purely functional package manager",
    icon: "cpp",
  },
  {
    name: "Nixpkgs",
    url: "https://github.com/NixOS/nixpkgs",
    description: "Packages collection & NixOS",
    icon: "nix",
  },
  {
    name: "ts-rs",
    url: "https://github.com/Aleph-Alpha/ts-rs",
    description: "Generate TypeScript bindings from Rust types",
    icon: "rust",
  },
  {
    name: "rust-mime-sniffer",
    url: "https://github.com/flier/rust-mime-sniffer",
    description: "Detecting mime types base on content sniffer",
    icon: "rust",
  },
  {
    name: "chrono",
    url: "https://github.com/chronotope/chrono",
    description: "Date and time library for Rust",
    icon: "rust",
  },
] as const;

const OTHER_PERSONAL_PROJECTS: readonly Project[] = [
  {
    name: "Mailmap Linter",
    url: "https://github.com/kamadorueda/mailmap-linter",
    description:
      "Small, easy to use, easy to install tool to lint your git mailmap",
    icon: "bash",
  },
  {
    name: "Santiago",
    url: "https://github.com/kamadorueda/santiago",
    description: "Lexing and parsing toolkit for Rust",
    icon: "rust",
  },
  {
    name: "Tracers",
    url: "https://github.com/fluidattacks/tracers",
    description: "Open-Source APM (Application monitoring) project",
    icon: "python",
  },
  {
    name: "B3",
    url: "https://github.com/kamadorueda/b3",
    description: "Reproducible builds, dev envs and deployments",
    icon: "rust",
  },
  {
    name: "modern-terminal",
    url: "https://github.com/kamadorueda/modern-terminal",
    description:
      "Rust library for rich text and beautiful formatting in the terminal",
    icon: "rust",
  },
  {
    name: "four-shells",
    url: "https://github.com/kamadorueda/four-shells/tree/ee5354474c2b467339c0fad8ce10670944cf49b7",
    description:
      "Technologies around Nix and IPFS that are published under an Open Source License",
    icon: "python",
  },
  {
    name: "nixpkgs-db",
    url: "https://github.com/on-nix/pkgs",
    description:
      "A database with packages from all versions, all commits and all channels",
    icon: "python",
  },
  {
    name: "Python on Nix",
    url: "https://github.com/on-nix/python",
    description: "Extensive collection of Python projects from PyPI, for Nix!",
    icon: "python",
  },
  {
    name: "metaloaders",
    url: "https://github.com/kamadorueda/metaloaders",
    description: "JSON/YAML loaders with column and line numbers",
    icon: "python",
  },
  {
    name: "oblivion",
    url: "https://github.com/kamadorueda/metaloaders",
    description: "RSA encryption and decryption client",
    icon: "python",
  },
] as const;

export const Projects: FC = () => (
  <Body>
    <Helmet>
      <title>Kevin Amado's Projects</title>
      <meta content="Kevin Amado's Projects" name="og:title" />
      <meta content="GitHub projects." name="og:description" />
      <meta content="website" name="og:type" />
    </Helmet>

    <Nav />

    <Main>
      <Header>Projects</Header>
      <Paragraph>
        I’ve worked on tons of projects over the years but here are the ones
        that I can show you.
      </Paragraph>

      <section>
        <Header2>Professional Contributions</Header2>
        <Paragraph>
          Some of my previous employers' code is public. Here are over 2500 pull
          requests I made during my time there:
        </Paragraph>
        <UnorderedList>
          {PROFESSIONAL_CONTRIBUTIONS.map((project) => (
            <ListItem key={project.name}>
              <Project {...project} />
            </ListItem>
          ))}
        </UnorderedList>
      </section>

      <section>
        <Header2>Personal Projects</Header2>
        <Paragraph>
          These are some of my personal projects that I’m most proud of. All of
          them are open-source, so if you see something that piques your
          interest, check out the code and contribute if you have ideas for how
          it can be improved.
        </Paragraph>
        <UnorderedList>
          {PERSONAL_PROJECTS.map((project) => (
            <ListItem key={project.name}>
              <Project {...project} />
            </ListItem>
          ))}
        </UnorderedList>
      </section>

      <section>
        <Header2>Open Source Contributions</Header2>
        <Paragraph>
          Other people's code offers a great opportunity to learn new paradigms
          and expose yourself to other domains. These are some projects I didn't
          author but that I've tried to make better with my contributions:
        </Paragraph>
        <UnorderedList>
          {OPEN_SOURCE_CONTRIBUTIONS.map((project) => (
            <ListItem key={project.name}>
              <Project
                {...project}
                url={project.url + "/pulls?q=is%3Apr+author%3Akamadorueda"}
              />
            </ListItem>
          ))}
        </UnorderedList>
      </section>

      <section>
        <Header2>Other Open Source Contributions</Header2>
        <Paragraph>
          Some of my projects didn't stick, but they definitely have an
          interesting use-case, and who knows, maybe one day I'll figure out a
          better way.
        </Paragraph>
        <UnorderedList>
          {OTHER_PERSONAL_PROJECTS.map((project) => (
            <ListItem key={project.name}>
              <Project {...project} />
            </ListItem>
          ))}
        </UnorderedList>
      </section>

      <Paragraph>
        Plus many others, which are either private or I've forgotten to include.
      </Paragraph>
    </Main>
    <Footer />

    {/* SVG Icons from https://simpleicons.org/ */}
    <svg className="hidden" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <symbol id="bash" viewBox="0 0 24 24">
          <path d="M21.038,4.9l-7.577-4.498C13.009,0.134,12.505,0,12,0c-0.505,0-1.009,0.134-1.462,0.403L2.961,4.9 C2.057,5.437,1.5,6.429,1.5,7.503v8.995c0,1.073,0.557,2.066,1.462,2.603l7.577,4.497C10.991,23.866,11.495,24,12,24 c0.505,0,1.009-0.134,1.461-0.402l7.577-4.497c0.904-0.537,1.462-1.529,1.462-2.603V7.503C22.5,6.429,21.943,5.437,21.038,4.9z M15.17,18.946l0.013,0.646c0.001,0.078-0.05,0.167-0.111,0.198l-0.383,0.22c-0.061,0.031-0.111-0.007-0.112-0.085L14.57,19.29 c-0.328,0.136-0.66,0.169-0.872,0.084c-0.04-0.016-0.057-0.075-0.041-0.142l0.139-0.584c0.011-0.046,0.036-0.092,0.069-0.121 c0.012-0.011,0.024-0.02,0.036-0.026c0.022-0.011,0.043-0.014,0.062-0.006c0.229,0.077,0.521,0.041,0.802-0.101 c0.357-0.181,0.596-0.545,0.592-0.907c-0.003-0.328-0.181-0.465-0.613-0.468c-0.55,0.001-1.064-0.107-1.072-0.917 c-0.007-0.667,0.34-1.361,0.889-1.8l-0.007-0.652c-0.001-0.08,0.048-0.168,0.111-0.2l0.37-0.236 c0.061-0.031,0.111,0.007,0.112,0.087l0.006,0.653c0.273-0.109,0.511-0.138,0.726-0.088c0.047,0.012,0.067,0.076,0.048,0.151 l-0.144,0.578c-0.011,0.044-0.036,0.088-0.065,0.116c-0.012,0.012-0.025,0.021-0.038,0.028c-0.019,0.01-0.038,0.013-0.057,0.009 c-0.098-0.022-0.332-0.073-0.699,0.113c-0.385,0.195-0.52,0.53-0.517,0.778c0.003,0.297,0.155,0.387,0.681,0.396 c0.7,0.012,1.003,0.318,1.01,1.023C16.105,17.747,15.736,18.491,15.17,18.946z M19.143,17.859c0,0.06-0.008,0.116-0.058,0.145 l-1.916,1.164c-0.05,0.029-0.09,0.004-0.09-0.056v-0.494c0-0.06,0.037-0.093,0.087-0.122l1.887-1.129 c0.05-0.029,0.09-0.004,0.09,0.056V17.859z M20.459,6.797l-7.168,4.427c-0.894,0.523-1.553,1.109-1.553,2.187v8.833 c0,0.645,0.26,1.063,0.66,1.184c-0.131,0.023-0.264,0.039-0.398,0.039c-0.42,0-0.833-0.114-1.197-0.33L3.226,18.64 c-0.741-0.44-1.201-1.261-1.201-2.142V7.503c0-0.881,0.46-1.702,1.201-2.142l7.577-4.498c0.363-0.216,0.777-0.33,1.197-0.33 c0.419,0,0.833,0.114,1.197,0.33l7.577,4.498c0.624,0.371,1.046,1.013,1.164,1.732C21.686,6.557,21.12,6.411,20.459,6.797z" />
        </symbol>

        <symbol id="cpp" viewBox="0 0 24 24">
          <path d="M22.394 6c-.167-.29-.398-.543-.652-.69L12.926.22c-.509-.294-1.34-.294-1.848 0L2.26 5.31c-.508.293-.923 1.013-.923 1.6v10.18c0 .294.104.62.271.91.167.29.398.543.652.69l8.816 5.09c.508.293 1.34.293 1.848 0l8.816-5.09c.254-.147.485-.4.652-.69.167-.29.27-.616.27-.91V6.91c.003-.294-.1-.62-.268-.91zM12 19.11c-3.92 0-7.109-3.19-7.109-7.11 0-3.92 3.19-7.11 7.11-7.11a7.133 7.133 0 016.156 3.553l-3.076 1.78a3.567 3.567 0 00-3.08-1.78A3.56 3.56 0 008.444 12 3.56 3.56 0 0012 15.555a3.57 3.57 0 003.08-1.778l3.078 1.78A7.135 7.135 0 0112 19.11zm7.11-6.715h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79zm2.962 0h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79z" />
        </symbol>

        <symbol id="nix" viewBox="0 0 24 24">
          <path d="M7.352 1.592l-1.364.002L5.32 2.75l1.557 2.713-3.137-.008-1.32 2.34H14.11l-1.353-2.332-3.192-.006-2.214-3.865zm6.175 0l-2.687.025 5.846 10.127 1.341-2.34-1.59-2.765 2.24-3.85-.683-1.182h-1.336l-1.57 2.705-1.56-2.72zm6.887 4.195l-5.846 10.125 2.696-.008 1.601-2.76 4.453.016.682-1.183-.666-1.157-3.13-.008L21.778 8.1l-1.365-2.313zM9.432 8.086l-2.696.008-1.601 2.76-4.453-.016L0 12.02l.666 1.157 3.13.008-1.575 2.71 1.365 2.315L9.432 8.086zM7.33 12.25l-.006.01-.002-.004-1.342 2.34 1.59 2.765-2.24 3.85.684 1.182H7.35l.004-.006h.001l1.567-2.698 1.558 2.72 2.688-.026-.004-.006h.01L7.33 12.25zm2.55 3.93l1.354 2.332 3.192.006 2.215 3.865 1.363-.002.668-1.156-1.557-2.713 3.137.008 1.32-2.34H9.881Z" />
        </symbol>

        <symbol id="python" viewBox="0 0 24 24">
          <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z" />
        </symbol>

        <symbol id="rust" viewBox="0 0 24 24">
          <path d="M23.8346 11.7033l-1.0073-.6236a13.7268 13.7268 0 00-.0283-.2936l.8656-.8069a.3483.3483 0 00-.1154-.578l-1.1066-.414a8.4958 8.4958 0 00-.087-.2856l.6904-.9587a.3462.3462 0 00-.2257-.5446l-1.1663-.1894a9.3574 9.3574 0 00-.1407-.2622l.49-1.0761a.3437.3437 0 00-.0274-.3361.3486.3486 0 00-.3006-.154l-1.1845.0416a6.7444 6.7444 0 00-.1873-.2268l.2723-1.153a.3472.3472 0 00-.417-.4172l-1.1532.2724a14.0183 14.0183 0 00-.2278-.1873l.0415-1.1845a.3442.3442 0 00-.49-.328l-1.076.491c-.0872-.0476-.1742-.0952-.2623-.1407l-.1903-1.1673A.3483.3483 0 0016.256.955l-.9597.6905a8.4867 8.4867 0 00-.2855-.086l-.414-1.1066a.3483.3483 0 00-.5781-.1154l-.8069.8666a9.2936 9.2936 0 00-.2936-.0284L12.2946.1683a.3462.3462 0 00-.5892 0l-.6236 1.0073a13.7383 13.7383 0 00-.2936.0284L9.9803.3374a.3462.3462 0 00-.578.1154l-.4141 1.1065c-.0962.0274-.1903.0567-.2855.086L7.744.955a.3483.3483 0 00-.5447.2258L7.009 2.348a9.3574 9.3574 0 00-.2622.1407l-1.0762-.491a.3462.3462 0 00-.49.328l.0416 1.1845a7.9826 7.9826 0 00-.2278.1873L3.8413 3.425a.3472.3472 0 00-.4171.4171l.2713 1.1531c-.0628.075-.1255.1509-.1863.2268l-1.1845-.0415a.3462.3462 0 00-.328.49l.491 1.0761a9.167 9.167 0 00-.1407.2622l-1.1662.1894a.3483.3483 0 00-.2258.5446l.6904.9587a13.303 13.303 0 00-.087.2855l-1.1065.414a.3483.3483 0 00-.1155.5781l.8656.807a9.2936 9.2936 0 00-.0283.2935l-1.0073.6236a.3442.3442 0 000 .5892l1.0073.6236c.008.0982.0182.1964.0283.2936l-.8656.8079a.3462.3462 0 00.1155.578l1.1065.4141c.0273.0962.0567.1914.087.2855l-.6904.9587a.3452.3452 0 00.2268.5447l1.1662.1893c.0456.088.0922.1751.1408.2622l-.491 1.0762a.3462.3462 0 00.328.49l1.1834-.0415c.0618.0769.1235.1528.1873.2277l-.2713 1.1541a.3462.3462 0 00.4171.4161l1.153-.2713c.075.0638.151.1255.2279.1863l-.0415 1.1845a.3442.3442 0 00.49.327l1.0761-.49c.087.0486.1741.0951.2622.1407l.1903 1.1662a.3483.3483 0 00.5447.2268l.9587-.6904a9.299 9.299 0 00.2855.087l.414 1.1066a.3452.3452 0 00.5781.1154l.8079-.8656c.0972.0111.1954.0203.2936.0294l.6236 1.0073a.3472.3472 0 00.5892 0l.6236-1.0073c.0982-.0091.1964-.0183.2936-.0294l.8069.8656a.3483.3483 0 00.578-.1154l.4141-1.1066a8.4626 8.4626 0 00.2855-.087l.9587.6904a.3452.3452 0 00.5447-.2268l.1903-1.1662c.088-.0456.1751-.0931.2622-.1407l1.0762.49a.3472.3472 0 00.49-.327l-.0415-1.1845a6.7267 6.7267 0 00.2267-.1863l1.1531.2713a.3472.3472 0 00.4171-.416l-.2713-1.1542c.0628-.0749.1255-.1508.1863-.2278l1.1845.0415a.3442.3442 0 00.328-.49l-.49-1.076c.0475-.0872.0951-.1742.1407-.2623l1.1662-.1893a.3483.3483 0 00.2258-.5447l-.6904-.9587.087-.2855 1.1066-.414a.3462.3462 0 00.1154-.5781l-.8656-.8079c.0101-.0972.0202-.1954.0283-.2936l1.0073-.6236a.3442.3442 0 000-.5892zm-6.7413 8.3551a.7138.7138 0 01.2986-1.396.714.714 0 11-.2997 1.396zm-.3422-2.3142a.649.649 0 00-.7715.5l-.3573 1.6685c-1.1035.501-2.3285.7795-3.6193.7795a8.7368 8.7368 0 01-3.6951-.814l-.3574-1.6684a.648.648 0 00-.7714-.499l-1.473.3158a8.7216 8.7216 0 01-.7613-.898h7.1676c.081 0 .1356-.0141.1356-.088v-2.536c0-.074-.0536-.0881-.1356-.0881h-2.0966v-1.6077h2.2677c.2065 0 1.1065.0587 1.394 1.2088.0901.3533.2875 1.5044.4232 1.8729.1346.413.6833 1.2381 1.2685 1.2381h3.5716a.7492.7492 0 00.1296-.0131 8.7874 8.7874 0 01-.8119.9526zM6.8369 20.024a.714.714 0 11-.2997-1.396.714.714 0 01.2997 1.396zM4.1177 8.9972a.7137.7137 0 11-1.304.5791.7137.7137 0 011.304-.579zm-.8352 1.9813l1.5347-.6824a.65.65 0 00.33-.8585l-.3158-.7147h1.2432v5.6025H3.5669a8.7753 8.7753 0 01-.2834-3.348zm6.7343-.5437V8.7836h2.9601c.153 0 1.0792.1772 1.0792.8697 0 .575-.7107.7815-1.2948.7815zm10.7574 1.4862c0 .2187-.008.4363-.0243.651h-.9c-.09 0-.1265.0586-.1265.1477v.413c0 .973-.5487 1.1846-1.0296 1.2382-.4576.0517-.9648-.1913-1.0275-.4717-.2704-1.5186-.7198-1.8436-1.4305-2.4034.8817-.5599 1.799-1.386 1.799-2.4915 0-1.1936-.819-1.9458-1.3769-2.3153-.7825-.5163-1.6491-.6195-1.883-.6195H5.4682a8.7651 8.7651 0 014.907-2.7699l1.0974 1.151a.648.648 0 00.9182.0213l1.227-1.1743a8.7753 8.7753 0 016.0044 4.2762l-.8403 1.8982a.652.652 0 00.33.8585l1.6178.7188c.0283.2875.0425.577.0425.8717zm-9.3006-9.5993a.7128.7128 0 11.984 1.0316.7137.7137 0 01-.984-1.0316zm8.3389 6.71a.7107.7107 0 01.9395-.3625.7137.7137 0 11-.9405.3635z" />
        </symbol>
      </defs>
    </svg>
  </Body>
);

const Project: FC<Project> = (props) => (
  <ExternalLink to={props.url}>
    {props.icon && (
      <svg aria-hidden className="mr-2 inline h-4 w-4" role="img">
        <use xlinkHref={`#${props.icon}`} />
      </svg>
    )}
    {props.name}: {props.description}.
  </ExternalLink>
);
