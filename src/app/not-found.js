import Link from 'next/link';
import Button from './components/Button';
export default function Custom404() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4 text-center">
      <h1 className="text-6xl font-extrabold text-[#00aaff] mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">
        Ups... Denne side findes ikke
      </h2>
      <p className="text-gray-500 mb-6 max-w-md">
        Måske er linket gammelt, eller siden er blevet flyttet. Lad os finde tilbage til det vigtige 
      </p>
      <Link href="/"
        >
        <Button name="Til forsiden">
          
        </Button>
      
      </Link>
    </div>
  );
}
