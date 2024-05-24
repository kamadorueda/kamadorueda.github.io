import { FC } from "react";
import { tw } from "~/tw";
import { Koi } from "./Koi";
import { Orca } from "./Orca";
import { Avocado } from "./Avocado";
import { Ladybug } from "./Ladybug";
import { Transition } from "~/components/Transition";
import { Nav } from "~/components/Nav";
import { Body } from "~/components/Body";

const link = tw(
  "group block",
  // Focus
  "focus-visible:border-2 focus-visible:border-blue-500 focus-visible:fill-blue-500 focus-visible:p-1 focus-visible:font-bold focus-visible:outline-none",
);

const image = tw(
  "object-scale-up  w-full rounded-2xl shadow transition lg:grayscale",
  // Hover
  "group-hover:grayscale-0",
  // Focus
  "group-focus-visible:grayscale-0",
);

const caption = tw(
  "block text-center text-gray-900",
  // Hover
  "group-hover:font-bold",
  // Focus
  "group-focus-visible:font-bold",
);

export const Gallery: FC = () => (
  <Transition>
    <Body>
      <Nav />

      <main className="mt-4 lg:mt-8">
        <h1 className="sr-only">Gallery</h1>
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:gap-8">
          <li>
            <a className={link} href={Koi._3000x4000}>
              <picture>
                <source media="(max-width: 300px)" srcSet={Koi._300x400} />
                <source media="(max-width: 600px)" srcSet={Koi._600x800} />
                <source media="(max-width: 1200px)" srcSet={Koi._1200x1600} />
                <img
                  loading="lazy"
                  className={image}
                  alt="A koi fish Kevin painted"
                  src={Koi._3000x4000}
                />
              </picture>
              <span aria-hidden className={caption}>
                Koi Fish
              </span>
            </a>
          </li>
          <li>
            <a className={link} href={Orca._3000x4000}>
              <picture>
                <source media="(max-width: 300px)" srcSet={Orca._300x400} />
                <source media="(max-width: 600px)" srcSet={Orca._600x800} />
                <source media="(max-width: 1200px)" srcSet={Orca._1200x1600} />
                <img
                  loading="lazy"
                  className={image}
                  alt="An Orca Kevin painted"
                  src={Orca._3000x4000}
                />
              </picture>
              <span aria-hidden className={caption}>
                Orca
              </span>
            </a>
          </li>
          <li>
            <a className={link} href={Avocado._2400x3200}>
              <picture>
                <source media="(max-width: 300px)" srcSet={Avocado._300x400} />
                <source media="(max-width: 600px)" srcSet={Avocado._600x800} />
                <source
                  media="(max-width: 1200px)"
                  srcSet={Avocado._1200x1600}
                />
                <img
                  loading="lazy"
                  className={image}
                  alt="An avocado Kevin painted"
                  src={Avocado._2400x3200}
                />
                <span aria-hidden className={caption}>
                  Avocado
                </span>
              </picture>
            </a>
          </li>
          <li>
            <a className={link} href={Ladybug._3000x4000}>
              <picture>
                <source media="(max-width: 300px)" srcSet={Ladybug._300x400} />
                <source media="(max-width: 600px)" srcSet={Ladybug._600x800} />
                <source
                  media="(max-width: 1200px)"
                  srcSet={Ladybug._1200x1600}
                />
                <img
                  loading="lazy"
                  className={image}
                  alt="A ladybug Kevin painted"
                  src={Ladybug._3000x4000}
                />
                <span aria-hidden className={caption}>
                  Ladybug
                </span>
              </picture>
            </a>
          </li>
        </ul>
      </main>
    </Body>
  </Transition>
);
