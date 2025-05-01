import Image from 'next/image';
import Link from 'next/link';

const cases = [
  {
    id: 1,
    title: 'Сайт для кавʼярні Brewly',
    tagline: 'Аромат, що продає',
    image: '/cases/brewly.jpg',
    category: 'E-commerce',
    technologies: ['Next.js', 'Tailwind', 'Stripe'],
  },
  {
    id: 2,
    title: 'CRM-система для клініки VitaMed',
    tagline: 'Пацієнти задоволені – лікарі теж',
    image: '/cases/vitamed.jpg',
    category: 'Web App',
    technologies: ['React', 'MongoDB', 'Node.js'],
  },
  {
    id: 3,
    title: 'Портфоліо для фотографа LightWay',
    tagline: 'Мистецтво в кожному пікселі',
    image: '/cases/lightway.jpg',
    category: 'Creative',
    technologies: ['Next.js', 'Framer Motion'],
  },
  {
    id: 4,
    title: 'Онлайн-платформа для курсів',
    tagline: 'Знання, що доступні кожному',
    image: '/cases/learnhub.jpg',
    category: 'EdTech',
    technologies: ['Next.js', 'Supabase', 'Tailwind'],
  },
  {
    id: 5,
    title: 'Landing page для стартапу Greenify',
    tagline: 'Технології для екології',
    image: '/cases/greenify.jpg',
    category: 'Landing',
    technologies: ['HTML', 'CSS', 'GSAP'],
  },
];

export default function CasesPage() {
  return (
    <div className="bg-white text-gray-900 py-12 px-4 sm:px-6 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Наші кейси</h1>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl">
          Реальні проєкти, які вирішили реальні проблеми. Кожен кейс — це історія змін, в яку ми вклали не лише знання, а й душу.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {cases.map((project) => (
            <div
              key={project.id}
              className="bg-gray-100 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300"
            >
              <div className="relative h-56 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  className="hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-sm text-gray-500 mb-2">{project.tagline}</p>
                <div className="flex flex-wrap gap-2 mb-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs bg-white border border-gray-300 px-2 py-0.5 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <Link href={`/cases/${project.id}`}>
                  <span className="text-blue-600 hover:underline text-sm font-medium">
                    Детальніше →
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-semibold mb-4">Хочете стати наступним кейсом?</h2>
          <p className="text-gray-600 mb-6">
            Розкажіть нам про свій проєкт — і ми перетворимо його на історію успіху.
          </p>
          <Link href="/contact">
            <button className="bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition">
              Залишити заявку
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
