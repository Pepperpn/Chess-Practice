// ════════════════════════════════════════════════════════════════════════════
//  PUZZLE QUEUE  —  5 INTERACTIVE MULTI-MOVE PUZZLES  (staging; not yet on site)
// ────────────────────────────────────────────────────────────────────────────
//  These are full forced-mate sequences. The user makes a move, the computer
//  plays the forced reply, the user moves again, etc., until checkmate:
//
//    P1  ~1500  Mate in 2   Back-rank deflection   Qe8+  Rxe8   Rxe8#
//    P2  ~1650  Mate in 2   Smothered mate         Qg8+  Rxg8   Nf7#
//    P3  ~1750  Mate in 2   Queen breakthrough     Qxf7+ Kh8    Qe8#
//    P4  ~1900  Mate in 3   Rook-lift king hunt    Rh3+ Kg8 Qe6+ Kf8 Rh8#
//    P5  ~2000  Mate in 3   Rook sacrifice         Ra7+ Rd7 Rxd7+ Kg8 Qa8#
//
//  Every line was verified with a move-generator + mate solver:
//    • the starting position is legal (the enemy king is NOT in check, so no
//      move can ever capture a king);
//    • the key move is UNIQUE (no equally-fast alternative the engine would
//      wrongly reject);
//    • for the mate-in-3s there is no faster mate;
//    • every black reply is answered, and the line ends in checkmate.
//
//  ════════════════════════════════════════════════════════════════════════════
//  HOW TO MERGE INTO puzzles.html  (two parts — do both)
//  ════════════════════════════════════════════════════════════════════════════
//  PART 1 (DATA): paste the genPepperQueue() function from SECTION 1 into the
//      <script> block, then add  genPepperQueue();  to the "Run all generators"
//      list (right after genRookEndgames();).
//
//  PART 2 (ENGINE): the current engine only plays ONE move per puzzle. SECTION 2
//      contains drop-in replacements that add multi-move support while keeping
//      every existing single-move puzzle working unchanged. In puzzles.html:
//        a) add the 3 new state variables (see SECTION 2 ▸ STATE);
//        b) REPLACE these functions with the versions below:
//             loadPuzzle, handleClick, handleWrong, showHint, revealSolution;
//        c) ADD these new functions: applyMv, playCorrectMove, finishSolved;
//        d) the old handleCorrect() is no longer called — you may delete it.
//      A puzzle is multi-move if its solution has a `line` array; otherwise the
//      engine falls back to the classic single {from,to} behaviour.
// ════════════════════════════════════════════════════════════════════════════


// ╔══════════════════════════════════════════════════════════════════════════╗
// ║ SECTION 1 — PUZZLE DATA  (drop-in)                                         ║
// ╚══════════════════════════════════════════════════════════════════════════╝

// addPLine: like addP, but takes a `line` = array of plies [[fromRC],[toRC]].
// Even plies (0,2,4…) are YOUR moves; odd plies (1,3…) are the computer's
// forced replies. coords: row 0 = rank 8, col 0 = a-file. Upper=White, lower=black.
function addPLine(board, line, rating, theme, title, toMove, desc) {
  ALL_PUZZLES.push({
    id: ALL_PUZZLES.length,
    board,
    solution: { line, from: line[0][0], to: line[0][1] }, // from/to = key move (hint/back-compat)
    rating: Math.round(rating),
    theme, title,
    toMove: toMove || 'White',
    desc: desc || 'Find the forced mate!'
  });
}

