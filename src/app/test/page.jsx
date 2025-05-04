'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';

const project = {
  id: '1',
  title: 'Сайт для кавʼярні Brewly',
  images: [
    '/cases/brewly.jpg',
    '/cases/brewly-2.jpg',
    '/cases/brewly-3.jpg',
  ],
  client: 'Brewly',
  category: 'E-commerce',
  duration: '2 місяці',
  role: 'UI/UX, Frontend, Backend',
  problem: 'Клієнт потребував стильного сайту для продажу кави онлайн із підтримкою онлайн-оплат.',
  solution:
    'Ми створили адаптивний e-commerce сайт з інтеграцією Stripe, сучасним дизайном та швидким завантаженням.',
  features: [
    'Онлайн-оплата через Stripe',
    'Сучасний дизайн з Tailwind CSS',
    'Адаптивність для мобільних пристроїв',
  ],
  results: 'Зростання онлайн-замовлень на 47% протягом першого місяця.',
  technologies: ['Next.js', 'Tailwind', 'Stripe'],
  feedback:
    'Webhjerte зробили усе швидко та з душею. Тепер наш сайт не просто гарний — він продає! — CEO Brewly',
};

export default function CaseDetailsPage() {
  const sliderRef = useRef<HTMLDivElement>(null);

  return (
    <section className="bg-white text-gray-900 py-16 px-4 sm:px-6 lg:px-20">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6">{project.title}</h1>
        <p className="text-gray-500 text-sm mb-8">
          Клієнт: <strong>{project.client}</strong> · Роль: {project.role} · Тривалість: {project.duration}
        </p>

        {/* 🔄 Слайдер зображень */}
     {/*    <div className="overflow-x-auto flex gap-4 snap-x snap-mandatory pb-4 mb-10" ref={sliderRef}>
          {project.images.map((src, idx) => (
            <div key={idx} className="relative min-w-[300px] h-[200px] sm:h-[300px] snap-start rounded-2xl overflow-hidden shadow-md">
              <Image
                src={src}
                alt={`Зображення ${idx + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 600px"
              />
            </div>
          ))}
        </div> */}

        {/* 🔍 Опис */}
        <section className="space-y-6 text-gray-800">
          <div>
            <h2 className="text-2xl font-semibold mb-2">Виклик</h2>
            <p>{project.problem}</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">Рішення</h2>
            <p>{project.solution}</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">Ключові фічі</h2>
            <ul className="list-disc list-inside space-y-1">
              {project.features.map((feat, idx) => (
                <li key={idx}>{feat}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">Результат</h2>
            <p>{project.results}</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">Використані технології</h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="text-sm bg-gray-100 border border-gray-300 px-3 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">Відгук клієнта</h2>
            <blockquote className="italic text-gray-600 border-l-4 border-blue-500 pl-4">
              {project.feedback}
            </blockquote>
          </div>
        </section>

        <div className="mt-12">
          <Link href="/cases">
            <span className="text-blue-600 underline text-sm hover:text-blue-800 transition">
              ← Назад до кейсів
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
