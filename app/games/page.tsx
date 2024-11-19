import GamesList from "../components/GamesList";

export default function Games() {
  return (
    <div className="p-8">
      <h2 className="text-4xl font-bold">Games</h2>
      <p className="mt-4">Explore our collection of games created by the CS Club members.</p>
      <GamesList />
    </div>
  );
}