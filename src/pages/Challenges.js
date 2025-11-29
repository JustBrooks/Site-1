import { useState, useEffect } from "react";

export default function Challenges() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved
      ? JSON.parse(saved)
      : [
          { text: "Создать полноценный сайт", completed: false },
          { text: "Сдать экзамен React", completed: false },
          { text: "Сделать еще больше сайтов", completed: false },
          { text: "Создать полноценный 5 сайтов", completed: false },
          { text: "Быть лучшим - дальше успех", completed: false },
        ];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const toggle = (index) => {
    setTasks((prev) =>
      prev.map((t, i) =>
        i === index ? { ...t, completed: !t.completed } : t
      )
    );
  };

  const resetAll = () => {
    setTasks((prev) => prev.map((t) => ({ ...t, completed: false })));
  };

  return (
    <section className="page">
      <h2>Задания</h2>
      <p>Отмечай выполненные задания — текст будет зачёркнут.</p>

      <ul className="task-list">
        {tasks.map((task, idx) => (
          <li key={idx} className="task-item">
            <button className="task-toggle" onClick={() => toggle(idx)}>
              {task.completed ? "↺" : "✓"}
            </button>
            <span style={{ textDecoration: task.completed ? "line-through" : "none" }}>
              {task.text}
            </span>
          </li>
        ))}
      </ul>

      <div style={{ marginTop: 16 }}>
        <button className="btn" onClick={resetAll}>Сбросить</button>
      </div>
    </section>
  );
}
