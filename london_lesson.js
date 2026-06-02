const LONDON_LESSON = [
  {
    name:"1. The Bishop Trade (...Bd6)",
    summary:"Black plays ...Bd6 to swap off your strong London bishop. You sidestep with Bg3, and when Black trades anyway, hxg3 hands you a half-open h-file pointing straight at the king.",
    finalNote:"Black equalizes comfortably, but you have a pleasant, attack-ready position with the e5-knight and open h-file. Engine eval: roughly level.",
    moves:[
      {side:"white",notation:"d4",from:[6,3],to:[4,3],explain:"Claim the centre and open the diagonal for your c1-bishop."},
      {side:"black",notation:"d5",from:[1,3],to:[3,3],explain:"Black stakes an equal claim in the centre."},
      {side:"white",notation:"Bf4",from:[7,2],to:[4,5],explain:"The London bishop comes out early — before e3 could ever trap it."},
      {side:"black",notation:"Nf6",from:[0,6],to:[2,5],explain:"Black develops and fights for the e4 and d5 squares."},
      {side:"white",notation:"e3",from:[6,4],to:[5,4],explain:"Support d4 and open a path for the f1-bishop."},
      {side:"black",notation:"e6",from:[1,4],to:[2,4],explain:"Black frees the f8-bishop and braces d5."},
      {side:"white",notation:"Nf3",from:[7,6],to:[5,5],explain:"Develop, guard d4, and prepare to castle."},
      {side:"black",notation:"Bd6",from:[0,5],to:[2,3],explain:"Black offers to trade off your good London bishop."},
      {side:"white",notation:"Bg3",from:[4,5],to:[5,6],explain:"Sidestep the trade — the bishop is too valuable to give up. From g3 it still eyes the kingside."},
      {side:"black",notation:"0-0",from:[0,4],to:[0,6],castle:{rookFrom:[0,7],rookTo:[0,5]},explain:"Black tucks the king away safely."},
      {side:"white",notation:"Nbd2",from:[7,1],to:[6,3],explain:"Develop the last minor piece; it heads for e5 or f1."},
      {side:"black",notation:"Bxg3",from:[2,3],to:[5,6],explain:"Black trades anyway, doubling your g-pawns."},
      {side:"white",notation:"hxg3",from:[6,7],to:[5,6],explain:"Recapture towards the centre — and the half-open h-file becomes an attacking highway to Black's king."},
      {side:"black",notation:"Nbd7",from:[0,1],to:[1,3],explain:"Black develops and prepares ...c5 or ...e5."},
      {side:"white",notation:"Bd3",from:[7,5],to:[5,3],explain:"The other bishop aims at h7 — the classic London attacking diagonal."},
      {side:"black",notation:"c5",from:[1,2],to:[3,2],explain:"Black strikes at your centre."},
      {side:"white",notation:"c3",from:[6,2],to:[5,2],explain:"The London backbone: d4 is rock-solid and the bishop keeps the b1-h7 diagonal."},
      {side:"black",notation:"b6",from:[1,1],to:[2,1],explain:"Black prepares to fianchetto the light bishop."},
      {side:"white",notation:"Qe2",from:[7,3],to:[6,4],explain:"Connect the rooks and back a future e4 break."},
      {side:"black",notation:"Bb7",from:[0,2],to:[1,1],explain:"Black completes development on the long diagonal."},
      {side:"white",notation:"0-0",from:[7,4],to:[7,6],castle:{rookFrom:[7,7],rookTo:[7,5]},explain:"King safety first — now you can attack with a clear conscience."},
      {side:"black",notation:"Qe7",from:[0,3],to:[1,4],explain:"Black centralises the queen and connects the rooks."},
      {side:"white",notation:"Ne5",from:[5,5],to:[3,4],explain:"The knight lands on e5, the heart of the London attack. Next: Rf3-h3 and a kingside assault down the open h-file."}
    ]
  },
  {
    name:"2. Main Line (...c5 & ...Nc6)",
    summary:"Black's most principled setup: ...c5 and ...Nc6 hitting d4. You hold with c3, post a knight on e5, and roll f4 for a kingside attack.",
    finalNote:"A balanced fighting position; your e5-knight and f4-push give real kingside chances. Engine eval: roughly level.",
    moves:[
      {side:"white",notation:"d4",from:[6,3],to:[4,3],explain:"Stake out the centre."},
      {side:"black",notation:"d5",from:[1,3],to:[3,3],explain:"Black mirrors in the centre."},
      {side:"white",notation:"Bf4",from:[7,2],to:[4,5],explain:"Develop the London bishop before e3 locks it in."},
      {side:"black",notation:"Nf6",from:[0,6],to:[2,5],explain:"Natural development, fighting for e4."},
      {side:"white",notation:"e3",from:[6,4],to:[5,4],explain:"Shore up d4 and free the f1-bishop."},
      {side:"black",notation:"e6",from:[1,4],to:[2,4],explain:"Open the f8-bishop's path."},
      {side:"white",notation:"Nf3",from:[7,6],to:[5,5],explain:"Develop and defend d4."},
      {side:"black",notation:"c5",from:[1,2],to:[3,2],explain:"Black's most principled try — pressure d4 from the flank."},
      {side:"white",notation:"c3",from:[6,2],to:[5,2],explain:"Hold the centre; d4 is now defended twice."},
      {side:"black",notation:"Nc6",from:[0,1],to:[2,2],explain:"Black piles up on d4."},
      {side:"white",notation:"Nbd2",from:[7,1],to:[6,3],explain:"Finish minor-piece development; the knight eyes e5."},
      {side:"black",notation:"Bd6",from:[0,5],to:[2,3],explain:"Black challenges your London bishop."},
      {side:"white",notation:"Bg3",from:[4,5],to:[5,6],explain:"Keep the bishop — decline the trade."},
      {side:"black",notation:"0-0",from:[0,4],to:[0,6],castle:{rookFrom:[0,7],rookTo:[0,5]},explain:"Black castles to safety."},
      {side:"white",notation:"Bd3",from:[7,5],to:[5,3],explain:"Aim the bishop at the h7-square."},
      {side:"black",notation:"b6",from:[1,1],to:[2,1],explain:"Black prepares the ...Bb7 fianchetto."},
      {side:"white",notation:"Ne5",from:[5,5],to:[3,4],explain:"Plant the knight on its dream square, e5."},
      {side:"black",notation:"Bb7",from:[0,2],to:[1,1],explain:"Black completes development on the long diagonal."},
      {side:"white",notation:"0-0",from:[7,4],to:[7,6],castle:{rookFrom:[7,7],rookTo:[7,5]},explain:"King safety before the attack."},
      {side:"black",notation:"Rc8",from:[0,0],to:[0,2],explain:"Black builds pressure on the half-open c-file."},
      {side:"white",notation:"f4",from:[6,5],to:[4,5],explain:"Reinforce the e5-knight and start a kingside pawn storm — the hallmark London plan."}
    ]
  },
  {
    name:"3. vs King's Indian (...g6)",
    summary:"Against the King's Indian fianchetto, you build a calm, space-grabbing setup with Be2 and h3, then expand with c4 and meet ...c5 by closing the center with d5.",
    finalNote:"You enjoy a genuine space advantage with the closed center. Engine eval: clearly comfortable for White.",
    moves:[
      {side:"white",notation:"d4",from:[6,3],to:[4,3],explain:"Open with the queen's pawn."},
      {side:"black",notation:"Nf6",from:[0,6],to:[2,5],explain:"Black heads for a King's Indian setup."},
      {side:"white",notation:"Bf4",from:[7,2],to:[4,5],explain:"Develop the London bishop immediately."},
      {side:"black",notation:"g6",from:[1,6],to:[2,6],explain:"Black prepares to fianchetto the dark bishop."},
      {side:"white",notation:"Nf3",from:[7,6],to:[5,5],explain:"Develop and control e5."},
      {side:"black",notation:"Bg7",from:[0,5],to:[1,6],explain:"The fianchettoed bishop eyes your centre and queenside."},
      {side:"white",notation:"e3",from:[6,4],to:[5,4],explain:"Solidify d4 and open the f1-bishop's diagonal."},
      {side:"black",notation:"0-0",from:[0,4],to:[0,6],castle:{rookFrom:[0,7],rookTo:[0,5]},explain:"Black castles into the fianchetto."},
      {side:"white",notation:"Be2",from:[7,5],to:[6,4],explain:"A modest, flexible square — vs the KID, Bd3 runs into ...Nh5, so e2 is safer."},
      {side:"black",notation:"d6",from:[1,3],to:[2,3],explain:"Black prepares ...e5, the thematic KID break."},
      {side:"white",notation:"0-0",from:[7,4],to:[7,6],castle:{rookFrom:[7,7],rookTo:[7,5]},explain:"Get the king safe."},
      {side:"black",notation:"Nbd7",from:[0,1],to:[1,3],explain:"Black supports the ...e5 break."},
      {side:"white",notation:"h3",from:[6,7],to:[5,7],explain:"A useful luft — it stops ...Ng4/...Bg4 ideas and keeps the f4-bishop's retreat open."},
      {side:"black",notation:"b6",from:[1,1],to:[2,1],explain:"Black switches plans, fianchettoing the light bishop too."},
      {side:"white",notation:"c4",from:[6,2],to:[4,2],explain:"Grab queenside space and clamp down on d5."},
      {side:"black",notation:"Bb7",from:[0,2],to:[1,1],explain:"The second bishop joins the long diagonal."},
      {side:"white",notation:"Nc3",from:[7,1],to:[5,2],explain:"Develop and reinforce d5 and e4."},
      {side:"black",notation:"c5",from:[1,2],to:[3,2],explain:"Black challenges your broad centre."},
      {side:"white",notation:"d5",from:[4,3],to:[3,3],explain:"Close the centre — gaining space and blunting the g7-bishop."},
      {side:"black",notation:"a6",from:[1,0],to:[2,0],explain:"Black prepares ...b5 for queenside play — a rich maneuvering middlegame lies ahead."}
    ]
  },
  {
    name:"4. Symmetric (...Bf5)",
    summary:"Black copies your plan with an early ...Bf5. You trade light bishops with Bd3, keep your London bishop with Bg3, then break the symmetry with c4.",
    finalNote:"You hold the slightly more pleasant position with the open h-file and freer pieces. Engine eval: roughly level / small edge.",
    moves:[
      {side:"white",notation:"d4",from:[6,3],to:[4,3],explain:"Take the centre."},
      {side:"black",notation:"d5",from:[1,3],to:[3,3],explain:"A symmetrical reply."},
      {side:"white",notation:"Bf4",from:[7,2],to:[4,5],explain:"Out with the London bishop early."},
      {side:"black",notation:"Nf6",from:[0,6],to:[2,5],explain:"Develop and contest e4."},
      {side:"white",notation:"e3",from:[6,4],to:[5,4],explain:"Brace d4 and open the bishop's path."},
      {side:"black",notation:"Bf5",from:[0,2],to:[3,5],explain:"Black mirrors your idea — developing the light bishop OUTSIDE the pawn chain before ...e6."},
      {side:"white",notation:"Nf3",from:[7,6],to:[5,5],explain:"Routine development."},
      {side:"black",notation:"e6",from:[1,4],to:[2,4],explain:"Now the pawn chain is complete and the f8-bishop is freed."},
      {side:"white",notation:"Bd3",from:[7,5],to:[5,3],explain:"Offer to trade light bishops — removing Black's well-placed f5-bishop."},
      {side:"black",notation:"Bxd3",from:[3,5],to:[5,3],explain:"Black accepts the trade."},
      {side:"white",notation:"Qxd3",from:[7,3],to:[5,3],explain:"Recapture with the queen, which now eyes h7 and backs an e4 break."},
      {side:"black",notation:"Bd6",from:[0,5],to:[2,3],explain:"Black challenges your London bishop, seeking symmetry."},
      {side:"white",notation:"Bg3",from:[4,5],to:[5,6],explain:"Keep the bishop — refuse to trade your good piece."},
      {side:"black",notation:"0-0",from:[0,4],to:[0,6],castle:{rookFrom:[0,7],rookTo:[0,5]},explain:"Black castles."},
      {side:"white",notation:"Nbd2",from:[7,1],to:[6,3],explain:"Complete development."},
      {side:"black",notation:"Nbd7",from:[0,1],to:[1,3],explain:"Black mirrors again."},
      {side:"white",notation:"0-0",from:[7,4],to:[7,6],castle:{rookFrom:[7,7],rookTo:[7,5]},explain:"King to safety."},
      {side:"black",notation:"Re8",from:[0,5],to:[0,4],explain:"Black prepares a central ...e5 break."},
      {side:"white",notation:"c4",from:[6,2],to:[4,2],explain:"Strike at the centre to break the symmetry and seize the initiative."},
      {side:"black",notation:"dxc4",from:[3,3],to:[4,2],explain:"Black releases the tension."},
      {side:"white",notation:"Nxc4",from:[6,3],to:[4,2],explain:"Recapture; the knight hits the d6-bishop and eyes e5."},
      {side:"black",notation:"Bxg3",from:[2,3],to:[5,6],explain:"Black trades off the attacked bishop."},
      {side:"white",notation:"hxg3",from:[6,7],to:[5,6],explain:"Recapture towards the centre — the half-open h-file gives you the more pleasant game."}
    ]
  },
  {
    name:"5. The ...Bg4 Pin (Ne5)",
    summary:"Black tries the ...Bg4 pin (after an early Nf3). The thematic Ne5! turns the tables, hitting the bishop and seizing the outpost. You emerge with an easy, comfortable game.",
    finalNote:"A safe, easy game where Black has equalized but you have the simpler plans. Engine eval: roughly level.",
    moves:[
      {side:"white",notation:"d4",from:[6,3],to:[4,3],explain:"Claim the centre."},
      {side:"black",notation:"d5",from:[1,3],to:[3,3],explain:"Black answers in kind."},
      {side:"white",notation:"Bf4",from:[7,2],to:[4,5],explain:"Develop the London bishop."},
      {side:"black",notation:"Nf6",from:[0,6],to:[2,5],explain:"Develop and fight for e4."},
      {side:"white",notation:"Nf3",from:[7,6],to:[5,5],explain:"Here Nf3 comes before e3 — inviting the pin."},
      {side:"black",notation:"Bg4",from:[0,2],to:[4,6],explain:"Black pins... or tries to — pressuring the f3-knight that guards d4."},
      {side:"white",notation:"Ne5",from:[5,5],to:[3,4],explain:"The thematic refutation! Jump into e5, hitting the g4-bishop and grabbing the outpost. The 'pin' backfires."},
      {side:"black",notation:"Bf5",from:[4,6],to:[3,5],explain:"The bishop retreats; ...Bh5 or ...Be6 are also playable."},
      {side:"white",notation:"e3",from:[6,4],to:[5,4],explain:"Now play e3, with Black's bishop already neutralised on f5."},
      {side:"black",notation:"e6",from:[1,4],to:[2,4],explain:"Black completes the pawn chain."},
      {side:"white",notation:"Bd3",from:[7,5],to:[5,3],explain:"Offer to trade off Black's active f5-bishop."},
      {side:"black",notation:"Bxd3",from:[3,5],to:[5,3],explain:"Black trades."},
      {side:"white",notation:"Qxd3",from:[7,3],to:[5,3],explain:"Recapture; the queen eyes h7."},
      {side:"black",notation:"Bd6",from:[0,5],to:[2,3],explain:"Black challenges your London bishop."},
      {side:"white",notation:"Bg3",from:[4,5],to:[5,6],explain:"Keep the prized bishop."},
      {side:"black",notation:"Nbd7",from:[0,1],to:[1,3],explain:"Develop and challenge the e5-knight."},
      {side:"white",notation:"Nxd7",from:[3,4],to:[1,3],explain:"Trade on your own terms, before Black does."},
      {side:"black",notation:"Qxd7",from:[0,3],to:[1,3],explain:"Recapture with the queen."},
      {side:"white",notation:"Nd2",from:[7,1],to:[6,3],explain:"Develop the last piece."},
      {side:"black",notation:"0-0",from:[0,4],to:[0,6],castle:{rookFrom:[0,7],rookTo:[0,5]},explain:"Black castles."},
      {side:"white",notation:"0-0",from:[7,4],to:[7,6],castle:{rookFrom:[7,7],rookTo:[7,5]},explain:"And so do you — both kings are safe."},
      {side:"black",notation:"c5",from:[1,2],to:[3,2],explain:"Black strikes at the centre."},
      {side:"white",notation:"c3",from:[6,2],to:[5,2],explain:"The London backbone holds everything together — a comfortable, risk-free game with the easier plans."}
    ]
  }
];
const SICILIAN_LESSON = [
  {
    name:"1. Najdorf Variation",
    summary:"The most popular Sicilian. With 5...a6 Black takes maximum flexibility, then strikes with ...e5 to grab the centre and play on both wings.",
    finalNote:"A balanced, flexible Najdorf middlegame with mutual chances on both wings. Engine eval: roughly level.",
    moves:[
      {side:"white",notation:"e4",from:[6,4],to:[4,4],explain:"White grabs the centre — the most popular first move."},
      {side:"black",notation:"c5",from:[1,2],to:[3,2],explain:"The Sicilian! Black fights for the centre from the flank, unbalancing the game from move one."},
      {side:"white",notation:"Nf3",from:[7,6],to:[5,5],explain:"White develops and prepares d4."},
      {side:"black",notation:"d6",from:[1,3],to:[2,3],explain:"Flexible — controls e5 and prepares ...Nf6; the Najdorf foundation."},
      {side:"white",notation:"d4",from:[6,3],to:[4,3],explain:"White strikes in the centre."},
      {side:"black",notation:"cxd4",from:[3,2],to:[4,3],explain:"Trade the wing pawn for a centre pawn — and grab the half-open c-file."},
      {side:"white",notation:"Nxd4",from:[5,5],to:[4,3],explain:"White recaptures, reaching the Open Sicilian."},
      {side:"black",notation:"Nf6",from:[0,6],to:[2,5],explain:"Develop and hit e4, forcing White to react."},
      {side:"white",notation:"Nc3",from:[7,1],to:[5,2],explain:"White defends e4 and develops."},
      {side:"black",notation:"a6",from:[1,0],to:[2,0],explain:"The Najdorf move! ...a6 stops Nb5/Bb5 ideas and prepares ...e5 or ...b5 — the most popular Sicilian of all."},
      {side:"white",notation:"Be2",from:[7,5],to:[6,4],explain:"A solid, classical bishop development."},
      {side:"black",notation:"e5",from:[1,4],to:[3,4],explain:"Black seizes the centre and kicks the d4-knight — the defining Najdorf break."},
      {side:"white",notation:"Nb3",from:[4,3],to:[5,1],explain:"The knight retreats, eyeing c5 and a5."},
      {side:"black",notation:"Be7",from:[0,5],to:[1,4],explain:"Develop and prepare to castle."},
      {side:"white",notation:"0-0",from:[7,4],to:[7,6],castle:{rookFrom:[7,7],rookTo:[7,5]},explain:"White castles to safety."},
      {side:"black",notation:"0-0",from:[0,4],to:[0,6],castle:{rookFrom:[0,7],rookTo:[0,5]},explain:"Black follows suit — king safety."},
      {side:"white",notation:"Be3",from:[7,2],to:[5,4],explain:"Develop the bishop, eyeing the c5 square."},
      {side:"black",notation:"Be6",from:[0,2],to:[2,4],explain:"Develop, guard d5, and prepare ...Nbd7 and ...Rc8."},
      {side:"white",notation:"Qd2",from:[7,3],to:[6,3],explain:"White connects the rooks."},
      {side:"black",notation:"Nbd7",from:[0,1],to:[1,3],explain:"Reroute the knight toward c5 or b6 via d7."},
      {side:"white",notation:"a4",from:[6,0],to:[4,0],explain:"White gains queenside space and restrains ...b5."},
      {side:"black",notation:"Rc8",from:[0,0],to:[0,2],explain:"The rook takes the half-open c-file — Black is harmonious and flexible, with play on both wings."}
    ]
  },
  {
    name:"2. Dragon Variation",
    summary:"Black fianchettoes the 'dragon' bishop to g7. Against the Yugoslav Attack both sides castle opposite and race to mate — sharp and thrilling.",
    finalNote:"A razor-sharp opposite-castling battle — whoever attacks faster wins. Engine eval: roughly level.",
    moves:[
      {side:"white",notation:"e4",from:[6,4],to:[4,4],explain:"White takes the centre."},
      {side:"black",notation:"c5",from:[1,2],to:[3,2],explain:"The Sicilian — counterattack from the flank."},
      {side:"white",notation:"Nf3",from:[7,6],to:[5,5],explain:"Develop toward d4."},
      {side:"black",notation:"d6",from:[1,3],to:[2,3],explain:"Prepare ...Nf6 and ...g6 without allowing e5."},
      {side:"white",notation:"d4",from:[6,3],to:[4,3],explain:"White opens the centre."},
      {side:"black",notation:"cxd4",from:[3,2],to:[4,3],explain:"Trade for the half-open c-file."},
      {side:"white",notation:"Nxd4",from:[5,5],to:[4,3],explain:"Open Sicilian reached."},
      {side:"black",notation:"Nf6",from:[0,6],to:[2,5],explain:"Develop and pressure e4."},
      {side:"white",notation:"Nc3",from:[7,1],to:[5,2],explain:"Defend e4."},
      {side:"black",notation:"g6",from:[1,6],to:[2,6],explain:"The Dragon! Black prepares ...Bg7, where the bishop rakes the long diagonal like a dragon breathing fire."},
      {side:"white",notation:"Be3",from:[7,2],to:[5,4],explain:"White sets up the Yugoslav Attack — the most testing anti-Dragon plan."},
      {side:"black",notation:"Bg7",from:[0,5],to:[1,6],explain:"The dragon bishop takes aim at White's queenside and centre."},
      {side:"white",notation:"f3",from:[6,5],to:[5,5],explain:"White bolsters e4 and prepares g4 with a pawn storm."},
      {side:"black",notation:"0-0",from:[0,4],to:[0,6],castle:{rookFrom:[0,7],rookTo:[0,5]},explain:"Black castles into the coming storm — both sides will attack opposite wings."},
      {side:"white",notation:"Qd2",from:[7,3],to:[6,3],explain:"White connects rooks and prepares O-O-O."},
      {side:"black",notation:"Nc6",from:[0,1],to:[2,2],explain:"Develop with pressure on d4."},
      {side:"white",notation:"Bc4",from:[7,5],to:[4,2],explain:"White's bishop eyes f7 and the a2-g8 diagonal."},
      {side:"black",notation:"Bd7",from:[0,2],to:[1,3],explain:"Develop, connect, and prepare ...Rc8 and ...Ne5."},
      {side:"white",notation:"0-0-0",from:[7,4],to:[7,2],castle:{rookFrom:[7,0],rookTo:[7,3]},explain:"White castles queenside — the opposite-side attacking race begins."},
      {side:"black",notation:"Rc8",from:[0,0],to:[0,2],explain:"Black's rook joins the c-file, aimed at White's king."},
      {side:"white",notation:"Bb3",from:[4,2],to:[5,1],explain:"White tucks the bishop away from tempo-gaining knight jumps."},
      {side:"black",notation:"Ne5",from:[2,2],to:[3,4],explain:"A perfect Dragon square — the knight eyes c4 and d3 and the queenside attack is rolling. Double-edged play for both kings."}
    ]
  },
  {
    name:"3. Sveshnikov Variation",
    summary:"Black plays ...e5 early, conceding the d5 square in exchange for huge piece activity and the bishop pair. A favourite at the very top level.",
    finalNote:"Sharp and dynamically balanced: Black's activity and bishop pair offset the d5 outpost. Engine eval: roughly level.",
    moves:[
      {side:"white",notation:"e4",from:[6,4],to:[4,4],explain:"White grabs the centre."},
      {side:"black",notation:"c5",from:[1,2],to:[3,2],explain:"The Sicilian."},
      {side:"white",notation:"Nf3",from:[7,6],to:[5,5],explain:"Develop."},
      {side:"black",notation:"Nc6",from:[0,1],to:[2,2],explain:"Develop and pressure d4 — heading for the Sveshnikov."},
      {side:"white",notation:"d4",from:[6,3],to:[4,3],explain:"Open the centre."},
      {side:"black",notation:"cxd4",from:[3,2],to:[4,3],explain:"Trade off."},
      {side:"white",notation:"Nxd4",from:[5,5],to:[4,3],explain:"Open Sicilian."},
      {side:"black",notation:"Nf6",from:[0,6],to:[2,5],explain:"Hit e4."},
      {side:"white",notation:"Nc3",from:[7,1],to:[5,2],explain:"Defend e4."},
      {side:"black",notation:"e5",from:[1,4],to:[3,4],explain:"The Sveshnikov! Black boldly kicks the knight and grabs the centre, accepting a backward d-pawn for huge piece activity."},
      {side:"white",notation:"Ndb5",from:[4,3],to:[3,1],explain:"White leaps to b5, eyeing the d6 hole."},
      {side:"black",notation:"d6",from:[1,3],to:[2,3],explain:"Black plugs d6, denying the knight its outpost."},
      {side:"white",notation:"Bg5",from:[7,2],to:[3,6],explain:"White pins and pressures the f6-knight — the guardian of d5."},
      {side:"black",notation:"a6",from:[1,0],to:[2,0],explain:"Black kicks the b5-knight, gaining time."},
      {side:"white",notation:"Na3",from:[3,1],to:[5,0],explain:"The knight is shoved to the rim — 'a knight on a3' is exactly what Black wants."},
      {side:"black",notation:"b5",from:[1,1],to:[3,1],explain:"Grab queenside space and keep the a3-knight offside."},
      {side:"white",notation:"Nd5",from:[5,2],to:[3,3],explain:"White plants a knight on the d5 hole — the key strategic battleground."},
      {side:"black",notation:"Be7",from:[0,5],to:[1,4],explain:"Unpin and prepare to recapture on f6."},
      {side:"white",notation:"Bxf6",from:[3,6],to:[2,5],explain:"White trades to fix Black's structure."},
      {side:"black",notation:"Bxf6",from:[1,4],to:[2,5],explain:"Recapture; Black's bishop becomes a monster on the long diagonal."},
      {side:"white",notation:"c3",from:[6,2],to:[5,2],explain:"White supports the d5-knight."},
      {side:"black",notation:"0-0",from:[0,4],to:[0,6],castle:{rookFrom:[0,7],rookTo:[0,5]},explain:"Black castles. Sharp and balanced — Black's bishop pair and activity offset the d5 outpost."}
    ]
  },
  {
    name:"4. Accelerated Dragon (Maroczy)",
    summary:"Black fianchettoes fast with ...g6. White clamps with the Maroczy Bind (c4); Black sets up solidly and plays to undermine the bind.",
    finalNote:"White keeps a small space edge from the bind; Black is solid and frees up with ...a5, ...Be6 and ...Rc8. Engine eval: small, comfortable edge for White.",
    moves:[
      {side:"white",notation:"e4",from:[6,4],to:[4,4],explain:"White takes the centre."},
      {side:"black",notation:"c5",from:[1,2],to:[3,2],explain:"The Sicilian."},
      {side:"white",notation:"Nf3",from:[7,6],to:[5,5],explain:"Develop."},
      {side:"black",notation:"Nc6",from:[0,1],to:[2,2],explain:"Develop, pressuring d4."},
      {side:"white",notation:"d4",from:[6,3],to:[4,3],explain:"Open the centre."},
      {side:"black",notation:"cxd4",from:[3,2],to:[4,3],explain:"Trade."},
      {side:"white",notation:"Nxd4",from:[5,5],to:[4,3],explain:"Open Sicilian."},
      {side:"black",notation:"g6",from:[1,6],to:[2,6],explain:"The Accelerated Dragon — Black fianchettoes fast, saving a tempo on ...d6 to hit d4 quickly."},
      {side:"white",notation:"c4",from:[6,2],to:[4,2],explain:"The Maroczy Bind! White clamps down on d5 and b5, taking a space advantage."},
      {side:"black",notation:"Nf6",from:[0,6],to:[2,5],explain:"Develop and contest e4 and d5."},
      {side:"white",notation:"Nc3",from:[7,1],to:[5,2],explain:"Defend e4."},
      {side:"black",notation:"d6",from:[1,3],to:[2,3],explain:"Black settles for a solid, slightly cramped setup, aiming to free up later."},
      {side:"white",notation:"Be2",from:[7,5],to:[6,4],explain:"White develops calmly, keeping the bind."},
      {side:"black",notation:"Nxd4",from:[2,2],to:[4,3],explain:"Trade off a piece to ease the cramp."},
      {side:"white",notation:"Qxd4",from:[7,3],to:[4,3],explain:"White recaptures, centralising the queen."},
      {side:"black",notation:"Bg7",from:[0,5],to:[1,6],explain:"The dragon bishop eyes the centre and queenside."},
      {side:"white",notation:"Be3",from:[7,2],to:[5,4],explain:"Develop and support the queen."},
      {side:"black",notation:"0-0",from:[0,4],to:[0,6],castle:{rookFrom:[0,7],rookTo:[0,5]},explain:"Black castles."},
      {side:"white",notation:"Qd2",from:[4,3],to:[6,3],explain:"White unpins and prepares to connect rooks."},
      {side:"black",notation:"Be6",from:[0,2],to:[2,4],explain:"Pressure c4 — Black's main counterplay against the bind."},
      {side:"white",notation:"0-0",from:[7,4],to:[7,6],castle:{rookFrom:[7,7],rookTo:[7,5]},explain:"White castles."},
      {side:"black",notation:"Qa5",from:[0,3],to:[3,0],explain:"The queen eyes c5 and the 5th rank. Solid but slightly passive; Black undermines the bind with ...a5 and ...Rfc8."}
    ]
  },
  {
    name:"5. Taimanov (English Attack)",
    summary:"Black's flexible ...e6/...Qc7/...Nc6 setup. In the English Attack both sides castle queenside and storm each other's king.",
    finalNote:"A double-edged opposite-castling middlegame — a true fighting Sicilian. Engine eval: roughly level.",
    moves:[
      {side:"white",notation:"e4",from:[6,4],to:[4,4],explain:"White takes the centre."},
      {side:"black",notation:"c5",from:[1,2],to:[3,2],explain:"The Sicilian."},
      {side:"white",notation:"Nf3",from:[7,6],to:[5,5],explain:"Develop."},
      {side:"black",notation:"e6",from:[1,4],to:[2,4],explain:"Flexible — Black keeps Taimanov, Kan and Scheveningen options open."},
      {side:"white",notation:"d4",from:[6,3],to:[4,3],explain:"Open the centre."},
      {side:"black",notation:"cxd4",from:[3,2],to:[4,3],explain:"Trade."},
      {side:"white",notation:"Nxd4",from:[5,5],to:[4,3],explain:"Open Sicilian."},
      {side:"black",notation:"Nc6",from:[0,1],to:[2,2],explain:"Develop, hitting d4 — the Taimanov."},
      {side:"white",notation:"Nc3",from:[7,1],to:[5,2],explain:"Defend and develop."},
      {side:"black",notation:"Qc7",from:[0,3],to:[1,2],explain:"The Taimanov's flexible queen move — eyeing the c-file and e5, supporting ...a6/...b5."},
      {side:"white",notation:"Be3",from:[7,2],to:[5,4],explain:"White heads for the English Attack with Qd2 and O-O-O."},
      {side:"black",notation:"a6",from:[1,0],to:[2,0],explain:"Stop Nb5/Bb5 and prepare queenside expansion."},
      {side:"white",notation:"Qd2",from:[7,3],to:[6,3],explain:"Connect rooks; prepare long castling."},
      {side:"black",notation:"Nf6",from:[0,6],to:[2,5],explain:"Develop and pressure e4."},
      {side:"white",notation:"0-0-0",from:[7,4],to:[7,2],castle:{rookFrom:[7,0],rookTo:[7,3]},explain:"White castles queenside — declaring an opposite-wing attacking battle."},
      {side:"black",notation:"Be7",from:[0,5],to:[1,4],explain:"Develop and prepare to castle."},
      {side:"white",notation:"f3",from:[6,5],to:[5,5],explain:"Support e4 and prepare g4."},
      {side:"black",notation:"b5",from:[1,1],to:[3,1],explain:"Black launches the queenside pawn storm — the race is on."},
      {side:"white",notation:"Kb1",from:[7,2],to:[7,1],explain:"A prophylactic king tuck, off the c-file before it opens."},
      {side:"black",notation:"Bb7",from:[0,2],to:[1,1],explain:"The bishop joins the attack on the long diagonal — a sharp, mutual-attack middlegame."}
    ]
  }
];
const QUEENS_GAMBIT_LESSON = [
  {
    name:"1. QGD Main Line (Bg5)",
    summary:"The classic Queen's Gambit Declined: Black holds the centre with ...e6, White pins with Bg5 and develops harmoniously, eventually trading on d5 to play with a small, lasting pull.",
    finalNote:"A textbook QGD: White has a pleasant space edge and the freer game; Black is solid and ready to organise ...c5 or ...c6. Engine eval: small, comfortable edge for White.",
    moves:[
      {side:"white",notation:"d4",from:[6,3],to:[4,3],explain:"Stakes out the centre with the queen-pawn."},
      {side:"black",notation:"d5",from:[1,3],to:[3,3],explain:"Claims central space."},
      {side:"white",notation:"c4",from:[6,2],to:[4,2],explain:"Grabs queenside space and clamps d5."},
      {side:"black",notation:"e6",from:[1,4],to:[2,4],explain:"Frees the f8-bishop and braces d5."},
      {side:"white",notation:"Nc3",from:[7,1],to:[5,2],explain:"Develops the knight, supporting the centre."},
      {side:"black",notation:"Nf6",from:[0,6],to:[2,5],explain:"The defining QGD pin — Bg5 pressures the f6-knight, the guardian of d5."},
      {side:"white",notation:"Bg5",from:[7,2],to:[3,6],explain:"The defining QGD pin — Bg5 pressures the f6-knight, the guardian of d5."},
      {side:"black",notation:"Be7",from:[0,5],to:[1,4],explain:"Develops the bishop, preparing to castle."},
      {side:"white",notation:"e3",from:[6,4],to:[5,4],explain:"Solid support for d4, freeing the bishop."},
      {side:"black",notation:"0-0",from:[0,4],to:[0,6],castle:{rookFrom:[0,7],rookTo:[0,5]},explain:"Castles — king to safety."},
      {side:"white",notation:"Nf3",from:[7,6],to:[5,5],explain:"Develops the knight toward the centre."},
      {side:"black",notation:"h6",from:[1,7],to:[2,7],explain:"A useful luft, stopping pins."},
      {side:"white",notation:"Bh4",from:[3,6],to:[4,7],explain:"Bishop to h4."},
      {side:"black",notation:"b6",from:[1,1],to:[2,1],explain:"Prepares to fianchetto the light bishop."},
      {side:"white",notation:"Be2",from:[7,5],to:[6,4],explain:"A flexible bishop development."},
      {side:"black",notation:"Bb7",from:[0,2],to:[1,1],explain:"Bishop to b7."},
      {side:"white",notation:"Bxf6",from:[4,7],to:[2,5],explain:"Trading on f6 gives up the bishop pair but fixes Black's structure and frees White's play."},
      {side:"black",notation:"Bxf6",from:[1,4],to:[2,5],explain:"Trading on f6 gives up the bishop pair but fixes Black's structure and frees White's play."},
      {side:"white",notation:"cxd5",from:[4,2],to:[3,3],explain:"The Carlsbad structure — White's minority attack on the queenside is the long-term plan."},
      {side:"black",notation:"exd5",from:[2,4],to:[3,3],explain:"The Carlsbad structure — White's minority attack on the queenside is the long-term plan."},
      {side:"white",notation:"0-0",from:[7,4],to:[7,6],castle:{rookFrom:[7,7],rookTo:[7,5]},explain:"Castles — king to safety."}
    ]
  },
  {
    name:"2. QGD Exchange Variation",
    summary:"The Exchange QGD: White trades on d5 to set up the famous minority attack — pushing b4-b5 to create a weak pawn on Black's queenside.",
    finalNote:"The Carlsbad structure: White will play the minority attack (b4-b5) on the queenside while Black seeks kingside play. A rich, classic strategic battle, edge to White.",
    moves:[
      {side:"white",notation:"d4",from:[6,3],to:[4,3],explain:"Stakes out the centre with the queen-pawn."},
      {side:"black",notation:"d5",from:[1,3],to:[3,3],explain:"Claims central space."},
      {side:"white",notation:"c4",from:[6,2],to:[4,2],explain:"Grabs queenside space and clamps d5."},
      {side:"black",notation:"e6",from:[1,4],to:[2,4],explain:"Frees the f8-bishop and braces d5."},
      {side:"white",notation:"Nc3",from:[7,1],to:[5,2],explain:"Develops the knight, supporting the centre."},
      {side:"black",notation:"Nf6",from:[0,6],to:[2,5],explain:"cxd5 — entering the Exchange Variation and the Carlsbad pawn structure."},
      {side:"white",notation:"cxd5",from:[4,2],to:[3,3],explain:"cxd5 — entering the Exchange Variation and the Carlsbad pawn structure."},
      {side:"black",notation:"exd5",from:[2,4],to:[3,3],explain:"Captures on d5, opening lines."},
      {side:"white",notation:"Bg5",from:[7,2],to:[3,6],explain:"The bishop pins or pressures the f6-knight."},
      {side:"black",notation:"c6",from:[1,2],to:[2,2],explain:"Braces d5 and prepares to develop."},
      {side:"white",notation:"e3",from:[6,4],to:[5,4],explain:"Solid support for d4, freeing the bishop."},
      {side:"black",notation:"Be7",from:[0,5],to:[1,4],explain:"Develops the bishop, preparing to castle."},
      {side:"white",notation:"Bd3",from:[7,5],to:[5,3],explain:"The bishop eyes the b1-h7 diagonal."},
      {side:"black",notation:"0-0",from:[0,4],to:[0,6],castle:{rookFrom:[0,7],rookTo:[0,5]},explain:"Castles — king to safety."},
      {side:"white",notation:"Qc2",from:[7,3],to:[6,2],explain:"Queen to c2."},
      {side:"black",notation:"Nbd7",from:[0,1],to:[1,3],explain:"Ne2 (not Nf3) — the modern setup, keeping the f-pawn free and the knight ready for g3/f4."},
      {side:"white",notation:"Nge2",from:[7,6],to:[6,4],explain:"Ne2 (not Nf3) — the modern setup, keeping the f-pawn free and the knight ready for g3/f4."},
      {side:"black",notation:"Re8",from:[0,5],to:[0,4],explain:"The rook takes the central e-file."},
      {side:"white",notation:"0-0",from:[7,4],to:[7,6],castle:{rookFrom:[7,7],rookTo:[7,5]},explain:"Castles — king to safety."},
      {side:"black",notation:"Nf8",from:[1,3],to:[0,5],explain:"Knight to f8."}
    ]
  },
  {
    name:"3. Slav Defense",
    summary:"The Slav: Black supports d5 with ...c6 (instead of ...e6), keeping the light bishop free. Here Black grabs the c4-pawn and develops the bishop actively to f5.",
    finalNote:"A balanced Slav: Black has solved the problem bishop (...Bf5/Bg6) and is comfortable; White has central presence. Engine eval: roughly level.",
    moves:[
      {side:"white",notation:"d4",from:[6,3],to:[4,3],explain:"Stakes out the centre with the queen-pawn."},
      {side:"black",notation:"d5",from:[1,3],to:[3,3],explain:"Claims central space."},
      {side:"white",notation:"c4",from:[6,2],to:[4,2],explain:"Grabs queenside space and clamps d5."},
      {side:"black",notation:"c6",from:[1,2],to:[2,2],explain:"Braces d5 and prepares to develop."},
      {side:"white",notation:"Nf3",from:[7,6],to:[5,5],explain:"Develops the knight toward the centre."},
      {side:"black",notation:"Nf6",from:[0,6],to:[2,5],explain:"...dxc4 — Black grabs the pawn, planning ...b5 or ...Bf5 to hold or return it on good terms."},
      {side:"white",notation:"Nc3",from:[7,1],to:[5,2],explain:"...dxc4 — Black grabs the pawn, planning ...b5 or ...Bf5 to hold or return it on good terms."},
      {side:"black",notation:"dxc4",from:[3,3],to:[4,2],explain:"...Bf5 — the whole point of the Slav: the light bishop develops OUTSIDE the pawn chain."},
      {side:"white",notation:"a4",from:[6,0],to:[4,0],explain:"...Bf5 — the whole point of the Slav: the light bishop develops OUTSIDE the pawn chain."},
      {side:"black",notation:"Bf5",from:[0,2],to:[3,5],explain:"Bishop to f5."},
      {side:"white",notation:"e3",from:[6,4],to:[5,4],explain:"Solid support for d4, freeing the bishop."},
      {side:"black",notation:"e6",from:[1,4],to:[2,4],explain:"Frees the f8-bishop and braces d5."},
      {side:"white",notation:"Bxc4",from:[7,5],to:[4,2],explain:"Captures on c4, opening lines."},
      {side:"black",notation:"Bb4",from:[0,5],to:[4,1],explain:"Bishop to b4."},
      {side:"white",notation:"0-0",from:[7,4],to:[7,6],castle:{rookFrom:[7,7],rookTo:[7,5]},explain:"Castles — king to safety."},
      {side:"black",notation:"0-0",from:[0,4],to:[0,6],castle:{rookFrom:[0,7],rookTo:[0,5]},explain:"Castles — king to safety."},
      {side:"white",notation:"Qe2",from:[7,3],to:[6,4],explain:"Connects the rooks."},
      {side:"black",notation:"Bg6",from:[3,5],to:[2,6],explain:"Bishop to g6."}
    ]
  },
  {
    name:"4. Queen's Gambit Accepted",
    summary:"The Queen's Gambit Accepted: Black takes the c4-pawn, gives up the centre temporarily, then strikes back with ...c5 to free the position.",
    finalNote:"An open, equal QGA: White has an isolated/hanging-pawn centre with active pieces; Black is solid and well-developed. Engine eval: roughly level.",
    moves:[
      {side:"white",notation:"d4",from:[6,3],to:[4,3],explain:"Stakes out the centre with the queen-pawn."},
      {side:"black",notation:"d5",from:[1,3],to:[3,3],explain:"Claims central space."},
      {side:"white",notation:"c4",from:[6,2],to:[4,2],explain:"...dxc4 — accepting the gambit. Black won't try to hold the pawn but uses the tempo to develop and hit the centre with ...c5."},
      {side:"black",notation:"dxc4",from:[3,3],to:[4,2],explain:"...dxc4 — accepting the gambit. Black won't try to hold the pawn but uses the tempo to develop and hit the centre with ...c5."},
      {side:"white",notation:"Nf3",from:[7,6],to:[5,5],explain:"Develops the knight toward the centre."},
      {side:"black",notation:"Nf6",from:[0,6],to:[2,5],explain:"Develops the knight, hitting e4 and eyeing d5."},
      {side:"white",notation:"e3",from:[6,4],to:[5,4],explain:"Solid support for d4, freeing the bishop."},
      {side:"black",notation:"e6",from:[1,4],to:[2,4],explain:"Frees the f8-bishop and braces d5."},
      {side:"white",notation:"Bxc4",from:[7,5],to:[4,2],explain:"...c5 — the freeing break that defines the QGA."},
      {side:"black",notation:"c5",from:[1,2],to:[3,2],explain:"...c5 — the freeing break that defines the QGA."},
      {side:"white",notation:"0-0",from:[7,4],to:[7,6],castle:{rookFrom:[7,7],rookTo:[7,5]},explain:"Castles — king to safety."},
      {side:"black",notation:"a6",from:[1,0],to:[2,0],explain:"Gains space and stops Nb5/Bb5 ideas."},
      {side:"white",notation:"a4",from:[6,0],to:[4,0],explain:"Gains queenside space, restraining ...b5."},
      {side:"black",notation:"Nc6",from:[0,1],to:[2,2],explain:"Develops the knight, pressuring the centre."},
      {side:"white",notation:"Qe2",from:[7,3],to:[6,4],explain:"Connects the rooks."},
      {side:"black",notation:"cxd4",from:[3,2],to:[4,3],explain:"Captures on d4, opening lines."},
      {side:"white",notation:"Rd1",from:[7,5],to:[7,3],explain:"The rook eyes the central d-file."},
      {side:"black",notation:"Be7",from:[0,5],to:[1,4],explain:"Develops the bishop, preparing to castle."},
      {side:"white",notation:"exd4",from:[5,4],to:[4,3],explain:"Captures on d4, opening lines."},
      {side:"black",notation:"0-0",from:[0,4],to:[0,6],castle:{rookFrom:[0,7],rookTo:[0,5]},explain:"Castles — king to safety."}
    ]
  },
  {
    name:"5. Tarrasch Defense",
    summary:"The Tarrasch Defense: Black accepts an isolated queen's pawn in return for free piece play and open lines — a principled, active choice.",
    finalNote:"The isolated queen's pawn (IQP) middlegame: White plays to blockade and win the d5-pawn; Black gets active pieces and attacking chances. Engine eval: small edge for White.",
    moves:[
      {side:"white",notation:"d4",from:[6,3],to:[4,3],explain:"Stakes out the centre with the queen-pawn."},
      {side:"black",notation:"d5",from:[1,3],to:[3,3],explain:"Claims central space."},
      {side:"white",notation:"c4",from:[6,2],to:[4,2],explain:"Grabs queenside space and clamps d5."},
      {side:"black",notation:"e6",from:[1,4],to:[2,4],explain:"...c5 — the Tarrasch, immediately challenging White's centre."},
      {side:"white",notation:"Nc3",from:[7,1],to:[5,2],explain:"...c5 — the Tarrasch, immediately challenging White's centre."},
      {side:"black",notation:"c5",from:[1,2],to:[3,2],explain:"Strikes at the centre with the c-pawn."},
      {side:"white",notation:"cxd5",from:[4,2],to:[3,3],explain:"Captures on d5, opening lines."},
      {side:"black",notation:"exd5",from:[2,4],to:[3,3],explain:"Captures on d5, opening lines."},
      {side:"white",notation:"Nf3",from:[7,6],to:[5,5],explain:"Develops the knight toward the centre."},
      {side:"black",notation:"Nc6",from:[0,1],to:[2,2],explain:"Develops the knight, pressuring the centre."},
      {side:"white",notation:"g3",from:[6,6],to:[5,6],explain:"Prepares the bishop fianchetto."},
      {side:"black",notation:"Nf6",from:[0,6],to:[2,5],explain:"Develops the knight, hitting e4 and eyeing d5."},
      {side:"white",notation:"Bg2",from:[7,5],to:[6,6],explain:"Fianchettoes the bishop onto the long diagonal."},
      {side:"black",notation:"Be7",from:[0,5],to:[1,4],explain:"Develops the bishop, preparing to castle."},
      {side:"white",notation:"0-0",from:[7,4],to:[7,6],castle:{rookFrom:[7,7],rookTo:[7,5]},explain:"Castles — king to safety."},
      {side:"black",notation:"0-0",from:[0,4],to:[0,6],castle:{rookFrom:[0,7],rookTo:[0,5]},explain:"Castles — king to safety."},
      {side:"white",notation:"Bg5",from:[7,2],to:[3,6],explain:"...cxd4 accepts the isolated d5-pawn — dynamic activity for a long-term structural concession."},
      {side:"black",notation:"cxd4",from:[3,2],to:[4,3],explain:"...cxd4 accepts the isolated d5-pawn — dynamic activity for a long-term structural concession."},
      {side:"white",notation:"Nxd4",from:[5,5],to:[4,3],explain:"Captures on d4, opening lines."},
      {side:"black",notation:"h6",from:[1,7],to:[2,7],explain:"A useful luft, stopping pins."}
    ]
  }
];

