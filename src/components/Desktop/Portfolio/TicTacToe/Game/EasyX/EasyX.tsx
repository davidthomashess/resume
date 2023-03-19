import { useState, useEffect, useCallback } from "react";

import "./EasyX.css";

import { default as cells } from "../cells.json";
import CellPics from "../CellPics";

// .______________.
// |_a1_|_a2_|_a3_|
// |_b1_|_b2_|_b3_|
// |_c1_|_c2_|_c3_|
// '¯¯¯¯¯¯¯¯¯¯¯¯¯¯'

const timer = { from: 500, to: 1200 };

export default function EasyX() {
  const [unlockedUE, setUnlockedUE] = useState(false);
  const [comPicks, setComPicks] = useState({ ...cells.comPicks });
  const [comThink, setComThink] = useState(false);
  const [myPicks, setMyPicks] = useState({ ...cells.myPicks });
  const [taken, setTaken] = useState({ ...cells.myPicks });
  const [comWin, setComWin] = useState("unknown");
  const [myWin, setMyWin] = useState("unknown");
  const [finished, setFinished] = useState(false);

  // const outputComPicks = () => {
  //   console.log()
  //   console.log("COMddddd");
  //   console.log(comPicks);
  //   console.log("takenddddd");
  //   console.log(taken);
  // };

  const engineComputer = useCallback(() => {
    console.log("ENGINE-PC");
    const randomTime = Math.floor(Math.random() * timer.to) + timer.from;

    let comPickerSearcher: number;
    let comPickerVerifying = true;

    while (comPickerVerifying) {
      const takenArray = [
        taken.aOneA,
        taken.aOneB,
        taken.aOneC,
        taken.bTwoA,
        taken.bTwoB,
        taken.bTwoC,
        taken.cTreA,
        taken.cTreB,
        taken.cTreC,
      ];
      const comArray = [
        comPicks.aOneA,
        comPicks.aOneB,
        comPicks.aOneC,
        comPicks.bTwoA,
        comPicks.bTwoB,
        comPicks.bTwoC,
        comPicks.cTreA,
        comPicks.cTreB,
        comPicks.cTreC,
      ];
      const myArray = [
        myPicks.aOneA,
        myPicks.aOneB,
        myPicks.aOneC,
        myPicks.bTwoA,
        myPicks.bTwoB,
        myPicks.bTwoC,
        myPicks.cTreA,
        myPicks.cTreB,
        myPicks.cTreC,
      ];
      comPickerSearcher = Math.floor(Math.random() * 8) + 0;
      comPickerVerifying = !(
        !comArray[comPickerSearcher] &&
        !myArray[comPickerSearcher] &&
        !takenArray[comPickerSearcher]
      );
      if (comPickerVerifying === false) {
        console.log(`comNumPicked: ${comPickerSearcher}`);
        console.log(`checkComArray: ${comArray[comPickerSearcher]}`);
        console.log(`checkMyArray: ${myArray[comPickerSearcher]}`);
        console.log(`Neither picked yet: ${!comPickerVerifying}`);
        console.log(`comVerify: ${comPickerVerifying}`);
      }
    }

    const myWinCalc =
      (myPicks.aOneA && myPicks.aOneB && myPicks.aOneC) ||
      (myPicks.bTwoA && myPicks.bTwoB && myPicks.bTwoC) ||
      (myPicks.cTreA && myPicks.cTreB && myPicks.cTreC) ||
      (myPicks.aOneA && myPicks.bTwoA && myPicks.cTreA) ||
      (myPicks.aOneB && myPicks.bTwoB && myPicks.cTreB) ||
      (myPicks.aOneC && myPicks.bTwoC && myPicks.cTreC) ||
      (myPicks.aOneA && myPicks.bTwoB && myPicks.cTreC) ||
      (myPicks.cTreA && myPicks.bTwoB && myPicks.aOneC);

    let comWinCalc =
      (comPicks.aOneA && comPicks.aOneB && comPicks.aOneC) ||
      (comPicks.bTwoA && comPicks.bTwoB && comPicks.bTwoC) ||
      (comPicks.cTreA && comPicks.cTreB && comPicks.cTreC) ||
      (comPicks.aOneA && comPicks.bTwoA && comPicks.cTreA) ||
      (comPicks.aOneB && comPicks.bTwoB && comPicks.cTreB) ||
      (comPicks.aOneC && comPicks.bTwoC && comPicks.cTreC) ||
      (comPicks.aOneA && comPicks.bTwoB && comPicks.cTreC) ||
      (comPicks.cTreA && comPicks.bTwoB && comPicks.aOneC);

    if (!myWinCalc && !comWinCalc && !finished) {
      setTimeout(() => {
        console.log("engineSearch4433");
        console.log(comPickerSearcher);

        comPickerSearcher === 0
          ? setTaken((taken) => (taken = { ...taken, ...{ aOneA: true } }))
          : comPickerSearcher === 1
          ? setTaken((taken) => (taken = { ...taken, ...{ aOneB: true } }))
          : comPickerSearcher === 2
          ? setTaken((taken) => (taken = { ...taken, ...{ aOneC: true } }))
          : comPickerSearcher === 3
          ? setTaken((taken) => (taken = { ...taken, ...{ bTwoA: true } }))
          : comPickerSearcher === 4
          ? setTaken((taken) => (taken = { ...taken, ...{ bTwoB: true } }))
          : comPickerSearcher === 5
          ? setTaken((taken) => (taken = { ...taken, ...{ bTwoC: true } }))
          : comPickerSearcher === 6
          ? setTaken((taken) => (taken = { ...taken, ...{ cTreA: true } }))
          : comPickerSearcher === 7
          ? setTaken((taken) => (taken = { ...taken, ...{ cTreB: true } }))
          : setTaken((taken) => (taken = { ...taken, ...{ cTreC: true } }));

        comPickerSearcher === 0
          ? setComPicks(
              (comPicks) => (comPicks = { ...comPicks, ...{ aOneA: true } })
            )
          : comPickerSearcher === 1
          ? setComPicks(
              (comPicks) => (comPicks = { ...comPicks, ...{ aOneB: true } })
            )
          : comPickerSearcher === 2
          ? setComPicks(
              (comPicks) => (comPicks = { ...comPicks, ...{ aOneC: true } })
            )
          : comPickerSearcher === 3
          ? setComPicks(
              (comPicks) => (comPicks = { ...comPicks, ...{ bTwoA: true } })
            )
          : comPickerSearcher === 4
          ? setComPicks(
              (comPicks) => (comPicks = { ...comPicks, ...{ bTwoB: true } })
            )
          : comPickerSearcher === 5
          ? setComPicks(
              (comPicks) => (comPicks = { ...comPicks, ...{ bTwoC: true } })
            )
          : comPickerSearcher === 6
          ? setComPicks(
              (comPicks) => (comPicks = { ...comPicks, ...{ cTreA: true } })
            )
          : comPickerSearcher === 7
          ? setComPicks(
              (comPicks) => (comPicks = { ...comPicks, ...{ cTreB: true } })
            )
          : setComPicks(
              (comPicks) => (comPicks = { ...comPicks, ...{ cTreC: true } })
            );
      }, randomTime);

      comWinCalc =
        (comPicks.aOneA && comPicks.aOneB && comPicks.aOneC) ||
        (comPicks.bTwoA && comPicks.bTwoB && comPicks.bTwoC) ||
        (comPicks.cTreA && comPicks.cTreB && comPicks.cTreC) ||
        (comPicks.aOneA && comPicks.bTwoA && comPicks.cTreA) ||
        (comPicks.aOneB && comPicks.bTwoB && comPicks.cTreB) ||
        (comPicks.aOneC && comPicks.bTwoC && comPicks.cTreC) ||
        (comPicks.aOneA && comPicks.bTwoB && comPicks.cTreC) ||
        (comPicks.cTreA && comPicks.bTwoB && comPicks.aOneC);

      console.log(`:::::myWinCalc: ${myWinCalc}`);
      console.log(`:::::::ComWinCalc: ${comWinCalc}`);
      if (myWinCalc && !comWinCalc) {
        setMyWin(() => "true");
        setFinished(() => true);
      } else if (comWinCalc && !myWinCalc) {
        setFinished(() => true);
        setComWin((comWin) => (comWin = "true"));
      }
    }

    !finished && setComThink((comThink) => (comThink = false));
  }, [
    comPicks.aOneA,
    comPicks.aOneB,
    comPicks.aOneC,
    comPicks.bTwoA,
    comPicks.bTwoB,
    comPicks.bTwoC,
    comPicks.cTreA,
    comPicks.cTreB,
    comPicks.cTreC,
    finished,
    myPicks.aOneA,
    myPicks.aOneB,
    myPicks.aOneC,
    myPicks.bTwoA,
    myPicks.bTwoB,
    myPicks.bTwoC,
    myPicks.cTreA,
    myPicks.cTreB,
    myPicks.cTreC,
    taken.aOneA,
    taken.aOneB,
    taken.aOneC,
    taken.bTwoA,
    taken.bTwoB,
    taken.bTwoC,
    taken.cTreA,
    taken.cTreB,
    taken.cTreC,
  ]);

  const handleComThink = useCallback(() => {
    console.log("HANDLETHINK");
    engineComputer();
  }, [engineComputer]);

  const handleMyPicks = (play: string) => {
    console.log("HANDLEPICKS");
    if (!unlockedUE) setUnlockedUE((unlockedUE) => !unlockedUE);
    setComThink((comThink) => !comThink);
    setMyPicks((myPicks) => ({
      ...myPicks,
      ...{ [play]: true },
    }));
    setTaken((taken) => ({
      ...taken,
      ...{ [play]: true },
    }));
  };

  const selectPosition = (play: string) => {
    const respectiveCell = (
      <span className="desktop-vCenter">
        {!comPicks[play] && !myPicks[play] ? (
          <CellPics setting="norm" />
        ) : comPicks[play] && !myPicks[play] ? (
          <CellPics setting="o" />
        ) : (
          <CellPics setting="x" />
        )}
      </span>
    );

    return !comThink && !comPicks[play] && !myPicks[play] && !finished ? (
      <div
        className={cells.cellClass[play]}
        onClick={() => handleMyPicks(play)}
      >
        {respectiveCell}
      </div>
    ) : (
      <div className={cells.cellClass[play]}>{respectiveCell}</div>
    );
  };

  const gameRow1 = (
    <div className="desktop-row-1">
      {selectPosition("aOneA")}
      {selectPosition("aOneB")}
      {selectPosition("aOneC")}
    </div>
  );
  const gameRow2 = (
    <div className="desktop-row-2">
      {selectPosition("bTwoA")}
      {selectPosition("bTwoB")}
      {selectPosition("bTwoC")}
    </div>
  );
  const gameRow3 = (
    <div className="desktop-row-3">
      {selectPosition("cTreA")}
      {selectPosition("cTreB")}
      {selectPosition("cTreC")}
    </div>
  );

  useEffect(() => {
    console.log("USEEFFECT");
    const completelyTaken =
      taken.aOneA &&
      taken.aOneB &&
      taken.aOneC &&
      taken.bTwoA &&
      taken.bTwoB &&
      taken.bTwoC &&
      taken.cTreA &&
      taken.cTreB &&
      taken.cTreC;
    unlockedUE && console.log("ME");
    unlockedUE && console.log(myPicks);
    unlockedUE && console.log("taken");
    unlockedUE && console.log(taken);
    unlockedUE && comThink && !finished && !completelyTaken && handleComThink();
  }, [
    unlockedUE,
    myPicks,
    comThink,
    finished,
    taken.aOneA,
    taken.aOneB,
    taken.aOneC,
    taken.bTwoA,
    taken.bTwoB,
    taken.bTwoC,
    taken.cTreA,
    taken.cTreB,
    taken.cTreC,
    handleComThink,
  ]);

  console.log(`My Win Stat: ${myWin}`);
  console.log(`PC Win Stat: ${comWin}`);
  console.log(`Finished: ${finished}`);
  return (
    <div className="desktop-game-border-orange">
      {gameRow1}
      {gameRow2}
      {gameRow3}
    </div>
  );
}

