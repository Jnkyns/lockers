"use client";

import { useState } from "react";

export default function Status() {
  const [ici, setIci] = useState(0);
  const [oc, setOc] = useState(0);
  const [ti, setTi] = useState(0);
  const [pc, setPc] = useState(0);

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
    </div>
  );
}
