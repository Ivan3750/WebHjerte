"use client"

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

const caseDetails = [
  {
    id: '1',
    title: 'Сайт для кавʼярні Brewly',
    image: '/cases/brewly.jpg',
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
      'Адаптивність для мобільних пристроїв'
    ],
    results: 'Зростання онлайн-замовлень на 47% протягом першого місяця.',
    technologies: ['Next.js', 'Tailwind', 'Stripe'],
    feedback: 'Webhjerte зробили усе швидко та з душею. Тепер наш сайт не просто гарний — він продає! — CEO Brewly'
  },
  // ... інші кейси можна додати за потреби
];

export default function CaseDetailsPage() {

  const project = {
    id: '1',
    title: 'Сайт для кавʼярні Brewly',
    image: '/cases/brewly.jpg',
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
      'Адаптивність для мобільних пристроїв'
    ],
    results: 'Зростання онлайн-замовлень на 47% протягом першого місяця.',
    technologies: ['Next.js', 'Tailwind', 'Stripe'],
    feedback: 'Webhjerte зробили усе швидко та з душею. Тепер наш сайт не просто гарний — він продає! — CEO Brewly'
  }



  return (
    <div className="bg-white text-gray-900 py-12 px-4 sm:px-6 lg:px-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
        <p className="text-gray-500 text-sm mb-8">Клієнт: {project.client} · Роль: {project.role} · Тривалість: {project.duration}</p>

        <div className="relative w-full h-72 rounded-2xl overflow-hidden mb-10">
          <Image src={project.image} alt={project.title} layout="fill" objectFit="cover" />
        </div>

        <h2 className="text-2xl font-semibold mb-2">Виклик</h2>
        <p className="mb-6 text-gray-700">{project.problem}</p>

        <h2 className="text-2xl font-semibold mb-2">Рішення</h2>
        <p className="mb-6 text-gray-700">{project.solution}</p>

        <h2 className="text-2xl font-semibold mb-2">Ключові фічі</h2>
        <ul className="list-disc list-inside text-gray-700 mb-6">
          {project.features.map((feat, idx) => (
            <li key={idx}>{feat}</li>
          ))}
        </ul>

        <h2 className="text-2xl font-semibold mb-2">Результат</h2>
        <p className="mb-6 text-gray-700">{project.results}</p>

        <h2 className="text-2xl font-semibold mb-2">Використані технології</h2>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech, idx) => (
            <span key={idx} className="text-xs bg-gray-100 border border-gray-300 px-2 py-1 rounded-full">
              {tech}
            </span>
          ))}
        </div>

        <h2 className="text-2xl font-semibold mb-2">Відгук клієнта</h2>
        <blockquote className="italic text-gray-600 border-l-4 border-blue-500 pl-4">{project.feedback}</blockquote>

        <div className="mt-10">
          <Link href="/cases">
            <span className="text-blue-600 underline text-sm">← Назад до кейсів</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
