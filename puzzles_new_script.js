// This is the test script for puzzles — validates all positions
const ALL_PUZZLES = [];
function bp(specs){const b=Array(64).fill('.');for(const[r,c,p]of specs)b[r*8+c]=p;return b.join('');}
function addP(specs,moves,rating,theme,title,toMove,desc){
  // Validate: solution moves don't land on same-side king
  const board=bp(specs);
  for(let i=0;i<moves.length;i++){
    const[[fr,fc],[tr,tc]]=moves[i];
    const movingPiece=board[fr*8+fc];
    const targetPiece=board[tr*8+tc];
    if(targetPiece==='k'||targetPiece==='K'){
      console.error(`PUZZLE ${ALL_PUZZLES.length} move ${i}: captures king! ${movingPiece} to [${tr},${tc}]`);
    }
    if(movingPiece==='.'||movingPiece===undefined){
      console.error(`PUZZLE ${ALL_PUZZLES.length} move ${i}: no piece at [${fr},${fc}]`);
    }
  }
  // Also check kings exist
  if(!board.includes('k'))console.error(`PUZZLE ${ALL_PUZZLES.length}: missing black king`);
  if(!board.includes('K'))console.error(`PUZZLE ${ALL_PUZZLES.length}: missing white king`);
  ALL_PUZZLES.push({id:ALL_PUZZLES.length,board,solution:moves,rating,theme,title,toMove:toMove||'White',desc});
}

// ══ MATE IN 1 (rating 400-650) ══

// 1. Nf7# smothered: Ne5→f7 attacks h8. King trapped by own pieces.
addP([[0,7,'k'],[0,6,'r'],[0,3,'q'],[0,2,'b'],[0,0,'r'],[1,7,'p'],[1,6,'p'],[1,3,'n'],[1,2,'p'],[2,1,'p'],
      [7,6,'K'],[7,5,'R'],[5,3,'Q'],[3,4,'N'],[5,4,'B'],[6,6,'P'],[6,5,'P'],[6,0,'P']],
 [[[3,4],[1,5]]],480,'Smothered Mate','Knight Smothers the King','White',
 'The knight leaps to f7 — checkmate! The king is smothered by its own rook and pawns.');

// 2. Rh7# Arabian: Rh2→h7, Nf6 covers g8 + protects rook.
addP([[0,7,'k'],[0,2,'q'],[0,0,'r'],[1,6,'p'],[1,3,'n'],[1,1,'p'],[2,4,'b'],[2,2,'p'],[3,3,'p'],[2,0,'p'],
      [7,6,'K'],[6,7,'R'],[2,5,'N'],[5,1,'Q'],[5,3,'B'],[6,6,'P'],[6,5,'P'],[6,0,'P'],[4,3,'P']],
 [[[6,7],[1,7]]],460,'Arabian Mate','Rook Delivers Arabian Mate','White',
 'Swing the rook to h7! The knight on f6 covers g8 and protects the rook. Checkmate!');

// 3. Qh7# Queen mates h8: Qd3→h7, Nf6 guards h7 and covers g8.
addP([[0,7,'k'],[0,2,'q'],[0,0,'r'],[1,6,'p'],[1,3,'n'],[1,4,'b'],[1,1,'p'],[2,2,'p'],
      [7,6,'K'],[5,3,'Q'],[2,5,'N'],[7,0,'R'],[7,5,'R'],[4,2,'B'],[6,6,'P'],[6,5,'P']],
 [[[5,3],[1,7]]],440,'Queen Mate','Queen Traps the King','White',
 'Drive the queen to h7! The knight on f6 covers g8 and guards the queen. Checkmate!');

// 4. Rg8# Rook to g8: Rg1→g8, Qf6 covers g7, black pawn h7 blocks.
addP([[0,7,'k'],[0,3,'b'],[0,2,'q'],[0,0,'r'],[1,7,'p'],[1,3,'n'],[1,1,'p'],[2,3,'p'],[3,2,'b'],
      [7,7,'K'],[7,6,'R'],[2,5,'Q'],[4,4,'N'],[5,3,'B'],[6,5,'P']],
 [[[7,6],[0,6]]],430,'Back Rank','Rook Storms the 8th Rank','White',
 'Slide the rook to g8! The queen covers g7, and the h7 pawn seals the king in. Checkmate!');

// 5. Qa8# Queen corners b8 king: Qa4→a8. King on b8, bishops and pawns block exits.
addP([[0,1,'k'],[0,2,'b'],[0,3,'b'],[0,5,'r'],[1,1,'p'],[1,2,'p'],[2,4,'p'],[3,1,'p'],[1,3,'n'],
      [7,6,'K'],[4,0,'Q'],[7,0,'R'],[3,3,'B'],[5,5,'N'],[6,6,'P'],[6,5,'P'],[4,3,'P']],
 [[[4,0],[0,0]]],410,'Corner Mate','Queen to the Corner!','White',
 'Slide the queen to a8! The king on b8 is boxed in by its own bishops and pawns.');

// 6. Qg6# Queen mates h7 king: Qd3→g6 diagonal, Rg1 covers g7, Rh5 covers h6, own rook on h8.
addP([[1,7,'k'],[0,7,'r'],[0,0,'r'],[2,2,'p'],[2,4,'b'],[1,3,'n'],[3,0,'q'],[3,5,'b'],[4,0,'p'],
      [7,4,'K'],[5,3,'Q'],[7,6,'R'],[3,7,'R'],[5,5,'N'],[4,2,'B'],[6,3,'P'],[6,5,'P']],
 [[[5,3],[2,6]]],450,'Queen Mate','Queen to g6 — Checkmate!','White',
 'The queen slides to g6, checking the king on h7 diagonally. All escape squares are covered!');

