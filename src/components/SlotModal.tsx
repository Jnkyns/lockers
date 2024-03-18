"use client";

import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";

type Props = {
  letter: string;
  slot: {
    number: number;
    status: string;
    //status: "free" | "occupied";
    student: string | null;
  };
};

export default function SlotModal({ letter, slot }: Props) {
  return (
    <DialogContent tabIndex={-1} className="sm:max-w-2xl">
      <DialogHeader>
        <DialogTitle>
          Locker {letter}
          {slot.number}
        </DialogTitle>
      </DialogHeader>
      <div className="space-y-px">
        <h2>Información</h2>
        <DialogDescription>
          {slot.status === "free"
            ? "Este casillero esta libre."
            : `Este casillero esta ocupado por ${slot.student}.`}
        </DialogDescription>
      </div>
      <div className="flex h-20 flex-row justify-center space-x-8"></div>
      <DialogFooter></DialogFooter>
    </DialogContent>
  );
}
