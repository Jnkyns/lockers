"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Dialog } from "./ui/dialog";
import SlotModal from "./SlotModal";
import { SlotProps } from "@/utils/data";

type Props = {
  letter: string;
  slot: SlotProps;
};

export default function Slot({ letter, slot }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <li
        className={cn(
          "h-16 md:h-32 rounded-lg p-2 flex justify-center items-center hover:cursor-pointer",
          slot.status === false ? "bg-green-400" : "bg-red-400"
        )}
        onClick={() => setIsOpen(true)}
      >
        <h4 className="text-center font-bold4">
          {letter}
          {slot.number.toString()}
        </h4>
      </li>

      <Dialog open={isOpen} onOpenChange={(open: boolean) => setIsOpen(open)}>
        <SlotModal letter={letter} slot={slot} />
      </Dialog>
    </>
  );
}