const ITALIAN_LESSON = [
  {
    name:"1. Giuoco Pianissimo",
    summary:"The Giuoco Pianissimo ('quietest game'): both sides develop slowly behind c3/d3, manoeuvring for a big central break later. Modern top-level main line.",
    finalNote:"A rich, slow manoeuvring battle — White will reorganise with Nbd2-f1-g3 and aim for d4. Engine eval: small edge for White.",
    moves:[
      {side:"white",notation:"e4",from:[6,4],to:[4,4],explain:"Stakes out the centre with the king-pawn."},
      {side:"black",notation:"e5",from:[1,4],to:[3,4],explain:"Grabs central space and gains a tempo."},
      {side:"white",notation:"Nf3",from:[7,6],to:[5,5],explain:"Develops the knight toward the centre."},
      {side:"black",notation:"Nc6",from:[0,1],to:[2,2],explain:"Bc4 — the Italian bishop, aimed at f7."},
      {side:"white",notation:"Bc4",from:[7,5],to:[4,2],explain:"Bc4 — the Italian bishop, aimed at f7."},
      {side:"black",notation:"Bc5",from:[0,5],to:[3,2],explain:"c3 and d3 — the modern slow setup, keeping the centre flexible."},
      {side:"white",notation:"c3",from:[6,2],to:[5,2],explain:"c3 and d3 — the modern slow setup, keeping the centre flexible."},
      {side:"black",notation:"Nf6",from:[0,6],to:[2,5],explain:"Develops the knight, hitting e4 and eyeing d5."},
      {side:"white",notation:"d3",from:[6,3],to:[5,3],explain:"Pawn to d3."},
      {side:"black",notation:"d6",from:[1,3],to:[2,3],explain:"Restrains e5 and prepares development."},
      {side:"white",notation:"0-0",from:[7,4],to:[7,6],castle:{rookFrom:[7,7],rookTo:[7,5]},explain:"Castles — king to safety."},
      {side:"black",notation:"0-0",from:[0,4],to:[0,6],castle:{rookFrom:[0,7],rookTo:[0,5]},explain:"Castles — king to safety."},
      {side:"white",notation:"Re1",from:[7,5],to:[7,4],explain:"The rook takes the central e-file."},
      {side:"black",notation:"a6",from:[1,0],to:[2,0],explain:"Gains space and stops Nb5/Bb5 ideas."},
      {side:"white",notation:"a4",from:[6,0],to:[4,0],explain:"Gains queenside space, restraining ...b5."},
      {side:"black",notation:"Ba7",from:[3,2],to:[1,0],explain:"Bishop to a7."},
      {side:"white",notation:"h3",from:[6,7],to:[5,7],explain:"A useful luft, stopping pins."},
      {side:"black",notation:"h6",from:[1,7],to:[2,7],explain:"Nbd2 begins the knight tour to f1-g3, supporting a future d4."},
      {side:"white",notation:"Nbd2",from:[7,1],to:[6,3],explain:"Nbd2 begins the knight tour to f1-g3, supporting a future d4."},
      {side:"black",notation:"Be6",from:[0,2],to:[2,4],explain:"Bishop to e6."}
    ]
  },
  {
    name:"2. Main Line d4 (Moller)",
    summary:"The Møller / Main Line: White plays the aggressive d4 break and sacrifices a pawn for a strong centre and rapid development in razor-sharp lines.",
    finalNote:"A sharp, theory-heavy battle: White has the centre and initiative for the pawn; Black must defend accurately. Engine eval: roughly level with best play.",
    moves:[
      {side:"white",notation:"e4",from:[6,4],to:[4,4],explain:"Stakes out the centre with the king-pawn."},
      {side:"black",notation:"e5",from:[1,4],to:[3,4],explain:"Grabs central space and gains a tempo."},
      {side:"white",notation:"Nf3",from:[7,6],to:[5,5],explain:"Develops the knight toward the centre."},
      {side:"black",notation:"Nc6",from:[0,1],to:[2,2],explain:"Develops the knight, pressuring the centre."},
      {side:"white",notation:"Bc4",from:[7,5],to:[4,2],explain:"The bishop eyes the f7 weakness."},
      {side:"black",notation:"Bc5",from:[0,5],to:[3,2],explain:"Bishop to c5."},
      {side:"white",notation:"c3",from:[6,2],to:[5,2],explain:"Supports d4 — a solid backbone."},
      {side:"black",notation:"Nf6",from:[0,6],to:[2,5],explain:"d4 — the central break that opens the game."},
      {side:"white",notation:"d4",from:[6,3],to:[4,3],explain:"d4 — the central break that opens the game."},
      {side:"black",notation:"exd4",from:[3,4],to:[4,3],explain:"Captures on d4, opening lines."},
      {side:"white",notation:"cxd4",from:[5,2],to:[4,3],explain:"Captures on d4, opening lines."},
      {side:"black",notation:"Bb4+",from:[3,2],to:[4,1],explain:"Bishop to b4."},
      {side:"white",notation:"Nc3",from:[7,1],to:[5,2],explain:"d5! — gaining a tempo and clamping the centre, the point of White's play."},
      {side:"black",notation:"Nxe4",from:[2,5],to:[4,4],explain:"d5! — gaining a tempo and clamping the centre, the point of White's play."},
      {side:"white",notation:"0-0",from:[7,4],to:[7,6],castle:{rookFrom:[7,7],rookTo:[7,5]},explain:"Castles — king to safety."},
      {side:"black",notation:"Bxc3",from:[4,1],to:[5,2],explain:"Captures on c3, opening lines."},
      {side:"white",notation:"d5",from:[4,3],to:[3,3],explain:"Claims central space."},
      {side:"black",notation:"Bf6",from:[5,2],to:[2,5],explain:"Bishop to f6."},
      {side:"white",notation:"Re1",from:[7,5],to:[7,4],explain:"The rook takes the central e-file."},
      {side:"black",notation:"Ne7",from:[2,2],to:[1,4],explain:"Knight to e7."}
    ]
  },
  {
    name:"3. Two Knights (4.Ng5)",
    summary:"The Two Knights Defense: instead of ...Bc5, Black plays the combative ...Nf6, inviting the sharp 4.Ng5 attack on f7 and a pawn sacrifice for big activity.",
    finalNote:"A sharp gambit: Black is a pawn down but has a huge lead in development and active pieces against White's loose position. Engine eval: small edge for White, full practical comp for Black.",
    moves:[
      {side:"white",notation:"e4",from:[6,4],to:[4,4],explain:"Stakes out the centre with the king-pawn."},
      {side:"black",notation:"e5",from:[1,4],to:[3,4],explain:"Grabs central space and gains a tempo."},
      {side:"white",notation:"Nf3",from:[7,6],to:[5,5],explain:"Develops the knight toward the centre."},
      {side:"black",notation:"Nc6",from:[0,1],to:[2,2],explain:"Develops the knight, pressuring the centre."},
      {side:"white",notation:"Bc4",from:[7,5],to:[4,2],explain:"The bishop eyes the f7 weakness."},
      {side:"black",notation:"Nf6",from:[0,6],to:[2,5],explain:"Ng5 — the aggressive try, attacking f7 at once."},
      {side:"white",notation:"Ng5",from:[5,5],to:[3,6],explain:"...d5 — the only move, hitting back in the centre."},
      {side:"black",notation:"d5",from:[1,3],to:[3,3],explain:"...d5 — the only move, hitting back in the centre."},
      {side:"white",notation:"exd5",from:[4,4],to:[3,3],explain:"...Na5 — kicking the strong c4-bishop, the main line."},
      {side:"black",notation:"Na5",from:[2,2],to:[3,0],explain:"...Na5 — kicking the strong c4-bishop, the main line."},
      {side:"white",notation:"Bb5+",from:[4,2],to:[3,1],explain:"The bishop pins and pressures the c6-knight."},
      {side:"black",notation:"c6",from:[1,2],to:[2,2],explain:"Braces d5 and prepares to develop."},
      {side:"white",notation:"dxc6",from:[3,3],to:[2,2],explain:"Captures on c6, opening lines."},
      {side:"black",notation:"bxc6",from:[1,1],to:[2,2],explain:"Captures on c6, opening lines."},
      {side:"white",notation:"Be2",from:[3,1],to:[6,4],explain:"A flexible bishop development."},
      {side:"black",notation:"h6",from:[1,7],to:[2,7],explain:"A useful luft, stopping pins."},
      {side:"white",notation:"Nf3",from:[3,6],to:[5,5],explain:"Develops the knight toward the centre."},
      {side:"black",notation:"e4",from:[3,4],to:[4,4],explain:"Stakes out the centre with the king-pawn."},
      {side:"white",notation:"Ne5",from:[5,5],to:[3,4],explain:"Knight to e5."},
      {side:"black",notation:"Bd6",from:[0,5],to:[2,3],explain:"Bishop to d6."}
    ]
  },
  {
    name:"4. Evans Gambit",
    summary:"The Evans Gambit: White sacrifices the b-pawn to deflect Black's bishop and build a powerful centre with c3 and d4 — a romantic, attacking weapon.",
    finalNote:"Classic gambit play: White has a big centre and fast development for the pawn; Black holds the extra material but must consolidate. Engine eval: roughly level.",
    moves:[
      {side:"white",notation:"e4",from:[6,4],to:[4,4],explain:"Stakes out the centre with the king-pawn."},
      {side:"black",notation:"e5",from:[1,4],to:[3,4],explain:"Grabs central space and gains a tempo."},
      {side:"white",notation:"Nf3",from:[7,6],to:[5,5],explain:"Develops the knight toward the centre."},
      {side:"black",notation:"Nc6",from:[0,1],to:[2,2],explain:"Develops the knight, pressuring the centre."},
      {side:"white",notation:"Bc4",from:[7,5],to:[4,2],explain:"The bishop eyes the f7 weakness."},
      {side:"black",notation:"Bc5",from:[0,5],to:[3,2],explain:"b4 — the Evans Gambit! The pawn deflects Black's bishop from c5."},
      {side:"white",notation:"b4",from:[6,1],to:[4,1],explain:"b4 — the Evans Gambit! The pawn deflects Black's bishop from c5."},
      {side:"black",notation:"Bxb4",from:[3,2],to:[4,1],explain:"Captures on b4, opening lines."},
      {side:"white",notation:"c3",from:[6,2],to:[5,2],explain:"Supports d4 — a solid backbone."},
      {side:"black",notation:"Ba5",from:[4,1],to:[3,0],explain:"d4 — White slams open the centre, the whole point of the gambit."},
      {side:"white",notation:"d4",from:[6,3],to:[4,3],explain:"d4 — White slams open the centre, the whole point of the gambit."},
      {side:"black",notation:"exd4",from:[3,4],to:[4,3],explain:"Captures on d4, opening lines."},
      {side:"white",notation:"0-0",from:[7,4],to:[7,6],castle:{rookFrom:[7,7],rookTo:[7,5]},explain:"Castles — king to safety."},
      {side:"black",notation:"dxc3",from:[4,3],to:[5,2],explain:"Captures on c3, opening lines."},
      {side:"white",notation:"Qb3",from:[7,3],to:[5,1],explain:"Pressures b7 and the centre."},
      {side:"black",notation:"Qf6",from:[0,3],to:[2,5],explain:"Queen to f6."},
      {side:"white",notation:"e5",from:[4,4],to:[3,4],explain:"Grabs central space and gains a tempo."},
      {side:"black",notation:"Qg6",from:[2,5],to:[2,6],explain:"Queen to g6."},
      {side:"white",notation:"Nxc3",from:[7,1],to:[5,2],explain:"Captures on c3, opening lines."},
      {side:"black",notation:"Nge7",from:[0,6],to:[1,4],explain:"Knight to ge."}
    ]
  },
  {
    name:"5. Giuoco Main (Bd2)",
    summary:"The Giuoco main line with Bd2: a sounder, calmer central battle than the Møller — White accepts symmetry and an isolated/hanging pawn for easy development.",
    finalNote:"A balanced, open position: White has a slight space pull around the d-pawn; both sides are fully developed. Engine eval: small edge for White.",
    moves:[
      {side:"white",notation:"e4",from:[6,4],to:[4,4],explain:"Stakes out the centre with the king-pawn."},
      {side:"black",notation:"e5",from:[1,4],to:[3,4],explain:"Grabs central space and gains a tempo."},
      {side:"white",notation:"Nf3",from:[7,6],to:[5,5],explain:"Develops the knight toward the centre."},
      {side:"black",notation:"Nc6",from:[0,1],to:[2,2],explain:"Develops the knight, pressuring the centre."},
      {side:"white",notation:"Bc4",from:[7,5],to:[4,2],explain:"The bishop eyes the f7 weakness."},
      {side:"black",notation:"Bc5",from:[0,5],to:[3,2],explain:"Bishop to c5."},
      {side:"white",notation:"c3",from:[6,2],to:[5,2],explain:"Supports d4 — a solid backbone."},
      {side:"black",notation:"Nf6",from:[0,6],to:[2,5],explain:"d4 — the central break."},
      {side:"white",notation:"d4",from:[6,3],to:[4,3],explain:"d4 — the central break."},
      {side:"black",notation:"exd4",from:[3,4],to:[4,3],explain:"Captures on d4, opening lines."},
      {side:"white",notation:"cxd4",from:[5,2],to:[4,3],explain:"Captures on d4, opening lines."},
      {side:"black",notation:"Bb4+",from:[3,2],to:[4,1],explain:"Bd2 — the solid alternative to Nc3, avoiding the sharpest lines."},
      {side:"white",notation:"Bd2",from:[7,2],to:[6,3],explain:"Bd2 — the solid alternative to Nc3, avoiding the sharpest lines."},
      {side:"black",notation:"Bxd2+",from:[4,1],to:[6,3],explain:"Captures on d2, opening lines."},
      {side:"white",notation:"Nbxd2",from:[7,1],to:[6,3],explain:"...d5 — Black frees his game with the thematic central counter-strike."},
      {side:"black",notation:"d5",from:[1,3],to:[3,3],explain:"...d5 — Black frees his game with the thematic central counter-strike."},
      {side:"white",notation:"exd5",from:[4,4],to:[3,3],explain:"Captures on d5, opening lines."},
      {side:"black",notation:"Nxd5",from:[2,5],to:[3,3],explain:"Captures on d5, opening lines."},
      {side:"white",notation:"Qb3",from:[7,3],to:[5,1],explain:"Pressures b7 and the centre."},
      {side:"black",notation:"Nce7",from:[2,2],to:[1,4],explain:"Knight to ce."}
    ]
  }
];

