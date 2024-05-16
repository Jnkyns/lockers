"use client";

import { DataProps } from "@/utils/data";
import { useEffect, useState } from "react";

export default function Status({ data }: { data: DataProps }) {
  const [ii, setII] = useState(0);
  const [oc, setOC] = useState(0);
  const [it, setIT] = useState(0);
  const [pc, setPC] = useState(0);
  const [admin, setAdmin] = useState(0);

  const countUsersByCareer = () => {
    let iiCount = 0;
    let ocCount = 0;
    let itCount = 0;
    let pcCount = 0;
    let adminCount = 0;

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
          case "ADMIN":
            adminCount++;
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
    setAdmin(adminCount);
  };

  useEffect(() => {
    countUsersByCareer();
  });

  return (
    <div className="flex flex-col space-y-2 p-2">
      <div className="border-b">
        <CurrentData careerName="Ing. Civil Industrial" count={ii} />
        <CurrentData careerName="Ing. Civil en Obras Civiles" count={oc} />
        <CurrentData
          careerName="Ing. Civil en Informática y Telecomunicaciones"
          count={it}
        />
        <CurrentData careerName="Ing. Civil Plan Común" count={pc} />
        <CurrentData careerName="Administrativos" count={admin} />
      </div>

      <div className="flex flex-row space-x-2 justify-between">
        <CurrentData careerName="Ocupados" count={ii + oc + it + pc + admin} />
        <CurrentData
          careerName="Disponibles"
          count={60 - (ii + oc + it + pc + admin)}
        />
      </div>
    </div>
  );
}

function CurrentData({
  careerName,
  count,
}: {
  careerName: string;
  count: number;
}) {
  return (
    <div className="flex flex-row space-x-2">
      <h2>{careerName}:</h2>
      <p>{count}</p>
    </div>
  );
}
