import "./App.css";
import React, { useState } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import About from "./components/About";
import TextForm from "./components/TextForm";
import Navbar from "./components/Navbar";
import Alert from "./components/Alert";

function App() {
  const [mode, setMode] = useState("light");
  const [modeText, setModeText] = useState("Enable Dark Mode");
  const [alert, setAlert] = useState(null);

  const showAlert = (msg, type) => {
    setAlert({
      msg: msg,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };

  const toggleBtn = () => {
    if (mode === "dark") {
      setMode("light");
      showAlert("Mode changed to Light", "success");
      setModeText("Enable Dark Mode");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "#212529";
    } else {
      setMode("dark");
      showAlert("Mode changed to Dark", "success");
      setModeText("Disable Dark Mode");
      document.body.style.backgroundColor = "#42474d";
      document.body.style.color = "white";
    }
  };
  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <><Navbar
  //     title="About"
  //     name="TextUtils"
  //     mode={mode}
  //     toggleBtn={toggleBtn}
  //     modeText={modeText}
  //   /><Alert alert={alert}/><div className="container my-3"><TextForm heading="Enter the text to analyze below" showAlert={showAlert} mode={mode}/></div></>,
  //   },
  //   {
  //     path: "/about",
  //     element: <><Navbar
  //     title="About"
  //     name="TextUtils"
  //     mode={mode}
  //     toggleBtn={toggleBtn}
  //     modeText={modeText}
  //   /><Alert alert={alert}/><div className="container my-3"><About /></div></>,
  //   },
  // ]);

  return (
    <div>
      <Navbar
        title="About"
        name="TextUtils"
        mode={mode}
        toggleBtn={toggleBtn}
        modeText={modeText}
      />
      <Alert alert={alert} />
      <div className="container my-3">
        <TextForm
          heading="Enter the text to analyze below"
          showAlert={showAlert}
          mode={mode}
        />
        {/* <About /> */}
      </div>
    </div>

    // <RouterProvider router={router}/>

    // <Router>
    //   <div>
    //     <Navbar
    //       title="About"
    //       name="TextUtils"
    //       mode={mode}
    //       toggleBtn={toggleBtn}
    //       modeText={modeText}
    //     />
    //     <Alert alert={alert} />
    //     <div className="container my-3">
    //       <Routes>
    //         <Route
    //           path="/"
    //           element={<TextForm heading="Enter the text to analyze below" showAlert={showAlert} mode={mode} />}
    //         />
    //         <Route path="/about" element={<About />} />
    //       </Routes>
    //     </div>
    //   </div>
    // </Router>
  );
}

export default App;