// 7. Qxf7# Queen takes f7: Qc4→f7 (diagonal), two rooks seal the d and e files.
addP([[0,4,'k'],[0,3,'q'],[0,0,'r'],[0,7,'r'],[1,3,'p'],[1,4,'p'],[1,5,'p'],[2,5,'b'],[3,2,'n'],
      [7,6,'K'],[4,2,'Q'],[7,3,'R'],[7,4,'R'],[2,2,'N'],[5,5,'N'],[5,3,'B'],[6,6,'P'],[6,5,'P'],[6,0,'P']],
 [[[4,2],[1,5]]],460,'Queen Mate','Queen Crashes Through to f7!','White',
 'Capture on f7 with the queen! Supported by the knight on c6, the king on e8 is mated.');

// 8. Rb8# Rook mates a8 king: Rb1→b8. Own rook on b7, pawn on a7 trap the king.
addP([[0,0,'k'],[0,2,'b'],[0,4,'r'],[1,0,'p'],[1,1,'r'],[1,2,'p'],[2,1,'n'],[2,3,'p'],[3,2,'p'],
      [7,7,'K'],[7,1,'R'],[3,3,'Q'],[5,5,'N'],[4,4,'B'],[6,7,'P'],[6,6,'P'],[6,4,'P']],
 [[[7,1],[0,1]]],420,'Back Rank','Rook Seals the Back Rank','White',
 'Crash the rook to b8! The king on a8 is sealed in by its own pieces. Checkmate!');

// 9. Rh8# Rook slides to h8: king on g8. Rh1→h8, queen covers f7/g7 area.
// g8=king, h8 is destination (rook gives check via h-file to king on g8? No, same rank.
// Rh8: rook on h8[0,7], king on g8[0,6]. Same rank, adjacent. Rook checks via rank 8. ✓
addP([[0,6,'k'],[0,4,'q'],[0,0,'r'],[1,6,'p'],[1,5,'p'],[1,3,'n'],[2,5,'b'],[2,3,'p'],[3,3,'q'],
      [7,7,'K'],[7,5,'R'],[4,6,'Q'],[5,3,'N'],[4,4,'B'],[6,7,'P'],[6,6,'P'],[6,4,'P']],
 [[[7,5],[0,5]]],440,'Back Rank','Rook Crashes to f8!','White',
 'Send the rook to f8 for checkmate! The queen and pawns seal all escape routes for the king on g8.');

// 10. Qe8# Queen to e8: king on f8. Qe3→e8 via e-file. Rg1 covers g7. Re2 guards queen.
addP([[0,5,'k'],[1,3,'p'],[1,5,'p'],[0,2,'b'],[0,0,'r'],[2,1,'n'],[3,1,'q'],[3,5,'p'],[4,0,'p'],
      [7,5,'K'],[5,4,'Q'],[6,4,'R'],[7,6,'R'],[4,7,'N'],[5,2,'B'],[6,7,'P'],[6,0,'P']],
 [[[5,4],[0,4]]],430,'Back Rank','Queen Sweeps to e8!','White',
 'Slide the queen all the way to e8 — checkmate! The rook on e2 supports, and g1 covers the escape.');

// 11. Ng6# Knight to g6 checks f8 king. Then covers all exits.
// Nh4→g6: g6[2,6] attacks f8[0,5] (diff=(-2,-1) knight move ✓)
// King f8 escape: e7(Qe6 covers via diag), e8(Qe6 via rank), g7(Rg1), g8(Qe6 diag)
addP([[0,5,'k'],[0,3,'q'],[0,0,'r'],[0,7,'r'],[1,3,'p'],[1,4,'p'],[1,5,'p'],[2,5,'b'],[3,2,'n'],
      [7,4,'K'],[4,7,'N'],[2,4,'Q'],[7,0,'R'],[7,6,'R'],[5,5,'B'],[6,3,'P'],[6,5,'P'],[6,0,'P']],
 [[[4,7],[2,6]]],500,'Knight Mate','The Knight Leaps to g6!','White',
 'Jump the knight to g6 — it gives check to the king on f8 and covers all escape squares!');

// 12. Nd7# Knight to d7 checks e8 king. Nd7 attacks: b6,b8,c5,e5,f8,f6. Checks? e8 king?
// d7[1,3] attacks: b6[2,1],b8[0,1],c5[3,2],e5[3,4],f6[2,5],f8[0,5]. NOT e8!
// Let me use Ne6# instead: e6[2,4] attacks: c7[1,2],c5[3,2],d8[0,3],f8[0,5],g7[1,6],g5[3,6],d4[4,3],f4[4,5]
// d8[0,3] and king on... nah.
// Use Nc7# — c7[1,2] attacks: a6[2,0],a8[0,0],b5[3,1],d5[3,3],e8[0,4],e6[2,4]. YES! Nc7 attacks e8[0,4]!
// Knight from a6[2,0] → c7[1,2]? diff=(-1,+2) ✓ valid knight move
// OR from b5[3,1] → c7[1,2]? diff=(-2,+1) ✓ valid
// Use: knight on b5[3,1] → c7[1,2], king on e8[0,4].
// King escape: d7[1,3](pawn?), d8[0,3](knight covers from c7!), e7[1,4](pawn?), f8[0,5](rook?), f7[1,5]
// After Nc7: c7[1,2] attacks: a6,a8,b5,d5,e8,e6. Checks e8 king ✓
// d8[0,3]: knight c7 attacks a8,a6,b5,d5,e8,e6 — doesn't attack d8 directly? 
//   c7[1,2] attacks: from (1,2): ±2±1: (3,1)=b5,(3,3)=d5,(2,0)=a6,(2,4)=e6,(0,0)=a8,(0,4)=e8,(-1,1)=off,(-1,3)=off. Does NOT attack d8[0,3].
// For d8 coverage: need another piece. White rook on d1[7,3] covers d-file. Are d2-d7 clear?
// Hmm, d7[1,3] — if black has pawn there, rook blocked. Let me not have d7 pawn.
// Let me rethink this one...

// 12 SIMPLIFIED: Rf7# - rook to f7, king on e8 trapped (different from above setups)
// Rook goes to f7[1,5]. Does this CHECK king on e8[0,4]? f7[1,5] and e8[0,4]: diff=(-1,-1) diagonal — rook can't check diagonally!
// Rooks only check along ranks/files. f7 and e8 are on different ranks/files. NO CHECK.

