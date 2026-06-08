import { FC } from "react";
import { Header2 } from "~/components/Typography/Header2";
import { Paragraph } from "~/components/Typography/Paragraph";
import { Move } from "./Move";

export const metadata = {
  id: "cuban-salsa-dancing",
  minutes: 12,
  summary:
    "A practical guide to learning Cuban salsa dancing, from absolute beginner to advanced",
  tags: ["dance", "salsa", "cuban", "teaching", "progression"],
  title: "Cuban Salsa Dancing",
  timestamp: new Date(2026, 5, 7),
};

export const Content: FC = () => (
  <>
    <Paragraph>
      I've been dancing salsa for a month and a half, and it's become one of my
      favorite social activities. I've made new friends and stay fit. On a night
      I go dancing, I easily do twenty thousand steps. What I want to share here
      is how to learn salsa progressively, from absolute beginner to advanced
      moves. The moves are organized as a teaching ladder: each one builds on
      the last, so you know exactly what to drill next. Start from the basics,
      and the progression works for total beginners too.
    </Paragraph>

    <Header2>Move with the music</Header2>

    <Move
      description={
        <>
          (quick-quick-slow, the back-rock) is where you start. This teaches you
          to keep time and transfer weight cleanly.
        </>
      }
      name="Basic step"
      videoId="7XgmAPCX85A"
    />

    <Move
      description={
        <>
          (also called Pal Medio, Son Montuno, or Llevala Pa'bajo). Learn to
          stay in frame and move with the lead instead of steering yourself.
        </>
      }
      name="Closed-position basic"
      videoId="Qv5BKoV72nA"
    />

    <Move
      description={
        <>
          (open break), the signature Cuban basic. Both partners step back and
          forward together, creating space and connection at arm's length. This
          differs from other salsa styles where partners step in unison.
        </>
      }
      name="Guapea"
      videoId="YwxB1MSytYA"
    />

    <Header2>Guided turn and travel</Header2>

    <Move
      description={
        <>
          tests walking across on the lead (cross-body), trusting redirection
          over memory. The single most important follow skill.
        </>
      }
      name="Dile Que No"
      video={{
        endTime: [3, 56],
        startTime: [3, 51],
      }}
      videoId="Jexcy9LGKjo"
    />

    <Move
      description={
        <>tests a basic powered turn under the arm plus the Dile Que No exit.</>
      }
      name="Enchufla"
      video={{
        endTime: [2, 0],
        startTime: [1, 53],
      }}
      videoId="3tUcawE0Bhs"
    />

    <Move
      description={
        <>
          tests a softer turn signal and the arm untrap. It comes from the basic
          step Llevala Pa'bajo and is essentially a right turn for the follower
          that the leader initiates on 3.
        </>
      }
      name="Exhibe"
      video={{
        endTime: [1, 30],
        startTime: [1, 25],
      }}
      videoId="51lJ_32VRwc"
    />

    <Move
      description={<>tests a redirect turn with light spotting.</>}
      name="Sencillo"
      video={{
        endTime: [2, 36],
        startTime: [2, 19],
      }}
      videoId="cpOxtBZ7Dq8"
    />

    <Header2>Turn and travel</Header2>

    <Move
      description={
        <>
          her first <em>free</em> turn: sent out and must complete it solo. Huge
          milestone; many plateaus live here. It's the foundation for many
          intermediate patterns.
        </>
      }
      name="Vacilala"
      video={{
        endTime: [3, 5],
        startTime: [2, 44],
      }}
      videoId="pT1AmRJVtRY"
    />

    <Move
      description={
        <>
          tests chaining turns through a shoulder-tap without stopping between
          them.
        </>
      }
      name="Enchufla Doble"
      video={{
        endTime: [2, 4],
        startTime: [1, 53],
      }}
      videoId="6OxXNbCZmpA"
    />

    <Move
      description={
        <>
          tests turning while <em>you</em> also turn, so she can't just mirror
          you.
        </>
      }
      name="Enchufla con Vuelta"
      video={{
        endTime: [0, 16],
        startTime: [0, 8],
      }}
      videoId="SjUYUGv4f9o"
    />

    <Move
      description={
        <>
          tests holding a frame you build mid-move. It begins like an Enchufla
          but the leader creates a frame, turns to the right in a vuelta, then
          finishes with a cross-handed Dile Que No.
        </>
      }
      name="Evelyn"
      video={{
        endTime: [0, 31],
        startTime: [0, 21],
      }}
      videoId="cbkno_4beCQ"
    />

    <Header2>Hands over the head</Header2>

    <Move
      description={
        <>
          tests comfort with hands sweeping over the head and ducking. It starts
          with a Dile Que No followed by a vacila variation where the hands come
          up and over the leader's and follower's head.
        </>
      }
      name="Sombrero"
      video={{
        endTime: [3, 27],
        startTime: [3, 12],
      }}
      videoId="pY_sGnB_sTc"
    />

    <Move
      description={
        <>
          tests a traveling left turn <em>around</em> you on a curved line,
          which needs more than a 360° to get all the way around (harder than a
          straight turn).
        </>
      }
      name="Coca-Cola"
    />

    <Move
      description={<>tests a rhythm/texture change and playfulness.</>}
      name="Kentucky"
      videoId="sK1SlAIE0LA"
    />

    <Move
      description={<>tests reading a direction-change/peek redirect.</>}
      name="Adios"
    />

    <Header2>Multi-count knots (the Setenta family)</Header2>

    <Move
      description={
        <>
          tests following a hammerlock and unwind across several eights without
          anticipating. Its basic structure is built upon to create more complex
          patterns.
        </>
      }
      name="Setenta (70)"
      videoId="_B55w-0o0qw"
    />

    <Move
      description={<>the same, strung continuously.</>}
      name="Setenta Miami"
      videoId="TKcxJ8v_nh4"
    />

    <Move
      description={
        <>
          tests a new redirect; a fundamental intermediate move where the leader
          redirects the follower similar to a vacila.
        </>
      }
      name="Siete"
    />

    <Move
      description={<>tests the enganche (arm hook) inside the 70.</>}
      name="Setenta y Uno (71)"
      videoId="ufaUC31X8M0"
    />

    <Move
      description={<>tests further sequencing within the family.</>}
      name="Setenta y Dos (72)"
    />

    <Move
      description={
        <>
          tests turning out of the pattern with hands released; it has the same
          footwork as Setenta and Sencillo, but after the right-hand turn the
          leader lets go of the follower.
        </>
      }
      name="Doble Cero"
    />

    <Header2>Shadow position + very light leads</Header2>

    <Move
      description={
        <>
          tests dancing in shadow position and following with no face-to-face
          frame; el dos is a variation of el uno that also incorporates
          sombrero.
        </>
      }
      name="El Uno / El Dos"
    />

    <Move
      description={
        <>
          tests sensitivity to an extremely light lead (led almost on one
          finger). A classic Casino Miami move that starts in a Dile Que No and
          incorporates vacila and enchufla, so those basics matter first.
        </>
      }
      name="El Dedo"
    />

    <Move
      description={
        <>
          tests new arm shapes on a familiar base; it starts exactly like
          Setenta and incorporates Enchufla and Exhibe, introducing new hand and
          arm movements.
        </>
      }
      name="Corona"
    />

    <Header2>Combos and flair</Header2>

    <Move
      description={
        <>
          tests a longer flow with the arm-untrap; it incorporates Dile Que No,
          Evelyn, and the Exhibe turn, with the follower learning to untrap her
          left arm.
        </>
      }
      name="Flamenco"
      videoId="UffIzThsDYE"
    />

    <Move
      description={<>tests sequencing repeated head-arm moves.</>}
      name="Sombrero Doble"
    />

    <Move
      description={
        <>
          tests the dressed-up 70 with hook turns and advanced multi-eight
          tracking.
        </>
      }
      name="Setenta Complicado"
    />

    <Move
      description={
        <>tests stamina, memory, and trust through a long showy sequence.</>
      }
      name='Montaña Rusa ("roller coaster")'
    />
  </>
);
