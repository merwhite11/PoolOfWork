import React, { useState } from "react";
import { BiCaretDown, BiCaretUp } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";

const Selections = ({ rend, selections, setSelections, title }) => {
  const [open, setOpen] = useState(false);

  const deleteSelection = (bookTitle, index) => {
    setSelections((prevSelections) => {
      const updatedSelections = { ...prevSelections };
      updatedSelections[bookTitle] = (prevSelections[bookTitle] || []).filter(
        (_, j) => j !== index
      );
      return updatedSelections;
    });
  };

  const items = selections?.[title] || [];

  return (
    <div className="w-full">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        className="flex w-full items-center justify-between rounded-xl border border-lapis/12 bg-paper px-4 py-2.5 text-left text-xs font-medium uppercase tracking-[0.18em] text-lapis transition-colors hover:border-amber/60"
      >
        <span>{open ? "Close Highlights" : `Highlights (${items.length})`}</span>
        {open ? <BiCaretUp /> : <BiCaretDown />}
      </button>

      {open && (
        <ul className="mt-2 max-h-56 list-none divide-y divide-lapis/10 overflow-y-auto rounded-xl border border-lapis/10 bg-paper p-0">
          {items.length > 0 ? (
            items.map(({ text, cfiRange }, i) => (
              <li
                key={i}
                className="flex items-start justify-between gap-3 p-3 font-editorial text-sm text-lapis-muted"
              >
                <span>“{text}”</span>
                <button
                  type="button"
                  aria-label="Remove highlight"
                  onClick={() => {
                    rend?.annotations.remove(cfiRange, "highlight");
                    deleteSelection(title, i);
                  }}
                  className="shrink-0 text-lapis-muted hover:text-lapis"
                >
                  <RxCross2 size={14} />
                </button>
              </li>
            ))
          ) : (
            <li className="p-3 font-editorial text-sm italic text-lapis-muted">
              Select text in the book to save highlights.
            </li>
          )}
        </ul>
      )}
    </div>
  );
};

export default Selections;

