import { FC } from "react";
import { Header } from "~/components/Typography/Header";
import { Paragraph } from "~/components/Typography/Paragraph";
import { Move } from "./Move";

export const metadata = {
  id: "cuban-salsa-dancing",
  minutes: 9,
  summary:
    "A practical guide to learning Cuban salsa dancing, from absolute beginner to advanced",
  tags: ["dance", "salsa", "cuban", "teaching", "progression"],
  title: "Cuban Salsa Dancing",
  timestamp: new Date(2026, 5, 7),
};

export const Content: FC = () => (
  <>
    <Paragraph>
      I started dancing Cuban salsa a month and a half ago, and it has quickly
      become one of my favorite ways to spend an evening. I've made friends,
      stayed fit (an easy twenty thousand steps on a dancing night), and fallen
      for the dance itself. This page documents how I'm learning it, both in
      classes and practicing on my own. It's not teaching from authority; a
      progression I'm building and refining as I go, aimed at one-on-one social
      dancing in the partner form of Casino.
    </Paragraph>

    <Paragraph>
      It's organized as a ladder of skills, not a list of tricks. Each rung adds
      one new thing the lead and the follow have to be able to do, so the
      difficulty climbs gently and you always know what to work on next. Two
      ideas run underneath everything here. First, the follow never learns a
      move by name or by sequence; she dances by responding to what she{" "}
      <em>feels</em> in the lead, which is exactly what lets her dance with
      anyone. Second, the real goal isn't the fanciest figure on this page; it's
      being able to improvise happily with a stranger to a song you've never
      heard. The flashy combos at the end are a bonus. The fundamentals and the
      feel are the point.
    </Paragraph>

    <Header.Secondary>Move with the music</Header.Secondary>

    <Move name="Basic step">
      <Move.Description>
        The foundational step pattern combining three quick-quick-slow counts
        with weight transfer through Cuban motion. This back-rock pattern
        establishes the rhythmic foundation underlying all other Cuban salsa
        patterns. The follow feels: Before any partner is involved, the rhythm
        itself is the cue, quick-quick-slow with the weight rocking back then
        forward; she internalizes that pulse in her own feet.
      </Move.Description>
      <Move.Video
        highlight={{ from: [3, 8], to: [3, 23] }}
        videoId="7XgmAPCX85A"
      />
    </Move>

    <Move name="Closed-position basic">
      <Move.Description>
        The Cuban basic step danced in closed partnership position where both
        dancers move together with consistent frame, allowing the follower to
        respond to the leader's movement and lead rather than relying on memory
        or self-direction. The follow feels: The leader's frame moves as one
        unit; she feels his chest and right hand carry the direction and simply
        matches it instead of initiating.
      </Move.Description>
      <Move.Video
        highlight={{ from: [3, 52], to: [4, 18] }}
        videoId="Qv5BKoV72nA"
      />
    </Move>

    <Move name="Guapea">
      <Move.Description>
        The signature Cuban basic performed in open position where partners step
        in opposing directions simultaneously (leader forward as follower steps
        back, then vice versa) rather than stepping together, creating
        characteristic space and connection at arm's length. The follow feels: A
        gentle push-pull through the hand at arm's length; his pull invites her
        step back, his push sends her forward.
      </Move.Description>
      <Move.Video
        highlight={{ from: [2, 35], to: [3, 9] }}
        videoId="YwxB1MSytYA"
      />
    </Move>

    <Header.Tertiary>Connection: the only language you have</Header.Tertiary>
    <Paragraph>
      One-on-one, everything the follower knows arrives through the physical
      connection. That makes the frame, a supportive, springy arm tone, neither
      stiff nor limp, the whole instrument. The leader's job is to give one
      clear, early, gentle signal through the hand and frame and then get out of
      the way. The follower's job is to keep that consistent frame, stay
      responsive, and never guess ahead. A little tone between you is not
      tension to remove; it is the information itself.
    </Paragraph>

    <Paragraph>
      Drill: Dance a whole song using only Guapea, Dile Que No, and one turn,
      with the leader changing the <em>timing</em> unpredictably. The follower
      practices reading the lead instead of running a pattern; and you'll both
      feel immediately how much the frame is carrying.
    </Paragraph>

    <Header.Secondary>Her first guided turns</Header.Secondary>

    <Move name="Dile Que No">
      <Move.Description>
        A cross-body movement where the follower walks across in front of the
        leader while rotating on a curved path, changing direction through
        responsive redirects rather than predetermined steps, establishing the
        fundamental connection between leader signal and follower trust. The
        follow feels: His left hand draws her diagonally across and opens to the
        side; she follows the curved path the hand traces, not a memorized step.
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
        transitioning into a Dile Que No exit that reorients both dancers. The
        follow feels: A raised hand and a small overhead circle send her turning
        left as he steps away; the arm tells her exactly when to start and stop.
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
        pattern. The follow feels: A softer, lower lead to her right opens her
        into a right turn, then a downward release she follows to free her own
        arm.
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
        responding to subtle directional changes from the leader. The follow
        feels: An almost weightless redirect at the hand; she keeps her eyes
        spotting and lets the small directional change turn her.
      </Move.Description>
      <Move.Video
        highlight={{ from: [2, 19], to: [2, 36] }}
        videoId="cpOxtBZ7Dq8"
      />
    </Move>

    <Header.Secondary>Her first solo turns</Header.Secondary>

    <Move name="Vacilala">
      <Move.Description>
        A free turn within an 8-count where the leader sends the follower into
        the rotation and releases the lead partway, so she completes the turn on
        her own spot using visual spotting. This is the follower's first fully
        independent turn and the gateway to all later free-turning figures. The
        follower can execute one (single) or two successive (double) walking
        right turns, carrying the leader's initial impulse through the
        rotation(s) with no continuous lead support. The follow feels: The
        leader gives one clear send-off into a right turn and then there is no
        hand guiding her; she finishes the rotation(s) herself, spotting to stay
        balanced, rather than waiting to be turned.
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
        follower's ability to chain powered turns without stopping. The follow
        feels: After the first turn she feels a light tap/redirect at the
        shoulder that immediately launches the next; the cue is "don't stop,
        another one's coming."
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
        connection. The follow feels: The same overhead lead, but the leader
        turns away too, so she gets only the hand connection; no body to mirror;
        and must rotate on that alone.
      </Move.Description>
      <Move.Video
        highlight={{ from: [0, 8], to: [0, 16] }}
        videoId="SjUYUGv4f9o"
      />
    </Move>

    <Move name="Siete (7)">
      <Move.Description>
        A redirect pattern where the leader uses a low, wrapped hand connection
        to redirect the follower similar to a Vacilala, requiring precise lead
        calibration to achieve smooth execution. The follow feels: A low,
        wrapped hand connection pulls her into a Vacilala-like redirect; the cue
        is subtle and low rather than overhead, so she waits for the hand to set
        the direction.
      </Move.Description>
      <Move.Video
        highlight={{ from: [2, 50], to: [3, 10] }}
        videoId="H8-wYPlmHVU"
      />
    </Move>

    <Move name="Evelyn">
      <Move.Description>
        A move that begins like an Enchufla but transitions into a frame the
        leader creates mid-movement, allowing the leader to execute his own
        right turn while maintaining connection before finishing with a
        cross-handed Dile Que No. The follow feels: She begins as if in an
        Enchufla, then feels the leader build a frame and shift; she holds that
        frame steady while he turns, then follows the cross-handed close.
      </Move.Description>
      <Move.Video
        highlight={{ from: [0, 21], to: [0, 31] }}
        videoId="cbkno_4beCQ"
      />
    </Move>

    <Header.Tertiary>
      Musicality: Dancing to the music, not just through it
    </Header.Tertiary>
    <Paragraph>
      Socially, you choose what to do to the music. Listen for the 8-count and
      where phrases begin and end, and aim to start figures with them. When the
      music drops or breaks, mark it; pause, hit it, let it breathe; instead of
      plowing on. Match energy to the song: busy turns for busy passages, simple
      body movement for smooth ones. Cuban especially lives in the body: hips,
      torso, the contratiempo feel; far more than in fast spins, so a great
      basic danced to the music beats a rushed figure danced over it.
    </Paragraph>

    <Paragraph>
      Drill: Dance Guapea only for a full song and just move your body to the
      music. Then add exactly one figure per phrase. Musicality first,
      vocabulary second.
    </Paragraph>

    <Header.Secondary>Playful arms and the hat</Header.Secondary>

    <Move name="Kentucky">
      <Move.Description>
        An Enchufla-based figure with neck and shoulder-level leading that
        creates decorative hand patterns around the follower's shoulders while
        maintaining playful two-handed connection. The follow feels: Two-handed
        connection with the leads working around her shoulders and neck; she
        keeps a soft frame and lets the decorative hand patterns pass without
        tensing or helping.
      </Move.Description>
      <Move.Video
        highlight={{ from: [1, 28], to: [1, 40] }}
        videoId="sK1SlAIE0LA"
      />
    </Move>

    <Move name="Sombrero">
      <Move.Description>
        A figure beginning with Dile Que No that transitions into a crossed-hand
        overhead arm sweep resembling a hat, testing comfort with hand proximity
        to the head and synchronized arm positioning. The follow feels: After a
        Dile Que No, both hands rise and sweep overhead in a crossed shape; she
        tilts slightly, trusts the hands passing near her head, and follows the
        arc.
      </Move.Description>
      <Move.Video
        highlight={{ from: [3, 12], to: [3, 27] }}
        videoId="pY_sGnB_sTc"
      />
    </Move>

    <Header.Secondary>Traveling and curved turns</Header.Secondary>

    <Move name="Coca-Cola">
      <Move.Description>
        A left turn executed while traveling around the leader on a curved path,
        requiring more than a full rotation to complete the circumnavigation and
        presenting greater spatial complexity than straight-axis turns. The
        follow feels: The leader sends her on a left turn that travels in a
        curve around him; a continuous traveling lead, so she keeps turning and
        walking the curve instead of spotting one place.
      </Move.Description>
      <Move.Video
        highlight={{ from: [0, 38], to: [0, 53] }}
        videoId="UffIzThsDYE"
      />
    </Move>

    <Move name="Adios">
      <Move.Description>
        A tight carousel-like turn where the leader positions himself centrally
        and both dancers rotate around a common axis, with the follower reading
        directional changes from the leader's subtle frame signals. The follow
        feels: A tight carousel where both rotate around a shared center; she
        reads small frame changes to know when the axis or direction shifts.
      </Move.Description>
      <Move.Video
        highlight={{ from: [1, 17], to: [1, 45] }}
        videoId="N5Yrm_ksDX0"
      />
    </Move>

    <Header.Tertiary>
      Linking figures: Stringing figures without the reset
    </Header.Tertiary>
    <Paragraph>
      The hidden trap of learning moves one at a time is the habit of "figure,
      Dile Que No, Guapea, next figure." Real social dancing flows one figure
      into the next. Notice which endings are already the start of something
      else: an Enchufla exit flows naturally into a Setenta opening; a Vacilala
      can flow straight into an Enchufla. Choose the next figure in the moment,
      from the music and from how the follower is responding; not from a
      memorized routine; and try to leave her somewhere you can keep going.
    </Paragraph>

    <Paragraph>
      Drill: Pick any three figures and dance only those for a whole song,
      linking them in different orders, with one rule: no more than one Dile Que
      No per phrase. You'll be forced to find the natural joins.
    </Paragraph>

    <Header.Secondary>Multi-count knots: the Setenta family</Header.Secondary>

    <Move name="Hammerlock">
      <Move.Description>
        A preparatory position, not a full figure; the leader gently guides the
        follower's right arm into a relaxed wrapped position behind her own
        back. It isolates the single most unfamiliar shape inside the Setenta
        family so the follower meets it before attempting the full pattern. The
        follow feels: Her right arm is folded softly behind her back by a guided
        hand; she lets it be placed and kept there with a relaxed, unresisting
        arm, never pulling against it.
      </Move.Description>
      <Move.Video
        highlight={{ from: [2, 32], to: [2, 38] }}
        videoId="ZfHyLmwQ7h8"
      />
    </Move>

    <Move name="Setenta (70)">
      <Move.Description>
        A foundational three-count-of-eight figure combining a Hammerlock
        opening, a behind-the-back repositioning phrase, and an Enchufla exit
        that serves as the base structure for numerous intermediate
        combinations. The follow feels: From the hammerlock she feels a
        continuous guided hand path across three eight-counts ending in an
        Enchufla; she lets the hands lead the unwinding and never anticipates
        the next phase.
      </Move.Description>
      <Move.Video
        highlight={{ from: [2, 12], to: [2, 25] }}
        videoId="_B55w-0o0qw"
      />
    </Move>

    <Move name="Setenta encadenado">
      <Move.Description>
        Multiple Setentas linked back-to-back into one continuous run, repeating
        the three-count-of-eight structure across musical phrases without
        exiting between repetitions. The follow feels: The same 70 feel, but
        instead of an exit she's led straight into another 70; the cue is "no
        exit yet," so she stays in the pattern and keeps going.
      </Move.Description>
      <Move.Video
        highlight={{ from: [3, 52], to: [4, 15] }}
        videoId="TKcxJ8v_nh4"
      />
    </Move>

    <Move name="Setenta y Uno (71)">
      <Move.Description>
        A short two-count-of-eight combination extending Setenta with an
        Enchufla executed while maintaining an arm hook (Gancho) connection
        between both partners' arms, finishing with a Dile Que No. The follow
        feels: After the 70 opening, an arm hook (gancho) links their arms and
        she's led through an Enchufla while hooked, then a Dile Que No; she
        keeps the hooked arm engaged but soft.
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
        extended movement within the hook connection. The follow feels: Like 71,
        but the close is a double arm hook instead of a Dile Que No, often with
        a turn inside the hook; she follows the hooks and the added rotation.
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
        the pattern independently before rejoining in a Dile Que No. The follow
        feels: Setenta footwork, but the hand releases after the right-hand
        turn; the cue is the <em>absence</em> of a hand, telling her to complete
        the turn independently before rejoining.
      </Move.Description>
      <Move.Video
        highlight={{ from: [2, 50], to: [3, 10] }}
        videoId="WV2Blkwk1eo"
      />
    </Move>

    <Move name="Corona">
      <Move.Description>
        A Setenta-based figure introducing the distinctive Alarde Crown arm
        shape alongside Enchufla and Exhibe transitions, teaching new decorative
        arm and hand positioning on a familiar footwork base. The follow feels:
        Familiar Setenta footwork with the hands shaping a crown overhead; she
        follows the same base feel and lets the new arm shape happen above her.
      </Move.Description>
      <Move.Video
        highlight={{ from: [1, 15], to: [1, 30] }}
        videoId="NpMtwjWGDfo"
      />
    </Move>

    <Header.Secondary>Shadow position and very light leads</Header.Secondary>

    <Move name="El Uno (1)">
      <Move.Description>
        A shadow-position pattern where the leader remains behind the follower's
        back while executing repeated Enchufla Doubles at varying hand heights.
        The follow feels: The leader is behind her back leading repeated
        Enchufla Dobles at varying hand heights; she responds to turns initiated
        from behind and keeps following the hand without turning to find him.
      </Move.Description>
      <Move.Video
        highlight={{ from: [1, 50], to: [2, 0] }}
        videoId="FZAvKSU2I7E"
      />
    </Move>

    <Move name="El Dos (2)">
      <Move.Description>
        A reverse-shadow variation where the leader stands in front with his
        back to the follower, followed by the follower executing side-to-side
        steps and a double Sombrero turn before ending with a Dile Que No. The
        follow feels: The leader is in front with his back to her; she feels
        side-to-side leads then a double Sombrero turn, following purely from
        the hand since she can't read his front.
      </Move.Description>
      <Move.Video
        highlight={{ from: [4, 45], to: [5, 2] }}
        videoId="Lm0gQ6qGK5U"
      />
    </Move>

    <Move name="El Dedo">
      <Move.Description>
        A right-to-right Vacilala-based combination requiring extremely light
        lead sensitivity, chaining Enchufla and Evelyn patterns through multiple
        eight-count phrases while maintaining minimal hand pressure connection.
        The follow feels: Right-to-right with the lightest possible pressure,
        almost a single finger; she stays exquisitely sensitive and lets the
        faint cue lead the Vacilala/Enchufla chain.
      </Move.Description>
      <Move.Video
        highlight={{ from: [2, 48], to: [3, 5] }}
        videoId="FOGCD0XPTFc"
      />
    </Move>

    <Header.Secondary>Combos and flair</Header.Secondary>

    <Move name="Flamenco">
      <Move.Description>
        A multi-pattern combination sequencing Dile Que No, Evelyn, and Exhibe
        while emphasizing continuous arm flow and the arm-untrap technique,
        allowing extended practice of arm recovery within a longer flowing
        phrase. The follow feels: A continuous flowing run (Dile Que No, Evelyn,
        Exhibe) where she repeatedly frees and recovers her arm; the cue is
        uninterrupted flow, so she keeps the arm moving smoothly through each
        transition.
      </Move.Description>
      <Move.Video
        highlight={{ from: [1, 51], to: [2, 3] }}
        videoId="UffIzThsDYE"
      />
    </Move>

    <Move name="Sombrero Doble">
      <Move.Description>
        Sombrero executed three times in succession (right-left-right) with
        two-handed connection maintained throughout, creating repeated overhead
        arm sweeps and testing coordination of repeated head-and-arm
        positioning. The follow feels: Three Sombreros in a row
        (right-left-right) with hands held throughout; she settles into the
        repeated overhead rhythm and keeps following each sweep.
      </Move.Description>
      <Move.Video
        highlight={{ from: [4, 5], to: [4, 20] }}
        videoId="vX7zMTs8eJA"
      />
    </Move>

    <Move name="Setenta (70) Complicado">
      <Move.Description>
        An advanced three-count-of-eight combination integrating hook turns
        within an Enchufla structure while maintaining 180-degree directional
        shifts, requiring sophisticated lead timing and follower responsiveness.
        The follow feels: A 70 with hook turns folded in and 180-degree
        direction switches each count; the cue is sharper, faster hand timing;
        she stays responsive and lets each hook redirect her.
      </Move.Description>
      <Move.Video
        highlight={{ from: [3, 55], to: [4, 15] }}
        videoId="YOYk3Wbcf_M"
      />
    </Move>

    <Move name='Montaña Rusa ("roller coaster")'>
      <Move.Description>
        A long extended figure featuring switched-hand positioning, back breaks,
        position switches, and hook turns beneath the follower's arms, typically
        concluding with a full or half Sombrero, designed to showcase stamina
        and partnership trust through an extended sequence. The follow feels: A
        long ride of switched hands, back-breaks, position switches, and hooks
        under her arm, ending in a Sombrero; she trusts the extended sequence
        and keeps following each change without trying to predict the end.
      </Move.Description>
      <Move.Video
        highlight={{ from: [0, 10], to: [0, 42] }}
        videoId="OxVPDgXNJ2E"
      />
    </Move>

    <Header.Secondary>
      Dancing for real: a stranger, a song you've never heard
    </Header.Secondary>

    <Paragraph>
      This is the actual goal. Not running this ladder, but improvising
      enjoyably with someone you just met to music you don't know. A few things
      make that work. Floorcraft: on a crowded floor keep figures compact, lead
      smaller, watch the couples around you, and steer the two of you out of
      trouble; that's the leader's responsibility. Calibrating to an unfamiliar
      follow: start simple, read her level in the first thirty seconds, and only
      escalate once the connection feels solid. The follower's real test: she
      follows <em>you</em>, a stranger, because she's reading feel; not because
      she memorized this page. And the mindset: a dance is a three-minute
      conversation, not a performance; a clean, simple dance always beats a
      sloppy hard one.
    </Paragraph>

    <Paragraph>
      If you can have fun through a single song with someone new, everything on
      this page has done its job.
    </Paragraph>
  </>
);