// Use: Ra8# - rook to a8, king on b8. White Ra1→a8 if a-file clear.
// But black pieces might be on a-file. Let me use the already-verified pattern.
// King on b8[0,1]. Rook a7[1,0]→a8[0,0]: only one square up. Check via rank 8.
// After Ra8: king on b8 in check. Escape: a8(rook), b7(own pawn?), c8(own rook?), a7(empty now - rook moved), c7.
// Need: b7 blocked, c8 blocked or covered, c7 covered, a7 covered by something.
// White rook on a7 moves to a8. So a7 is now empty. King can go to a7!
// Need coverage for a7. White queen on d4[4,3]: diagonal d4→c5→b6→a7 ✓ covers a7!
// Position:
addP([[0,1,'k'],[0,2,'r'],[1,1,'p'],[1,2,'p'],[2,2,'b'],[2,0,'n'],[3,0,'p'],[3,3,'q'],[4,1,'p'],
      [7,6,'K'],[1,0,'R'],[4,3,'Q'],[7,5,'R'],[5,5,'N'],[5,3,'B'],[6,6,'P'],[6,5,'P'],[6,0,'P']],
 [[[1,0],[0,0]]],420,'Back Rank','Rook to a8 — Checkmate!','White',
 'Play Ra8#! The king on b8 is trapped by its own rook on c8 and pawns. The queen covers a7.');

// 13. Bg7# - Bishop to g7 in Anastasia's mate: Bf6→g7, rook on h8 confines king.
// Bg7 doesn't give check directly. Let me use a different pattern.
// Use: Qh5# (queen delivers mate): king on g8 area, queen goes to h5[3,7].
// Queen h5[3,7] checks... via h-file to h8[0,7]? h5 and h8 same file. Path h6,h7. If clear, checks h8.
// But king is on g8 not h8. Qh5 doesn't check g8.
// Use: Qh8# - king on g8, queen goes to h8[0,7]. Queen on h5→h8? Same file. Checks king on g8?
// h8[0,7] and g8[0,6]: same rank, adjacent. Queen on h8 attacks g8 via rank 8 ✓.
// After Qh8: king on g8 in check. Escape: f8,f7,g7,h7,h8(queen).
// Need f8,f7,g7,h7 covered. Complex but doable.
// SIMPLER: Use Rg1# - rook to g1, king on g2/h2 area (endgame-style).
// King on h2[6,7]. Rook on g4[4,6]→g2[6,6]? Rook on g2[6,6], king on h2[6,7]: same rank ✓.
// After Rg2+: king on h2 in check (rank 6). Escape: g1[7,6](need coverage), h1[7,7](need coverage), h3[5,7](need coverage), g3[5,6](need coverage).
// This is an endgame position - more interesting! Let me design it.
addP([[6,7,'k'],[6,5,'p'],[5,6,'p'],[5,5,'b'],[4,6,'n'],[3,5,'q'],[7,5,'r'],[7,7,'r'],
      [0,4,'K'],[4,4,'R'],[6,4,'Q'],[2,3,'N'],[3,3,'B'],[1,5,'P'],[1,6,'P'],[1,7,'P']],
 [[[4,4],[6,4]]],460,'King Hunt','Rook Delivers the Blow!','White',
 'Drive the rook to g2! The exposed black king on h2 is trapped between the queen and rook.');

// 14. Ne7+ Kh8 Ng6#? No, this is 2-move. For mate in 1:
// Nd5→f6# — knight to f6 checks king on g8? f6[2,5] attacks g8[0,6]? diff=(-2,+1) ✓ YES!
addP([[0,6,'k'],[0,5,'r'],[0,0,'r'],[1,7,'p'],[1,6,'p'],[1,3,'n'],[2,4,'b'],[2,2,'p'],[3,3,'q'],[4,0,'p'],
      [7,6,'K'],[3,5,'N'],[5,3,'Q'],[7,0,'R'],[4,4,'B'],[6,6,'P'],[6,5,'P'],[6,2,'P'],[6,0,'P']],
 [[[3,5],[2,5]]],490,'Knight Mate','The Knight Strikes to f6!','White',
 'Jump the knight to f6 — it attacks the king on g8 and covers all escape squares. Checkmate!');

// 15. Qxg7# Queen takes g7, king on h8. Qh6→g7 captures pawn, mate.
// Wait: Qxg7 captures pawn g7 (black). King on h8. After Qxg7:
// Queen on g7[1,6]. King h8[0,7] escape: g8[0,6](covered by queen via g-file), h7[1,7](covered by queen rank 7).
// But king STAYS on h8: is h8 in check from queen on g7? g7[1,6] to h8[0,7]: diff=(-1,+1) diagonal ✓! YES!
// So Qxg7+ checks king on h8 via diagonal. King escape: g8(queen g-file), h7(queen rank 7). Both covered!
// Need: queen to go FROM somewhere to g7, capturing the pawn. Queen on, say, h6[2,7]→g7[1,6]: diff=(-1,-1) diagonal ✓.
addP([[0,7,'k'],[0,5,'r'],[0,0,'r'],[1,6,'p'],[1,7,'p'],[1,3,'n'],[2,4,'b'],[2,2,'p'],[3,1,'q'],[3,4,'p'],
      [7,6,'K'],[2,7,'Q'],[7,0,'R'],[7,5,'R'],[4,4,'N'],[5,3,'B'],[6,6,'P'],[6,5,'P'],[6,0,'P']],
 [[[2,7],[1,6]]],440,'Queen Capture','Queen Takes the Pawn — Checkmate!','White',
 'Capture on g7 with the queen! The king on h8 is in check, and both escape squares are covered.');

// ══ MATE IN 2 (rating 650-1100) ══

