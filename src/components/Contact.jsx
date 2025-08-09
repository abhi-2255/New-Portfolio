// src/App.tsx
import React from "react";
import Contact from "./components/Contact";

const App = () => {
    return (
        <div>
            <h1 className="text-3xl text-center mt-10">Alex's Portfolio</h1>
            {/* Other sections */}
            <Contact />
        </div>
    );
};

export default App;
