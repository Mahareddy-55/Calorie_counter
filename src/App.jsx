


import { useState, useEffect } from "react";
import Header from "./components/Header";
import Tabs from "./components/Tabs";
import Summary from "./components/Summary";
import Meals from "./components/Meals";
import Statistics from "./components/Statistics";
import Settings from "./components/Settings";

// Auth
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";

function App() {
  const [meals, setMeals] = useState(() => {
    const saved = localStorage.getItem("meals");
    return saved ? JSON.parse(saved) : [];
  });

  const [activeTab, setActiveTab] = useState("tracker");
  const [limit, setLimit] = useState(2000);

  // Auth state
  const [loggedIn, setLoggedIn] = useState(false);
  const [authPage, setAuthPage] = useState("login");

  useEffect(() => {
    localStorage.setItem("meals", JSON.stringify(meals));
  }, [meals]);

  const addMeal = (meal) => {
    setMeals([...meals, meal]);
  };

  // LOGIN
  const handleLogin = (email, password) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const found = users.find(
      (u) => u.email === email && u.password === password
    );

    if (found) {
      setLoggedIn(true);
    } else {
      alert("Invalid email or password");
    }
  };

  // SIGNUP
  const handleSignup = (email, password) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const exists = users.find((u) => u.email === email);

    if (exists) {
      alert("User already exists");
      return;
    }

    users.push({ email, password });
    localStorage.setItem("users", JSON.stringify(users));
    setLoggedIn(true);
  };

  // LOGOUT
  const handleLogout = () => {
    setLoggedIn(false);
    setAuthPage("login");
  };

  return (
    <div className="app">
      {!loggedIn ? (
        authPage === "login" ? (
          <Login
            onLogin={handleLogin}
            switchPage={() => setAuthPage("signup")}
          />
        ) : (
          <Signup
            onSignup={handleSignup}
            switchPage={() => setAuthPage("login")}
          />
        )
      ) : (
        <>
          <Header onLogout={handleLogout} />
          <Tabs active={activeTab} setActive={setActiveTab} />

          {activeTab === "tracker" && (
            <>
              <Summary meals={meals} limit={limit} />
              <Meals meals={meals} onAddMeal={addMeal} />
            </>
          )}

          {activeTab === "stats" && <Statistics meals={meals} />}

          {activeTab === "settings" && (
            <Settings limit={limit} setLimit={setLimit} />
          )}
        </>
      )}
    </div>
  );
}

export default App;