// import { useState, useEffect } from "react";

// import "./EasyX.css";

// import { default as cells } from "../cells.json";
// import CellPics from "../CellPics";

// // .______________.
// // |_a1_|_a2_|_a3_|
// // |_b1_|_b2_|_b3_|
// // |_c1_|_c2_|_c3_|
// // '¯¯¯¯¯¯¯¯¯¯¯¯¯¯'

// const timer = { from: 500, to: 1200 };

// export default function Decide() {
//   const [unlockedUE, setUnlockedUE] = useState(false);
//   const [comPicks, setComPicks] = useState({ ...cells.comPicks });
//   const [comThink, setComThink] = useState(false);
//   const [myPicks, setMyPicks] = useState({ ...cells.myPicks });
//   const [taken, setTaken] = useState({ ...cells.myPicks });
//   const [comWin, setComWin] = useState("unknown");
//   const [myWin, setMyWin] = useState("unknown");
//   const [finished, setFinished] = useState(false);

//   const outputComPicks = () => {
//     // console.log("COMddddd");
//     // console.log(comPicks);
//     // console.log("takenddddd");
//     // console.log(taken);
//   };

//   useEffect(() => {
//     unlockedUE && outputComPicks();
//     // unlockedUE && // console.log("...NEXT TURN");
//     // unlockedUE && // console.log("...\n...\n...");
//   }, [comThink]);