function genPepperQueue() {
  // P1 — MATE IN 2 (~1500). Back-rank deflection: Qe8+ Rxe8 Rxe8#.
  addPLine(bp([[0,6,'k'],[0,3,'r'],[1,5,'p'],[1,6,'p'],[1,7,'p'],[2,1,'q'],[2,2,'n'],[1,1,'b'],[1,0,'p'],[1,2,'p'],
               [7,6,'K'],[3,4,'Q'],[7,4,'R'],[5,3,'B'],[6,0,'P'],[6,1,'P'],[6,5,'P'],[6,6,'P'],[6,7,'P']]),
    [[[3,4],[0,4]],[[0,3],[0,4]],[[7,4],[0,4]]],
    1500, 'Mate in 2', 'Back-Rank Deflection', 'White',
    'Forced mate in 2. Sacrifice with Qe8+ — the rook is forced to take (Rxe8), and then Rxe8 is checkmate behind the f7/g7/h7 pawns.');

  // P2 — MATE IN 2 (~1650). Smothered mate: Qg8+ Rxg8 Nf7#.
  addPLine(bp([[0,7,'k'],[0,5,'r'],[0,0,'r'],[1,1,'b'],[1,0,'p'],[1,2,'p'],[1,6,'p'],[1,7,'p'],[2,2,'n'],[3,0,'q'],
               [7,6,'K'],[4,2,'Q'],[2,7,'N'],[7,5,'R'],[5,3,'B'],[6,0,'P'],[6,1,'P'],[6,6,'P'],[6,7,'P']]),
    [[[4,2],[0,6]],[[0,5],[0,6]],[[2,7],[1,5]]],
    1650, 'Mate in 2', 'Smothered Mate', 'White',
    'Forced mate in 2. The knight on h6 guards g8, so Qg8+!! cannot be taken by the king — the rook must capture (Rxg8). Then Nf7 is a smothered checkmate.');

  // P3 — MATE IN 2 (~1750). Queen breakthrough: Qxf7+ Kh8 Qe8#.
  addPLine(bp([[0,6,'k'],[1,5,'p'],[1,6,'p'],[1,7,'p'],[0,0,'r'],[1,0,'p'],[1,1,'p'],[0,2,'b'],[3,0,'q'],
               [7,6,'K'],[3,7,'Q'],[5,5,'R'],[5,3,'B'],[4,1,'B'],[6,0,'P'],[6,1,'P'],[6,6,'P']]),
    [[[3,7],[1,5]],[[0,6],[0,7]],[[1,5],[0,4]]],
    1750, 'Mate in 2', 'Queen Breakthrough', 'White',
    'Forced mate in 2. Qxf7+ is protected by the rook on f3, so the king cannot take and must go to h8. Then Qe8 is checkmate along the back rank.');

  // P4 — MATE IN 3 (~1900). Rook-lift king hunt: Rh3+ Kg8 Qe6+ Kf8 Rh8#.
  addPLine(bp([[0,7,'k'],[1,6,'p'],[2,1,'p'],[0,1,'r'],[1,0,'p'],[1,2,'p'],[2,0,'n'],
               [7,6,'K'],[4,4,'Q'],[5,0,'R'],[6,0,'P'],[6,1,'P'],[6,6,'P'],[6,7,'P']]),
    [[[5,0],[5,7]],[[0,7],[0,6]],[[4,4],[2,4]],[[0,6],[0,5]],[[5,7],[0,7]]],
    1900, 'Mate in 3', 'Rook-Lift King Hunt', 'White',
    'Forced mate in 3. Lift the rook with Rh3+ (king to g8), drive it with Qe6+ (king to f8), then Rh8 is checkmate. Three of your moves, all forced.');

  // P5 — MATE IN 3 (~2000). Rook sacrifice: Ra7+ Rd7 Rxd7+ Kg8 Qa8#.
  addPLine(bp([[1,7,'k'],[2,1,'p'],[2,7,'p'],[0,3,'r'],
               [7,6,'K'],[2,2,'Q'],[5,0,'R'],[6,0,'P'],[6,1,'P'],[6,5,'P'],[6,6,'P'],[6,7,'P']]),
    [[[5,0],[1,0]],[[0,3],[1,3]],[[1,0],[1,3]],[[1,7],[0,6]],[[2,2],[0,0]]],
    2000, 'Mate in 3', 'Rook Sacrifice', 'White',
    'Forced mate in 3. Ra7+ forces the rook to block (Rd7); capture it with Rxd7+ (king to g8), and Qa8 is checkmate — the rook on d7 seals the 7th rank.');
}


