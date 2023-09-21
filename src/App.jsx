import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home/Index'
import AlgoOne from './pages/Algo/AlgoOne'
import AlgoTwo from './pages/Algo/AlgoTwo'
import Navbar from './components/Navbar';

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />

        <main className="bg-gray-50 py-8">
          <div className="max-w-5xl mx-auto px-10 bg-white rounded-lg h-screen p-8">
            <Routes>
              <Route
                exact
                path={"/"}
                element={
                  <Home />
                }
              />
              <Route
                exact
                path={"/algo1"}
                element={
                  <AlgoOne />
                }
              />
              <Route
                exact
                path={"/algo2"}
                element={
                  <AlgoTwo />
                }
              />
            </Routes>
          </div>
        </main>

      </BrowserRouter>
    </>
  )
}

export default App
