import Locker from "@/components/Locker";

const data = {
  faculty: "FIC",
  lockers: [
    {
      letter: "A",
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
      letter: "B",
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
        <h1 className="text-4xl font-extrabold">Lockers</h1>
      </div>
      <div className="flex flex-col space-y-4">
        {data.lockers.map((locker, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center border-4 p-2 rounded-md shadow-lg"
          >
            <div className="grid gap-2 grid-cols-5">
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
