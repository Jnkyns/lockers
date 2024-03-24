"use client";

import { DataProps } from "@/utils/data";
import { useState } from "react";

export default function Status({ data }: { data: DataProps }) {
  const [ii, setII] = useState(0);
  const [oc, setOC] = useState(0);
  const [it, setIT] = useState(0);
  const [pc, setPC] = useState(0);

  const countUsersByCareer = () => {
    let iiCount = 0;
    let ocCount = 0;
    let itCount = 0;
    let pcCount = 0;

    data.lockers.forEach((locker) => {
      locker.slots.forEach((slot) => {
        switch (slot.student?.career) {
          case "II":
            iiCount++;
            break;
          case "OC":
            ocCount++;
            break;
          case "IT":
            itCount++;
            break;
          case "PC":
            pcCount++;
            break;
          default:
            break;
        }
      });
    });

    setII(iiCount);
    setOC(ocCount);
    setIT(itCount);
    setPC(pcCount);
  };

  return (
    <div className="mb-8 mx-2 flex flex-col space-y-2">
      <div className="flex flex-row space-x-2">
        <h2>Ingeniería Civil Industrial:</h2>
        <p>{ii}</p>
      </div>
      <div className="flex flex-row space-x-2">
        <h2>Ingeniería Civil en Obras Civiles:</h2>
        <p>{oc}</p>
      </div>
      <div className="flex flex-row space-x-2">
        <h2>Ingeniería Civil en Informática y Telecomunicaciones:</h2>
        <p>{it}</p>
      </div>
      <div className="flex flex-row space-x-2">
        <h2>Ingeniería Civil Plan Común:</h2>
        <p>{pc}</p>
      </div>
      <div className="flex flex-row space-x-2">
        <h2>Ocupados:</h2>
        <p>{ii + oc + it + pc}</p>
        <h2>Libres:</h2>
        <p>{60 - (ii + oc + it + pc)}</p>
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
