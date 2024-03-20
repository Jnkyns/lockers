"use client";

import { useState } from "react";

type LockerSlot = {
  number: number;
  status: boolean;
  student: string;
  career: string;
  mail: string;
  phone: number;
};

type Locker = {
  letter: string;
  location: string;
  slots: LockerSlot[];
};

type LockersData = {
  faculty: string;
  lockers: Locker[];
};

export default function Status({ data }: { data: LockersData }) {
  const [ici, setIci] = useState(0);
  const [oc, setOc] = useState(0);
  const [ti, setTi] = useState(0);
  const [pc, setPc] = useState(0);

  const countUsersByCareer = () => {
    let iciCount = 0;
    let ocCount = 0;
    let tiCount = 0;
    let pcCount = 0;

    data.lockers.forEach((locker) => {
      locker.slots.forEach((slot) => {
        switch (slot.career) {
          case "ICI":
            iciCount++;
            break;
          case "OC":
            ocCount++;
            break;
          case "TI":
            tiCount++;
            break;
          case "PC":
            pcCount++;
            break;
          default:
            break;
        }
      });
    });

    setIci(iciCount);
    setOc(ocCount);
    setTi(tiCount);
    setPc(pcCount);
  };

  return (
    <div className="mb-8 mx-2 flex flex-col space-y-2">
      <div className="flex flex-row space-x-2">
        <h2>Ingeniería Civil Industrial:</h2>
        <p>{ici}/20</p>
      </div>
      <div className="flex flex-row space-x-2">
        <h2>Ingeniería Civil en Obras Civiles:</h2>
        <p>{oc}/15</p>
      </div>
      <div className="flex flex-row space-x-2">
        <h2>Ingeniería Civil en Informática y Telecomunicaciones:</h2>
        <p>{ti}/15</p>
      </div>
      <div className="flex flex-row space-x-2">
        <h2>Ingeniería Civil Plan Común:</h2>
        <p>{pc}/10</p>
      </div>
      <div className="flex flex-row space-x-2">
        <h2>Total:</h2>
        <p>{ici + oc + ti + pc}</p>
      </div>
      <button
        className="border rounded-md h-8 bg-green-500/20"
        onClick={() => countUsersByCareer()}
      >
        Refresh
      </button>
    </div>
  );
}
