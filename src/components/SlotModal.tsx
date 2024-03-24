"use client";

import { SlotProps } from "@/utils/data";
import { DialogContent, DialogFooter } from "./ui/dialog";
import { cn } from "@/lib/utils";

type Props = {
  letter: string;
  slot: SlotProps;
};

export default function SlotModal({ letter, slot }: Props) {
  return (
    <DialogContent tabIndex={-1} className="sm:max-w-2xl">
      <div className="justify-center flex flex-row items-center space-x-2">
        <h1 className="font-extrabold text-lg">
          Locker {letter}
          {slot.number.toString()}
        </h1>

        <div className="flex flex-row items-center space-x-2">
          <p className="text-muted-foreground text-lg">
            - {slot.status ? "Ocupado" : "Libre"}
          </p>
          <div
            className={cn(
              "rounded-full size-4 border border-foreground",
              slot.status ? "bg-red-600" : "bg-green-600"
            )}
          ></div>
        </div>
      </div>

      {slot.student && (
        <div className="space-y-px">
          <h2>Datos del Arrendatario</h2>
          <div className="text-muted-foreground text-sm px-2">
            <p>Nombre: {slot.student.name}</p>
            <p>
              {slot.student.career === "II" ? (
                <p>Carrera: Ingeniería Civil Industrial</p>
              ) : slot.student.career === "OC" ? (
                <p>Carrera: Ingeniería Civil en Obras</p>
              ) : slot.student.career === "IT" ? (
                <p>
                  Carrera: Ingeniería Civil en Informática y Telecomunicaciones
                </p>
              ) : slot.student.career === "PC" ? (
                <p>Carrera: Ingeniería Civil Plan Común</p>
              ) : (
                <p>Carrera: {slot.student.career}</p>
              )}
            </p>
            <p>Correo: {slot.student.mail}@mail.udp.cl</p>
            <p>Teléfono: +56 {slot.student?.phone.toString()}</p>
          </div>
        </div>
      )}
    </DialogContent>
  );
}
