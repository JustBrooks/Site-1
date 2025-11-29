import { useState } from "react";
import avatarImg from "../assets/Profile.jpg";



export default function Profile() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section className="page">
      <h2>Профиль игрока</h2>

      <div className="profile-grid">
        <form className="profile-form">
          <label>
            Имя
            <input name="name" value={form.name} onChange={handleChange} />
          </label>

          <label>
            Email
            <input name="email" value={form.email} onChange={handleChange} />
          </label>

          <label>
            Сообщение
            <textarea name="message" value={form.message} onChange={handleChange} />
          </label>

          <button className="btn" type="button" onClick={() => alert("Профиль сохранён (пример)")}>
            Сохранить
          </button>
        </form>

        <div className="profile-preview">
          <img src={avatarImg} 
          alt="avatar" 
          className="avatar" 
          />
          
          <h3>{form.name || "Игрок"}</h3>
          <p><strong>Email:</strong> {form.email || "не указан"}</p>
          <div className="message-box">
            <strong>Сообщение:</strong>
            <p>{form.message || "Здесь появится ваше сообщение..."}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
