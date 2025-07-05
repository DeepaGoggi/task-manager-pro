import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loadTask } from "./redux/taskSlice";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import AddTask from "./pages/AddTask";
import EditTask from "./pages/EditTask";
import NotFound from "./pages/NotFound";

function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const loaded = useSelector((state) => state.task.loaded);
  useEffect(() => {
    dispatch(loadTask());
  }, [dispatch]);

  if (!loaded) return <div className="text-center mt-5">Loading...</div>;

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Navigate to={isLoggedIn ? "/dashboard" : "/login"} />}
        />
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={isLoggedIn ? <Dashboard /> : <Navigate to="/login" />}
        />
        <Route
          path="/add"
          element={isLoggedIn ? <AddTask /> : <Navigate to="/login" />}
        />
        <Route
          path="/edit/:id"
          element={isLoggedIn ? <EditTask /> : <Navigate to="/login" />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
