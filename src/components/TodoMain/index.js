import { useState } from "react";

import TodoHeader from "./TodoHeader/index";
import TodoArea from "./TodoArea/index";
import TodoFooter from "./TodoFooter/index";

let dataList = [
  { value: "Vue Öğren" },
  { value: "React Öğren" },
  { value: "Angular Öğren" },
];

function MainFunc() {
  const [todoData, setTodoData] = useState(dataList);

  return (
    <section className="todoapp">
      <TodoHeader setTodoData={setTodoData} todoData={todoData} />
      <TodoArea todoData={todoData} setTodoData={setTodoData} />
      <TodoFooter todoData={todoData} setTodoData={setTodoData} />
    </section>
  );
}

export default MainFunc;