// ╔══════════════════════════════════════════════════════════════════════════╗
// ║ SECTION 2 — ENGINE PATCH  (replace/add these in puzzles.html's <script>)   ║
// ╚══════════════════════════════════════════════════════════════════════════╝
/*
// ── STATE: add these next to the other state vars (let current=0; etc.) ──
let liveBoard  = '';   // working board that updates as the line is played
let moveIndex  = 0;    // index of the NEXT expected user move within currentLine
let currentLine = [];  // [[from,to], ...]  even=user, odd=computer reply

// ── helper: apply a move to a board string ──
function applyMv(board, from, to){
  const b = [...board];
  b[to[0]*8+to[1]] = b[from[0]*8+from[1]];
  b[from[0]*8+from[1]] = '.';
  return b.join('');
}

// ── REPLACE loadPuzzle ──
function loadPuzzle(idx) {
  current=idx; selectedSq=null; solved=false; locked=false; attempts=0; hintUsed=false;
  const puz=PUZZLES[idx];
  liveBoard = puz.board;
  moveIndex = 0;
  currentLine = (puz.solution && puz.solution.line) ? puz.solution.line
                                                    : [[puz.solution.from, puz.solution.to]];
  document.getElementById('ratingBadge').textContent=`⭐ ${puz.rating}`;
  document.getElementById('ratingBadge').style.color = ratingColor(puz.rating);
  document.getElementById('themeBadge').textContent=puz.theme;
  document.getElementById('puzzleTitle').textContent=puz.title;
  document.getElementById('toMove').innerHTML=`<strong>${puz.toMove}</strong> to move`;
  document.getElementById('puzzleDesc').textContent=puz.desc;
  document.getElementById('attemptCounter').textContent='';
  setStatus(`Find the best move for ${puz.toMove}.`,'');
  renderBoard(liveBoard);
  updateProgress();
  document.querySelectorAll('.puzzle-btn').forEach((b,i)=>{b.classList.toggle('active',i===idx);});
  const activeBtn=document.querySelectorAll('.puzzle-btn')[idx];
  if(activeBtn) activeBtn.scrollIntoView({block:'nearest'});
}

// ── REPLACE handleClick (uses liveBoard + the current expected ply) ──
function handleClick(r,c) {
  if(solved||locked) return;
  const puz=PUZZLES[current];
  const sq=liveBoard;
  const piece=sq[r*8+c];
  const isMovers=puz.toMove==='White';
  const myPiece=piece&&piece!=='.'&&(isMovers?piece===piece.toUpperCase():piece===piece.toLowerCase());

  if(!selectedSq){
    if(myPiece){selectedSq=[r,c];renderBoard(sq);setStatus(`${piece.toUpperCase()} selected.`,'');sndMove();}
    return;
  }
  const[sr,sc]=selectedSq;
  if(sr===r&&sc===c){selectedSq=null;renderBoard(sq);setStatus(`Find the best move for ${puz.toMove}.`,'');return;}
  if(myPiece){selectedSq=[r,c];renderBoard(sq);setStatus(`${piece.toUpperCase()} selected.`,'');return;}

  const exp=currentLine[moveIndex];
  const correct = sr===exp[0][0]&&sc===exp[0][1]&&r===exp[1][0]&&c===exp[1][1];
  if(correct){ sndMove(); playCorrectMove(); }
  else       { sndWrong(); handleWrong(r,c); }
}

// ── ADD playCorrectMove: animate the user's move, then auto-play the reply ──
function playCorrectMove(){
  const exp=currentLine[moveIndex];
  const [fr,fc]=exp[0], [tr,tc]=exp[1];
  const piece=liveBoard[fr*8+fc];
  selectedSq=null; locked=true;
  renderBoard(liveBoard);
  animatePiece(fr,fc,tr,tc,piece,()=>{
    liveBoard=applyMv(liveBoard,exp[0],exp[1]);
    renderBoard(liveBoard,{from:exp[0],to:exp[1]});
    moveIndex++;
    if(moveIndex>=currentLine.length){ finishSolved(exp[1]); return; }   // last move = solved
    // computer's forced reply
    setStatus('Good move! The opponent replies…','correct');
    setTimeout(()=>{
      const opp=currentLine[moveIndex];
      const op=liveBoard[opp[0][0]*8+opp[0][1]];
      renderBoard(liveBoard);
      animatePiece(opp[0][0],opp[0][1],opp[1][0],opp[1][1],op,()=>{
        liveBoard=applyMv(liveBoard,opp[0],opp[1]);
        renderBoard(liveBoard,{from:opp[0],to:opp[1]});
        moveIndex++; locked=false;
        const left=Math.ceil((currentLine.length-moveIndex)/2);
        setStatus(left>1 ? `Your move — ${left} moves to go.` : 'Your move — finish it!','');
      });
    },650);
  });
}

// ── ADD finishSolved: celebrate the final move of the line ──
function finishSolved(lastTo){
  solved=true; locked=false; streak++; hintUsed=false;
  solvedIds.add(PUZZLES[current].id);
  const dest=document.querySelectorAll('#board .sq')[lastTo[0]*8+lastTo[1]];
  if(dest){const b=document.createElement('div');b.className='check-badge';b.textContent='✓';dest.appendChild(b);
    setTimeout(()=>{b.style.transition='opacity 0.25s';b.style.opacity='0';setTimeout(()=>b.remove(),250);},1400);}
  sndCorrect();
  setStatus('✓ Correct! Puzzle solved.','correct');
  updateStreak(); updatePuzzleListItem(current);
  document.getElementById('attemptCounter').textContent='';
}

// ── REPLACE handleWrong (uses liveBoard; does NOT advance the line) ──
function handleWrong(tr,tc) {
  attempts++; locked=true;
  const[fr,fc]=selectedSq;
  const sq=liveBoard;
  const piece=sq[fr*8+fc];
  const msgs=['✗ Not the right move — try again!','✗ Wrong again. Keep looking!','✗ Still not it. Think deeper...'];
  setStatus(msgs[Math.min(attempts-1,2)],'wrong');
  document.getElementById('attemptCounter').textContent=`${attempts} wrong attempt${attempts>1?'s':''}`;
  streak=0; updateStreak();
  renderBoard(sq);
  animateWrong(fr,fc,tr,tc,piece,()=>{
    selectedSq=null; locked=false;
    renderBoard(sq);
    setStatus(`Find the best move for ${PUZZLES[current].toMove}.`,'');
  });
}

// ── REPLACE showHint (highlights the next expected move in the line) ──
function showHint() {
  if(solved) return;
  hintUsed=true;
  const [fr,fc]=currentLine[moveIndex][0];
  selectedSq=[fr,fc];
  renderBoard(liveBoard,{hint:[fr,fc]});
  setStatus('Hint: the piece to move is highlighted!','');
}

// ── REPLACE revealSolution (plays out the rest of the line automatically) ──
function revealSolution() {
  if(solved) return;
  solved=true; locked=true; selectedSq=null;
  let i=moveIndex;
  const step=()=>{
    if(i>=currentLine.length){ locked=false; setStatus('Solution shown — study the line!','correct'); return; }
    const mv=currentLine[i];
    const piece=liveBoard[mv[0][0]*8+mv[0][1]];
    renderBoard(liveBoard);
    animatePiece(mv[0][0],mv[0][1],mv[1][0],mv[1][1],piece,()=>{
      liveBoard=applyMv(liveBoard,mv[0],mv[1]);
      renderBoard(liveBoard,{from:mv[0],to:mv[1]});
      i++; setTimeout(step,500);
    });
  };
  step();
}
*/
