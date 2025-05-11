import React from "react";

export default function ProjectDetail() {
  return (
    <section className="px-6 py-12 max-w-4xl mx-auto text-gray-800">
      <h1 className="text-4xl font-bold mb-4">Workout With Me</h1>
      <p className="text-lg text-gray-600 mb-2">Фітнес-платформа для онлайн-тренувань</p>

      <div className="mt-6">
        <h2 className="text-2xl font-semibold mb-2">Завдання</h2>
        <p className="text-gray-700">
          Створити зручний та привабливий сайт для користувачів, які шукають тренування онлайн.
        </p>
      </div>

      <div className="mt-6">
        <h2 className="text-2xl font-semibold mb-2">Рішення</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Розроблено адаптивний дизайн для зручного перегляду на різних пристроях</li>
          <li>Інтегровано відео-контент та систему реєстрації користувачів</li>
          <li>Оптимізовано швидкість завантаження сторінок</li>
        </ul>
      </div>

      <div className="mt-6">
        <h2 className="text-2xl font-semibold mb-2">Результати</h2>
        <p className="text-gray-700">
          Збільшення кількості реєстрацій на 35% протягом перших двох місяців після запуску.
        </p>
      </div>

      <div className="mt-6">
        <h2 className="text-2xl font-semibold mb-2">Використані технології</h2>
        <p className="text-gray-700">React, Tailwind CSS, Node.js, MongoDB</p>
      </div>

      <div className="mt-12">
        <a
          href="https://workout.webhjerte.dk"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-xl transition duration-300"
        >
          Перейти на сайт
        </a>
      </div>
    </section>
  );
}
