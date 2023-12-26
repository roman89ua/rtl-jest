import GreetingCP from "./components/GreetingCP";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <GreetingCP name="Roman" />
    </main>
  );
}