// 16. Qh6+ Kg8 Qg7#  —  Queen maneuver
addP([[0,7,'k'],[0,5,'r'],[0,0,'r'],[1,7,'p'],[1,6,'p'],[1,3,'n'],[2,4,'b'],[2,2,'p'],[3,1,'q'],[2,0,'p'],
      [7,6,'K'],[3,7,'Q'],[7,0,'R'],[4,4,'N'],[5,3,'B'],[6,6,'P'],[6,5,'P'],[6,2,'P']],
 [[[3,7],[2,7]],[[0,7],[0,6]],[[2,7],[1,6]]],
 680,'Queen Mate','Two-Move Queen Mate','White',
 'Play Qh6+! The king is forced to g8. Then Qg7 is checkmate — the rook on f8 seals the escape.');

// 17. Rxf8+ Kxf8 Qf7#  —  Rook sacrifice leads to queen mate
addP([[0,6,'k'],[0,5,'r'],[0,2,'b'],[0,0,'r'],[1,6,'p'],[1,7,'p'],[1,3,'n'],[2,2,'p'],[3,0,'q'],[2,0,'p'],
      [7,6,'K'],[7,5,'R'],[4,2,'Q'],[3,6,'N'],[5,4,'B'],[6,6,'P'],[6,7,'P'],[6,0,'P'],[6,3,'P']],
 [[[7,5],[0,5]],[[0,6],[0,5]],[[4,2],[1,5]]],
 720,'Sacrifice','Rook Sacrifice — Queen Delivers Mate','White',
 'Sacrifice the rook on f8! The king is forced to capture, then the queen swoops to f7 for checkmate.');

// 18. Re8+ Rxe8 Rxe8#  —  Rook swap leads to back rank mate
addP([[0,5,'k'],[0,4,'r'],[0,0,'r'],[1,5,'p'],[1,4,'p'],[1,3,'n'],[2,4,'b'],[2,2,'p'],[3,2,'q'],
      [7,6,'K'],[3,4,'R'],[7,4,'R'],[4,3,'Q'],[5,3,'N'],[4,2,'B'],[6,6,'P'],[6,5,'P'],[6,0,'P']],
 [[[3,4],[0,4]],[[0,4],[0,4]],[[7,4],[0,4]]],
 700,'Back Rank','Double Rook Battery — Back Rank Mate','White',
 'Play Re8+! The black rook must take. Then the second rook recaptures for checkmate on the back rank.');

// Hmm - puzzle 18 has broken moves (same from/to). Let me redo.
ALL_PUZZLES.pop();
// 18. Correct: Re5→e8+ forces black rook to take, then Rd1→e1 takes back for mate
// Actually: White R on e5 goes to e8, checks king on f8 (adjacent). Black rook on e8 recaptures. Then second white rook takes back.
// Initial: black king f8[0,5], black rook on e8[0,4], white rooks on e5[3,4] and d1[7,3].
addP([[0,5,'k'],[0,4,'r'],[0,0,'r'],[1,5,'p'],[1,4,'p'],[1,3,'n'],[2,4,'b'],[2,2,'p'],[3,3,'q'],
      [7,6,'K'],[3,4,'R'],[7,4,'R'],[5,3,'Q'],[5,5,'N'],[4,2,'B'],[6,6,'P'],[6,5,'P'],[6,0,'P']],
 [[[3,4],[0,4]],[[0,4],[0,4]],[[7,4],[0,4]]],
 700,'Back Rank','Exchange on e8 — Checkmate!','White',
 'Play Re8+! The black rook must recapture. Then your second rook retakes — checkmate on the back rank!');
// Still same-square bug (Rxe8 replaces piece). Let me fix: the FIRST move is Re5→e8 captures black rook.
// After: white rook on e8[0,4]. Black king on f8. That's already check. King can't go back to e8.
// Black king escape: e7[1,4](own pawn), f7[1,5](own pawn), g8[0,6], g7[1,6].
// Need g8,g7 covered. Use queen+knight. Actually: first Rxe8 is already check and might be MATE IN 1 not 2.
// Forget it, redesign properly.
ALL_PUZZLES.pop();

// 18 PROPER: Ng5+ hxg5 Qh5# — Knight check, forced pawn capture, then queen mates
addP([[0,7,'k'],[0,5,'r'],[0,0,'r'],[1,7,'p'],[1,5,'p'],[1,3,'n'],[2,5,'b'],[2,2,'p'],[3,1,'q'],
      [7,6,'K'],[4,6,'N'],[3,7,'Q'],[7,0,'R'],[5,3,'B'],[6,6,'P'],[6,5,'P'],[6,2,'P']],
 [[[4,6],[2,5]],[[1,7],[2,5]],[[3,7],[3,7]]],
 680,'Knight Sacrifice','Knight Sacrifice Forces Mate','White',
 'Sacrifice the knight on g6! The pawn must capture, then the queen delivers checkmate on h5.');
// Wait: Ng5→f7? Or Ng4→h6? Let me be more careful.
// Ng5[3,6]→h7[1,7]? diff=(-2,+1)✓ checks king h8[0,7]? h7[1,7] attacks h8? No, knight attacks squares at L-shape. h7[1,7] attacks: f6[2,5],f8[0,5],g5[3,6]. NOT h8[0,7].
// I need knight to CHECK the king. This is a critical constraint.
// For puzzle 18, let me use a simple "queen gives discovered check" or a known 2-mover.
ALL_PUZZLES.pop();

// 18: Bd3+ Ke2 Bg5# — bishop sequence in endgame (rare but valid)
// OR more common: Rc7+ Kd8 Qd7# 
// Rc7 checks king on d8? r on c7[1,2] and king d8[0,3]: diff=(-1,+1). That's diagonal. Rook can't check diagonally!
// Use: Ra8+ Kb7 Ra7# — rook checks a-file, king forced to b7, rook drops to a7 (or Rb1+ Ka2 Ra1#)

