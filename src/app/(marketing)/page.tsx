import Slot from "@/components/Slot";
import Status from "@/components/Status";
import { data } from "@/utils/data";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-14 px-4 relative">
      <div className="absolute -z-10 inset-0 bg-fuchsia-400 bg-[size:20px_20px] opacity-5 blur-[100px]"></div>

      <div className="p-2 mb-8">
        <h1 className="text-4xl font-extrabold text-center">
          Facultad de Ingeniería y Ciencias
        </h1>
      </div>

      <Status data={data} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {data.lockers.map((locker, index) => (
          <div key={index} className="flex flex-col space-y-2 justify-between">
            <div className="flex flex-col sm:flex-row sm:space-x-1">
              <h2 className="font-bold">Ubicación:</h2>
              <p className="text-sm text-muted-foreground">{locker.location}</p>
            </div>
            <div
              key={index}
              className="min-w-72 grid gap-2 border p-2 rounded-md grid-cols-3 sm:grid-cols-5"
            >
              {locker.slots.map((slot, index) => (
                <Slot key={index} letter={locker.letter} slot={slot} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
