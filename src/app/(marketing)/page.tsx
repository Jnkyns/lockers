import Locker from "@/components/Locker";

const data = {
  faculty: "FIC",
  lockers: [
    {
      letter: "A",
      location:
        "Por Vergara, al lado izquierdo de la sala del Centro de Estudiantes.",
      slots: [
        {
          number: 1,
          status: "occupied",
          student: "Bastián Avilés",
        },
        {
          number: 2,
          status: "free",
          student: null,
        },
        {
          number: 3,
          status: "free",
          student: null,
        },
        {
          number: 4,
          status: "free",
          student: null,
        },
        {
          number: 5,
          status: "free",
          student: null,
        },
        {
          number: 6,
          status: "free",
          student: null,
        },
        {
          number: 7,
          status: "free",
          student: null,
        },
        {
          number: 8,
          status: "free",
          student: null,
        },
        {
          number: 9,
          status: "free",
          student: null,
        },
        {
          number: 10,
          status: "free",
          student: null,
        },
      ],
    },
    {
      letter: "B",
      location: "Por Ejercito, segundo piso, al fondo.",
      slots: [
        {
          number: 1,
          status: "free",
          student: null,
        },
        {
          number: 2,
          status: "free",
          student: null,
        },
        {
          number: 3,
          status: "free",
          student: null,
        },
        {
          number: 4,
          status: "free",
          student: null,
        },
        {
          number: 5,
          status: "free",
          student: null,
        },
        {
          number: 6,
          status: "free",
          student: null,
        },
        {
          number: 7,
          status: "free",
          student: null,
        },
        {
          number: 8,
          status: "free",
          student: null,
        },
        {
          number: 9,
          status: "free",
          student: null,
        },
        {
          number: 10,
          status: "free",
          student: null,
        },
      ],
    },
    {
      letter: "C",
      location: "Por Ejercito, segundo piso, al fondo.",
      slots: [
        {
          number: 1,
          status: "free",
          student: null,
        },
        {
          number: 2,
          status: "free",
          student: null,
        },
        {
          number: 3,
          status: "free",
          student: null,
        },
        {
          number: 4,
          status: "free",
          student: null,
        },
        {
          number: 5,
          status: "free",
          student: null,
        },
        {
          number: 6,
          status: "free",
          student: null,
        },
        {
          number: 7,
          status: "free",
          student: null,
        },
        {
          number: 8,
          status: "free",
          student: null,
        },
        {
          number: 9,
          status: "free",
          student: null,
        },
        {
          number: 10,
          status: "free",
          student: null,
        },
      ],
    },
  ],
};
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-14 px-24 relative">
      <div className="absolute -z-10 inset-0 bg-fuchsia-400 bg-[size:20px_20px] opacity-5 blur-[100px]"></div>
      <div className="p-2 mb-8">
        <h1 className="text-4xl font-extrabold">
          Facultad de Ingeniería y Ciencias
        </h1>
      </div>
      <div className="flex flex-col space-y-6">
        {data.lockers.map((locker, index) => (
          <div key={index} className="space-y-1">
            <div className="flex space-x-1">
              <h2>Ubicación:</h2>
              <p className="text-muted-foreground">{locker.location}</p>
            </div>
            <div
              key={index}
              className="grid gap-2 border-4 p-2 rounded-md grid-cols-5"
            >
              {locker.slots.map((slot, index) => (
                <Locker key={index} letter={locker.letter} slot={slot} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