const RUY_LOPEZ_LESSON = [
  {
    name:"1. Closed Ruy Lopez",
    summary:"The Closed Ruy Lopez: the main highway of chess. White builds slowly with c3 and d4 while Black reroutes the knight with ...Na5 and strikes with ...c5.",
    finalNote:"The grand Closed Ruy tabiya: White has built the ideal centre and prepares d4; Black has queenside space and the ...c5 break. Engine eval: small, classic edge for White.",
    moves:[
      {side:"white",notation:"e4",from:[6,4],to:[4,4],explain:"Stakes out the centre with the king-pawn."},
      {side:"black",notation:"e5",from:[1,4],to:[3,4],explain:"Grabs central space and gains a tempo."},
      {side:"white",notation:"Nf3",from:[7,6],to:[5,5],explain:"Develops the knight toward the centre."},
      {side:"black",notation:"Nc6",from:[0,1],to:[2,2],explain:"Bb5 — the Ruy Lopez bishop, pressuring the e5-defender."},
      {side:"white",notation:"Bb5",from:[7,5],to:[3,1],explain:"Bb5 — the Ruy Lopez bishop, pressuring the e5-defender."},
      {side:"black",notation:"a6",from:[1,0],to:[2,0],explain:"Gains space and stops Nb5/Bb5 ideas."},
      {side:"white",notation:"Ba4",from:[3,1],to:[4,0],explain:"Bishop to a4."},
      {side:"black",notation:"Nf6",from:[0,6],to:[2,5],explain:"Develops the knight, hitting e4 and eyeing d5."},
      {side:"white",notation:"0-0",from:[7,4],to:[7,6],castle:{rookFrom:[7,7],rookTo:[7,5]},explain:"Castles — king to safety."},
      {side:"black",notation:"Be7",from:[0,5],to:[1,4],explain:"Develops the bishop, preparing to castle."},
      {side:"white",notation:"Re1",from:[7,5],to:[7,4],explain:"The rook takes the central e-file."},
      {side:"black",notation:"b5",from:[1,1],to:[3,1],explain:"Expands on the queenside."},
      {side:"white",notation:"Bb3",from:[4,0],to:[5,1],explain:"Bishop to b3."},
      {side:"black",notation:"d6",from:[1,3],to:[2,3],explain:"Restrains e5 and prepares development."},
      {side:"white",notation:"c3",from:[6,2],to:[5,2],explain:"Supports d4 — a solid backbone."},
      {side:"black",notation:"0-0",from:[0,4],to:[0,6],castle:{rookFrom:[0,7],rookTo:[0,5]},explain:"Castles — king to safety."},
      {side:"white",notation:"h3",from:[6,7],to:[5,7],explain:"...Na5 hits the b3-bishop and prepares ...c5 — the Chigorin plan."},
      {side:"black",notation:"Na5",from:[2,2],to:[3,0],explain:"...Na5 hits the b3-bishop and prepares ...c5 — the Chigorin plan."},
      {side:"white",notation:"Bc2",from:[5,1],to:[6,2],explain:"Bishop to c2."},
      {side:"black",notation:"c5",from:[1,2],to:[3,2],explain:"d4 — White finally strikes in the centre with full development."},
      {side:"white",notation:"d4",from:[6,3],to:[4,3],explain:"d4 — White finally strikes in the centre with full development."}
    ]
  },
  {
    name:"2. Berlin Defense",
    summary:"The Berlin Defense: Black's rock-solid ...Nf6, leading to the famous 'Berlin endgame' where queens come off early and Black accepts a slightly worse but very drawish structure.",
    finalNote:"The Berlin endgame: no queens, White has a kingside majority and a small pull, Black has the bishop pair. Famously solid — engine eval: small edge for White.",
    moves:[
      {side:"white",notation:"e4",from:[6,4],to:[4,4],explain:"Stakes out the centre with the king-pawn."},
      {side:"black",notation:"e5",from:[1,4],to:[3,4],explain:"Grabs central space and gains a tempo."},
      {side:"white",notation:"Nf3",from:[7,6],to:[5,5],explain:"Develops the knight toward the centre."},
      {side:"black",notation:"Nc6",from:[0,1],to:[2,2],explain:"Develops the knight, pressuring the centre."},
      {side:"white",notation:"Bb5",from:[7,5],to:[3,1],explain:"...Nf6 — the Berlin, heading for the queenless endgame."},
      {side:"black",notation:"Nf6",from:[0,6],to:[2,5],explain:"...Nf6 — the Berlin, heading for the queenless endgame."},
      {side:"white",notation:"0-0",from:[7,4],to:[7,6],castle:{rookFrom:[7,7],rookTo:[7,5]},explain:"Castles — king to safety."},
      {side:"black",notation:"Nxe4",from:[2,5],to:[4,4],explain:"Captures on e4, opening lines."},
      {side:"white",notation:"d4",from:[6,3],to:[4,3],explain:"Stakes out the centre with the queen-pawn."},
      {side:"black",notation:"Nd6",from:[4,4],to:[2,3],explain:"Knight to d6."},
      {side:"white",notation:"Bxc6",from:[3,1],to:[2,2],explain:"Captures on c6, opening lines."},
      {side:"black",notation:"dxc6",from:[1,3],to:[2,2],explain:"Captures on c6, opening lines."},
      {side:"white",notation:"dxe5",from:[4,3],to:[3,4],explain:"Captures on e5, opening lines."},
      {side:"black",notation:"Nf5",from:[2,3],to:[3,5],explain:"Qxd8+ — entering the Berlin endgame; Black recaptures with the king, losing castling but staying very solid."},
      {side:"white",notation:"Qxd8+",from:[7,3],to:[0,3],explain:"Qxd8+ — entering the Berlin endgame; Black recaptures with the king, losing castling but staying very solid."},
      {side:"black",notation:"Kxd8",from:[0,4],to:[0,3],explain:"Captures on d8, opening lines."},
      {side:"white",notation:"Nc3",from:[7,1],to:[5,2],explain:"Develops the knight, supporting the centre."},
      {side:"black",notation:"Ke8",from:[0,3],to:[0,4],explain:"King to e8."},
      {side:"white",notation:"h3",from:[6,7],to:[5,7],explain:"A useful luft, stopping pins."},
      {side:"black",notation:"Be7",from:[0,5],to:[1,4],explain:"Develops the bishop, preparing to castle."}
    ]
  },
  {
    name:"3. Exchange Variation",
    summary:"The Exchange Variation: White trades on c6, doubling Black's pawns, then plays for a superior pawn structure and a favourable endgame.",
    finalNote:"A structural battle: White has a healthy kingside majority versus Black's doubled c-pawns, but Black gets the bishop pair and active pieces. Engine eval: roughly level.",
    moves:[
      {side:"white",notation:"e4",from:[6,4],to:[4,4],explain:"Stakes out the centre with the king-pawn."},
      {side:"black",notation:"e5",from:[1,4],to:[3,4],explain:"Grabs central space and gains a tempo."},
      {side:"white",notation:"Nf3",from:[7,6],to:[5,5],explain:"Develops the knight toward the centre."},
      {side:"black",notation:"Nc6",from:[0,1],to:[2,2],explain:"Develops the knight, pressuring the centre."},
      {side:"white",notation:"Bb5",from:[7,5],to:[3,1],explain:"Bxc6 — the Exchange Variation, damaging Black's pawns for a long-term structural plan."},
      {side:"black",notation:"a6",from:[1,0],to:[2,0],explain:"Bxc6 — the Exchange Variation, damaging Black's pawns for a long-term structural plan."},
      {side:"white",notation:"Bxc6",from:[3,1],to:[2,2],explain:"Captures on c6, opening lines."},
      {side:"black",notation:"dxc6",from:[1,3],to:[2,2],explain:"Captures on c6, opening lines."},
      {side:"white",notation:"0-0",from:[7,4],to:[7,6],castle:{rookFrom:[7,7],rookTo:[7,5]},explain:"d4 — opening the centre to exploit the structure."},
      {side:"black",notation:"f6",from:[1,5],to:[2,5],explain:"d4 — opening the centre to exploit the structure."},
      {side:"white",notation:"d4",from:[6,3],to:[4,3],explain:"Stakes out the centre with the queen-pawn."},
      {side:"black",notation:"exd4",from:[3,4],to:[4,3],explain:"Captures on d4, opening lines."},
      {side:"white",notation:"Nxd4",from:[5,5],to:[4,3],explain:"Captures on d4, opening lines."},
      {side:"black",notation:"c5",from:[2,2],to:[3,2],explain:"Strikes at the centre with the c-pawn."},
      {side:"white",notation:"Nb3",from:[4,3],to:[5,1],explain:"Knight to b3."},
      {side:"black",notation:"Qxd1",from:[0,3],to:[7,3],explain:"Captures on d1, opening lines."},
      {side:"white",notation:"Rxd1",from:[7,5],to:[7,3],explain:"Captures on d1, opening lines."},
      {side:"black",notation:"Bd6",from:[0,5],to:[2,3],explain:"Bishop to d6."}
    ]
  },
  {
    name:"4. Marshall Attack",
    summary:"The Marshall Attack: Black sacrifices a pawn with ...d5 for a ferocious, long-lasting kingside attack — one of the most respected gambits in chess.",
    finalNote:"The Marshall gambit: Black has a powerful initiative and attacking pieces for the pawn; White must defend precisely to convert. Engine eval: small edge for White, huge practical compensation.",
    moves:[
      {side:"white",notation:"e4",from:[6,4],to:[4,4],explain:"Stakes out the centre with the king-pawn."},
      {side:"black",notation:"e5",from:[1,4],to:[3,4],explain:"Grabs central space and gains a tempo."},
      {side:"white",notation:"Nf3",from:[7,6],to:[5,5],explain:"Develops the knight toward the centre."},
      {side:"black",notation:"Nc6",from:[0,1],to:[2,2],explain:"Develops the knight, pressuring the centre."},
      {side:"white",notation:"Bb5",from:[7,5],to:[3,1],explain:"The bishop pins and pressures the c6-knight."},
      {side:"black",notation:"a6",from:[1,0],to:[2,0],explain:"Gains space and stops Nb5/Bb5 ideas."},
      {side:"white",notation:"Ba4",from:[3,1],to:[4,0],explain:"Bishop to a4."},
      {side:"black",notation:"Nf6",from:[0,6],to:[2,5],explain:"Develops the knight, hitting e4 and eyeing d5."},
      {side:"white",notation:"0-0",from:[7,4],to:[7,6],castle:{rookFrom:[7,7],rookTo:[7,5]},explain:"Castles — king to safety."},
      {side:"black",notation:"Be7",from:[0,5],to:[1,4],explain:"Develops the bishop, preparing to castle."},
      {side:"white",notation:"Re1",from:[7,5],to:[7,4],explain:"The rook takes the central e-file."},
      {side:"black",notation:"b5",from:[1,1],to:[3,1],explain:"Expands on the queenside."},
      {side:"white",notation:"Bb3",from:[4,0],to:[5,1],explain:"Bishop to b3."},
      {side:"black",notation:"0-0",from:[0,4],to:[0,6],castle:{rookFrom:[0,7],rookTo:[0,5]},explain:"Castles — king to safety."},
      {side:"white",notation:"c3",from:[6,2],to:[5,2],explain:"...d5! — the Marshall Attack, sacrificing a pawn to blast open lines toward White's king."},
      {side:"black",notation:"d5",from:[1,3],to:[3,3],explain:"...d5! — the Marshall Attack, sacrificing a pawn to blast open lines toward White's king."},
      {side:"white",notation:"exd5",from:[4,4],to:[3,3],explain:"Captures on d5, opening lines."},
      {side:"black",notation:"Nxd5",from:[2,5],to:[3,3],explain:"Captures on d5, opening lines."},
      {side:"white",notation:"Nxe5",from:[5,5],to:[3,4],explain:"...Nxe5/Rxe5 — Black regroups for the attack with ...c6 and ...Bd6-Qh4."},
      {side:"black",notation:"Nxe5",from:[2,2],to:[3,4],explain:"...Nxe5/Rxe5 — Black regroups for the attack with ...c6 and ...Bd6-Qh4."},
      {side:"white",notation:"Rxe5",from:[7,4],to:[3,4],explain:"Captures on e5, opening lines."},
      {side:"black",notation:"c6",from:[1,2],to:[2,2],explain:"Braces d5 and prepares to develop."}
    ]
  },
  {
    name:"5. Open Variation",
    summary:"The Open Variation: Black grabs the e4-pawn with ...Nxe4, accepting an open, dynamic game with active pieces instead of the slow Closed lines.",
    finalNote:"An open, double-edged Ruy: Black has active pieces and a strong knight on e4; White has central pressure and the bishop pair. Engine eval: small edge for White.",
    moves:[
      {side:"white",notation:"e4",from:[6,4],to:[4,4],explain:"Stakes out the centre with the king-pawn."},
      {side:"black",notation:"e5",from:[1,4],to:[3,4],explain:"Grabs central space and gains a tempo."},
      {side:"white",notation:"Nf3",from:[7,6],to:[5,5],explain:"Develops the knight toward the centre."},
      {side:"black",notation:"Nc6",from:[0,1],to:[2,2],explain:"Develops the knight, pressuring the centre."},
      {side:"white",notation:"Bb5",from:[7,5],to:[3,1],explain:"The bishop pins and pressures the c6-knight."},
      {side:"black",notation:"a6",from:[1,0],to:[2,0],explain:"Gains space and stops Nb5/Bb5 ideas."},
      {side:"white",notation:"Ba4",from:[3,1],to:[4,0],explain:"Bishop to a4."},
      {side:"black",notation:"Nf6",from:[0,6],to:[2,5],explain:"Develops the knight, hitting e4 and eyeing d5."},
      {side:"white",notation:"0-0",from:[7,4],to:[7,6],castle:{rookFrom:[7,7],rookTo:[7,5]},explain:"...Nxe4 — the Open Variation, grabbing the pawn for piece activity."},
      {side:"black",notation:"Nxe4",from:[2,5],to:[4,4],explain:"...Nxe4 — the Open Variation, grabbing the pawn for piece activity."},
      {side:"white",notation:"d4",from:[6,3],to:[4,3],explain:"Stakes out the centre with the queen-pawn."},
      {side:"black",notation:"b5",from:[1,1],to:[3,1],explain:"Expands on the queenside."},
      {side:"white",notation:"Bb3",from:[4,0],to:[5,1],explain:"...d5 — supporting the e4-knight and opening lines for the pieces."},
      {side:"black",notation:"d5",from:[1,3],to:[3,3],explain:"...d5 — supporting the e4-knight and opening lines for the pieces."},
      {side:"white",notation:"dxe5",from:[4,3],to:[3,4],explain:"Captures on e5, opening lines."},
      {side:"black",notation:"Be6",from:[0,2],to:[2,4],explain:"Bishop to e6."},
      {side:"white",notation:"c3",from:[6,2],to:[5,2],explain:"Supports d4 — a solid backbone."},
      {side:"black",notation:"Be7",from:[0,5],to:[1,4],explain:"Develops the bishop, preparing to castle."},
      {side:"white",notation:"Nbd2",from:[7,1],to:[6,3],explain:"Knight to bd."},
      {side:"black",notation:"0-0",from:[0,4],to:[0,6],castle:{rookFrom:[0,7],rookTo:[0,5]},explain:"Castles — king to safety."}
    ]
  }
];

