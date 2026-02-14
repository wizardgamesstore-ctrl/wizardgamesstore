export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-purple-900 to-indigo-900">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-white mb-4">Wizard Games Store</h1>
        <p className="text-xl text-purple-200 mb-8">Welcome to your magical gaming destination</p>
        <button className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold transition">
          Explore Games
        </button>
      </div>
    </main>
  );
}