//   useEffect(() => {
//     // unlockedUE && // console.log("ME");
//     // unlockedUE && // console.log(myPicks);
//     // console.log("taken");
//     // console.log(taken);
//     unlockedUE && handleComThink();
//   }, [myPicks]);

//   const engineComputer = () => {
//     const randomTime = Math.floor(Math.random() * timer.to) + timer.from;

//     let comPickerSearcher: number;
//     let comPickerVerifying = true;

//     while (comPickerVerifying) {
//       const takenArray = [
//         taken.aOneA,
//         taken.aOneB,
//         taken.aOneC,
//         taken.bTwoA,
//         taken.bTwoB,
//         taken.bTwoC,
//         taken.cTreA,
//         taken.cTreB,
//         taken.cTreC,
//       ];
//       const comArray = [
//         comPicks.aOneA,
//         comPicks.aOneB,
//         comPicks.aOneC,
//         comPicks.bTwoA,
//         comPicks.bTwoB,
//         comPicks.bTwoC,
//         comPicks.cTreA,
//         comPicks.cTreB,
//         comPicks.cTreC,
//       ];
//       const myArray = [
//         myPicks.aOneA,
//         myPicks.aOneB,
//         myPicks.aOneC,
//         myPicks.bTwoA,
//         myPicks.bTwoB,
//         myPicks.bTwoC,
//         myPicks.cTreA,
//         myPicks.cTreB,
//         myPicks.cTreC,
//       ];
//       comPickerSearcher = Math.floor(Math.random() * 8) + 0;
//       comPickerVerifying = !(
//         !comArray[comPickerSearcher] &&
//         !myArray[comPickerSearcher] &&
//         !takenArray[comPickerSearcher]
//       );
//       if (comPickerVerifying === false) {
//         // console.log(`comNumPicked: ${comPickerSearcher}`);
//         // console.log(`checkComArray: ${comArray[comPickerSearcher]}`);
//         // console.log(`checkMyArray: ${myArray[comPickerSearcher]}`);
//         // console.log(`Neither picked yet: ${!comPickerVerifying}`);
//         // console.log(`comVerify: ${comPickerVerifying}`);
//       }
//     }