const KIA_LESSON = [
  {
    name:"1. KIA vs ...e6/d5",
    summary:"The KIA vs a French-style ...e6/...d5: White fianchettoes, castles, and prepares the e4 break followed by e5, gaining kingside space for an attack.",
    finalNote:"The King's Indian Attack is a SYSTEM — White aims for a sound, easy-to-play setup rather than an opening advantage. Engine eval: roughly level, a comfortable game for both.",
    moves:[
      {side:"white",notation:"Nf3",from:[7,6],to:[5,5],explain:"Develops the knight toward the centre."},
      {side:"black",notation:"d5",from:[1,3],to:[3,3],explain:"Claims central space."},
      {side:"white",notation:"g3",from:[6,6],to:[5,6],explain:"Prepares the bishop fianchetto."},
      {side:"black",notation:"c5",from:[1,2],to:[3,2],explain:"Strikes at the centre with the c-pawn."},
      {side:"white",notation:"Bg2",from:[7,5],to:[6,6],explain:"Fianchettoes the bishop onto the long diagonal."},
      {side:"black",notation:"Nc6",from:[0,1],to:[2,2],explain:"Develops the knight, pressuring the centre."},
      {side:"white",notation:"0-0",from:[7,4],to:[7,6],castle:{rookFrom:[7,7],rookTo:[7,5]},explain:"Castles — king to safety."},
      {side:"black",notation:"e6",from:[1,4],to:[2,4],explain:"Frees the f8-bishop and braces d5."},
      {side:"white",notation:"d3",from:[6,3],to:[5,3],explain:"Pawn to d3."},
      {side:"black",notation:"Nf6",from:[0,6],to:[2,5],explain:"Develops the knight, hitting e4 and eyeing d5."},
      {side:"white",notation:"Nbd2",from:[7,1],to:[6,3],explain:"Knight to bd."},
      {side:"black",notation:"Be7",from:[0,5],to:[1,4],explain:"e4 — the thematic KIA central break."},
      {side:"white",notation:"e4",from:[6,4],to:[4,4],explain:"e4 — the thematic KIA central break."},
      {side:"black",notation:"0-0",from:[0,4],to:[0,6],castle:{rookFrom:[0,7],rookTo:[0,5]},explain:"Castles — king to safety."},
      {side:"white",notation:"Re1",from:[7,5],to:[7,4],explain:"The rook takes the central e-file."},
      {side:"black",notation:"b5",from:[1,1],to:[3,1],explain:"e5 — gaining kingside space and clamping Black, the start of White's attack."},
      {side:"white",notation:"e5",from:[4,4],to:[3,4],explain:"e5 — gaining kingside space and clamping Black, the start of White's attack."},
      {side:"black",notation:"Nd7",from:[2,5],to:[1,3],explain:"Knight to d7."},
      {side:"white",notation:"Nf1",from:[6,3],to:[7,5],explain:"Knight to f1."},
      {side:"black",notation:"a5",from:[1,0],to:[3,0],explain:"Gains queenside space."}
    ]
  },
  {
    name:"2. KIA vs Caro (...c6)",
    summary:"The KIA vs a Caro-style ...c6: Black develops the bishop to g4; White completes the setup and prepares the central e4 push.",
    finalNote:"The King's Indian Attack is a SYSTEM — White aims for a sound, easy-to-play setup rather than an opening advantage. Engine eval: roughly level, a comfortable game for both.",
    moves:[
      {side:"white",notation:"Nf3",from:[7,6],to:[5,5],explain:"Develops the knight toward the centre."},
      {side:"black",notation:"d5",from:[1,3],to:[3,3],explain:"Claims central space."},
      {side:"white",notation:"g3",from:[6,6],to:[5,6],explain:"Prepares the bishop fianchetto."},
      {side:"black",notation:"Nf6",from:[0,6],to:[2,5],explain:"Develops the knight, hitting e4 and eyeing d5."},
      {side:"white",notation:"Bg2",from:[7,5],to:[6,6],explain:"Fianchettoes the bishop onto the long diagonal."},
      {side:"black",notation:"c6",from:[1,2],to:[2,2],explain:"Braces d5 and prepares to develop."},
      {side:"white",notation:"0-0",from:[7,4],to:[7,6],castle:{rookFrom:[7,7],rookTo:[7,5]},explain:"Castles — king to safety."},
      {side:"black",notation:"Bg4",from:[0,2],to:[4,6],explain:"Bishop to g4."},
      {side:"white",notation:"d3",from:[6,3],to:[5,3],explain:"Pawn to d3."},
      {side:"black",notation:"Nbd7",from:[0,1],to:[1,3],explain:"Knight to bd."},
      {side:"white",notation:"Nbd2",from:[7,1],to:[6,3],explain:"Knight to bd."},
      {side:"black",notation:"e5",from:[1,4],to:[3,4],explain:"Grabs central space and gains a tempo."},
      {side:"white",notation:"h3",from:[6,7],to:[5,7],explain:"A useful luft, stopping pins."},
      {side:"black",notation:"Bh5",from:[4,6],to:[3,7],explain:"e4 — White finally breaks in the centre with the standard KIA plan."},
      {side:"white",notation:"e4",from:[6,4],to:[4,4],explain:"e4 — White finally breaks in the centre with the standard KIA plan."},
      {side:"black",notation:"Be7",from:[0,5],to:[1,4],explain:"Develops the bishop, preparing to castle."},
      {side:"white",notation:"Qe1",from:[7,3],to:[7,4],explain:"Queen to e1."},
      {side:"black",notation:"0-0",from:[0,4],to:[0,6],castle:{rookFrom:[0,7],rookTo:[0,5]},explain:"Castles — king to safety."}
    ]
  },
  {
    name:"3. KIA vs ...g6",
    summary:"The KIA vs a ...g6 fianchetto: a Pirc/KID-reversed where White takes the extra tempo to fight for the centre with e4.",
    finalNote:"The King's Indian Attack is a SYSTEM — White aims for a sound, easy-to-play setup rather than an opening advantage. Engine eval: roughly level, a comfortable game for both.",
    moves:[
      {side:"white",notation:"Nf3",from:[7,6],to:[5,5],explain:"Develops the knight toward the centre."},
      {side:"black",notation:"Nf6",from:[0,6],to:[2,5],explain:"Develops the knight, hitting e4 and eyeing d5."},
      {side:"white",notation:"g3",from:[6,6],to:[5,6],explain:"Prepares the bishop fianchetto."},
      {side:"black",notation:"g6",from:[1,6],to:[2,6],explain:"Prepares the bishop fianchetto."},
      {side:"white",notation:"Bg2",from:[7,5],to:[6,6],explain:"Fianchettoes the bishop onto the long diagonal."},
      {side:"black",notation:"Bg7",from:[0,5],to:[1,6],explain:"Fianchettoes the bishop onto the long diagonal."},
      {side:"white",notation:"0-0",from:[7,4],to:[7,6],castle:{rookFrom:[7,7],rookTo:[7,5]},explain:"Castles — king to safety."},
      {side:"black",notation:"0-0",from:[0,4],to:[0,6],castle:{rookFrom:[0,7],rookTo:[0,5]},explain:"Castles — king to safety."},
      {side:"white",notation:"d3",from:[6,3],to:[5,3],explain:"Pawn to d3."},
      {side:"black",notation:"d5",from:[1,3],to:[3,3],explain:"Claims central space."},
      {side:"white",notation:"Nbd2",from:[7,1],to:[6,3],explain:"Knight to bd."},
      {side:"black",notation:"c5",from:[1,2],to:[3,2],explain:"e4 — striking in the centre."},
      {side:"white",notation:"e4",from:[6,4],to:[4,4],explain:"e4 — striking in the centre."},
      {side:"black",notation:"dxe4",from:[3,3],to:[4,4],explain:"Captures on e4, opening lines."},
      {side:"white",notation:"dxe4",from:[5,3],to:[4,4],explain:"Captures on e4, opening lines."},
      {side:"black",notation:"Nc6",from:[0,1],to:[2,2],explain:"...e5 gives Black a fair share of the centre; the position is balanced and manoeuvring."},
      {side:"white",notation:"Re1",from:[7,5],to:[7,4],explain:"...e5 gives Black a fair share of the centre; the position is balanced and manoeuvring."},
      {side:"black",notation:"e5",from:[1,4],to:[3,4],explain:"Grabs central space and gains a tempo."},
      {side:"white",notation:"c3",from:[6,2],to:[5,2],explain:"Supports d4 — a solid backbone."},
      {side:"black",notation:"Qe7",from:[0,3],to:[1,4],explain:"Queen to e7."}
    ]
  },
  {
    name:"4. KIA Reversed (e4 setup)",
    summary:"The KIA reversed setup vs ...e6/...Be7: White builds the classic g3/Bg2/d3/Nbd2 formation and expands with e4-e5 and h4 on the kingside.",
    finalNote:"The King's Indian Attack is a SYSTEM — White aims for a sound, easy-to-play setup rather than an opening advantage. Engine eval: roughly level, a comfortable game for both.",
    moves:[
      {side:"white",notation:"Nf3",from:[7,6],to:[5,5],explain:"Develops the knight toward the centre."},
      {side:"black",notation:"d5",from:[1,3],to:[3,3],explain:"Claims central space."},
      {side:"white",notation:"g3",from:[6,6],to:[5,6],explain:"Prepares the bishop fianchetto."},
      {side:"black",notation:"Nf6",from:[0,6],to:[2,5],explain:"Develops the knight, hitting e4 and eyeing d5."},
      {side:"white",notation:"Bg2",from:[7,5],to:[6,6],explain:"Fianchettoes the bishop onto the long diagonal."},
      {side:"black",notation:"e6",from:[1,4],to:[2,4],explain:"Frees the f8-bishop and braces d5."},
      {side:"white",notation:"0-0",from:[7,4],to:[7,6],castle:{rookFrom:[7,7],rookTo:[7,5]},explain:"Castles — king to safety."},
      {side:"black",notation:"Be7",from:[0,5],to:[1,4],explain:"Develops the bishop, preparing to castle."},
      {side:"white",notation:"d3",from:[6,3],to:[5,3],explain:"Pawn to d3."},
      {side:"black",notation:"0-0",from:[0,4],to:[0,6],castle:{rookFrom:[0,7],rookTo:[0,5]},explain:"Castles — king to safety."},
      {side:"white",notation:"Nbd2",from:[7,1],to:[6,3],explain:"Knight to bd."},
      {side:"black",notation:"c5",from:[1,2],to:[3,2],explain:"e4 — the central break."},
      {side:"white",notation:"e4",from:[6,4],to:[4,4],explain:"e4 — the central break."},
      {side:"black",notation:"Nc6",from:[0,1],to:[2,2],explain:"Develops the knight, pressuring the centre."},
      {side:"white",notation:"Re1",from:[7,5],to:[7,4],explain:"The rook takes the central e-file."},
      {side:"black",notation:"b5",from:[1,1],to:[3,1],explain:"e5 and h4 — White grabs kingside space and starts a pawn storm."},
      {side:"white",notation:"e5",from:[4,4],to:[3,4],explain:"e5 and h4 — White grabs kingside space and starts a pawn storm."},
      {side:"black",notation:"Nd7",from:[2,5],to:[1,3],explain:"Knight to d7."},
      {side:"white",notation:"h4",from:[6,7],to:[4,7],explain:"Launches a kingside pawn thrust."},
      {side:"black",notation:"a5",from:[1,0],to:[3,0],explain:"Gains queenside space."}
    ]
  },
  {
    name:"5. KIA vs ...Bg4",
    summary:"The KIA vs an early ...e5: Black grabs the centre, so White plays a reversed King's Indian, manoeuvring behind the fianchetto and preparing c3/d4 or f-file play.",
    finalNote:"The King's Indian Attack is a SYSTEM — White aims for a sound, easy-to-play setup rather than an opening advantage. Engine eval: roughly level, a comfortable game for both.",
    moves:[
      {side:"white",notation:"Nf3",from:[7,6],to:[5,5],explain:"Develops the knight toward the centre."},
      {side:"black",notation:"d5",from:[1,3],to:[3,3],explain:"Claims central space."},
      {side:"white",notation:"g3",from:[6,6],to:[5,6],explain:"Prepares the bishop fianchetto."},
      {side:"black",notation:"g6",from:[1,6],to:[2,6],explain:"Prepares the bishop fianchetto."},
      {side:"white",notation:"Bg2",from:[7,5],to:[6,6],explain:"Fianchettoes the bishop onto the long diagonal."},
      {side:"black",notation:"Bg7",from:[0,5],to:[1,6],explain:"Fianchettoes the bishop onto the long diagonal."},
      {side:"white",notation:"0-0",from:[7,4],to:[7,6],castle:{rookFrom:[7,7],rookTo:[7,5]},explain:"Castles — king to safety."},
      {side:"black",notation:"e5",from:[1,4],to:[3,4],explain:"Grabs central space and gains a tempo."},
      {side:"white",notation:"d3",from:[6,3],to:[5,3],explain:"Pawn to d3."},
      {side:"black",notation:"Ne7",from:[0,6],to:[1,4],explain:"Knight to e7."},
      {side:"white",notation:"Nbd2",from:[7,1],to:[6,3],explain:"Knight to bd."},
      {side:"black",notation:"0-0",from:[0,4],to:[0,6],castle:{rookFrom:[0,7],rookTo:[0,5]},explain:"e4 — challenging Black's big centre."},
      {side:"white",notation:"e4",from:[6,4],to:[4,4],explain:"e4 — challenging Black's big centre."},
      {side:"black",notation:"Nbc6",from:[0,1],to:[2,2],explain:"...Nbc6 and ...a5 — Black holds the centre; a balanced reversed-KID battle."},
      {side:"white",notation:"c3",from:[6,2],to:[5,2],explain:"...Nbc6 and ...a5 — Black holds the centre; a balanced reversed-KID battle."},
      {side:"black",notation:"a5",from:[1,0],to:[3,0],explain:"Gains queenside space."},
      {side:"white",notation:"a4",from:[6,0],to:[4,0],explain:"Gains queenside space, restraining ...b5."},
      {side:"black",notation:"h6",from:[1,7],to:[2,7],explain:"A useful luft, stopping pins."},
      {side:"white",notation:"Re1",from:[7,5],to:[7,4],explain:"The rook takes the central e-file."}
    ]
  }
];

