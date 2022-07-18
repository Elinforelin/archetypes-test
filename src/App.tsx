import React from "react";
import { useSelector } from "react-redux";
import "./App.css";
import { ArchetypePage } from "./pages/ArchetypesPage";
import { QuestionsPage } from "./pages/QuestionsPage.tsx";
import { selectIsFinished } from "./store/testSlice/selector";

function App() {
  const isFinished = useSelector(selectIsFinished);

  return (
    <div className="App">
      {isFinished ? <ArchetypePage /> : <QuestionsPage />}
    </div>
  );
}

export default App;
