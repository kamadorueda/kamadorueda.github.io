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
      the last, so you know exactly what to drill next.
    </Paragraph>

    <Header2>Move with the music</Header2>

    <Move name="Basic step">
      <Move.Description videoId="7XgmAPCX85A">
        (quick-quick-slow, the back-rock) is where you start. This teaches you
        to keep time and transfer weight cleanly.
      </Move.Description>
    </Move>

    <Move name="Closed-position basic">
      <Move.Description videoId="Qv5BKoV72nA">
        (also called Pal Medio, Son Montuno, or Llevala Pa'bajo). Learn to stay
        in frame and move with the lead instead of steering yourself.
      </Move.Description>
    </Move>

    <Move name="Guapea">
      <Move.Description videoId="YwxB1MSytYA">
        (open break), the signature Cuban basic. Both partners step back and
        forward together, creating space and connection at arm's length. This
        differs from other salsa styles where partners step in unison.
      </Move.Description>
    </Move>

    <Header2>Guided turn and travel</Header2>

    <Move name="Dile Que No">
      <Move.Description>
        tests walking across on the lead (cross-body), trusting redirection over
        memory. The single most important follow skill.
      </Move.Description>
      <Move.Video
        highlight={{ from: [3, 51], to: [3, 56] }}
        videoId="Jexcy9LGKjo"
      />
    </Move>

    <Move name="Enchufla">
      <Move.Description>
        tests a basic powered turn under the arm plus the Dile Que No exit.
      </Move.Description>
      <Move.Video
        highlight={{ from: [1, 53], to: [2, 0] }}
        videoId="3tUcawE0Bhs"
      />
    </Move>

    <Move name="Exhibe">
      <Move.Description>
        tests a softer turn signal and the arm untrap. It comes from the basic
        step Llevala Pa'bajo and is essentially a right turn for the follower
        that the leader initiates on 3.
      </Move.Description>
      <Move.Video
        highlight={{ from: [1, 25], to: [1, 30] }}
        videoId="51lJ_32VRwc"
      />
    </Move>

    <Move name="Sencillo">
      <Move.Description>
        tests a redirect turn with light spotting.
      </Move.Description>
      <Move.Video
        highlight={{ from: [2, 19], to: [2, 36] }}
        videoId="cpOxtBZ7Dq8"
      />
    </Move>

    <Header2>Turn and travel</Header2>

    <Move name="Vacilala">
      <Move.Description>
        her first <em>free</em> turn: sent out and must complete it solo. Huge
        milestone; many plateaus live here. It's the foundation for many
        intermediate patterns.
      </Move.Description>
      <Move.Video
        highlight={{ from: [2, 44], to: [3, 5] }}
        videoId="pT1AmRJVtRY"
      />
    </Move>

    <Move name="Enchufla Doble">
      <Move.Description>
        tests chaining turns through a shoulder-tap without stopping between
        them.
      </Move.Description>
      <Move.Video
        highlight={{ from: [1, 53], to: [2, 4] }}
        videoId="6OxXNbCZmpA"
      />
    </Move>

    <Move name="Enchufla con Vuelta">
      <Move.Description>
        tests turning while <em>you</em> also turn, so she can't just mirror
        you.
      </Move.Description>
      <Move.Video
        highlight={{ from: [0, 8], to: [0, 16] }}
        videoId="SjUYUGv4f9o"
      />
    </Move>

    <Move name="Evelyn">
      <Move.Description>
        tests holding a frame you build mid-move. It begins like an Enchufla but
        the leader creates a frame, turns to the right in a vuelta, then
        finishes with a cross-handed Dile Que No.
      </Move.Description>
      <Move.Video
        highlight={{ from: [0, 21], to: [0, 31] }}
        videoId="cbkno_4beCQ"
      />
    </Move>

    <Header2>Hands over the head</Header2>

    <Move name="Sombrero">
      <Move.Description>
        tests comfort with hands sweeping over the head and ducking. It starts
        with a Dile Que No followed by a vacila variation where the hands come
        up and over the leader's and follower's head.
      </Move.Description>
      <Move.Video
        highlight={{ from: [3, 12], to: [3, 27] }}
        videoId="pY_sGnB_sTc"
      />
    </Move>

    <Move name="Coca-Cola">
      <Move.Description>
        tests a traveling left turn <em>around</em> you on a curved line, which
        needs more than a 360° to get all the way around (harder than a straight
        turn).
      </Move.Description>
      <Move.Video
        highlight={{ from: [0, 38], to: [0, 53] }}
        videoId="UffIzThsDYE"
      />
    </Move>

    <Move name="Kentucky">
      <Move.Description>
        tests a rhythm/texture change and playfulness.
      </Move.Description>
      <Move.Video
        highlight={{ from: [1, 28], to: [1, 40] }}
        videoId="sK1SlAIE0LA"
      />
    </Move>

    <Move name="Adios">
      <Move.Description>
        tests reading a direction-change/peek redirect.
      </Move.Description>
      <Move.Video
        highlight={{ from: [1, 17], to: [1, 45] }}
        videoId="N5Yrm_ksDX0"
      />
    </Move>

    <Header2>Multi-count knots (the Setenta family)</Header2>

    <Move name="Setenta (70)">
      <Move.Description>
        tests following a hammerlock and unwind across several eights without
        anticipating. Its basic structure is built upon to create more complex
        patterns.
      </Move.Description>
      <Move.Video
        highlight={{ from: [2, 12], to: [2, 25] }}
        videoId="_B55w-0o0qw"
      />
    </Move>

    <Move name="Setenta (70) Miami">
      <Move.Description>the same, strung continuously.</Move.Description>
      <Move.Video
        highlight={{ from: [3, 52], to: [4, 15] }}
        videoId="TKcxJ8v_nh4"
      />
    </Move>

    <Move name="Siete (7)">
      <Move.Description>
        tests a new redirect; a fundamental intermediate move where the leader
        redirects the follower similar to a vacila.
      </Move.Description>
      <Move.Video
        highlight={{ from: [2, 50], to: [3, 10] }}
        videoId="H8-wYPlmHVU"
      />
    </Move>

    <Move name="Setenta y Uno (71)">
      <Move.Description>
        tests the enganche (arm hook) inside the 70.
      </Move.Description>
      <Move.Video
        highlight={{ from: [1, 47], to: [2, 14] }}
        videoId="ufaUC31X8M0"
      />
    </Move>

    <Move name="Setenta y Dos (72)">
      <Move.Description>
        tests further sequencing within the family.
      </Move.Description>
    </Move>

    <Move name="Doble Cero (00)">
      <Move.Description>
        tests turning out of the pattern with hands released; it has the same
        footwork as Setenta and Sencillo, but after the right-hand turn the
        leader lets go of the follower.
      </Move.Description>
    </Move>

    <Header2>Shadow position + very light leads</Header2>

    <Move name="El Uno (1) / El Dos (2)">
      <Move.Description>
        tests dancing in shadow position and following with no face-to-face
        frame; el dos is a variation of el uno that also incorporates sombrero.
      </Move.Description>
    </Move>

    <Move name="El Dedo">
      <Move.Description>
        tests sensitivity to an extremely light lead (led almost on one finger).
        A classic Casino Miami move that starts in a Dile Que No and
        incorporates vacila and enchufla, so those basics matter first.
      </Move.Description>
    </Move>

    <Move name="Corona">
      <Move.Description>
        tests new arm shapes on a familiar base; it starts exactly like Setenta
        and incorporates Enchufla and Exhibe, introducing new hand and arm
        movements.
      </Move.Description>
    </Move>

    <Header2>Combos and flair</Header2>

    <Move name="Flamenco">
      <Move.Description videoId="UffIzThsDYE">
        tests a longer flow with the arm-untrap; it incorporates Dile Que No,
        Evelyn, and the Exhibe turn, with the follower learning to untrap her
        left arm.
      </Move.Description>
    </Move>

    <Move name="Sombrero Doble">
      <Move.Description>
        tests sequencing repeated head-arm moves.
      </Move.Description>
    </Move>

    <Move name="Setenta (70) Complicado">
      <Move.Description>
        tests the dressed-up 70 with hook turns and advanced multi-eight
        tracking.
      </Move.Description>
    </Move>

    <Move name='Montaña Rusa ("roller coaster")'>
      <Move.Description>
        tests stamina, memory, and trust through a long showy sequence.
      </Move.Description>
    </Move>
  </>
);