//     const myWinCalc =
//       (myPicks.aOneA && myPicks.aOneB && myPicks.aOneC) ||
//       (myPicks.bTwoA && myPicks.bTwoB && myPicks.bTwoC) ||
//       (myPicks.cTreA && myPicks.cTreB && myPicks.cTreC) ||
//       (myPicks.aOneA && myPicks.bTwoA && myPicks.cTreA) ||
//       (myPicks.aOneB && myPicks.bTwoB && myPicks.cTreB) ||
//       (myPicks.aOneC && myPicks.bTwoC && myPicks.cTreC) ||
//       (myPicks.aOneA && myPicks.bTwoB && myPicks.cTreC) ||
//       (myPicks.cTreA && myPicks.bTwoB && myPicks.aOneC);

//     if (myWinCalc) {
//       setMyWin(() => "true");
//       setFinished(() => true);
//     }

//     let comWinCalc =
//       (comPicks.aOneA && comPicks.aOneB && comPicks.aOneC) ||
//       (comPicks.bTwoA && comPicks.bTwoB && comPicks.bTwoC) ||
//       (comPicks.cTreA && comPicks.cTreB && comPicks.cTreC) ||
//       (comPicks.aOneA && comPicks.bTwoA && comPicks.cTreA) ||
//       (comPicks.aOneB && comPicks.bTwoB && comPicks.cTreB) ||
//       (comPicks.aOneC && comPicks.bTwoC && comPicks.cTreC) ||
//       (comPicks.aOneA && comPicks.bTwoB && comPicks.cTreC) ||
//       (comPicks.cTreA && comPicks.bTwoB && comPicks.aOneC);

