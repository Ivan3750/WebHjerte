import Image from 'next/image';
import Link from 'next/link';
import Button from '../components/Button';
import Pizzle from "../assets/cases/Pizzle.png"
import Hireon from "../assets/cases/Hireon.png"
import Workout from "../assets/cases/WorkOutMockUp.png"
import ClubHorse from "../assets/cases/Horses.png"
import SmartBank from "../assets/cases/SmartBank.png"
import Callmar from "../assets/cases/Callmar.png"
/* import Monolit from "../assets/cases/Monolit.png"
import WordSee from "../assets/cases/WordSee.png" */
import Ukraine from "../assets/cases/Ukraine.png"

const cases = [
  {
    id: 1,
    title: 'Pizzle – Professionel pizzaria hjemmeside',
    tagline: 'Duften af succesfuldt salg',
    image: Pizzle,
    category: 'E-handel',
    technologies: ['React', 'Tailwind CSS', 'Node.js', 'MySQL', 'Vite'],
  },
  {
    id: 2,
    title: 'Hireon – Jobportal for sundhedssektoren',
    tagline: 'Tilfredse patienter, glade læger',
    image: Hireon,
    category: 'Web App',
    technologies: ['Next.js', 'TypeScript', 'MySQL', 'Express.js'],
  },
  {
    id: 3,
    title: 'Boligfinder EU – Find lejligheder i Europa',
    tagline: 'Design møder funktionalitet',
    image: Hireon,
    category: 'Kreativ platform',
    technologies: ['Next.js', 'Framer Motion', 'PostgreSQL', 'Tailwind CSS'],
  },
  {
    id: 4,
    title: 'ClubHorse – Rideskole og undervisning online',
    tagline: 'Læring gjort let og tilgængelig',
    image: ClubHorse,
    category: 'EdTech',
    technologies: ['HTML5', 'CSS3', 'PHP', 'Bootstrap'],
  },
  {
    id: 5,
    title: 'SmartBank – Bæredygtig bank hjemmeside',
    tagline: 'Digital innovation for grøn fremtid',
    image: SmartBank,
    category: 'Landing Page',
    technologies: ['React', 'CSS Modules', 'PHP', 'MongoDB'],
  },
  {
    id: 6,
    title: 'Workout – Fitnesscenterets digitale ansigt',
    tagline: 'Motivation og muskler på nettet',
    image: Workout,
    category: 'Landing Page',
    technologies: ['HTML5', 'CSS3', 'GSAP', 'JavaScript'],
  },
  {
    id: 7,
    title: 'Monolit – Sikkerhedsskab & pengeskab webshop',
    tagline: 'Sikkerhed starter online',
    image: ClubHorse,
    category: 'Landing Page',
    technologies: ['PHP', 'CSS3', 'SEO Optimering'],
  },
  {
    id: 8,
    title: 'Callmar – Klik og få et opkald',
    tagline: 'Forøg konverteringer med ét klik',
    image: Callmar,
    category: 'Landing Page',
    technologies: ['React', 'GSAP', 'TypeScript', 'Vite'],
  },
];


export default function CasesPage() {
  return (
    <div className="bg-white text-gray-900 py-12 px-4 sm:px-6 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Vores cases</h1>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl">
        Virkelige projekter, der har løst virkelige problemer. Hver case er en historie om forandring, som vi ikke kun har investeret viden i, men også vores sjæl.        </p>

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
                <Button name="Læs mere →"></Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-semibold mb-4">Vil du blive det næste succesfulde projekt?</h2>
          <p className="text-gray-600 mb-6">
          Fortæl os om dit projekt, så gør vi det til en succeshistorie.          </p>
          <Link href="/contact">
            <button className="bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition">
            Skriv en anmodning
                     </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
