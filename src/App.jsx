import React, { useState, Suspense, lazy } from "react";
import Header from "./Components/Header";
import ProductList from "./Components/ProductList";
import SlowComponent from "./Components/SlowComponent";
import Home from "./Pages/Home";

const About = lazy(() => import("./Pages/About"));
const Dashboard = lazy(() => import("./Pages/Dashboard"));

const App = () => {
  const [count, setCount] = useState(0);
  const [showDashboard, setShowDashboard] = useState(false);

  return (
    <div style={{ padding: "20px" }}>
      <Header />

      <h2>Performance Optimization Demo</h2>

      <button onClick={() => setCount((prev) => prev + 1)}>
        Increase Count: {count}
      </button>

      <hr />

      <ProductList />

      <hr />

      <SlowComponent count={count} />

      <hr />

      <button onClick={() => setShowDashboard((prev) => !prev)}>
        Toggle Dashboard (Lazy Load)
      </button>

      {showDashboard && (
        <Suspense fallback={<h3>Loading Dashboard...</h3>}>
          <Dashboard />
        </Suspense>
      )}

      <Suspense fallback={<h3>Loading About...</h3>}>
        <About />
      </Suspense>

      <hr />

      <Home />
    </div>
  );
};

export default App;