//     if (!myWinCalc && !comWinCalc && !finished) {
//       setTimeout(() => {
//         // console.log("engineSearch4433");
//         // console.log(comPickerSearcher);

//         comPickerSearcher === 0
//           ? setTaken((taken) => (taken = { ...taken, ...{ aOneA: true } }))
//           : comPickerSearcher === 1
//           ? setTaken((taken) => (taken = { ...taken, ...{ aOneB: true } }))
//           : comPickerSearcher === 2
//           ? setTaken((taken) => (taken = { ...taken, ...{ aOneC: true } }))
//           : comPickerSearcher === 3
//           ? setTaken((taken) => (taken = { ...taken, ...{ bTwoA: true } }))
//           : comPickerSearcher === 4
//           ? setTaken((taken) => (taken = { ...taken, ...{ bTwoB: true } }))
//           : comPickerSearcher === 5
//           ? setTaken((taken) => (taken = { ...taken, ...{ bTwoC: true } }))
//           : comPickerSearcher === 6
//           ? setTaken((taken) => (taken = { ...taken, ...{ cTreA: true } }))
//           : comPickerSearcher === 7
//           ? setTaken((taken) => (taken = { ...taken, ...{ cTreB: true } }))
//           : setTaken((taken) => (taken = { ...taken, ...{ cTreC: true } }));