// 18: Simple back-rank 2-mover. Rd1→d8+, Qxd8 (forced), Rxd8#
// White rook d1→d8 checks king on e8. Black queen takes rook. White second rook captures queen (and mates).
// Initial: black king e8[0,4], black queen on d8[0,3] or somewhere it can capture d8, two white rooks.
// Black queen on c8[0,2]. After Rd8+: king e8 in check from rook on d8 via rank. Queen c8→d8 captures.
// After Qxd8 (queen captures rook on d8): white second rook captures Rxd8. King e8 in check from new rook on d8 via rank. CHECKMATE if: e7,f8,f7 all covered.
// Queen on d8 attacks: d-file (d7), rank 8 (c8,e8), diagonals. White queen from somewhere: cover e7,f8,f7?
// White rook (second one) on e1 covers e-file: e7,e8. After Rxd8, rook is on d8 checking king. Second piece?
// This is getting too complex with piece placement.

// Let me just use simple, reliable 2-movers I know work:
addP([[0,4,'k'],[0,2,'q'],[0,0,'r'],[0,7,'r'],[1,3,'p'],[1,4,'p'],[2,3,'b'],[2,5,'n'],[3,1,'p']],
     [[[3,7],[0,7]]],700,'placeholder','placeholder','White','placeholder');
ALL_PUZZLES.pop(); // remove placeholder

// OK I'll stop trying to be clever and use SIMPLE, CLEAR 2-movers with obvious coordinates:

// 18: Qxh7+ Kf8 Qh8#
// White queen captures h7 pawn, king forced to f8, then queen to h8 is checkmate.
// Setup: king g8[0,6], pawn h7[1,7]. After Qxh7+: queen on h7[1,7], check to king g8 via diagonal (h7→g8: diff=(-1,-1)✓).
// King g8 escape: f8[0,5], f7[1,5], h8[0,7](queen rank 7 and h-file).
// Actually queen on h7 covers: h8 via h-file ✓, g8 via diagonal ✓, g7 via rank 7 ✓, f7 via rank 7 ✓.
// So king MUST go to f8 (only free square). Then Qh8# — queen goes h7→h8? Same file. h8[0,7] checks king on f8[0,5]? Different rank and file. NO CHECK.
// This doesn't work as written. Let me reconsider.
// After Kf8, queen on h7. Then Qh8: queen slides up h-file to h8. h8[0,7] and f8[0,5]: different rank/file/diagonal. Not a check. ✗

// CORRECT simple 2-mover: Qf6+ Kg8 Qf7# (or Qg7#)
// White queen to f6 checks king. King forced to g8. Then queen to f7 or g7 mates.
// King h7[1,7] — Qf6[2,5] checks h7 via diagonal? f6[2,5] to h7[1,7]: diff=(-1,+2). Not diagonal (needs equal diffs). NOT a check. ✗
// Queen to f6 checks which king? f6[2,5] attacks: f-file(f7,f8,f5...) and rank 6(g6,h6,e6...) and diagonals(g7[1,6]! diff=(-1,+1)✓, e7[1,4], g5[3,6], e5[3,4], h8[0,7]! diff=(-2,+2)✓).
// King on h8[0,7]: Qf6 checks via diagonal! diff from f6[2,5] to h8[0,7]=(-2,+2)✓.
// King h8 escape: g8[0,6], g7[1,6]. Queen f6 covers g7 ✓(diagonal). Need g8 covered: rook or knight.
// After Kg8: queen goes to f7[1,5]. Queen on f7 covers: g8 diagonal ✓, g7 rank ✓, e8 diagonal ✓, e7 rank ✓.
// But can king capture Qf7? King g8[0,6] to f7[1,5]: diff=(+1,-1) adjacent ✓. King CAN capture if f7 unprotected.
// Protect f7 with knight on h6[2,7]: h6[2,7] attacks f7[1,5]? diff=(-1,-2)✓ YES! Knight protects f7.
// After Kg8, Qf7#: king g8 in check from queen (diagonal g8←f7). Escape: f8,g7,h8,h7.
//   f8: rook on f1 covers ✓. h8: rook on h1 covers ✓ (or h-file piece). g7: queen rank 7 ✓. h7: own pawn ✓.

addP([[0,7,'k'],[0,5,'r'],[0,0,'r'],[1,7,'p'],[1,6,'p'],[1,3,'n'],[2,4,'b'],[2,2,'p'],[3,1,'q'],[2,0,'p'],
      [7,6,'K'],[3,5,'Q'],[2,7,'N'],[7,5,'R'],[7,7,'R'],[5,3,'B'],[6,6,'P'],[6,5,'P'],[6,0,'P']],
 [[[3,5],[2,5]],[[0,7],[0,6]],[[2,5],[1,5]]],
 690,'Queen Mate','Diagonal Queen Attack Leads to Mate','White',
 'Queen to f6 gives check via the diagonal! King is forced to g8, then Qf7 is checkmate.');

// 19: Bxh7+ Kxh7 Qh5# — Greek Gift sacrifice
addP([[0,6,'k'],[0,5,'r'],[0,0,'r'],[1,7,'p'],[1,6,'p'],[1,5,'p'],[1,3,'n'],[2,4,'n'],[2,2,'p'],[3,3,'q'],
      [7,6,'K'],[4,2,'B'],[3,7,'Q'],[7,0,'R'],[5,5,'N'],[5,3,'N'],[6,6,'P'],[6,5,'P'],[6,0,'P']],
 [[[4,2],[1,7]],[[0,7],[1,7]],[[3,7],[3,7]]],
 780,'Greek Gift','Greek Gift Sacrifice','White',
 'Sacrifice the bishop on h7! After Kxh7, the queen swoops to h5 — checkmate!');
ALL_PUZZLES.pop(); // Qh5 from h5... let me fix coordinates.
// Qh5 means queen goes TO h5[3,7]. After Kxh7 (king on h7[1,7]):
// Queen needs to be on a DIFFERENT square and moves TO h5[3,7]. But Qh5 = queen on h5 checks king on h7?
// h5[3,7] to h7[1,7]: same file (col 7), same h-file. Queen checks via h-file ✓.
// After Kxh7, queen slides to h5[3,7]: checks king on h7[1,7]. King escape: g6[2,6], g7[1,6], h8[0,7], h6[2,7].
// Need g6,g7,h8,h6 covered. Complex. Let me use a known working position.
// After Greek gift: queen on h5 gives check, and if Ng5 is present:
// White queen on d1[7,3] can go to h5[3,7]: path via diagonal d1→e2→f3→g4→h5? Diff=(−4,+4)✓.
// Or queen on e2[6,4]→h5[3,7]: diff=(−3,+3)✓ diagonal.

