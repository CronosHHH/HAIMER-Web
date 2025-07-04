import Header from '@/components/Header';

export default function AboutLawxiaPage() {
  return (
    <div className="min-h-screen flex flex-col bg-primaryBackground">
      <Header variant="landing" />
      <main className="flex-1 flex items-center justify-center">
        <section className="bg-contentBackground rounded-large p-10 max-w-2xl w-full shadow-none mt-8">
          <h2 className="text-3xl font-bold mb-4">Sobre Lawxia</h2>
          <p className="text-bodyText mb-2">Lawxia es un chatbot legal avanzado diseñado para responder preguntas jurídicas y ayudar a los usuarios a navegar el mundo legal con facilidad.</p>
          <h3 className="text-xl font-semibold mt-8 mb-2">Ayuda</h3>
          <ul className="list-disc pl-6 text-bodyText">
            <li>Haz preguntas legales en lenguaje natural.</li>
            <li>Sube documentos para análisis.</li>
            <li>Utiliza el micrófono para consultas por voz.</li>
          </ul>
        </section>
      </main>
    </div>
  );
} 