const FRENCH_LESSON = [
  {
    name:"1. Advance Variation",
    summary:"The Advance French: White grabs space with e5; Black attacks the base of the chain with ...c5 and ...Nc6, then targets d4 and the cramped White centre.",
    finalNote:"The classic French pawn-chain battle: White has space, Black pressures d4 and aims for ...f6 or queenside play. Engine eval: small edge for White, rich strategic play.",
    moves:[
      {side:"white",notation:"e4",from:[6,4],to:[4,4],explain:"Stakes out the centre with the king-pawn."},
      {side:"black",notation:"e6",from:[1,4],to:[2,4],explain:"Frees the f8-bishop and braces d5."},
      {side:"white",notation:"d4",from:[6,3],to:[4,3],explain:"Stakes out the centre with the queen-pawn."},
      {side:"black",notation:"d5",from:[1,3],to:[3,3],explain:"e5 — the Advance Variation, gaining space and locking the centre."},
      {side:"white",notation:"e5",from:[4,4],to:[3,4],explain:"...c5 — striking at the base of White's pawn chain, Black's thematic break."},
      {side:"black",notation:"c5",from:[1,2],to:[3,2],explain:"...c5 — striking at the base of White's pawn chain, Black's thematic break."},
      {side:"white",notation:"c3",from:[6,2],to:[5,2],explain:"Supports d4 — a solid backbone."},
      {side:"black",notation:"Nc6",from:[0,1],to:[2,2],explain:"Develops the knight, pressuring the centre."},
      {side:"white",notation:"Nf3",from:[7,6],to:[5,5],explain:"Develops the knight toward the centre."},
      {side:"black",notation:"Qb6",from:[0,3],to:[2,1],explain:"Queen to b6."},
      {side:"white",notation:"Be2",from:[7,5],to:[6,4],explain:"A flexible bishop development."},
      {side:"black",notation:"cxd4",from:[3,2],to:[4,3],explain:"Captures on d4, opening lines."},
      {side:"white",notation:"cxd4",from:[5,2],to:[4,3],explain:"Captures on d4, opening lines."},
      {side:"black",notation:"Nh6",from:[0,6],to:[2,7],explain:"Knight to h6."},
      {side:"white",notation:"Nc3",from:[7,1],to:[5,2],explain:"...Nf5 — the knight blockades and pressures d4, a typical French manoeuvre."},
      {side:"black",notation:"Nf5",from:[2,7],to:[3,5],explain:"...Nf5 — the knight blockades and pressures d4, a typical French manoeuvre."},
      {side:"white",notation:"Na4",from:[5,2],to:[4,0],explain:"Knight to a4."},
      {side:"black",notation:"Qa5+",from:[2,1],to:[3,0],explain:"Queen to a5."},
      {side:"white",notation:"Bd2",from:[7,2],to:[6,3],explain:"Bishop to d2."},
      {side:"black",notation:"Bb4",from:[0,5],to:[4,1],explain:"Bishop to b4."}
    ]
  },
  {
    name:"2. Winawer Variation",
    summary:"The Winawer: Black pins and trades on c3, damaging White's pawns, then attacks the centre while White seeks kingside chances — the sharpest French.",
    finalNote:"A classic Winawer imbalance: White has the bishop pair and kingside attacking ideas; Black has the better structure and queenside play. Engine eval: roughly level — double-edged.",
    moves:[
      {side:"white",notation:"e4",from:[6,4],to:[4,4],explain:"Stakes out the centre with the king-pawn."},
      {side:"black",notation:"e6",from:[1,4],to:[2,4],explain:"Frees the f8-bishop and braces d5."},
      {side:"white",notation:"d4",from:[6,3],to:[4,3],explain:"Stakes out the centre with the queen-pawn."},
      {side:"black",notation:"d5",from:[1,3],to:[3,3],explain:"Claims central space."},
      {side:"white",notation:"Nc3",from:[7,1],to:[5,2],explain:"...Bb4 — the Winawer pin."},
      {side:"black",notation:"Bb4",from:[0,5],to:[4,1],explain:"...Bb4 — the Winawer pin."},
      {side:"white",notation:"e5",from:[4,4],to:[3,4],explain:"Grabs central space and gains a tempo."},
      {side:"black",notation:"c5",from:[1,2],to:[3,2],explain:"Strikes at the centre with the c-pawn."},
      {side:"white",notation:"a3",from:[6,0],to:[5,0],explain:"...Bxc3+ — Black doubles White's pawns, accepting structural concessions for play against the centre."},
      {side:"black",notation:"Bxc3+",from:[4,1],to:[5,2],explain:"...Bxc3+ — Black doubles White's pawns, accepting structural concessions for play against the centre."},
      {side:"white",notation:"bxc3",from:[6,1],to:[5,2],explain:"Captures on c3, opening lines."},
      {side:"black",notation:"Ne7",from:[0,6],to:[1,4],explain:"Qg4 — White's thematic kingside lunge against g7."},
      {side:"white",notation:"Qg4",from:[7,3],to:[4,6],explain:"Qg4 — White's thematic kingside lunge against g7."},
      {side:"black",notation:"0-0",from:[0,4],to:[0,6],castle:{rookFrom:[0,7],rookTo:[0,5]},explain:"Castles — king to safety."},
      {side:"white",notation:"Bd3",from:[7,5],to:[5,3],explain:"The bishop eyes the b1-h7 diagonal."},
      {side:"black",notation:"Nbc6",from:[0,1],to:[2,2],explain:"Knight to bc."},
      {side:"white",notation:"Nf3",from:[7,6],to:[5,5],explain:"Develops the knight toward the centre."},
      {side:"black",notation:"f5",from:[1,5],to:[3,5],explain:"Stakes a kingside claim."},
      {side:"white",notation:"exf6",from:[3,4],to:[2,5],explain:"Captures on f6, opening lines."},
      {side:"black",notation:"Rxf6",from:[0,5],to:[2,5],explain:"Captures on f6, opening lines."}
    ]
  },
  {
    name:"3. Tarrasch Variation",
    summary:"The Tarrasch (3.Nd2): White avoids the pin and keeps a flexible structure; Black hits back with ...c5 and ...f6 to break the centre.",
    finalNote:"A balanced French Tarrasch: Black has freed his game with ...c5 and ...f6, getting active piece play. Engine eval: small edge for White.",
    moves:[
      {side:"white",notation:"e4",from:[6,4],to:[4,4],explain:"Stakes out the centre with the king-pawn."},
      {side:"black",notation:"e6",from:[1,4],to:[2,4],explain:"Frees the f8-bishop and braces d5."},
      {side:"white",notation:"d4",from:[6,3],to:[4,3],explain:"Stakes out the centre with the queen-pawn."},
      {side:"black",notation:"d5",from:[1,3],to:[3,3],explain:"Nd2 — the Tarrasch, sidestepping the Winawer pin."},
      {side:"white",notation:"Nd2",from:[7,1],to:[6,3],explain:"Nd2 — the Tarrasch, sidestepping the Winawer pin."},
      {side:"black",notation:"Nf6",from:[0,6],to:[2,5],explain:"Develops the knight, hitting e4 and eyeing d5."},
      {side:"white",notation:"e5",from:[4,4],to:[3,4],explain:"Grabs central space and gains a tempo."},
      {side:"black",notation:"Nfd7",from:[2,5],to:[1,3],explain:"Knight to fd."},
      {side:"white",notation:"Bd3",from:[7,5],to:[5,3],explain:"...c5 and later ...f6 — Black's freeing breaks against the centre."},
      {side:"black",notation:"c5",from:[1,2],to:[3,2],explain:"...c5 and later ...f6 — Black's freeing breaks against the centre."},
      {side:"white",notation:"c3",from:[6,2],to:[5,2],explain:"Supports d4 — a solid backbone."},
      {side:"black",notation:"Nc6",from:[0,1],to:[2,2],explain:"Develops the knight, pressuring the centre."},
      {side:"white",notation:"Ne2",from:[7,6],to:[6,4],explain:"Knight to e2."},
      {side:"black",notation:"cxd4",from:[3,2],to:[4,3],explain:"Captures on d4, opening lines."},
      {side:"white",notation:"cxd4",from:[5,2],to:[4,3],explain:"Captures on d4, opening lines."},
      {side:"black",notation:"f6",from:[1,5],to:[2,5],explain:"Pawn to f6."},
      {side:"white",notation:"exf6",from:[3,4],to:[2,5],explain:"Captures on f6, opening lines."},
      {side:"black",notation:"Nxf6",from:[1,3],to:[2,5],explain:"Captures on f6, opening lines."}
    ]
  },
  {
    name:"4. Classical (Steinitz)",
    summary:"The Classical/Steinitz (4.e5): White grabs space and supports it with f4; Black undermines with ...c5 and piece pressure on d4.",
    finalNote:"A tense Steinitz French: White has a big space-gaining centre with f4; Black pressures d4 and plays for the ...f6 break. Engine eval: small edge for White.",
    moves:[
      {side:"white",notation:"e4",from:[6,4],to:[4,4],explain:"Stakes out the centre with the king-pawn."},
      {side:"black",notation:"e6",from:[1,4],to:[2,4],explain:"Frees the f8-bishop and braces d5."},
      {side:"white",notation:"d4",from:[6,3],to:[4,3],explain:"Stakes out the centre with the queen-pawn."},
      {side:"black",notation:"d5",from:[1,3],to:[3,3],explain:"Claims central space."},
      {side:"white",notation:"Nc3",from:[7,1],to:[5,2],explain:"Develops the knight, supporting the centre."},
      {side:"black",notation:"Nf6",from:[0,6],to:[2,5],explain:"f4 — the Steinitz, bolstering the e5 spearhead."},
      {side:"white",notation:"e5",from:[4,4],to:[3,4],explain:"f4 — the Steinitz, bolstering the e5 spearhead."},
      {side:"black",notation:"Nfd7",from:[2,5],to:[1,3],explain:"Knight to fd."},
      {side:"white",notation:"f4",from:[6,5],to:[4,5],explain:"...c5 — Black attacks the base of the chain as always in the French."},
      {side:"black",notation:"c5",from:[1,2],to:[3,2],explain:"...c5 — Black attacks the base of the chain as always in the French."},
      {side:"white",notation:"Nf3",from:[7,6],to:[5,5],explain:"Develops the knight toward the centre."},
      {side:"black",notation:"Nc6",from:[0,1],to:[2,2],explain:"Develops the knight, pressuring the centre."},
      {side:"white",notation:"Be3",from:[7,2],to:[5,4],explain:"Develops the bishop, eyeing c5/d4."},
      {side:"black",notation:"cxd4",from:[3,2],to:[4,3],explain:"Captures on d4, opening lines."},
      {side:"white",notation:"Nxd4",from:[5,5],to:[4,3],explain:"Captures on d4, opening lines."},
      {side:"black",notation:"Bc5",from:[0,5],to:[3,2],explain:"Bishop to c5."},
      {side:"white",notation:"Qd2",from:[7,3],to:[6,3],explain:"Connects the rooks and eyes the kingside."},
      {side:"black",notation:"0-0",from:[0,4],to:[0,6],castle:{rookFrom:[0,7],rookTo:[0,5]},explain:"Castles — king to safety."}
    ]
  },
  {
    name:"5. Rubinstein Variation",
    summary:"The Rubinstein: Black gives up the centre with ...dxe4 for a solid, low-risk position and easy development — the French without the pawn-chain tension.",
    finalNote:"A solid but slightly passive Rubinstein: Black is structurally sound and will play ...c5; White has more space and easier development. Engine eval: small edge for White.",
    moves:[
      {side:"white",notation:"e4",from:[6,4],to:[4,4],explain:"Stakes out the centre with the king-pawn."},
      {side:"black",notation:"e6",from:[1,4],to:[2,4],explain:"Frees the f8-bishop and braces d5."},
      {side:"white",notation:"d4",from:[6,3],to:[4,3],explain:"Stakes out the centre with the queen-pawn."},
      {side:"black",notation:"d5",from:[1,3],to:[3,3],explain:"Claims central space."},
      {side:"white",notation:"Nc3",from:[7,1],to:[5,2],explain:"...dxe4 — the Rubinstein, conceding the centre for a clean, solid position."},
      {side:"black",notation:"dxe4",from:[3,3],to:[4,4],explain:"...dxe4 — the Rubinstein, conceding the centre for a clean, solid position."},
      {side:"white",notation:"Nxe4",from:[5,2],to:[4,4],explain:"Captures on e4, opening lines."},
      {side:"black",notation:"Nd7",from:[0,1],to:[1,3],explain:"Knight to d7."},
      {side:"white",notation:"Nf3",from:[7,6],to:[5,5],explain:"Develops the knight toward the centre."},
      {side:"black",notation:"Ngf6",from:[0,6],to:[2,5],explain:"Knight to gf."},
      {side:"white",notation:"Nxf6+",from:[4,4],to:[2,5],explain:"Captures on f6, opening lines."},
      {side:"black",notation:"Nxf6",from:[1,3],to:[2,5],explain:"Captures on f6, opening lines."},
      {side:"white",notation:"Bd3",from:[7,5],to:[5,3],explain:"...c5 — the freeing break that gives Black active play."},
      {side:"black",notation:"c5",from:[1,2],to:[3,2],explain:"...c5 — the freeing break that gives Black active play."},
      {side:"white",notation:"dxc5",from:[4,3],to:[3,2],explain:"Captures on c5, opening lines."},
      {side:"black",notation:"Bxc5",from:[0,5],to:[3,2],explain:"Captures on c5, opening lines."},
      {side:"white",notation:"0-0",from:[7,4],to:[7,6],castle:{rookFrom:[7,7],rookTo:[7,5]},explain:"Castles — king to safety."},
      {side:"black",notation:"0-0",from:[0,4],to:[0,6],castle:{rookFrom:[0,7],rookTo:[0,5]},explain:"Castles — king to safety."}
    ]
  }
];

