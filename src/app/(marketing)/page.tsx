import Locker from "@/components/Locker";
import Slot from "@/components/Slot";
import Status from "@/components/Status";
import { data } from "@/utils/data";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-14 px-4 relative">
      <div className="absolute -z-10 inset-0 bg-fuchsia-400 bg-[size:20px_20px] opacity-5 blur-[100px]"></div>

      <div className="space-y-4 mb-8">
        <h1 className="text-4xl font-extrabold text-center">
          Facultad de Ingeniería y Ciencias
        </h1>
        <Status data={data} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {data.lockers.map((locker, index) => (
          <Locker key={index} locker={locker}>
            {locker.slots.map((slot, index) => (
              <Slot key={index} letter={locker.letter} slot={slot} />
            ))}
          </Locker>
        ))}
      </div>
    </main>
  );
}
