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
      I started dancing salsa a month and a half ago and it has become one of my
      favourite activities. It has allowed me to meet new people, stay fit, and
      I've fallen in love with dancing itself.
    </Paragraph>

    <Paragraph>
      This page is a progression built for one-on-one social dancing. It's
      organized as a ladder where each rung teaches the next skill the lead and
      follow both need, scaffolding together toward the same goal: improvising
      happily with a stranger to unfamiliar music.
    </Paragraph>

    <Paragraph>
      As a follow, don't learn steps by name or sequence. Respond only to what
      you feel through the lead's hands and frame. As a lead, the moves here are
      chosen for clean leadability by feel, for the skills they teach, and for
      how they link into the music. Fundamentals come first and stay central:
      frame, weight, signal, timing. Connection, musicality, and floorcraft are
      built explicitly from the start, not hoped for later. The flashy combos at
      the end are bonus. The fundamentals and the feel are the point.
    </Paragraph>

    <Header.Secondary>Move with the music</Header.Secondary>

    <Move name="Basic step">
      <Move.Description>
        The foundation — three steps, quick-quick-slow, the weight rocking back
        then forward and the hips carrying Cuban motion. Everything builds on
        it.
      </Move.Description>
      <Move.Video
        highlight={{ from: [3, 8], to: [3, 23] }}
        videoId="7XgmAPCX85A"
      />
    </Move>

    <Move name="Closed-position basic">
      <Move.Description>
        The same basic in a closed hold, where the two move as one and the
        follow rides the lead's frame instead of steering herself — his chest
        and right hand carry the direction, and she matches it rather than
        starting anything herself.
      </Move.Description>
      <Move.Video
        highlight={{ from: [3, 52], to: [4, 18] }}
        videoId="Qv5BKoV72nA"
      />
    </Move>

    <Move name="Guapea">
      <Move.Description>
        The signature Cuban basic in open hold, where partners step apart and
        together in opposition rather than in unison — the source of the dance's
        space and arm's-length connection. A soft push and pull through the hand
        guides her: his pull sends her back, his push brings her forward.
      </Move.Description>
      <Move.Video
        highlight={{ from: [2, 35], to: [3, 9] }}
        videoId="YwxB1MSytYA"
      />
    </Move>

    <Header.Tertiary>Connection: the only language you have</Header.Tertiary>
    <Paragraph>
      One-on-one, everything the follow knows arrives through the physical
      connection. That makes the frame — a supportive, springy arm tone, neither
      stiff nor limp — the whole instrument. The lead's job is to give one
      clear, early, gentle signal through the hand and frame, then get out of
      the way. The follow's job is to keep that frame consistent, stay
      responsive, and never guess ahead. A little tone between you isn't tension
      to remove. It's the information itself.
    </Paragraph>

    <Paragraph>
      Drill: dance a whole song using only Guapea, Dile Que No, and one turn,
      with the lead changing the timing unpredictably. The follow practices
      reading the lead instead of running a pattern, and you'll both feel how
      much the frame is carrying.
    </Paragraph>

    <Header.Secondary>Her first guided turns</Header.Secondary>

    <Move name="Dile Que No">
      <Move.Description>
        The cross-body that resets the dance: the follow walks past the lead on
        a curved path, steered by his redirect rather than by counting. It's the
        first real test of signal and trust — his left hand draws her diagonally
        across and opens to the side, and she follows the curve it traces, not a
        step she remembers.
      </Move.Description>
      <Move.Video
        highlight={{ from: [3, 51], to: [3, 56] }}
        videoId="Jexcy9LGKjo"
      />
    </Move>

    <Move name="Enchufla">
      <Move.Description>
        A turn where the follow goes left and the lead goes right, the arm
        passing overhead, exiting through a Dile Que No that resets them both. A
        raised hand and a small circle overhead start her turning as he steps
        away; the arm tells her when to go and when to stop.
      </Move.Description>
      <Move.Video
        highlight={{ from: [1, 53], to: [2, 0] }}
        videoId="3tUcawE0Bhs"
      />
    </Move>

    <Move name="Exhibe">
      <Move.Description>
        A right turn led more softly than the Enchufla, and her first lesson in
        freeing her own arm cleanly afterward. A gentle, low lead opens her to
        the right, then a downward release she follows to unwrap her arm.
      </Move.Description>
      <Move.Video
        highlight={{ from: [1, 25], to: [1, 30] }}
        videoId="51lJ_32VRwc"
      />
    </Move>

    <Move name="Sencillo">
      <Move.Description>
        A turn on the lightest possible lead, where a tiny redirect does the
        work and she carries the rest. Barely any pressure at the hand guides
        her; she keeps spotting and lets the small change of direction turn her.
      </Move.Description>
      <Move.Video
        highlight={{ from: [2, 19], to: [2, 36] }}
        videoId="cpOxtBZ7Dq8"
      />
    </Move>

    <Header.Secondary>Her first solo turns</Header.Secondary>

    <Move name="Vacilala">
      <Move.Description>
        Her first fully independent turn, and the gateway to every free-turning
        figure that follows. The lead sends her into a right turn and releases
        partway — one rotation to start, two once it feels easy. One clear
        send-off, then nothing; no hand carries her around, so she spots, holds
        her own balance, and finishes the turn herself.
      </Move.Description>
      <Move.Video
        highlight={{ from: [2, 44], to: [3, 5] }}
        videoId="pT1AmRJVtRY"
      />
    </Move>

    <Move name="Enchufla Doble">
      <Move.Description>
        Two Enchuflas back to back, joined by a tap at the shoulder so the turns
        run together with no pause. A light tap right after the first turn
        launches the next; another one's coming, so she never settles.
      </Move.Description>
      <Move.Video
        highlight={{ from: [1, 53], to: [2, 4] }}
        videoId="6OxXNbCZmpA"
      />
    </Move>

    <Move name="Enchufla con Vuelta">
      <Move.Description>
        An Enchufla where the lead spins too, so the follow can't copy his body
        and has to find the turn from the hand alone. He turns away at the same
        moment, leaving only the hand to read, and she turns on that alone.
      </Move.Description>
      <Move.Video
        highlight={{ from: [0, 8], to: [0, 16] }}
        videoId="SjUYUGv4f9o"
      />
    </Move>

    <Move name="Siete (7)">
      <Move.Description>
        A redirect close to a Vacilala but led low, through a wrapped hand, so
        it takes a finer touch to keep smooth. A low, wrapped hand draws her
        into the turn; the signal sits low rather than overhead, so she waits
        for it to set the direction.
      </Move.Description>
      <Move.Video
        highlight={{ from: [2, 50], to: [3, 10] }}
        videoId="H8-wYPlmHVU"
      />
    </Move>

    <Move name="Evelyn">
      <Move.Description>
        It opens like an Enchufla, then the lead builds a frame mid-move to turn
        himself, and closes with a cross-handed Dile Que No. She starts as if
        turning, then feels a frame form; she holds it steady while he turns,
        then follows the cross-handed finish.
      </Move.Description>
      <Move.Video
        highlight={{ from: [0, 21], to: [0, 31] }}
        videoId="cbkno_4beCQ"
      />
    </Move>

    <Header.Tertiary>
      Musicality: dancing to the music, not just through it
    </Header.Tertiary>
    <Paragraph>
      Socially, you choose what to do to the music. Listen for the 8-count and
      where phrases begin and end, and start your figures with them. When the
      music drops or breaks, mark it — pause, hit it, let it breathe — instead
      of plowing on. Match energy to the song: busy turns for busy passages,
      simple body movement for smooth ones. Cuban lives in the body more than in
      fast spins, so a great basic danced to the music beats a rushed figure
      danced over it.
    </Paragraph>

    <Paragraph>
      Drill: dance Guapea only for a whole song and just move your body to the
      music. Then add one figure per phrase. Musicality first, vocabulary
      second.
    </Paragraph>

    <Header.Secondary>Playful arms and the hat</Header.Secondary>

    <Move name="Kentucky">
      <Move.Description>
        An Enchufla dressed up with playful two-handed patterns drawn around the
        shoulders and neck. Two hands work lightly around her shoulders and
        neck; she keeps a soft frame and lets the patterns happen without
        helping.
      </Move.Description>
      <Move.Video
        highlight={{ from: [1, 28], to: [1, 40] }}
        videoId="sK1SlAIE0LA"
      />
    </Move>

    <Move name="Sombrero">
      <Move.Description>
        From a Dile Que No, the figure draws both hands up over the heads like a
        hat — her introduction to trusting hands close to her face. She tilts a
        little, trusts the hands as they pass, and follows the arc.
      </Move.Description>
      <Move.Video
        highlight={{ from: [3, 12], to: [3, 27] }}
        videoId="pY_sGnB_sTc"
      />
    </Move>

    <Header.Secondary>Traveling and curved turns</Header.Secondary>

    <Move name="Coca-Cola">
      <Move.Description>
        A left turn that travels all the way around the lead — more than a full
        rotation, which makes it trickier than turning on the spot. He keeps
        moving the whole way, so she keeps walking and turning instead of
        parking on one spot.
      </Move.Description>
      <Move.Video
        highlight={{ from: [0, 38], to: [0, 53] }}
        videoId="UffIzThsDYE"
      />
    </Move>

    <Move name="Adios">
      <Move.Description>
        A tight carousel with the lead at the center and both dancers circling a
        shared axis, the follow reading his frame for each change. They rotate
        around one center, and small shifts in his frame tell her when the
        direction or axis changes.
      </Move.Description>
      <Move.Video
        highlight={{ from: [1, 17], to: [1, 45] }}
        videoId="N5Yrm_ksDX0"
      />
    </Move>

    <Header.Tertiary>
      Linking figures: stringing figures without the reset
    </Header.Tertiary>
    <Paragraph>
      The hidden trap of learning moves one at a time is the habit of figure,
      Dile Que No, Guapea, next figure. Real social dancing flows one figure
      into the next. Notice which endings are already the start of something
      else: an Enchufla exit slides into a Setenta opening, a Vacilala can flow
      straight into an Enchufla. Choose the next figure in the moment, from the
      music and from how the follow is responding, and try to leave her
      somewhere you can keep going.
    </Paragraph>

    <Paragraph>
      Drill: pick any three figures and dance only those for a whole song,
      linking them in different orders, with one rule — no more than one Dile
      Que No per phrase. You'll be forced to find the natural joins.
    </Paragraph>

    <Header.Secondary>Multi-count knots: the Setenta family</Header.Secondary>

    <Move name="Hammerlock">
      <Move.Description>
        Not a figure but a shape to meet first — the one unfamiliar position the
        whole family depends on, with the right arm wrapped behind the back. She
        lets the lead place that arm and keep it there, soft, never pulling
        against it.
      </Move.Description>
      <Move.Video
        highlight={{ from: [2, 32], to: [2, 38] }}
        videoId="ZfHyLmwQ7h8"
      />
    </Move>

    <Move name="Setenta (70)">
      <Move.Description>
        The cornerstone of the family — a hammerlock, a wrap behind the back,
        and an Enchufla to close, over three eight-counts. Most later figures
        grow out of it. The hands lead her along one long, continuous path; she
        lets them do the unwinding and never jumps ahead.
      </Move.Description>
      <Move.Video
        highlight={{ from: [2, 12], to: [2, 25] }}
        videoId="_B55w-0o0qw"
      />
    </Move>

    <Move name="Setenta encadenado">
      <Move.Description>
        Several Setentas linked into one continuous run, repeating the pattern
        across phrases instead of exiting between them. The same 70, but instead
        of an exit she's sent straight into another; no release yet, so she
        stays in and keeps going.
      </Move.Description>
      <Move.Video
        highlight={{ from: [3, 52], to: [4, 15] }}
        videoId="TKcxJ8v_nh4"
      />
    </Move>

    <Move name="Setenta y Uno (71)">
      <Move.Description>
        A short extension of the 70 — an Enchufla led while an arm hook keeps
        the partners connected, then a Dile Que No. After the opening, a hook
        links their arms and she's turned through an Enchufla still hooked; she
        keeps that arm engaged but loose.
      </Move.Description>
      <Move.Video
        highlight={{ from: [1, 47], to: [2, 14] }}
        videoId="ufaUC31X8M0"
      />
    </Move>

    <Move name="Setenta y Dos (72)">
      <Move.Description>
        Like the 71, but it ends in a double arm hook instead of a Dile Que No,
        often with a turn spun inside the hook. The close swaps the exit for a
        double hook, sometimes with a turn inside it, and she follows the hooks
        and the extra rotation.
      </Move.Description>
      <Move.Video
        highlight={{ from: [0, 3], to: [0, 21] }}
        videoId="UlN_TqranNs"
      />
    </Move>

    <Move name="Doble Cero (00)">
      <Move.Description>
        Built on Setenta footwork, but the hands release after the right-hand
        turn so both dancers finish on their own before rejoining. The hand lets
        go after the right-hand turn; that absence is her signal to finish the
        turn herself, then come back to the hold.
      </Move.Description>
      <Move.Video
        highlight={{ from: [2, 50], to: [3, 10] }}
        videoId="WV2Blkwk1eo"
      />
    </Move>

    <Move name="Corona">
      <Move.Description>
        A 70 base decorated with the crown-shaped Alarde arms, plus Enchufla and
        Exhibe — new arm shapes on familiar footwork. The footwork is the 70 she
        knows, so she follows the same feel and lets the new crown shape form
        overhead.
      </Move.Description>
      <Move.Video
        highlight={{ from: [1, 15], to: [1, 30] }}
        videoId="NpMtwjWGDfo"
      />
    </Move>

    <Header.Secondary>Shadow position and very light leads</Header.Secondary>

    <Move name="El Uno (1)">
      <Move.Description>
        A shadow-position figure with the lead behind her back, running repeated
        Enchufla Dobles at different heights. The turns start from behind her at
        varying heights, and she answers the hand without turning to find him.
      </Move.Description>
      <Move.Video
        highlight={{ from: [1, 50], to: [2, 0] }}
        videoId="FZAvKSU2I7E"
      />
    </Move>

    <Move name="El Dos (2)">
      <Move.Description>
        The reverse shadow, with the lead in front and his back to her, into
        side steps and a double Sombrero before a Dile Que No. He's in front and
        facing away, so she can't read his body; she takes the side steps and
        double Sombrero from the hand alone.
      </Move.Description>
      <Move.Video
        highlight={{ from: [4, 45], to: [5, 2] }}
        videoId="Lm0gQ6qGK5U"
      />
    </Move>

    <Move name="El Dedo">
      <Move.Description>
        A right-to-right combination on the faintest possible contact, chaining
        Enchufla and Evelyn across several phrases. Almost nothing to hold — a
        single finger's worth of contact; she stays light enough to read it and
        lets that faint signal carry the chain.
      </Move.Description>
      <Move.Video
        highlight={{ from: [2, 48], to: [3, 5] }}
        videoId="FOGCD0XPTFc"
      />
    </Move>

    <Header.Secondary>Combos and flair</Header.Secondary>

    <Move name="Flamenco">
      <Move.Description>
        A flowing string of Dile Que No, Evelyn, and Exhibe that keeps the arms
        moving and drills clean arm recovery inside a longer phrase. One
        continuous flow with no stops, where she frees and recovers her arm
        smoothly through each handoff.
      </Move.Description>
      <Move.Video
        highlight={{ from: [1, 51], to: [2, 3] }}
        videoId="UffIzThsDYE"
      />
    </Move>

    <Move name="Sombrero Doble">
      <Move.Description>
        Three Sombreros in a row, right-left-right, two hands held throughout,
        testing repeated overhead coordination. The sweeps come one after
        another; she settles into the rhythm and keeps following each one.
      </Move.Description>
      <Move.Video
        highlight={{ from: [4, 5], to: [4, 20] }}
        videoId="vX7zMTs8eJA"
      />
    </Move>

    <Move name="Setenta (70) Complicado">
      <Move.Description>
        A 70 with hook turns folded in and a 180-degree switch on every count,
        asking for tighter lead timing and quicker responses. Sharper, faster
        hands than the plain 70; she stays responsive and lets each hook turn
        her to the next position.
      </Move.Description>
      <Move.Video
        highlight={{ from: [3, 55], to: [4, 15] }}
        videoId="YOYk3Wbcf_M"
      />
    </Move>

    <Move name='Montaña Rusa ("roller coaster")'>
      <Move.Description>
        A long showpiece of switched hands, back breaks, position changes, and
        hooks under the arm, usually finishing on a Sombrero — built for stamina
        and trust. A long ride of switches, breaks, and hooks under her arm into
        a final sweep; she trusts it and follows each change without guessing
        the end.
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
      This is the actual goal: not running this ladder, but improvising happily
      with someone you just met to music you don't know. A few things make it
      work. Floorcraft — on a crowded floor, keep figures compact, lead smaller,
      watch the couples around you, and steer the two of you clear of trouble.
      Calibrating to an unfamiliar follow — start simple, read her level in the
      first thirty seconds, and only build once the connection feels solid. Her
      real test — she follows you, a stranger, because she's reading feel, not
      because she memorized this page. And the mindset — a dance is a
      three-minute conversation, not a performance, and a clean simple dance
      always beats a sloppy hard one.
    </Paragraph>

    <Paragraph>
      If you can have fun through a single song with someone new, everything on
      this page has done its job.
    </Paragraph>
  </>
);
