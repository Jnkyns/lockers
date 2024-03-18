"use client";

import { useState } from "react";
import { Dialog } from "./ui/dialog";
import SlotModal from "./SlotModal";
import { cn } from "@/lib/utils";

type Props = {
  letter: string;
  slot: {
    number: number;
    status: string;
    //status: "free" | "occupied" | "reserved";
    student: string | null;
  };
};

export default function Locker({ letter, slot }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <li
        className={cn(
          "w-32 h-48 rounded-lg p-2 flex justify-center items-center hover:cursor-pointer",
          slot.status === "free" ? "bg-green-400" : "bg-red-400"
        )}
        onClick={() => setIsOpen(true)}
      >
        <h4 className="text-center font-bold4">
          {letter}
          {slot.number}
        </h4>
      </li>

      <Dialog open={isOpen} onOpenChange={(open: boolean) => setIsOpen(open)}>
        <SlotModal letter={letter} slot={slot} />
      </Dialog>
    </>
  );
}