const CARO_LESSON = [
  {
    name:"1. Classical (...Bf5)",
    summary:"The Classical Caro-Kann: Black develops the light bishop to f5 OUTSIDE the pawn chain (solving the French's problem piece), then builds a rock-solid structure.",
    finalNote:"The model Caro setup: Black is super-solid with a good bishop traded off and a sound structure; White keeps a small space pull. Engine eval: small edge for White.",
    moves:[
      {side:"white",notation:"e4",from:[6,4],to:[4,4],explain:"Stakes out the centre with the king-pawn."},
      {side:"black",notation:"c6",from:[1,2],to:[2,2],explain:"Braces d5 and prepares to develop."},
      {side:"white",notation:"d4",from:[6,3],to:[4,3],explain:"Stakes out the centre with the queen-pawn."},
      {side:"black",notation:"d5",from:[1,3],to:[3,3],explain:"Claims central space."},
      {side:"white",notation:"Nc3",from:[7,1],to:[5,2],explain:"Develops the knight, supporting the centre."},
      {side:"black",notation:"dxe4",from:[3,3],to:[4,4],explain:"Captures on e4, opening lines."},
      {side:"white",notation:"Nxe4",from:[5,2],to:[4,4],explain:"...Bf5 — the point of the Caro-Kann: the light bishop develops actively before ...e6."},
      {side:"black",notation:"Bf5",from:[0,2],to:[3,5],explain:"...Bf5 — the point of the Caro-Kann: the light bishop develops actively before ...e6."},
      {side:"white",notation:"Ng3",from:[4,4],to:[5,6],explain:"Knight to g3."},
      {side:"black",notation:"Bg6",from:[3,5],to:[2,6],explain:"h4-h5 — White grabs kingside space and questions the bishop."},
      {side:"white",notation:"h4",from:[6,7],to:[4,7],explain:"h4-h5 — White grabs kingside space and questions the bishop."},
      {side:"black",notation:"h6",from:[1,7],to:[2,7],explain:"A useful luft, stopping pins."},
      {side:"white",notation:"Nf3",from:[7,6],to:[5,5],explain:"Develops the knight toward the centre."},
      {side:"black",notation:"Nd7",from:[0,1],to:[1,3],explain:"Knight to d7."},
      {side:"white",notation:"h5",from:[4,7],to:[3,7],explain:"Pawn to h5."},
      {side:"black",notation:"Bh7",from:[2,6],to:[1,7],explain:"Bishop to h7."},
      {side:"white",notation:"Bd3",from:[7,5],to:[5,3],explain:"The bishop eyes the b1-h7 diagonal."},
      {side:"black",notation:"Bxd3",from:[1,7],to:[5,3],explain:"Captures on d3, opening lines."},
      {side:"white",notation:"Qxd3",from:[7,3],to:[5,3],explain:"Captures on d3, opening lines."},
      {side:"black",notation:"e6",from:[1,4],to:[2,4],explain:"Frees the f8-bishop and braces d5."}
    ]
  },
  {
    name:"2. Advance Variation",
    summary:"The Advance Caro: White grabs space with e5; Black develops the bishop to f5 first, then reroutes the knight to g6 to pressure e5 — a comfortable, solid setup.",
    finalNote:"A well-handled Advance Caro: Black has freed the bishop, pressured e5 with ...Ng6, and equalised cleanly. Engine eval: roughly level.",
    moves:[
      {side:"white",notation:"e4",from:[6,4],to:[4,4],explain:"Stakes out the centre with the king-pawn."},
      {side:"black",notation:"c6",from:[1,2],to:[2,2],explain:"Braces d5 and prepares to develop."},
      {side:"white",notation:"d4",from:[6,3],to:[4,3],explain:"Stakes out the centre with the queen-pawn."},
      {side:"black",notation:"d5",from:[1,3],to:[3,3],explain:"Claims central space."},
      {side:"white",notation:"e5",from:[4,4],to:[3,4],explain:"...Bf5 — getting the bishop out before ...e6, the Caro's whole idea."},
      {side:"black",notation:"Bf5",from:[0,2],to:[3,5],explain:"...Bf5 — getting the bishop out before ...e6, the Caro's whole idea."},
      {side:"white",notation:"Nf3",from:[7,6],to:[5,5],explain:"Develops the knight toward the centre."},
      {side:"black",notation:"e6",from:[1,4],to:[2,4],explain:"Frees the f8-bishop and braces d5."},
      {side:"white",notation:"Be2",from:[7,5],to:[6,4],explain:"A flexible bishop development."},
      {side:"black",notation:"Nd7",from:[0,1],to:[1,3],explain:"Knight to d7."},
      {side:"white",notation:"0-0",from:[7,4],to:[7,6],castle:{rookFrom:[7,7],rookTo:[7,5]},explain:"Castles — king to safety."},
      {side:"black",notation:"Ne7",from:[0,6],to:[1,4],explain:"Knight to e7."},
      {side:"white",notation:"Nbd2",from:[7,1],to:[6,3],explain:"...Ng6 — the knight pressures White's e5-spearhead."},
      {side:"black",notation:"Ng6",from:[1,4],to:[2,6],explain:"...Ng6 — the knight pressures White's e5-spearhead."},
      {side:"white",notation:"Nb3",from:[6,3],to:[5,1],explain:"Knight to b3."},
      {side:"black",notation:"Be7",from:[0,5],to:[1,4],explain:"Develops the bishop, preparing to castle."},
      {side:"white",notation:"Re1",from:[7,5],to:[7,4],explain:"The rook takes the central e-file."},
      {side:"black",notation:"0-0",from:[0,4],to:[0,6],castle:{rookFrom:[0,7],rookTo:[0,5]},explain:"Castles — king to safety."}
    ]
  },
  {
    name:"3. Exchange Variation",
    summary:"The Exchange Caro: White trades on d5 for a simple, symmetrical structure; Black develops easily and aims for the ...Bg4 pin and a comfortable game.",
    finalNote:"A simple, solid Exchange Caro: nearly symmetrical with easy development for both. Engine eval: small edge for White.",
    moves:[
      {side:"white",notation:"e4",from:[6,4],to:[4,4],explain:"Stakes out the centre with the king-pawn."},
      {side:"black",notation:"c6",from:[1,2],to:[2,2],explain:"Braces d5 and prepares to develop."},
      {side:"white",notation:"d4",from:[6,3],to:[4,3],explain:"Stakes out the centre with the queen-pawn."},
      {side:"black",notation:"d5",from:[1,3],to:[3,3],explain:"exd5 — the Exchange, a quiet, low-theory try."},
      {side:"white",notation:"exd5",from:[4,4],to:[3,3],explain:"exd5 — the Exchange, a quiet, low-theory try."},
      {side:"black",notation:"cxd5",from:[2,2],to:[3,3],explain:"Captures on d5, opening lines."},
      {side:"white",notation:"Bd3",from:[7,5],to:[5,3],explain:"The bishop eyes the b1-h7 diagonal."},
      {side:"black",notation:"Nc6",from:[0,1],to:[2,2],explain:"Develops the knight, pressuring the centre."},
      {side:"white",notation:"c3",from:[6,2],to:[5,2],explain:"Supports d4 — a solid backbone."},
      {side:"black",notation:"Nf6",from:[0,6],to:[2,5],explain:"Develops the knight, hitting e4 and eyeing d5."},
      {side:"white",notation:"Bf4",from:[7,2],to:[4,5],explain:"...Bg4 — pinning to ease Black's development and pressure the centre."},
      {side:"black",notation:"Bg4",from:[0,2],to:[4,6],explain:"...Bg4 — pinning to ease Black's development and pressure the centre."},
      {side:"white",notation:"Qb3",from:[7,3],to:[5,1],explain:"Pressures b7 and the centre."},
      {side:"black",notation:"Qd7",from:[0,3],to:[1,3],explain:"Queen to d7."},
      {side:"white",notation:"Nd2",from:[7,1],to:[6,3],explain:"Knight to d2."},
      {side:"black",notation:"e6",from:[1,4],to:[2,4],explain:"Frees the f8-bishop and braces d5."},
      {side:"white",notation:"Ngf3",from:[7,6],to:[5,5],explain:"Knight to gf."},
      {side:"black",notation:"Bd6",from:[0,5],to:[2,3],explain:"Bishop to d6."}
    ]
  },
  {
    name:"4. Panov-Botvinnik Attack",
    summary:"The Panov-Botvinnik Attack: White takes on d5 and plays c4, accepting an isolated queen's pawn for active, attacking piece play — the most aggressive anti-Caro.",
    finalNote:"A classic IQP middlegame: White has active pieces and attacking chances around the isolated d-pawn; Black blockades and aims to trade down. Engine eval: small edge for White.",
    moves:[
      {side:"white",notation:"e4",from:[6,4],to:[4,4],explain:"Stakes out the centre with the king-pawn."},
      {side:"black",notation:"c6",from:[1,2],to:[2,2],explain:"Braces d5 and prepares to develop."},
      {side:"white",notation:"d4",from:[6,3],to:[4,3],explain:"Stakes out the centre with the queen-pawn."},
      {side:"black",notation:"d5",from:[1,3],to:[3,3],explain:"Claims central space."},
      {side:"white",notation:"exd5",from:[4,4],to:[3,3],explain:"Captures on d5, opening lines."},
      {side:"black",notation:"cxd5",from:[2,2],to:[3,3],explain:"c4 — the Panov, transforming into an isolated-queen's-pawn attacking structure."},
      {side:"white",notation:"c4",from:[6,2],to:[4,2],explain:"c4 — the Panov, transforming into an isolated-queen's-pawn attacking structure."},
      {side:"black",notation:"Nf6",from:[0,6],to:[2,5],explain:"Develops the knight, hitting e4 and eyeing d5."},
      {side:"white",notation:"Nc3",from:[7,1],to:[5,2],explain:"Develops the knight, supporting the centre."},
      {side:"black",notation:"e6",from:[1,4],to:[2,4],explain:"Frees the f8-bishop and braces d5."},
      {side:"white",notation:"Nf3",from:[7,6],to:[5,5],explain:"Develops the knight toward the centre."},
      {side:"black",notation:"Be7",from:[0,5],to:[1,4],explain:"Develops the bishop, preparing to castle."},
      {side:"white",notation:"cxd5",from:[4,2],to:[3,3],explain:"...Nxd5 and ...Nc6 — Black blockades d5 and develops to neutralise the IQP."},
      {side:"black",notation:"Nxd5",from:[2,5],to:[3,3],explain:"...Nxd5 and ...Nc6 — Black blockades d5 and develops to neutralise the IQP."},
      {side:"white",notation:"Bc4",from:[7,5],to:[4,2],explain:"The bishop eyes the f7 weakness."},
      {side:"black",notation:"Nc6",from:[0,1],to:[2,2],explain:"Develops the knight, pressuring the centre."},
      {side:"white",notation:"0-0",from:[7,4],to:[7,6],castle:{rookFrom:[7,7],rookTo:[7,5]},explain:"Castles — king to safety."},
      {side:"black",notation:"0-0",from:[0,4],to:[0,6],castle:{rookFrom:[0,7],rookTo:[0,5]},explain:"Castles — king to safety."}
    ]
  },
  {
    name:"5. Karpov (...Nd7)",
    summary:"The Karpov / ...Nd7 system: a super-solid Caro where Black avoids the pin and keeps a compact, resilient structure favoured by Karpov himself.",
    finalNote:"A rock-solid Karpov Caro: Black is compact and hard to break down, ready for ...c5 or ...Bd6. Engine eval: small edge for White.",
    moves:[
      {side:"white",notation:"e4",from:[6,4],to:[4,4],explain:"Stakes out the centre with the king-pawn."},
      {side:"black",notation:"c6",from:[1,2],to:[2,2],explain:"Braces d5 and prepares to develop."},
      {side:"white",notation:"d4",from:[6,3],to:[4,3],explain:"Stakes out the centre with the queen-pawn."},
      {side:"black",notation:"d5",from:[1,3],to:[3,3],explain:"Claims central space."},
      {side:"white",notation:"Nc3",from:[7,1],to:[5,2],explain:"Develops the knight, supporting the centre."},
      {side:"black",notation:"dxe4",from:[3,3],to:[4,4],explain:"Captures on e4, opening lines."},
      {side:"white",notation:"Nxe4",from:[5,2],to:[4,4],explain:"...Nd7 — the Karpov system, preparing ...Ngf6 without allowing doubled pawns."},
      {side:"black",notation:"Nd7",from:[0,1],to:[1,3],explain:"...Nd7 — the Karpov system, preparing ...Ngf6 without allowing doubled pawns."},
      {side:"white",notation:"Nf3",from:[7,6],to:[5,5],explain:"Develops the knight toward the centre."},
      {side:"black",notation:"Ngf6",from:[0,6],to:[2,5],explain:"Knight to gf."},
      {side:"white",notation:"Nxf6+",from:[4,4],to:[2,5],explain:"Captures on f6, opening lines."},
      {side:"black",notation:"Nxf6",from:[1,3],to:[2,5],explain:"Captures on f6, opening lines."},
      {side:"white",notation:"Bd3",from:[7,5],to:[5,3],explain:"...Bg4 — pinning the f3-knight to ease the slightly cramped position."},
      {side:"black",notation:"Bg4",from:[0,2],to:[4,6],explain:"...Bg4 — pinning the f3-knight to ease the slightly cramped position."},
      {side:"white",notation:"c3",from:[6,2],to:[5,2],explain:"Supports d4 — a solid backbone."},
      {side:"black",notation:"e6",from:[1,4],to:[2,4],explain:"Frees the f8-bishop and braces d5."},
      {side:"white",notation:"Qe2",from:[7,3],to:[6,4],explain:"Connects the rooks."},
      {side:"black",notation:"Be7",from:[0,5],to:[1,4],explain:"Develops the bishop, preparing to castle."}
    ]
  }
];

