// App.jsx
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from "./about/about";
import Contact from "./contact/contact";

export default function App() {
  return (
    <BrowserRouter>
      <header className="bg-white shadow-md">
        <nav className="container mx-auto flex justify-center py-4 space-x-10">
          <Link to="/" className="text-gray-800 hover:text-blue-500 font-medium">Home</Link>
          <Link to="/about" className="text-gray-800 hover:text-blue-500 font-medium">About</Link>
          <Link to="/contact" className="text-gray-800 hover:text-blue-500 font-medium">Contact</Link>
        </nav>
      </header>

      <main className="container mx-auto py-10 text-center">
        <Routes>
          <Route path="/" element={<h1 className="text-2xl font-bold">Hello Home</h1>} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
