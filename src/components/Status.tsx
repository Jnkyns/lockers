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
    <div className="mx-2 flex flex-col">
      <div className="flex flex-row">
        <h2>Ingeniería Civil Industrial (20)</h2>
        <p>{ici}</p>
      </div>
      <div className="mx-2 flex flex-row">
        <h2>Ingeniería Civil en Obras Civiles (15)</h2>
        <p>{oc}</p>
      </div>
      <div className="mx-2 flex flex-row">
        <h2>Ingeniería Civil en Informática y Telecomunicaciones (15)</h2>
        <p>{ti}</p>
      </div>
      <div className="mx-2 flex flex-row">
        <h2>Ingeniería Civil Plan Común (9)</h2>
        <p>{pc}</p>
      </div>
      <button
        className="border rounded-md"
        onClick={() => countUsersByCareer()}
      >
        Refresh
      </button>
    </div>
  );
}