const KID_LESSON = [
  {
    name:"1. Classical (Mar del Plata)",
    summary:"The Classical KID / Mar del Plata: Black lets White build a big centre, then closes it with ...e5-...f5 and storms the kingside while White attacks the queenside — chess's ultimate fighting opening.",
    finalNote:"The famous Mar del Plata race: White attacks on the queenside with c5/b4, Black storms the kingside with ...f5-f4-g5. Objectively a small White edge, but a thrilling fight.",
    moves:[
      {side:"white",notation:"d4",from:[6,3],to:[4,3],explain:"Stakes out the centre with the queen-pawn."},
      {side:"black",notation:"Nf6",from:[0,6],to:[2,5],explain:"Develops the knight, hitting e4 and eyeing d5."},
      {side:"white",notation:"c4",from:[6,2],to:[4,2],explain:"Grabs queenside space and clamps d5."},
      {side:"black",notation:"g6",from:[1,6],to:[2,6],explain:"Prepares the bishop fianchetto."},
      {side:"white",notation:"Nc3",from:[7,1],to:[5,2],explain:"Develops the knight, supporting the centre."},
      {side:"black",notation:"Bg7",from:[0,5],to:[1,6],explain:"Fianchettoes the bishop onto the long diagonal."},
      {side:"white",notation:"e4",from:[6,4],to:[4,4],explain:"Stakes out the centre with the king-pawn."},
      {side:"black",notation:"d6",from:[1,3],to:[2,3],explain:"Restrains e5 and prepares development."},
      {side:"white",notation:"Nf3",from:[7,6],to:[5,5],explain:"Develops the knight toward the centre."},
      {side:"black",notation:"0-0",from:[0,4],to:[0,6],castle:{rookFrom:[0,7],rookTo:[0,5]},explain:"Castles — king to safety."},
      {side:"white",notation:"Be2",from:[7,5],to:[6,4],explain:"...e5 — Black challenges the centre, inviting White to close it."},
      {side:"black",notation:"e5",from:[1,4],to:[3,4],explain:"...e5 — Black challenges the centre, inviting White to close it."},
      {side:"white",notation:"0-0",from:[7,4],to:[7,6],castle:{rookFrom:[7,7],rookTo:[7,5]},explain:"Castles — king to safety."},
      {side:"black",notation:"Nc6",from:[0,1],to:[2,2],explain:"d5 — White closes the centre, defining the opposite-wing attacking plans."},
      {side:"white",notation:"d5",from:[4,3],to:[3,3],explain:"d5 — White closes the centre, defining the opposite-wing attacking plans."},
      {side:"black",notation:"Ne7",from:[2,2],to:[1,4],explain:"Knight to e7."},
      {side:"white",notation:"Ne1",from:[5,5],to:[7,4],explain:"Knight to e1."},
      {side:"black",notation:"Nd7",from:[2,5],to:[1,3],explain:"Knight to d7."},
      {side:"white",notation:"Nd3",from:[7,4],to:[5,3],explain:"...f5 — the KID kingside pawn storm begins!"},
      {side:"black",notation:"f5",from:[1,5],to:[3,5],explain:"...f5 — the KID kingside pawn storm begins!"}
    ]
  },
  {
    name:"2. Saemisch Variation",
    summary:"The Sämisch KID: White plays f3 to build a massive centre and castle queenside; Black strikes with ...e5/...c6 and ...b5 for a sharp, opposite-castling fight.",
    finalNote:"A sharp Sämisch battle: opposite-side castling with White attacking the kingside and Black storming with ...b5 on the queenside. Engine eval: small edge for White.",
    moves:[
      {side:"white",notation:"d4",from:[6,3],to:[4,3],explain:"Stakes out the centre with the queen-pawn."},
      {side:"black",notation:"Nf6",from:[0,6],to:[2,5],explain:"Develops the knight, hitting e4 and eyeing d5."},
      {side:"white",notation:"c4",from:[6,2],to:[4,2],explain:"Grabs queenside space and clamps d5."},
      {side:"black",notation:"g6",from:[1,6],to:[2,6],explain:"Prepares the bishop fianchetto."},
      {side:"white",notation:"Nc3",from:[7,1],to:[5,2],explain:"Develops the knight, supporting the centre."},
      {side:"black",notation:"Bg7",from:[0,5],to:[1,6],explain:"Fianchettoes the bishop onto the long diagonal."},
      {side:"white",notation:"e4",from:[6,4],to:[4,4],explain:"Stakes out the centre with the king-pawn."},
      {side:"black",notation:"d6",from:[1,3],to:[2,3],explain:"f3 — the Sämisch, over-protecting e4 and preparing Be3, Qd2 and O-O-O."},
      {side:"white",notation:"f3",from:[6,5],to:[5,5],explain:"f3 — the Sämisch, over-protecting e4 and preparing Be3, Qd2 and O-O-O."},
      {side:"black",notation:"0-0",from:[0,4],to:[0,6],castle:{rookFrom:[0,7],rookTo:[0,5]},explain:"Castles — king to safety."},
      {side:"white",notation:"Be3",from:[7,2],to:[5,4],explain:"Develops the bishop, eyeing c5/d4."},
      {side:"black",notation:"e5",from:[1,4],to:[3,4],explain:"Grabs central space and gains a tempo."},
      {side:"white",notation:"Nge2",from:[7,6],to:[6,4],explain:"Knight to ge."},
      {side:"black",notation:"c6",from:[1,2],to:[2,2],explain:"Braces d5 and prepares to develop."},
      {side:"white",notation:"Qd2",from:[7,3],to:[6,3],explain:"Connects the rooks and eyes the kingside."},
      {side:"black",notation:"Nbd7",from:[0,1],to:[1,3],explain:"Knight to bd."},
      {side:"white",notation:"0-0-0",from:[7,4],to:[7,2],castle:{rookFrom:[7,0],rookTo:[7,3]},explain:"Castles queenside, ready to attack."},
      {side:"black",notation:"a6",from:[1,0],to:[2,0],explain:"Gains space and stops Nb5/Bb5 ideas."},
      {side:"white",notation:"Kb1",from:[7,2],to:[7,1],explain:"...b5 — Black's queenside pawn storm against the white king."},
      {side:"black",notation:"b5",from:[1,1],to:[3,1],explain:"...b5 — Black's queenside pawn storm against the white king."}
    ]
  },
  {
    name:"3. Fianchetto Variation",
    summary:"The Fianchetto KID: White fianchettoes for a safe, positional game; Black responds with ...Nbd7 and ...e5, fighting for the centre in classical style.",
    finalNote:"A solid Fianchetto KID: White's setup is the safest anti-KID, and Black equalises with timely central play. Engine eval: roughly level.",
    moves:[
      {side:"white",notation:"d4",from:[6,3],to:[4,3],explain:"Stakes out the centre with the queen-pawn."},
      {side:"black",notation:"Nf6",from:[0,6],to:[2,5],explain:"Develops the knight, hitting e4 and eyeing d5."},
      {side:"white",notation:"c4",from:[6,2],to:[4,2],explain:"Grabs queenside space and clamps d5."},
      {side:"black",notation:"g6",from:[1,6],to:[2,6],explain:"Prepares the bishop fianchetto."},
      {side:"white",notation:"Nf3",from:[7,6],to:[5,5],explain:"Develops the knight toward the centre."},
      {side:"black",notation:"Bg7",from:[0,5],to:[1,6],explain:"g3 — the Fianchetto Variation, the most solid way to meet the KID."},
      {side:"white",notation:"g3",from:[6,6],to:[5,6],explain:"g3 — the Fianchetto Variation, the most solid way to meet the KID."},
      {side:"black",notation:"0-0",from:[0,4],to:[0,6],castle:{rookFrom:[0,7],rookTo:[0,5]},explain:"Castles — king to safety."},
      {side:"white",notation:"Bg2",from:[7,5],to:[6,6],explain:"Fianchettoes the bishop onto the long diagonal."},
      {side:"black",notation:"d6",from:[1,3],to:[2,3],explain:"Restrains e5 and prepares development."},
      {side:"white",notation:"0-0",from:[7,4],to:[7,6],castle:{rookFrom:[7,7],rookTo:[7,5]},explain:"Castles — king to safety."},
      {side:"black",notation:"Nbd7",from:[0,1],to:[1,3],explain:"Knight to bd."},
      {side:"white",notation:"Nc3",from:[7,1],to:[5,2],explain:"...e5 — Black strikes in the centre to free his game."},
      {side:"black",notation:"e5",from:[1,4],to:[3,4],explain:"...e5 — Black strikes in the centre to free his game."},
      {side:"white",notation:"e4",from:[6,4],to:[4,4],explain:"Stakes out the centre with the king-pawn."},
      {side:"black",notation:"c6",from:[1,2],to:[2,2],explain:"Braces d5 and prepares to develop."},
      {side:"white",notation:"h3",from:[6,7],to:[5,7],explain:"A useful luft, stopping pins."},
      {side:"black",notation:"Qb6",from:[0,3],to:[2,1],explain:"Queen to b6."},
      {side:"white",notation:"d5",from:[4,3],to:[3,3],explain:"Claims central space."},
      {side:"black",notation:"cxd5",from:[2,2],to:[3,3],explain:"Captures on d5, opening lines."}
    ]
  },
  {
    name:"4. Four Pawns Attack",
    summary:"The Four Pawns Attack: White grabs maximum space with c4/d4/e4/f4; Black hits back immediately with ...c5 and ...e6 to crack the broad centre.",
    finalNote:"A double-edged Four Pawns battle: White's huge centre can become a strength or a target; Black has active piece play. Engine eval: small edge for White.",
    moves:[
      {side:"white",notation:"d4",from:[6,3],to:[4,3],explain:"Stakes out the centre with the queen-pawn."},
      {side:"black",notation:"Nf6",from:[0,6],to:[2,5],explain:"Develops the knight, hitting e4 and eyeing d5."},
      {side:"white",notation:"c4",from:[6,2],to:[4,2],explain:"Grabs queenside space and clamps d5."},
      {side:"black",notation:"g6",from:[1,6],to:[2,6],explain:"Prepares the bishop fianchetto."},
      {side:"white",notation:"Nc3",from:[7,1],to:[5,2],explain:"Develops the knight, supporting the centre."},
      {side:"black",notation:"Bg7",from:[0,5],to:[1,6],explain:"Fianchettoes the bishop onto the long diagonal."},
      {side:"white",notation:"e4",from:[6,4],to:[4,4],explain:"Stakes out the centre with the king-pawn."},
      {side:"black",notation:"d6",from:[1,3],to:[2,3],explain:"f4 — the Four Pawns Attack, the most space-grabbing anti-KID."},
      {side:"white",notation:"f4",from:[6,5],to:[4,5],explain:"f4 — the Four Pawns Attack, the most space-grabbing anti-KID."},
      {side:"black",notation:"0-0",from:[0,4],to:[0,6],castle:{rookFrom:[0,7],rookTo:[0,5]},explain:"Castles — king to safety."},
      {side:"white",notation:"Nf3",from:[7,6],to:[5,5],explain:"...c5 — Black challenges the centre at once."},
      {side:"black",notation:"c5",from:[1,2],to:[3,2],explain:"...c5 — Black challenges the centre at once."},
      {side:"white",notation:"d5",from:[4,3],to:[3,3],explain:"d5 e6 — Black undermines the broad pawn front."},
      {side:"black",notation:"e6",from:[1,4],to:[2,4],explain:"d5 e6 — Black undermines the broad pawn front."},
      {side:"white",notation:"Be2",from:[7,5],to:[6,4],explain:"A flexible bishop development."},
      {side:"black",notation:"exd5",from:[2,4],to:[3,3],explain:"Captures on d5, opening lines."},
      {side:"white",notation:"cxd5",from:[4,2],to:[3,3],explain:"Captures on d5, opening lines."},
      {side:"black",notation:"Re8",from:[0,5],to:[0,4],explain:"The rook takes the central e-file."},
      {side:"white",notation:"Nd2",from:[5,5],to:[6,3],explain:"Knight to d2."},
      {side:"black",notation:"Na6",from:[0,1],to:[2,0],explain:"Knight to a6."}
    ]
  },
  {
    name:"5. Averbakh Variation",
    summary:"The Averbakh: White develops the bishop to g5 to discourage ...e5; Black switches to ...c5, steering into Benoni-style structures with dynamic play.",
    finalNote:"A Benoni-flavoured Averbakh: White has a space advantage with the d5-pawn, Black gets queenside play and the ...b5 break. Engine eval: small edge for White.",
    moves:[
      {side:"white",notation:"d4",from:[6,3],to:[4,3],explain:"Stakes out the centre with the queen-pawn."},
      {side:"black",notation:"Nf6",from:[0,6],to:[2,5],explain:"Develops the knight, hitting e4 and eyeing d5."},
      {side:"white",notation:"c4",from:[6,2],to:[4,2],explain:"Grabs queenside space and clamps d5."},
      {side:"black",notation:"g6",from:[1,6],to:[2,6],explain:"Prepares the bishop fianchetto."},
      {side:"white",notation:"Nc3",from:[7,1],to:[5,2],explain:"Develops the knight, supporting the centre."},
      {side:"black",notation:"Bg7",from:[0,5],to:[1,6],explain:"Fianchettoes the bishop onto the long diagonal."},
      {side:"white",notation:"e4",from:[6,4],to:[4,4],explain:"Stakes out the centre with the king-pawn."},
      {side:"black",notation:"d6",from:[1,3],to:[2,3],explain:"Restrains e5 and prepares development."},
      {side:"white",notation:"Be2",from:[7,5],to:[6,4],explain:"Bg5 — the Averbakh, pinning to prevent the freeing ...e5."},
      {side:"black",notation:"0-0",from:[0,4],to:[0,6],castle:{rookFrom:[0,7],rookTo:[0,5]},explain:"Bg5 — the Averbakh, pinning to prevent the freeing ...e5."},
      {side:"white",notation:"Bg5",from:[7,2],to:[3,6],explain:"...c5 — Black changes tack into a Benoni structure."},
      {side:"black",notation:"c5",from:[1,2],to:[3,2],explain:"...c5 — Black changes tack into a Benoni structure."},
      {side:"white",notation:"d5",from:[4,3],to:[3,3],explain:"d5 — White grabs space, defining a Benoni middlegame."},
      {side:"black",notation:"e6",from:[1,4],to:[2,4],explain:"d5 — White grabs space, defining a Benoni middlegame."},
      {side:"white",notation:"Qd2",from:[7,3],to:[6,3],explain:"Connects the rooks and eyes the kingside."},
      {side:"black",notation:"exd5",from:[2,4],to:[3,3],explain:"Captures on d5, opening lines."},
      {side:"white",notation:"exd5",from:[4,4],to:[3,3],explain:"Captures on d5, opening lines."},
      {side:"black",notation:"Re8",from:[0,5],to:[0,4],explain:"The rook takes the central e-file."},
      {side:"white",notation:"Nf3",from:[7,6],to:[5,5],explain:"Develops the knight toward the centre."},
      {side:"black",notation:"Bg4",from:[0,2],to:[4,6],explain:"Bishop to g4."}
    ]
  }
];

const DUTCH_LESSON = [
  {
    name:"1. Leningrad Dutch",
    summary:"The Leningrad Dutch: Black combines ...f5 with a ...g6 fianchetto, blending Dutch aggression with King's Indian ideas for a fighting, kingside-attacking setup.",
    finalNote:"A sharp Leningrad: Black has kingside attacking potential with ...f5 and the g7-bishop; White has more central space. Engine eval: small edge for White, dynamic play.",
    moves:[
      {side:"white",notation:"d4",from:[6,3],to:[4,3],explain:"...f5 — the Dutch, claiming e4 and declaring kingside intentions."},
      {side:"black",notation:"f5",from:[1,5],to:[3,5],explain:"...f5 — the Dutch, claiming e4 and declaring kingside intentions."},
      {side:"white",notation:"g3",from:[6,6],to:[5,6],explain:"Prepares the bishop fianchetto."},
      {side:"black",notation:"Nf6",from:[0,6],to:[2,5],explain:"Develops the knight, hitting e4 and eyeing d5."},
      {side:"white",notation:"Bg2",from:[7,5],to:[6,6],explain:"Fianchettoes the bishop onto the long diagonal."},
      {side:"black",notation:"g6",from:[1,6],to:[2,6],explain:"Prepares the bishop fianchetto."},
      {side:"white",notation:"Nf3",from:[7,6],to:[5,5],explain:"Develops the knight toward the centre."},
      {side:"black",notation:"Bg7",from:[0,5],to:[1,6],explain:"Fianchettoes the bishop onto the long diagonal."},
      {side:"white",notation:"0-0",from:[7,4],to:[7,6],castle:{rookFrom:[7,7],rookTo:[7,5]},explain:"Castles — king to safety."},
      {side:"black",notation:"0-0",from:[0,4],to:[0,6],castle:{rookFrom:[0,7],rookTo:[0,5]},explain:"Castles — king to safety."},
      {side:"white",notation:"c4",from:[6,2],to:[4,2],explain:"Grabs queenside space and clamps d5."},
      {side:"black",notation:"d6",from:[1,3],to:[2,3],explain:"Restrains e5 and prepares development."},
      {side:"white",notation:"Nc3",from:[7,1],to:[5,2],explain:"Develops the knight, supporting the centre."},
      {side:"black",notation:"Nc6",from:[0,1],to:[2,2],explain:"d5 Na5 — Black hits c4 and heads for queenside counterplay."},
      {side:"white",notation:"d5",from:[4,3],to:[3,3],explain:"d5 Na5 — Black hits c4 and heads for queenside counterplay."},
      {side:"black",notation:"Na5",from:[2,2],to:[3,0],explain:"Knight to a5."},
      {side:"white",notation:"Nd2",from:[5,5],to:[6,3],explain:"...c5 and ...b5 — Black expands on the queenside."},
      {side:"black",notation:"c5",from:[1,2],to:[3,2],explain:"...c5 and ...b5 — Black expands on the queenside."},
      {side:"white",notation:"Qc2",from:[7,3],to:[6,2],explain:"Queen to c2."},
      {side:"black",notation:"a6",from:[1,0],to:[2,0],explain:"Gains space and stops Nb5/Bb5 ideas."},
      {side:"white",notation:"b3",from:[6,1],to:[5,1],explain:"Pawn to b3."},
      {side:"black",notation:"b5",from:[1,1],to:[3,1],explain:"Expands on the queenside."}
    ]
  },
  {
    name:"2. Stonewall Dutch",
    summary:"The Stonewall Dutch: Black builds the d5-e6-f5 pawn wall, clamping e4 and aiming for a kingside attack — solid and strategically rich, if a touch committal.",
    finalNote:"The Stonewall structure: Black has a kingside bind and attacking ideas (...Ne4) but a slightly passive light bishop. Engine eval: small edge for White.",
    moves:[
      {side:"white",notation:"d4",from:[6,3],to:[4,3],explain:"Stakes out the centre with the queen-pawn."},
      {side:"black",notation:"f5",from:[1,5],to:[3,5],explain:"Stakes a kingside claim."},
      {side:"white",notation:"g3",from:[6,6],to:[5,6],explain:"Prepares the bishop fianchetto."},
      {side:"black",notation:"Nf6",from:[0,6],to:[2,5],explain:"Develops the knight, hitting e4 and eyeing d5."},
      {side:"white",notation:"Bg2",from:[7,5],to:[6,6],explain:"Fianchettoes the bishop onto the long diagonal."},
      {side:"black",notation:"e6",from:[1,4],to:[2,4],explain:"Frees the f8-bishop and braces d5."},
      {side:"white",notation:"Nf3",from:[7,6],to:[5,5],explain:"...d5 — completing the Stonewall wall (d5-e6-f5), clamping e4."},
      {side:"black",notation:"d5",from:[1,3],to:[3,3],explain:"...d5 — completing the Stonewall wall (d5-e6-f5), clamping e4."},
      {side:"white",notation:"0-0",from:[7,4],to:[7,6],castle:{rookFrom:[7,7],rookTo:[7,5]},explain:"...Bd6 — the key Stonewall piece, aimed at White's kingside."},
      {side:"black",notation:"Bd6",from:[0,5],to:[2,3],explain:"...Bd6 — the key Stonewall piece, aimed at White's kingside."},
      {side:"white",notation:"c4",from:[6,2],to:[4,2],explain:"Grabs queenside space and clamps d5."},
      {side:"black",notation:"c6",from:[1,2],to:[2,2],explain:"Braces d5 and prepares to develop."},
      {side:"white",notation:"b3",from:[6,1],to:[5,1],explain:"Pawn to b3."},
      {side:"black",notation:"Qe7",from:[0,3],to:[1,4],explain:"Queen to e7."},
      {side:"white",notation:"Bb2",from:[7,2],to:[6,1],explain:"Bishop to b2."},
      {side:"black",notation:"0-0",from:[0,4],to:[0,6],castle:{rookFrom:[0,7],rookTo:[0,5]},explain:"Castles — king to safety."},
      {side:"white",notation:"Nbd2",from:[7,1],to:[6,3],explain:"Knight to bd."},
      {side:"black",notation:"b6",from:[1,1],to:[2,1],explain:"Prepares to fianchetto the light bishop."}
    ]
  },
  {
    name:"3. Classical Dutch",
    summary:"The Classical Dutch: Black sets up ...f5/...e6/...Be7/...d6 and prepares the central ...e5 break or a kingside attack with ...Qe8-h5.",
    finalNote:"A balanced Classical Dutch: Black has freed the position with the ...e5/...fxe4 break and active pieces. Engine eval: small edge for White.",
    moves:[
      {side:"white",notation:"d4",from:[6,3],to:[4,3],explain:"...f5 — the Dutch."},
      {side:"black",notation:"f5",from:[1,5],to:[3,5],explain:"...f5 — the Dutch."},
      {side:"white",notation:"g3",from:[6,6],to:[5,6],explain:"Prepares the bishop fianchetto."},
      {side:"black",notation:"Nf6",from:[0,6],to:[2,5],explain:"Develops the knight, hitting e4 and eyeing d5."},
      {side:"white",notation:"Bg2",from:[7,5],to:[6,6],explain:"Fianchettoes the bishop onto the long diagonal."},
      {side:"black",notation:"e6",from:[1,4],to:[2,4],explain:"Frees the f8-bishop and braces d5."},
      {side:"white",notation:"Nf3",from:[7,6],to:[5,5],explain:"Develops the knight toward the centre."},
      {side:"black",notation:"Be7",from:[0,5],to:[1,4],explain:"Develops the bishop, preparing to castle."},
      {side:"white",notation:"0-0",from:[7,4],to:[7,6],castle:{rookFrom:[7,7],rookTo:[7,5]},explain:"Castles — king to safety."},
      {side:"black",notation:"0-0",from:[0,4],to:[0,6],castle:{rookFrom:[0,7],rookTo:[0,5]},explain:"Castles — king to safety."},
      {side:"white",notation:"c4",from:[6,2],to:[4,2],explain:"Grabs queenside space and clamps d5."},
      {side:"black",notation:"d6",from:[1,3],to:[2,3],explain:"Restrains e5 and prepares development."},
      {side:"white",notation:"Nc3",from:[7,1],to:[5,2],explain:"...Qe8 — the thematic queen lift, heading for g6/h5 to support a kingside attack."},
      {side:"black",notation:"Qe8",from:[0,3],to:[0,4],explain:"...Qe8 — the thematic queen lift, heading for g6/h5 to support a kingside attack."},
      {side:"white",notation:"Re1",from:[7,5],to:[7,4],explain:"The rook takes the central e-file."},
      {side:"black",notation:"Qg6",from:[0,4],to:[2,6],explain:"...fxe4 — Black opens lines and frees his game."},
      {side:"white",notation:"e4",from:[6,4],to:[4,4],explain:"...fxe4 — Black opens lines and frees his game."},
      {side:"black",notation:"fxe4",from:[3,5],to:[4,4],explain:"Captures on e4, opening lines."},
      {side:"white",notation:"Nxe4",from:[5,2],to:[4,4],explain:"Captures on e4, opening lines."},
      {side:"black",notation:"Nxe4",from:[2,5],to:[4,4],explain:"Captures on e4, opening lines."},
      {side:"white",notation:"Rxe4",from:[7,4],to:[4,4],explain:"Captures on e4, opening lines."}
    ]
  },
  {
    name:"4. Dutch vs c4 (...Bb4+)",
    summary:"The Dutch vs an early c4: Black checks with ...Bb4+ to ease development, then sets up a Classical Dutch with ...Qe8-g6 and kingside ambitions.",
    finalNote:"A comfortable Dutch: the ...Bb4+ trade has eased Black's development and the queen swings to g6 for kingside play. Engine eval: small edge for White.",
    moves:[
      {side:"white",notation:"d4",from:[6,3],to:[4,3],explain:"Stakes out the centre with the queen-pawn."},
      {side:"black",notation:"f5",from:[1,5],to:[3,5],explain:"Stakes a kingside claim."},
      {side:"white",notation:"c4",from:[6,2],to:[4,2],explain:"Grabs queenside space and clamps d5."},
      {side:"black",notation:"Nf6",from:[0,6],to:[2,5],explain:"...Bb4+ — a useful check to trade off a piece and ease Black's setup."},
      {side:"white",notation:"g3",from:[6,6],to:[5,6],explain:"...Bb4+ — a useful check to trade off a piece and ease Black's setup."},
      {side:"black",notation:"e6",from:[1,4],to:[2,4],explain:"Frees the f8-bishop and braces d5."},
      {side:"white",notation:"Bg2",from:[7,5],to:[6,6],explain:"Fianchettoes the bishop onto the long diagonal."},
      {side:"black",notation:"Bb4+",from:[0,5],to:[4,1],explain:"Bishop to b4."},
      {side:"white",notation:"Bd2",from:[7,2],to:[6,3],explain:"Bishop to d2."},
      {side:"black",notation:"Be7",from:[4,1],to:[1,4],explain:"Develops the bishop, preparing to castle."},
      {side:"white",notation:"Nf3",from:[7,6],to:[5,5],explain:"Develops the knight toward the centre."},
      {side:"black",notation:"0-0",from:[0,4],to:[0,6],castle:{rookFrom:[0,7],rookTo:[0,5]},explain:"Castles — king to safety."},
      {side:"white",notation:"0-0",from:[7,4],to:[7,6],castle:{rookFrom:[7,7],rookTo:[7,5]},explain:"Castles — king to safety."},
      {side:"black",notation:"d6",from:[1,3],to:[2,3],explain:"Restrains e5 and prepares development."},
      {side:"white",notation:"Nc3",from:[7,1],to:[5,2],explain:"Develops the knight, supporting the centre."},
      {side:"black",notation:"Qe8",from:[0,3],to:[0,4],explain:"...Qe8-g6 — the queen heads for the kingside attack."},
      {side:"white",notation:"Re1",from:[7,5],to:[7,4],explain:"...Qe8-g6 — the queen heads for the kingside attack."},
      {side:"black",notation:"Qg6",from:[0,4],to:[2,6],explain:"Queen to g6."}
    ]
  },
  {
    name:"5. Leningrad ...Qe8",
    summary:"The Leningrad with ...Qe8: Black fianchettoes, castles, and lifts the queen to e8, preparing ...e5 or ...a5/...b5 expansion on the wings.",
    finalNote:"A flexible Leningrad: Black has the ...e5 break and queenside expansion in hand; White holds central space. Engine eval: small edge for White, rich play.",
    moves:[
      {side:"white",notation:"d4",from:[6,3],to:[4,3],explain:"Stakes out the centre with the queen-pawn."},
      {side:"black",notation:"f5",from:[1,5],to:[3,5],explain:"Stakes a kingside claim."},
      {side:"white",notation:"g3",from:[6,6],to:[5,6],explain:"Prepares the bishop fianchetto."},
      {side:"black",notation:"Nf6",from:[0,6],to:[2,5],explain:"Develops the knight, hitting e4 and eyeing d5."},
      {side:"white",notation:"Bg2",from:[7,5],to:[6,6],explain:"Fianchettoes the bishop onto the long diagonal."},
      {side:"black",notation:"g6",from:[1,6],to:[2,6],explain:"Prepares the bishop fianchetto."},
      {side:"white",notation:"Nf3",from:[7,6],to:[5,5],explain:"Develops the knight toward the centre."},
      {side:"black",notation:"Bg7",from:[0,5],to:[1,6],explain:"Fianchettoes the bishop onto the long diagonal."},
      {side:"white",notation:"0-0",from:[7,4],to:[7,6],castle:{rookFrom:[7,7],rookTo:[7,5]},explain:"Castles — king to safety."},
      {side:"black",notation:"0-0",from:[0,4],to:[0,6],castle:{rookFrom:[0,7],rookTo:[0,5]},explain:"Castles — king to safety."},
      {side:"white",notation:"c4",from:[6,2],to:[4,2],explain:"Grabs queenside space and clamps d5."},
      {side:"black",notation:"d6",from:[1,3],to:[2,3],explain:"Restrains e5 and prepares development."},
      {side:"white",notation:"Nc3",from:[7,1],to:[5,2],explain:"...Qe8 — the Leningrad queen lift, eyeing ...e5 and the kingside."},
      {side:"black",notation:"Qe8",from:[0,3],to:[0,4],explain:"d5 a5 — White grabs space; Black prepares ...Na6-c5 and ...b5."},
      {side:"white",notation:"d5",from:[4,3],to:[3,3],explain:"d5 a5 — White grabs space; Black prepares ...Na6-c5 and ...b5."},
      {side:"black",notation:"a5",from:[1,0],to:[3,0],explain:"Gains queenside space."},
      {side:"white",notation:"Rb1",from:[7,0],to:[7,1],explain:"Rook to b1."},
      {side:"black",notation:"Na6",from:[0,1],to:[2,0],explain:"Knight to a6."},
      {side:"white",notation:"b3",from:[6,1],to:[5,1],explain:"Pawn to b3."},
      {side:"black",notation:"Bd7",from:[0,2],to:[1,3],explain:"Bishop to d7."}
    ]
  }
];

