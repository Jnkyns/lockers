"use client";

type Props = {
  locker: {
    location: string;
  };
  children: React.ReactNode;
};

export default function Locker({ locker, children }: Props) {
  return (
    <div className="flex flex-col space-y-2 justify-between max-w-[28rem]">
      <div className="flex flex-col sm:flex-row sm:space-x-1">
        <h2 className="font-bold">Ubicación:</h2>
        <p className="text-sm text-muted-foreground">{locker.location}</p>
      </div>
      <div className="min-w-72 grid gap-2 border p-2 rounded-md grid-cols-3 sm:grid-cols-5">
        {children}
      </div>
    </div>
  );
}