//         comPickerSearcher === 0
//           ? setComPicks(
//               (comPicks) => (comPicks = { ...comPicks, ...{ aOneA: true } })
//             )
//           : comPickerSearcher === 1
//           ? setComPicks(
//               (comPicks) => (comPicks = { ...comPicks, ...{ aOneB: true } })
//             )
//           : comPickerSearcher === 2
//           ? setComPicks(
//               (comPicks) => (comPicks = { ...comPicks, ...{ aOneC: true } })
//             )
//           : comPickerSearcher === 3
//           ? setComPicks(
//               (comPicks) => (comPicks = { ...comPicks, ...{ bTwoA: true } })
//             )
//           : comPickerSearcher === 4
//           ? setComPicks(
//               (comPicks) => (comPicks = { ...comPicks, ...{ bTwoB: true } })
//             )
//           : comPickerSearcher === 5
//           ? setComPicks(
//               (comPicks) => (comPicks = { ...comPicks, ...{ bTwoC: true } })
//             )
//           : comPickerSearcher === 6
//           ? setComPicks(
//               (comPicks) => (comPicks = { ...comPicks, ...{ cTreA: true } })
//             )
//           : comPickerSearcher === 7
//           ? setComPicks(
//               (comPicks) => (comPicks = { ...comPicks, ...{ cTreB: true } })
//             )
//           : setComPicks(
//               (comPicks) => (comPicks = { ...comPicks, ...{ cTreC: true } })
//             );
//       }, randomTime);

//       comWinCalc =
//         (comPicks.aOneA && comPicks.aOneB && comPicks.aOneC) ||
//         (comPicks.bTwoA && comPicks.bTwoB && comPicks.bTwoC) ||
//         (comPicks.cTreA && comPicks.cTreB && comPicks.cTreC) ||
//         (comPicks.aOneA && comPicks.bTwoA && comPicks.cTreA) ||
//         (comPicks.aOneB && comPicks.bTwoB && comPicks.cTreB) ||
//         (comPicks.aOneC && comPicks.bTwoC && comPicks.cTreC) ||
//         (comPicks.aOneA && comPicks.bTwoB && comPicks.cTreC) ||
//         (comPicks.cTreA && comPicks.bTwoB && comPicks.aOneC);

//       if (comWinCalc) {
//         setComWin(() => "true");
//         setFinished(() => true);
//       }
//     }

//     !finished && setComThink((comThink) => (comThink = false));
//   };

//   const handleComThink = () => {
//     engineComputer();
//   };

//   const handleMyPicks = (play: string) => {
//     if (!unlockedUE) setUnlockedUE((unlockedUE) => !unlockedUE);
//     setComThink((comThink) => !comThink);
//     setMyPicks((myPicks) => ({
//       ...myPicks,
//       ...{ [play]: true },
//     }));
//     setTaken((taken) => ({
//       ...taken,
//       ...{ [play]: true },
//     }));
//   };

//   const selectPosition = (play: string) => {
//     const respectiveCell = (
//       <span className="desktop-vCenter">
//         {!comPicks[play] && !myPicks[play] ? (
//           <CellPics setting="norm" />
//         ) : comPicks[play] && !myPicks[play] ? (
//           <CellPics setting="o" />
//         ) : (
//           <CellPics setting="x" />
//         )}
//       </span>
//     );

//     return !comThink && !comPicks[play] && !myPicks[play] && !finished ? (
//       <div
//         className={cells.cellClass[play]}
//         onClick={() => handleMyPicks(play)}
//       >
//         {respectiveCell}
//       </div>
//     ) : (
//       <div className={cells.cellClass[play]}>{respectiveCell}</div>
//     );
//   };

//   const gameRow1 = (
//     <div className="desktop-row-1">
//       {selectPosition("aOneA")}
//       {selectPosition("aOneB")}
//       {selectPosition("aOneC")}
//     </div>
//   );
//   const gameRow2 = (
//     <div className="desktop-row-2">
//       {selectPosition("bTwoA")}
//       {selectPosition("bTwoB")}
//       {selectPosition("bTwoC")}
//     </div>
//   );
//   const gameRow3 = (
//     <div className="desktop-row-3">
//       {selectPosition("cTreA")}
//       {selectPosition("cTreB")}
//       {selectPosition("cTreC")}
//     </div>
//   );

//   console.log(`My Win Stat: ${myWin}`);
//   console.log(`PC Win Stat: ${comWin}`);
//   console.log(`Finished: ${finished}`);
//   return (
//     <div className="desktop-game-border-orange">
//       {gameRow1}
//       {gameRow2}
//       {gameRow3}
//     </div>
//   );
// }