// ── LESSON REGISTRY (10 openings) ────────────────────────────────────────────
const LESSON_SETS = {
  london:               { title:"London System — 5 Popular Lines",          orientation:"white", lines:LONDON_LESSON },
  sicilian:             { title:"Sicilian Defense — 5 Popular Lines",        orientation:"black", lines:SICILIAN_LESSON },
  queens_gambit:        { title:"Queen's Gambit — 5 Popular Lines",          orientation:"white", lines:QUEENS_GAMBIT_LESSON },
  italian_game:         { title:"Italian Game — 5 Popular Lines",            orientation:"white", lines:ITALIAN_LESSON },
  ruy_lopez:            { title:"Ruy López — 5 Popular Lines",               orientation:"white", lines:RUY_LOPEZ_LESSON },
  kings_indian_attack:  { title:"King's Indian Attack — 5 Popular Lines",    orientation:"white", lines:KIA_LESSON },
  french_defense:       { title:"French Defense — 5 Popular Lines",          orientation:"black", lines:FRENCH_LESSON },
  caro_kann:            { title:"Caro-Kann Defense — 5 Popular Lines",       orientation:"black", lines:CARO_LESSON },
  kings_indian_defense: { title:"King's Indian Defense — 5 Popular Lines",   orientation:"black", lines:KID_LESSON },
  dutch_defense:        { title:"Dutch Defense — 5 Popular Lines",           orientation:"black", lines:DUTCH_LESSON },
};

// ── INTERACTIVE LESSON VIEWER (you play your side; opponent auto-replies) ─────
// Shares IMGS, START_BOARD and getTrainerMoves from openings.html (global scope).
let LS = null;
function lShuffle(a){ a=a.slice(); for(let i=a.length-1;i>0;i--){const j=0|Math.random()*(i+1);[a[i],a[j]]=[a[j],a[i]];} return a; }

function resizeLesson(){
  // Board is limited by window height; reserve space for nav, tabs, padding,
  // file labels and the progress line, then fill the rest.
  const availH=window.innerHeight-190;
  const availW=window.innerWidth-340;
  const lsq=Math.max(44,Math.floor(Math.min(availH,availW)/8));
  document.documentElement.style.setProperty('--lsq', lsq+'px');
}
window.addEventListener('resize',()=>{ const o=document.getElementById('lessonOverlay'); if(o&&o.classList.contains('open')) resizeLesson(); });

function openLesson(key){
  const set = LESSON_SETS[key] || LESSON_SETS.london;
  LS = { set, lineIdx:0, study:false, hintShown:false };
  document.getElementById('lTitle').textContent = set.title;
  buildLessonTabs();
  updateStudyUI();
  resizeLesson();
  selectLessonLine(0);
  document.getElementById('lessonOverlay').classList.add('open');
}
function closeLesson(){ document.getElementById('lessonOverlay').classList.remove('open'); LS=null; }

function buildLessonTabs(){
  const t=document.getElementById('lTabs'); t.innerHTML='';
  LS.set.lines.forEach((ln,i)=>{
    const b=document.createElement('button');
    b.className='lesson-tab'+((!LS.study && i===LS.lineIdx)?' active':'');
    b.textContent=ln.name;
    b.onclick=()=>selectLessonLine(i);
    t.appendChild(b);
  });
}

function lessonIsAuto(step){ return step.side !== LS.set.orientation; }

function lessonResetCommon(idx){
  LS.lineIdx=idx; LS.flip=LS.set.orientation==='black';
  LS.board=[...START_BOARD]; LS.stepIdx=0; LS.selected=null;
  LS.lastFrom=null; LS.lastTo=null; LS.moveLog=[]; LS.wrongFlash=false; LS.done=false; LS.hintShown=false;
  lessonFeedback('', '');
  document.getElementById('lDone').classList.remove('visible');
}

function selectLessonLine(i){
  LS.study=false;
  updateStudyUI();
  lessonResetCommon(i);
  buildLessonTabs();
  document.getElementById('lSummary').textContent=LS.set.lines[i].summary;
  renderLesson();
  const first=LS.set.lines[i].moves[0];
  if(first && lessonIsAuto(first)) setTimeout(playLessonAuto, 550);
  else showLessonInstruction();
}
function lessonRestart(){ if(!LS) return; if(LS.study) startStudy(); else selectLessonLine(LS.lineIdx); }

// ── STUDY MODE: all lines, randomized, no help, hint on demand ───────────────
function toggleStudy(){ if(!LS) return; if(LS.study) selectLessonLine(0); else startStudy(); }
function startStudy(){
  LS.study=true;
  LS.studyOrder=lShuffle(LS.set.lines.map((_,i)=>i));
  LS.studyPos=0;
  updateStudyUI();
  loadStudyLine();
}
function loadStudyLine(){
  const idx=LS.studyOrder[LS.studyPos];
  lessonResetCommon(idx);
  buildLessonTabs();
  document.getElementById('lSummary').textContent='Study mode — Line '+(LS.studyPos+1)+' of '+LS.set.lines.length+': '+LS.set.lines[idx].name+'. Play the moves from memory; press 💡 Hint if you get stuck.';
  renderLesson();
  const first=LS.set.lines[idx].moves[0];
  if(first && lessonIsAuto(first)) setTimeout(playLessonAuto, 550);
  else showLessonInstruction();
}
function updateStudyUI(){
  const sBtn=document.getElementById('lStudyBtn'), hBtn=document.getElementById('lHintBtn'), tabs=document.getElementById('lTabs');
  if(!sBtn) return;
  if(LS && LS.study){ sBtn.textContent='✕ Exit study'; sBtn.classList.add('active'); if(hBtn) hBtn.style.display=''; if(tabs) tabs.classList.add('dim'); }
  else { sBtn.textContent='📚 Study'; sBtn.classList.remove('active'); if(hBtn) hBtn.style.display='none'; if(tabs) tabs.classList.remove('dim'); }
}
function showStudyHint(){
  if(!LS || !LS.study) return;
  LS.hintShown=true;
  showLessonInstruction();
  renderLesson();
}

function showLessonInstruction(){
  if(!LS) return;
  const line=LS.set.lines[LS.lineIdx];
  const numEl=document.getElementById('lMoveNum'), notEl=document.getElementById('lNotation'),
        exEl=document.getElementById('lExplain'), hintEl=document.getElementById('lHint');
  if(LS.stepIdx>=line.moves.length){ return; }
  const step=line.moves[LS.stepIdx];
  const player=!lessonIsAuto(step);
  const moveNo=Math.ceil((LS.stepIdx+1)/2);
  if(LS.study && !LS.hintShown){
    numEl.className='lesson-movenum '+(player?'your-turn':'auto-turn');
    numEl.textContent= player ? ('Study · line '+(LS.studyPos+1)+' of '+LS.set.lines.length+' — your move') : '⟳ Opponent replies';
    notEl.textContent='';
    exEl.textContent= player ? 'Play the move from memory. Stuck? Press 💡 Hint.' : '';
    hintEl.textContent='';
    return;
  }
  numEl.className='lesson-movenum '+(player?'your-turn':'auto-turn');
  numEl.textContent=(player?'♟ Your move':'⟳ Opponent replies')+' · move '+moveNo;
  notEl.textContent=(step.side==='white'?moveNo+'. ':moveNo+'… ')+step.notation;
  exEl.textContent=step.explain;
  if(player){
    const f='abcdefgh'[step.from[1]]+(8-step.from[0]);
    const t='abcdefgh'[step.to[1]]+(8-step.to[0]);
    hintEl.textContent='Play '+step.notation+': click '+f+', then '+t+'.';
  } else hintEl.textContent='';
}

function lessonFeedback(kind,msg){
  const fb=document.getElementById('lFeedback');
  fb.className='feedback-bar'+(kind?(' '+kind):'');
  fb.textContent=msg||'';
}

function applyLessonMove(step){
  const b=LS.board;
  b[step.to[0]*8+step.to[1]]=b[step.from[0]*8+step.from[1]];
  b[step.from[0]*8+step.from[1]]='.';
  if(step.castle){
    b[step.castle.rookTo[0]*8+step.castle.rookTo[1]]=b[step.castle.rookFrom[0]*8+step.castle.rookFrom[1]];
    b[step.castle.rookFrom[0]*8+step.castle.rookFrom[1]]='.';
  }
  LS.lastFrom=step.from; LS.lastTo=step.to;
  LS.moveLog.push(step.notation);
  updateLessonMoveLog();
}

function playLessonAuto(){
  if(!LS) return;
  const line=LS.set.lines[LS.lineIdx];
  if(LS.stepIdx>=line.moves.length) return;
  const step=line.moves[LS.stepIdx];
  if(!lessonIsAuto(step)) return;
  showLessonInstruction();
  applyLessonMove(step);
  LS.stepIdx++;
  renderLesson();
  if(LS.stepIdx>=line.moves.length){ finishLesson(); return; }
  const next=line.moves[LS.stepIdx];
  if(lessonIsAuto(next)) setTimeout(playLessonAuto, 650);
  else showLessonInstruction();
}

function handleLessonClick(r,c){
  if(!LS || LS.wrongFlash || LS.done) return;
  const line=LS.set.lines[LS.lineIdx];
  if(LS.stepIdx>=line.moves.length) return;
  const step=line.moves[LS.stepIdx];
  if(lessonIsAuto(step)) return;
  const piece=LS.board[r*8+c];
  const playerWhite=LS.set.orientation==='white';
  const isOwn=p=>p&&p!=='.'&&(playerWhite?p===p.toUpperCase():p===p.toLowerCase());
  if(!LS.selected){ if(isOwn(piece)){ LS.selected=[r,c]; renderLesson(); } return; }
  const [sr,sc]=LS.selected;
  if(sr===r&&sc===c){ LS.selected=null; renderLesson(); return; }
  if(isOwn(piece)){ LS.selected=[r,c]; renderLesson(); return; }
  const correct = sr===step.from[0]&&sc===step.from[1]&&r===step.to[0]&&c===step.to[1];
  if(correct){
    LS.selected=null;
    applyLessonMove(step);
    LS.stepIdx++;
    LS.hintShown=false;
    lessonFeedback('good','✓ Correct!');
    renderLesson();
    setTimeout(()=>{
      lessonFeedback('','');
      if(LS.stepIdx>=line.moves.length){ finishLesson(); return; }
      const next=line.moves[LS.stepIdx];
      if(lessonIsAuto(next)) playLessonAuto(); else showLessonInstruction();
    }, 480);
  } else {
    LS.wrongFlash=true; LS.selected=null;
    lessonFeedback('wrong', LS.study ? '✗ Not right — press 💡 Hint if stuck.' : '✗ Not that move — follow the highlighted hint.');
    renderLesson();
    setTimeout(()=>{ LS.wrongFlash=false; lessonFeedback('',''); renderLesson(); }, 750);
  }
}

function finishLesson(){
  LS.done=true; LS.selected=null;
  renderLesson();
  const line=LS.set.lines[LS.lineIdx];
  document.getElementById('lHint').textContent='';
  if(LS.study){
    LS.studyPos++;
    if(LS.studyPos < LS.set.lines.length){
      document.getElementById('lMoveNum').className='lesson-movenum your-turn';
      document.getElementById('lMoveNum').textContent='✓ Line complete';
      lessonFeedback('good','✓ Line complete — loading the next line…');
      setTimeout(()=>{ if(LS&&LS.study) loadStudyLine(); }, 1200);
      return;
    }
    document.getElementById('lMoveNum').className='lesson-movenum your-turn';
    document.getElementById('lMoveNum').textContent='✓ Study complete';
    document.getElementById('lDoneTitle').textContent='🎉 Study complete!';
    document.getElementById('lDoneText').textContent='You played all '+LS.set.lines.length+' lines of this opening from memory. Great work!';
    const btn=document.getElementById('lDoneBtn'); btn.textContent='Study again'; btn.onclick=startStudy;
    document.getElementById('lDone').classList.add('visible');
    return;
  }
  document.getElementById('lMoveNum').className='lesson-movenum your-turn';
  document.getElementById('lMoveNum').textContent='✓ Line complete';
  document.getElementById('lDoneTitle').textContent='🎉 Line Complete!';
  document.getElementById('lDoneText').textContent=line.finalNote;
  const btn=document.getElementById('lDoneBtn'); btn.textContent='Practice this line again'; btn.onclick=lessonRestart;
  document.getElementById('lDone').classList.add('visible');
}

function updateLessonMoveLog(){
  const el=document.getElementById('lMoveList');
  if(!LS.moveLog.length){ el.innerHTML='—'; return; }
  let html='', n=1;
  for(let i=0;i<LS.moveLog.length;i+=2){
    html+='<span>'+n+'.</span> <span>'+LS.moveLog[i]+'</span> ';
    if(LS.moveLog[i+1]) html+='<span>'+LS.moveLog[i+1]+'</span> ';
    n++;
  }
  el.innerHTML=html;
}

function renderLesson(){
  if(!LS) return;
  const line=LS.set.lines[LS.lineIdx];
  const flip=LS.flip;
  const step=(LS.stepIdx<line.moves.length)?line.moves[LS.stepIdx]:null;
  const playerTurn = step && !lessonIsAuto(step) && !LS.done;
  const showHint = (!LS.study || LS.hintShown);
  let dots=[];
  if(LS.selected && playerTurn){
    dots=getTrainerMoves(LS.board, LS.selected[0], LS.selected[1]);
    if(step.castle && LS.selected[0]===step.from[0] && LS.selected[1]===step.from[1]) dots=dots.concat([step.to]);
  }
  const boardEl=document.getElementById('lessonBoard'); boardEl.innerHTML='';
  for(let vr=0;vr<8;vr++) for(let vc=0;vc<8;vc++){
    const r=flip?7-vr:vr, c=flip?7-vc:vc;
    const sq=document.createElement('div');
    sq.className='l-sq '+((r+c)%2===0?'light':'dark');
    if(LS.lastFrom&&LS.lastFrom[0]===r&&LS.lastFrom[1]===c) sq.classList.add('l-from');
    if(LS.lastTo&&LS.lastTo[0]===r&&LS.lastTo[1]===c) sq.classList.add('l-to');
    if(LS.selected&&LS.selected[0]===r&&LS.selected[1]===c) sq.classList.add('l-sel');
    if(playerTurn&&!LS.selected&&showHint&&step.from[0]===r&&step.from[1]===c) sq.classList.add('l-hint');
    if(dots.some(([mr,mc])=>mr===r&&mc===c)){
      sq.classList.add('l-legal');
      if(LS.board[r*8+c]&&LS.board[r*8+c]!=='.') sq.classList.add('l-has-piece');
    }
    const p=LS.board[r*8+c];
    if(p&&p!=='.'&&IMGS[p]){ const im=document.createElement('img'); im.src=IMGS[p]; im.draggable=false; sq.appendChild(im); }
    sq.addEventListener('click',()=>handleLessonClick(r,c));
    boardEl.appendChild(sq);
  }
  const files = flip ? ['h','g','f','e','d','c','b','a'] : ['a','b','c','d','e','f','g','h'];
  const ranks = flip ? [1,2,3,4,5,6,7,8] : [8,7,6,5,4,3,2,1];
  const fEl=document.getElementById('lFiles'); if(fEl) fEl.innerHTML=files.map(f=>'<span>'+f+'</span>').join('');
  const rEl=document.getElementById('lRanks'); if(rEl) rEl.innerHTML=ranks.map(n=>'<span>'+n+'</span>').join('');
  document.getElementById('lProgress').textContent='Move '+Math.min(LS.stepIdx,line.moves.length)+' of '+line.moves.length;
  var lnEl=document.getElementById('lLineName'); if(lnEl) lnEl.textContent = LS.study ? ('Study · '+line.name) : line.name;
}

window.addEventListener('keydown',(e)=>{
  const o=document.getElementById('lessonOverlay'); if(!o||!o.classList.contains('open')) return;
  if(e.key==='Escape') closeLesson();
  else if((e.key==='h'||e.key==='H') && LS && LS.study) showStudyHint();
});
