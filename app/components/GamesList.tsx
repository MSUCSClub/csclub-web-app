type Game = {
    id: number;
    title: string;
    description: string;
    image: string;
  };
  
const games: Game[] = [
    {
        id: 1,
        title: "Tic Tac Toe",
        description: "A classic game of Tic Tac Toe. Play against the computer or a friend!",
        image: "/tic-tac-toe.png",
    },
    {
        id: 2,
        title: "Minesweeper",
        description: "Find all the mines without triggering any of them!",
        image: "/minesweeper.png",
    },
    {
        id: 3,
        title: "Snake Game",
        description: "Control the snake and eat the apples to grow longer.",
        image: "/snake.png",
    },
];

export default function GamesList() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {games.map((game) => (
            <div key={game.id} className="bg-white shadow-md rounded-lg overflow-hidden">
            <img
                src={game.image}
                alt={game.title}
                className="w-full h-48 object-cover"
            />
            <div className="p-4">
                <h3 className="text-2xl font-bold text-red-600">{game.title}</h3>
                <p className="mt-2 text-gray-700">{game.description}</p>
            </div>
            </div>
        ))}
        </div>
    );
}