import React from "react";

function Greeting({ name }) {
  return <h1 className="greeting">Добро пожаловать, {name}!</h1>;
}

export default function Welcome() {
  return (
    <section className="welcome">

      <div className="welcome-content">
        <Greeting name="Игрок" />
        <p className="lead">
          Начни своё приключение — исследуй задания, проходи мини-игру и создай профиль.
        </p>
        <a href="/challenges" className="btn start-btn">Начать квест</a>
      </div>
    </section>
  );
}
