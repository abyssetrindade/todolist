import { useState } from "react";
import Header from "./layout/header/Header";
import Footer from "./layout/footer/Footer";
import TaskColumn from "./tasks/taskColumn/TaskColumn";
import { STATUS, TASKS } from "./utils/data";

function App() {
  return (
    <>
      <Header />
      <main className="flex gap-4 w-full p-4">
        {STATUS.map((status, index) => <TaskColumn key={index} title={status} tasks={TASKS}/>)}
      </main>
      <Footer />
    </>
  );
}

export default App;