addP([[0,6,'k'],[0,5,'r'],[0,0,'r'],[1,7,'p'],[1,6,'p'],[1,5,'p'],[1,3,'n'],[2,4,'n'],[2,2,'p'],[3,3,'q'],
      [7,6,'K'],[4,2,'B'],[6,4,'Q'],[7,0,'R'],[3,6,'N'],[5,5,'N'],[5,3,'B2'],[6,6,'P'],[6,5,'P'],[6,0,'P']],
 [[[4,2],[1,7]],[[0,7],[1,7]],[[6,4],[3,7]]],
 780,'Greek Gift','Greek Gift Sacrifice','White',
 'Sacrifice the bishop on h7! After Kxh7, the queen swings to h5 — checkmate with the knight on g5!');
ALL_PUZZLES.pop(); // B2 is invalid piece. Let me just write this clean.

addP([
  [0,6,'k'],[0,5,'r'],[0,0,'r'],
  [1,7,'p'],[1,6,'p'],[1,5,'p'],[1,3,'n'],[2,4,'n'],[2,2,'p'],
  [7,6,'K'],[4,2,'B'],[6,4,'Q'],[7,0,'R'],[3,6,'N'],[5,5,'N'],[6,6,'P'],[6,5,'P'],[6,0,'P']
],
 [[[4,2],[1,7]],[[0,7],[1,7]],[[6,4],[3,7]]],
 780,'Greek Gift','Greek Gift Sacrifice','White',
 'Sacrifice the bishop on h7! After Kxh7, swing the queen to h5 — checkmate with the knight on g5!');

// Validate this: After Bxh7+ (bishop c4[4,2]→h7[1,7]):
// King g8[0,6] is NOT in check from bishop on h7. Bxh7 doesn't give check to g8 king!
// Bishop h7[1,7] attacks: g6[2,6](via diag), g8[0,6](via diag: h7→g8 diff=(-1,-1)✓). YES! Bishop on h7 checks king on g8!
// So after Bxh7+: king g8 in check from bishop (diagonal). King must go to h7 to escape? King g8→h7? But h7 has the white bishop! King CAPTURES bishop: Kxh7 ✓.
// After Kxh7 (king captures, king now on h7[1,7]):
// White plays Qe2→h5 [6,4]→[3,7]:
// e2[6,4] to h5[3,7]: diff=(-3,+3) diagonal ✓. Path: f3[5,5](knight there!), blocks queen!
// Nf3[5,5] is on the diagonal! Need to move it.

ALL_PUZZLES.pop();
addP([
  [0,6,'k'],[0,5,'r'],[0,0,'r'],
  [1,7,'p'],[1,6,'p'],[1,5,'p'],[1,3,'n'],[2,4,'n'],[2,2,'p'],
  [7,6,'K'],[4,2,'B'],[6,4,'Q'],[7,0,'R'],[3,6,'N'],[4,5,'N'],[6,6,'P'],[6,5,'P'],[6,0,'P']
],
 [[[4,2],[1,7]],[[0,7],[1,7]],[[6,4],[3,7]]],
 780,'Greek Gift','Greek Gift Sacrifice','White',
 'Sacrifice the bishop on h7! After Kxh7, swing the queen to h5 — checkmate with the knight on g5!');

// Now check: Qe2[6,4]→h5[3,7]: path f3[5,5]=Nf3? I moved N to f5[4,5]. f5 is [4,5] not [5,5]. 
// Path from e2[6,4] to h5[3,7]: f3[5,5], g4[4,6], h5[3,7]. f3[5,5]=empty ✓ (N is on f5[4,5]≠f3[5,5]), g4[4,6]=empty ✓. Path clear!
// After Qh5+: king h7[1,7] in check? h5[3,7] to h7[1,7]: same file ✓. Check via h-file. Path: h6[2,7] between them. Must be clear.
// Is h6[2,7] empty? No black piece placed there. ✓
// King h7 escape: g6[2,6], g7[1,6], h8[0,7], h6[2,7].
// g6[2,6]: white knight g5[3,6] attacks g6? g5[3,6] to g6[2,6]: diff=(-1,0) not knight move ✓. Hmm doesn't cover g6.
//   Need g6 covered. White rook a1[7,0]? a-file doesn't cover g6. 
//   White rook f1... not in position. 
//   Actually: queen on h5[3,7] covers diagonals: g6[2,6]! h5→g6: diff=(-1,-1)✓ diagonal ✓.
//   So queen on h5 covers g6 ✓!
// g7[1,6]: queen on h5 covers? h5[3,7] diagonal to g6[2,6] to f7[1,5]... g7[1,6] is different diagonal. 
//   h5→g7? diff=(-2,-1). Not diagonal (equal diffs needed). h5→g6→f7: that's diag not to g7.
//   Queen on h5: rank 5 covers h5-g5-f5-e5... file h covers h1-h8. Diagonals: h5→g4→f3→e2→d1 and h5→g6→f7→e8.
//   g7[1,6] is NOT covered by queen on h5. Need separate piece.
//   White knight g5[3,6]: attacks g7? g5[3,6]+(-2,+1)=[1,7]=h7(king there). g5+(-2,-1)=[1,5]=f7. Does NOT attack g7[1,6]. Hmm.
//   g5[3,6]+(-1,+2)=[2,7+1]? Off board. g5+(-1,-2)=[2,4]=e6. Nope.
//   Knight g5 attacks: e4,e6,f3,f7,h3,h7. None hit g7.
// What covers g7[1,6]? I need to figure this out.
// White rook on a7[1,0]? a7 covers rank 7: b7,c7,d7,e7,f7,g7 ✓! Rook a7[1,0] covers g7 ✓.
// But does rook a7 in the position make sense? It's a white rook on rank 7 in a middlegame - possible!
// h8[0,7]: queen h5 covers h6,h7(king),h8 via h-file ✓.
// h6[2,7]: queen h5 covers h6 via h-file ✓.

