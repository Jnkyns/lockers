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
    status: boolean;
    student: string | null;
    career: string;
    mail: string;
    phone: number;
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
          {slot.status === false
            ? "Este casillero esta libre."
            : `Este casillero esta ocupado por ${slot.student}.`}
        </DialogDescription>
      </div>
      <div className="flex h-20 flex-row justify-center space-x-8"></div>
      <DialogFooter></DialogFooter>
    </DialogContent>
  );
}
