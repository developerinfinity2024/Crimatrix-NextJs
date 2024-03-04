import Card from "./components/Card";
import RecentHotel from "./components/RecentHotel";
import RecentLogs from "./components/RecentLogs";
import Button from "./components/Button";

export default function Home() {
  return (
    <>
      <section className="bg-[#1a2033] relative">
        <header className="pb-44 pt-10 px-4 max-w-[1440px] mx-auto">
          <h1 className="font-semibold text-white text-[23px] mb-4">
            Welcome back, Sarfaraz
          </h1>
          <p className="text-textDark">Dashboard</p>
        </header>
        <section className="grid gap-7 grid-cols-3 absolute top-[180px] max-w-[1440px] lg:mx-auto lg:bottom-[-114px] left-0 right-0 mx-4 ">
          <Card>Test Card</Card>
          <Card>Test Card</Card>
          <Card>Test Card</Card>
        </section>
      </section>

      <section className="max-w-[1440px] md:mx-4 lg:mx-auto mt-40 flex flex-col gap-2">
        {/* Recent Hotels */}
        <article className="my-6">
          <header className="flex justify-between items-center py-2">
            <h2 className="font-semibold text-[20px]">Recent Hotels</h2>
            <Button link="">View All</Button>
          </header>
          <RecentHotel />
        </article >

        {/* Recent Logs */}
        <article className="my-6">
          <header className="flex justify-between items-center py-2">
            <h2 className="font-semibold text-[20px]">Recent Logs</h2>
            <Button link="">View All</Button>
          </header>
          <RecentLogs />
        </article>
      </section>
    </>
  );
}
