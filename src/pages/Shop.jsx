import { useState } from "react";

export default function Shop() {
  const [coins, setCoins] = useState(300); // стартовые монеты
  const [inventory, setInventory] = useState([]);

  const items = [
    { id: 1, name: "⭐ Малый звёздный набор", price: 15 },
    { id: 2, name: "🌌 Набор галактического уровня", price: 35 },
    { id: 3, name: "🚀 Космический премиум-пак", price: 60 },
    { id: 4, name: "🛸 Ультра-межзвёздный набор", price: 120 },
  ];

  const buyItem = (item) => {
    if (coins >= item.price) {
      setCoins((c) => c - item.price);
      setInventory((inv) => [...inv, item.name]);
    } else {
      alert("Недостаточно монет!");
    }
  };

  return (
    <section className="page">
      <h2 style={{ textAlign: "center", color: "var(--accent)" }}>
        🛒 Магазин космических наборов
      </h2>

      <p style={{ textAlign: "center" }}>
        💰 Монеты: <strong>{coins}</strong>
      </p>

      <div className="shop-grid">
        {items.map((item) => (
          <div key={item.id} className="shop-card">
            <h3>{item.name}</h3>
            <p>Цена: {item.price} монет</p>
            <button className="btn" onClick={() => buyItem(item)}>
              Купить
            </button>
          </div>
        ))}
      </div>

      <div className="inventory-block">
        <h3>🎒 Твоя инвентаризация:</h3>

        {inventory.length === 0 ? (
          <p>Пока пусто...</p>
        ) : (
          <ul>
            {inventory.map((item, i) => (
              <li key={i}>• {item}</li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
