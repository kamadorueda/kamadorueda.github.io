import { Avocado } from "./Avocado";
import { Koi } from "./Koi";
import { Ladybug } from "./Ladybug";
import { Orca } from "./Orca";
import { FC } from "react";
import { Helmet } from "react-helmet";
import { Body } from "~/components/Body";
import { Main } from "~/components/Main";
import { Nav } from "~/components/Nav";
import { tw } from "~/tw";

const link = tw(
  "group block rounded p-2 transition",
  // Focus
  "focus-visible:outline focus-visible:outline-1 focus-visible:outline-blue-500",
  // Hover
  "hover:bg-slate-50",
);

const heading = tw("text-center text-xl font-bold text-slate-900");

const image = tw(
  "object-scale-up w-full transition lg:grayscale",
  // Focus
  "group-focus-visible:grayscale-0",
  // Hover
  "group-hover:grayscale-0",
);

export const Gallery: FC = () => (
  <Body>
    <Helmet>
      <title>Kevin Amado's Paintings</title>
      <meta content="Kevin Amado's Paintings" name="og:title" />
      <meta content="Acrylic paintings." name="og:description" />
      <meta content="website" name="og:type" />
    </Helmet>

    <Nav />

    <Main>
      <h1 className="sr-only">Gallery</h1>
      <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:gap-8">
        <li>
          <a className={link} href={Koi._3000x4000}>
            <h2 className={heading}>Koi Fish</h2>
            <picture>
              <source media="(max-width: 300px)" srcSet={Koi._300x400} />
              <source media="(max-width: 600px)" srcSet={Koi._600x800} />
              <source media="(max-width: 1200px)" srcSet={Koi._1200x1600} />
              <img
                alt="A koi fish Kevin painted"
                className={image}
                loading="lazy"
                src={Koi._3000x4000}
              />
            </picture>
          </a>
        </li>
        <li>
          <a className={link} href={Orca._3000x4000}>
            <h2 className={heading}>Orca</h2>
            <picture>
              <source media="(max-width: 300px)" srcSet={Orca._300x400} />
              <source media="(max-width: 600px)" srcSet={Orca._600x800} />
              <source media="(max-width: 1200px)" srcSet={Orca._1200x1600} />
              <img
                alt="An Orca Kevin painted"
                className={image}
                loading="lazy"
                src={Orca._3000x4000}
              />
            </picture>
          </a>
        </li>
        <li>
          <a className={link} href={Avocado._2400x3200}>
            <h2 className={heading}>Avocado</h2>
            <picture>
              <source media="(max-width: 300px)" srcSet={Avocado._300x400} />
              <source media="(max-width: 600px)" srcSet={Avocado._600x800} />
              <source media="(max-width: 1200px)" srcSet={Avocado._1200x1600} />
              <img
                alt="An avocado Kevin painted"
                className={image}
                loading="lazy"
                src={Avocado._2400x3200}
              />
            </picture>
          </a>
        </li>
        <li>
          <a className={link} href={Ladybug._3000x4000}>
            <h2 className={heading}>Ladybug</h2>
            <picture>
              <source media="(max-width: 300px)" srcSet={Ladybug._300x400} />
              <source media="(max-width: 600px)" srcSet={Ladybug._600x800} />
              <source media="(max-width: 1200px)" srcSet={Ladybug._1200x1600} />
              <img
                alt="A ladybug Kevin painted"
                className={image}
                loading="lazy"
                src={Ladybug._3000x4000}
              />
            </picture>
          </a>
        </li>
      </ul>
    </Main>
  </Body>
);
