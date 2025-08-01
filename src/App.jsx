export default function App() {
  return (
<main className="bg-slate-900 h-screen">
  <nav className="flex items-center justify-between px-8 py-4">
    <div className="text-slate-100 text-xl font-bold">Logo</div>

    <div className="flex space-x-7">
      <a href="#" className="text-white hover:text-slate-300 transition">Home</a>
      <a href="#" className="text-white hover:text-slate-300 transition">About</a>
      <a href="#" className="text-white hover:text-slate-300 transition">Contact</a>
    </div>

    <div className="text-white bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 transition">
      Commande Now
    </div>
  </nav>
</main>

  );
}
