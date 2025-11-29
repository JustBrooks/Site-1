import { useState } from "react";

export default function MiniGame() {
  const [score, setScore] = useState(0);
  const [bonusClickCount, setBonusClickCount] = useState(0);
  const [stars, setStars] = useState([]); 

  const addPoint = () => {
    setScore((s) => s + 1 + bonusClickCount);
  };

  const reset = () => {
    setScore(0);
    setBonusClickCount(0);
    setStars([]);
  };

  const buyBonusClick = () => {
    if (score >= 10) {
      setScore((s) => s - 10);
      setBonusClickCount((c) => c + 1);

      const top = Math.random() * 90;
      const left = Math.random() * 120;
      const size = 20 + Math.random() * 30;

      setStars((prev) => [
        ...prev,
        { top, left, size, id: Date.now() + Math.random() }, 
      ]);
    } else {
      alert("Недостаточно очков!");
    }
  };

  return (
    <section className="page">
      <h2>Мини-игра: Набери очки!</h2>
      <p>Кликни на большую кнопку и набери как можно больше очков.</p>

      <div className="game-area" style={{ position: "relative", minHeight: "300px" }}>
        <div className="score">Очки: <strong>{score}</strong></div>

        {stars.map((star) => (
          <div
            key={star.id}
            style={{
              position: "absolute",
              top: `${star.top}%`,
              left: `${star.left}%`,
              fontSize: `${star.size}px`,
              pointerEvents: "none",
              opacity: 0.7,
            }}
          >
            ⭐
          </div>
        ))}

        <button className="big-btn" onClick={addPoint}>Нажми меня</button>

        <div className="feedback">
          {score < 15 ? (
            <p>Попробуй ещё! Нужно набрать 15+ очков.</p>
          ) : (
            <p>Ты молодец! 🎉 Достигнут результат {score}.</p>
          )}
        </div>

        <div className="shop">
          <h3 id="h3">Магазин</h3>
          <button className="btn" onClick={buyBonusClick}>
            Купить +1 клик за 10 очков
          </button>
          <button className="btn" id="btn1" onClick={reset}>Сбросить очки</button>
        </div>

      </div>
    </section>
  );
}
