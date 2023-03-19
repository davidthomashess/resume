import XoSymbols from "../../../../../img/SVG/xo/xo-symbols.svg";
import BtnXXoSymbols from "../../../../../img/SVG/xo/btn-x-xo-symbols.svg";
import BtnOXoSymbols from "../../../../../img/SVG/xo/btn-o-xo-symbols.svg";

const xoCells = "50px";

const cellPics = {
  norm: (
    <img
      className="desktop-xoCells desktop-xoCells-pointer"
      src={XoSymbols}
      alt="grayed out xo option"
      width={xoCells}
      height={xoCells}
    />
  ),
  x: (
    <img
      className="desktop-xoCells"
      src={BtnXXoSymbols}
      alt="grayed out xo option"
      width={xoCells}
      height={xoCells}
    />
  ),
  o: (
    <img
      className="desktop-xoCells"
      src={BtnOXoSymbols}
      alt="grayed out xo option"
      width={xoCells}
      height={xoCells}
    />
  ),
};

export default function CellPics({ setting }) {
  return (
    <>
      {setting === "norm"
        ? cellPics.norm
        : setting === "x"
        ? cellPics.x
        : cellPics.o}
    </>
  );
}
