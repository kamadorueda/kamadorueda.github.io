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
      <Move.Description>
        The foundational step pattern combining three quick-quick-slow counts
        with weight transfer through Cuban motion. This back-rock pattern
        establishes the rhythmic foundation underlying all other Cuban salsa
        patterns.
      </Move.Description>
    </Move>

    <Move name="Closed-position basic">
      <Move.Description>
        The Cuban basic step danced in closed partnership position where both
        dancers move together with consistent frame, allowing the follower to
        respond to the leader's movement and lead rather than relying on memory
        or self-direction.
      </Move.Description>
    </Move>

    <Move name="Guapea">
      <Move.Description>
        The signature Cuban basic performed in open position where partners step
        in opposing directions simultaneously (leader forward as follower steps
        back, then vice versa) rather than stepping together, creating
        characteristic space and connection at arm's length.
      </Move.Description>
    </Move>

    <Header2>Guided turn and travel</Header2>

    <Move name="Dile Que No">
      <Move.Description>
        A cross-body movement where the follower walks across in front of the
        leader while rotating on a curved path, changing direction through
        responsive redirects rather than predetermined steps, establishing the
        fundamental connection between leader signal and follower trust.
      </Move.Description>
      <Move.Video
        highlight={{ from: [3, 51], to: [3, 56] }}
        videoId="Jexcy9LGKjo"
      />
    </Move>

    <Move name="Enchufla">
      <Move.Description>
        An opposite-directional turning pattern where the follower turns left
        while the leader turns right, with the arm passing overhead and
        transitioning into a Dile Que No exit that reorients both dancers.
      </Move.Description>
      <Move.Video
        highlight={{ from: [1, 53], to: [2, 0] }}
        videoId="3tUcawE0Bhs"
      />
    </Move>

    <Move name="Exhibe">
      <Move.Description>
        A right turn for the follower initiated with a softer lead signal,
        teaching arm untrap technique where the follower learns to free and
        reposition her arm after the turn while maintaining the oval walking
        pattern.
      </Move.Description>
      <Move.Video
        highlight={{ from: [1, 25], to: [1, 30] }}
        videoId="51lJ_32VRwc"
      />
    </Move>

    <Move name="Sencillo">
      <Move.Description>
        A turn executed with minimal lead pressure and a redirect mechanism,
        where the follower maintains visual spotting to manage rotation while
        responding to subtle directional changes from the leader.
      </Move.Description>
      <Move.Video
        highlight={{ from: [2, 19], to: [2, 36] }}
        videoId="cpOxtBZ7Dq8"
      />
    </Move>

    <Header2>Turn and travel</Header2>

    <Move name="Vacilala">
      <Move.Description>
        Two successive walking right turns within an 8-count cycle where the
        follower completes the first full rotation and most of the second
        rotation independently, establishing the foundational intermediate skill
        of executing turns without continuous lead support.
      </Move.Description>
      <Move.Video
        highlight={{ from: [2, 44], to: [3, 5] }}
        videoId="pT1AmRJVtRY"
      />
    </Move>

    <Move name="Enchufla Doble">
      <Move.Description>
        Two consecutive Enchufla turns executed with a shoulder-tap connection
        that allows seamless transition between rotations, testing the
        follower's ability to chain powered turns without stopping.
      </Move.Description>
      <Move.Video
        highlight={{ from: [1, 53], to: [2, 4] }}
        videoId="6OxXNbCZmpA"
      />
    </Move>

    <Move name="Enchufla con Vuelta">
      <Move.Description>
        An Enchufla where the leader executes his own simultaneous turn,
        preventing the follower from mirroring the leader's movement and
        requiring her to execute the turn independently based on hand lead
        connection.
      </Move.Description>
      <Move.Video
        highlight={{ from: [0, 8], to: [0, 16] }}
        videoId="SjUYUGv4f9o"
      />
    </Move>

    <Move name="Evelyn">
      <Move.Description>
        A move that begins like an Enchufla but transitions into a frame the
        leader creates mid-movement, allowing the leader to execute his own
        right turn while maintaining connection before finishing with a
        cross-handed Dile Que No.
      </Move.Description>
      <Move.Video
        highlight={{ from: [0, 21], to: [0, 31] }}
        videoId="cbkno_4beCQ"
      />
    </Move>

    <Header2>Hands over the head</Header2>

    <Move name="Sombrero">
      <Move.Description>
        A figure beginning with Dile Que No that transitions into a crossed-hand
        overhead arm sweep resembling a hat, testing comfort with hand proximity
        to the head and synchronized arm positioning.
      </Move.Description>
      <Move.Video
        highlight={{ from: [3, 12], to: [3, 27] }}
        videoId="pY_sGnB_sTc"
      />
    </Move>

    <Move name="Coca-Cola">
      <Move.Description>
        A left turn executed while traveling around the leader on a curved path,
        requiring more than a full rotation to complete the circumnavigation and
        presenting greater spatial complexity than straight-axis turns.
      </Move.Description>
      <Move.Video
        highlight={{ from: [0, 38], to: [0, 53] }}
        videoId="UffIzThsDYE"
      />
    </Move>

    <Move name="Kentucky">
      <Move.Description>
        An Enchufla-based figure with neck and shoulder-level leading that
        creates decorative hand patterns around the follower's shoulders while
        maintaining playful two-handed connection.
      </Move.Description>
      <Move.Video
        highlight={{ from: [1, 28], to: [1, 40] }}
        videoId="sK1SlAIE0LA"
      />
    </Move>

    <Move name="Adios">
      <Move.Description>
        A tight carousel-like turn where the leader positions himself centrally
        and both dancers rotate around a common axis, with the follower reading
        directional changes from the leader's subtle frame signals.
      </Move.Description>
      <Move.Video
        highlight={{ from: [1, 17], to: [1, 45] }}
        videoId="N5Yrm_ksDX0"
      />
    </Move>

    <Header2>Multi-count knots (the Setenta family)</Header2>

    <Move name="Setenta (70)">
      <Move.Description>
        A foundational three-count-of-eight figure combining a Hammerlock
        opening, a behind-the-back repositioning phrase, and an Enchufla exit
        that serves as the base structure for numerous intermediate
        combinations.
      </Move.Description>
      <Move.Video
        highlight={{ from: [2, 12], to: [2, 25] }}
        videoId="_B55w-0o0qw"
      />
    </Move>

    <Move name="Setenta (70) Miami">
      <Move.Description>
        Multiple consecutive Setenta patterns strung together in continuous
        sequence, allowing the base three-count-of-eight structure to repeat
        indefinitely through musical phrases.
      </Move.Description>
      <Move.Video
        highlight={{ from: [3, 52], to: [4, 15] }}
        videoId="TKcxJ8v_nh4"
      />
    </Move>

    <Move name="Siete (7)">
      <Move.Description>
        A redirect pattern where the leader uses a low, wrapped hand connection
        to redirect the follower similar to a Vacilala, requiring precise lead
        calibration to achieve smooth execution.
      </Move.Description>
      <Move.Video
        highlight={{ from: [2, 50], to: [3, 10] }}
        videoId="H8-wYPlmHVU"
      />
    </Move>

    <Move name="Setenta y Uno (71)">
      <Move.Description>
        A short two-count-of-eight combination extending Setenta with an
        Enchufla executed while maintaining an arm hook (Gancho) connection
        between both partners' arms, finishing with a Dile Que No.
      </Move.Description>
      <Move.Video
        highlight={{ from: [1, 47], to: [2, 14] }}
        videoId="ufaUC31X8M0"
      />
    </Move>

    <Move name="Setenta y Dos (72)">
      <Move.Description>
        A variant of Setenta y Uno that replaces the final Dile Que No with dual
        arm hooks (Gancho), often executed with a simultaneous spinning turn for
        extended movement within the hook connection.
      </Move.Description>
      <Move.Video
        highlight={{ from: [0, 3], to: [0, 21] }}
        videoId="UlN_TqranNs"
      />
    </Move>

    <Move name="Doble Cero (00)">
      <Move.Description>
        A variation using Setenta/Sencillo footwork that releases hand
        connection after the right-hand turn, allowing both dancers to complete
        the pattern independently before rejoining in a Dile Que No.
      </Move.Description>
      <Move.Video
        highlight={{ from: [2, 50], to: [3, 10] }}
        videoId="WV2Blkwk1eo"
      />
    </Move>

    <Header2>Shadow position + very light leads</Header2>

    <Move name="El Uno (1) / El Dos (2)">
      <Move.Description>
        El Uno: a shadow-position pattern where the leader remains behind the
        follower's back while executing repeated Enchufla Doubles at varying
        hand heights. El Dos: a reverse-shadow variation where the leader stands
        in front with his back to the follower, followed by the follower
        executing side-to-side steps and a double Sombrero turn before ending
        with a Dile Que No.
      </Move.Description>
    </Move>

    <Move name="El Dedo">
      <Move.Description>
        A right-to-right Vacilala-based combination requiring extremely light
        lead sensitivity, chaining Enchufla and Evelyn patterns through multiple
        eight-count phrases while maintaining minimal hand pressure connection.
      </Move.Description>
    </Move>

    <Move name="Corona">
      <Move.Description>
        A Setenta-based figure introducing the distinctive Alarde Crown arm
        shape alongside Enchufla and Exhibe transitions, teaching new decorative
        arm and hand positioning on a familiar footwork base.
      </Move.Description>
    </Move>

    <Header2>Combos and flair</Header2>

    <Move name="Flamenco">
      <Move.Description>
        A multi-pattern combination sequencing Dile Que No, Evelyn, and Exhibe
        while emphasizing continuous arm flow and the arm-untrap technique,
        allowing extended practice of arm recovery within a longer flowing
        phrase.
      </Move.Description>
    </Move>

    <Move name="Sombrero Doble">
      <Move.Description>
        Sombrero executed three times in succession (right-left-right) with
        two-handed connection maintained throughout, creating repeated overhead
        arm sweeps and testing coordination of repeated head-and-arm
        positioning.
      </Move.Description>
    </Move>

    <Move name="Setenta (70) Complicado">
      <Move.Description>
        An advanced three-count-of-eight combination integrating hook turns
        within an Enchufla structure while maintaining 180-degree directional
        shifts, requiring sophisticated lead timing and follower responsiveness.
      </Move.Description>
    </Move>

    <Move name='Montaña Rusa ("roller coaster")'>
      <Move.Description>
        A long extended figure featuring switched-hand positioning, back breaks,
        position switches, and hook turns beneath the follower's arms, typically
        concluding with a full or half Sombrero, designed to showcase stamina
        and partnership trust through an extended sequence.
      </Move.Description>
    </Move>
  </>
);
