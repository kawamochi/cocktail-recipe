import { Routes, Route, Link } from "react-router-dom";
import { Home } from "./pages/Home";
import { RecipePage } from "./pages/Recipe";


export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/recipes" element={<Home />} />
        <Route path="/recipes/:id" element={<RecipePage />} />
        <Route path="*" element={<h1> みつからないよ </h1>} />
      </Routes>
    </div>
  );
}