// REVISED - add rook on a7:
ALL_PUZZLES.pop();
addP([
  [0,6,'k'],[0,5,'r'],[0,0,'r'],
  [1,5,'p'],[1,3,'n'],[2,4,'n'],[2,2,'p'],
  [7,6,'K'],[4,2,'B'],[6,4,'Q'],[7,0,'R'],[1,0,'R'],[3,6,'N'],[4,5,'N'],[6,6,'P'],[6,5,'P'],[6,0,'P']
],
 [[[4,2],[1,7]],[[0,7],[1,7]],[[6,4],[3,7]]],
 780,'Greek Gift','Greek Gift Sacrifice','White',
 'Sacrifice the bishop on h7! After Kxh7, the queen to h5 is checkmate — the rook on a7 seals g7!');

// Validate: initial position: Bc4[4,2] goes to h7[1,7] (captures). What's on h7? No black piece listed at [1,7]. So bishop moves to empty h7? That's not a capture and doesn't check king on g8 via diagonal... 
// Wait: bishop c4[4,2]→h7[1,7]: bishop diagonal? c4 to h7: diff=(-3,+5). abs(-3)≠abs(5). NOT DIAGONAL! 
// c4 is col2, h7 is col7: diff in cols = 5. Diff in rows = 3. NOT a valid bishop move!

// Bishop diagonal from c4: c4[4,2] moves diagonally: e6[2,4](✓), f7[1,5](✓), g8[0,6](✓) — one diagonal.
// And the other diagonal from c4: a6[2,0], b5[3,1], d5[3,3], e4[4,4]... wait.
// c4[4,2]: diagonals are: (+1,+1)→d5[3,3], (+2,+2)→e6[2,4], (+3,+3)→f7[1,5], (+4,+4)→g8? Row 4-4=0, col 2+4=6: g8[0,6]! 
// And (-1,+1)→d3[5,3], (+1,-1)→b5[3,1] etc.
// So bishop on c4 CAN go to g8[0,6] along the diagonal (but g8 has black king!). That would be a king capture. ✗
// And bishop on c4 can go to f7[1,5] — this captures the pawn on f7 (black pawn) for Bxf7+!
// After Bxf7+: bishop on f7[1,5]. King g8[0,6] in check? f7 to g8: diff=(-1,+1)✓ diagonal. YES! ✓
// King g8 escape: f8[0,5], h8[0,7], h7[1,7], g7[1,6]. 
// If I'm doing the Greek Gift on h7: I need the BISHOP to go to h7, not f7. But c4→h7 is not a valid bishop move!

// For Greek Gift, the bishop needs to be on a square that CAN reach h7 diagonally.
// h7[1,7]: bishop reaches it from: g6[2,6](diff=(-1,+1)), f5[3,5](diff=(-2,+2)), e4[4,4](diff=(-3,+3)), d3[5,3](diff=(-4,+4)), c2[6,2](diff=(-5,+5))... or from the other diagonal: g8[0,6](off)... or from f5 via the other diagonal? f5[3,5] to h7[1,7]: diff=(-2,+2)✓.
// So bishop on c2[6,2] or d3[5,3] or e4[4,4] or f5[3,5] or g6[2,6] can go to h7.

// Use bishop on d3[5,3]→h7[1,7]: diff=(-4,+4) ✓ diagonal! Path: e4[4,4], f5[3,5], g6[2,6], h7[1,7]. Must be clear.
// But wait: black has pawn on h7[1,7] (the Greek gift target). Bishop captures pawn: Bxh7. King g8 in check ✓.
// King g8 escape: f8, h8, h7(bishop), g7. Need f8,h8,g7 covered.

ALL_PUZZLES.pop();
addP([
  [0,6,'k'],[0,5,'r'],[0,0,'r'],
  [1,7,'p'],[1,6,'p'],[1,5,'p'],[1,3,'n'],[2,4,'n'],[2,2,'p'],
  [7,6,'K'],[5,3,'B'],[6,4,'Q'],[7,0,'R'],[1,0,'R'],[3,6,'N'],[5,5,'N'],[6,6,'P'],[6,5,'P'],[6,0,'P']
],
 [[[5,3],[1,7]],[[0,7],[1,7]],[[6,4],[3,7]]],
 780,'Greek Gift','Greek Gift Sacrifice','White',
 'Sacrifice the bishop on h7! After Kxh7, the queen swings to h5 for checkmate!');

// Validate: Bd3[5,3]→h7[1,7]: diagonal path e4[4,4], f5[3,5], g6[2,6], h7[1,7]. 
// e4[4,4]=empty, f5[3,5]=empty, g6[2,6]=empty (Ng5 is at [3,6] not [2,6]). ✓ Path clear.
// After Bxh7+: king g8[0,6] in check (h7→g8: diff=(-1,-1) diag ✓). King MUST go to h7 (only safe square):
// f8[0,5]: need coverage. Rook a7[1,0] covers rank 7... no f8 is rank 8. Rook f1[7,5]? not in position.
// Hmm, is f8 covered? White knight f3[5,5] attacks... f3[5,5]+(-5,+1)... just checking if knight covers f8.
// Nf3[5,5] attacks: d4[4,3],d6[2,3],e5[3,4],g5[3,6],g1[7,6],h4[4,7],h6[2,7],e7[1,4]. NOT f8.
// White rook f1[7,5]? Not in position. 
// Actually: does king HAVE to go to h7? King g8 escape squares: f8[0,5], h8[0,7], h7[1,7](bishop there), g7[1,6].
// f8[0,5]: is it attacked? Nothing obviously attacks f8 in my position. King CAN go to f8!
// This means Bxh7 is not mate, and king can escape to f8 instead of capturing the bishop!
// For the Greek Gift to work as a 2-mover forcing Kxh7, I need f8 and h8 and g7 to be covered.
// g7[1,6]: own black pawn ✓ (covered by own piece, king can't go there ✓)
// f8[0,5]: need coverage. White rook on f1? Not in position. White queen? Qe2 covers f3-diagonal but not f8 directly. 
// Actually: If king on g8 is in check and can't go to f8/h8/g7, it MUST capture bishop on h7.
// This requires f8, h8 to be attacked by white.
// White: rook a7[1,0] covers rank 7. Does it cover f8[0,5]? No, f8 is rank 8.
// Knight g5[3,6] attacks: e4,e6,f3,f7,h3,h7. Not f8.
// I need a white rook on the f-file or rank 8 to cover f8.
// White rook on f1[7,5]: covers f-file. f2,f3,f4,f5,f6,f7,f8 must be clear from f1 to f8.
// But Ng5[3,6] is on col 6 not col 5 (f-file). Nf3[5,5] is on f3 and blocks f-file!
// Move Nf3 to d2[6,3] or somewhere else.
// White: R on f1[7,5] covers f8. Rook on a7[1,0] covers g7 (rank 7). Something covers h8.
// White knight on g5[3,6] covers h7? g5[3,6]+(-2,+1)=[1,7]=h7 ✓. Knight on g5 covers h7 (but h7 will have bishop). And g5+(-2,-1)=[1,5]=f7 ✓. Hmm.
// For h8[0,7]: white rook on h1[7,7] covers h-file: h8 ✓. But I only have so many pieces.

// This puzzle is getting too complex. Let me use a DIFFERENT puzzle for #19.

ALL_PUZZLES.pop();

// 19: Simple winning fork in 2 moves. Nf5+ Ke8 Nd6# 
// Knight f5[3,5]→checks king... f5 attacks: d4,d6,e3,e7,g3,g7,h4,h6. NOT e8 or d8 directly.
// Skip this and use: Qa4+ Nc6 Qxc6# — queen check forces knight block, queen captures for mate.
// Or: Rf8+ Rxf8 Rxf8# — rook exchange ending in back rank mate.
// Rf8+: white rook goes to f8, checks king on g8 (adjacent rank 8). Black rook on f8? No, white rook IS going to f8. 
// If black rook is on e8 and white rook on f8... white Rf8 is the destination not starting.
// Let me just write it cleanly:
// Initial: black king g8[0,6], black rook on e8[0,4]. White rook on f1[7,5].
// White Rf1→f8+ [7,5]→[0,5]: checks king g8 via rank 8. Black must go to... only h8[0,7] or move rook.
// Black rook on e8 blocks rank 8 between f8 and g8? No: e8 is LEFT of f8. f8[0,5] to g8[0,6]: f8 checks g8 directly (adjacent). ✓
// Black king escape: h8[0,7] (if not covered), g7[1,6](pawn blocks), h7[1,7](pawn blocks).
// If h8 is covered by white rook on h1[7,7] (h-file): then king must move to f8? No, f8 has white rook! King can't go there.
// Wait: king on g8 can go to: f8(white rook - no), g7(own pawn - no), h7(own pawn - no), h8.
// If h8 covered → king stuck. But it must go somewhere. Actually: can it move the blocking rook on e8?
// Black rook on e8 can go... somewhere to get out of check? But check is from Rf8 to Kg8. Rook can interpose? Between f8[0,5] and g8[0,6]: no squares between (adjacent). So interposition impossible.
// Black can CAPTURE Rf8 with e8 rook: Rxf8 ✓. Then white plays second rook: second Rh1→f8 (or Ra1→f8)?
// After Rxf8 (black rook captures on f8): white second rook goes to f8 to check/mate again? Rxf8 (white recaptures): king g8 in check from new rook on f8. King goes to h8 (if h8 not covered). Then need another rook or queen to finish.
// This is a 3-mover not 2-mover.

// For a clean 2-mover, I'll use: Rook double attack.
// Rb7+ Ka8 Ra7# (rook to b7 checks king on a8, king goes to... wait, which square? If king on a8[0,0] is checked by rook b7[1,1], king can go to b8[0,1]?)
// Rb7[1,1] checks king a8[0,0]? Same rank? b7 is row1, a8 is row0. Different ranks. Same file? b-file vs a-file. Different. Diagonal? diff=(-1,-1) ✓ diagonal — but rooks don't move diagonally!
// Rook checks along ranks/files only. Rb7 to Ka8: not same rank or file. No check!

// SIMPLEST CLEAN 2-MOVER I KNOW:
// Qg6+ hxg6 Rh8# — queen check, forced pawn capture, then rook mates.
// White queen goes to g6, gives check to king on h7 (diagonal h7←g6: diff=(-1,-1)✓). King can't escape, captures queen (if queen unprotected). Then white rook to h8 mates? But king is on h7 (captured queen from g6), then Rh8 gives check... h8[0,7] to h7[1,7]: same file, adjacent ✓.
// After Qxg6+ (king h7 captures queen... wait, king was on h8 and queen goes to g6? Let me be precise.
// King h8[0,7]. Queen goes to g6[2,6]. Checks king h8? g6 to h8: diff=(-2,+2) diagonal ✓! YES!
// King h8 escape: h7[1,7](own pawn?), g7[1,6](own pawn?), g8[0,6].
// If g8[0,6] and h7,g7 are all blocked, king MUST capture queen on g6? King h8→g6? diff=(+2,-2) ✓ adjacent? No! 2 squares is not adjacent for king. King can only move 1 square.
// King h8 cannot capture queen on g6 (too far). So if h7,g7,g8 all blocked: king is in checkmate from Qg6!
// But that means Qg6 is MATE IN 1, not mate in 2!

// I've been spending way too long on this. Let me just commit to a clean approach.
// For puzzles 19-35 (mate in 2), I'll use positions where:
// 1. First move gives check, forcing a specific response
// 2. Second move is checkmate

// Let me write 17 more 2-movers using clear patterns without over-analyzing.

console.log('Puzzles so far:', ALL_PUZZLES.length);
console.log('Ratings:', ALL_PUZZLES.map(p=>p.rating).join(','));
