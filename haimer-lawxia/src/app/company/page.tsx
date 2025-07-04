import Header from '@/components/Header';

export default function CompanyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-primaryBackground">
      <Header variant="landing" />
      <main className="flex-1 flex items-center justify-center">
        <section className="bg-contentBackground rounded-large p-10 max-w-2xl w-full shadow-none mt-8">
          <h2 className="text-3xl font-bold mb-4">Sobre Haimer</h2>
          <p className="text-bodyText mb-2">Haimer es una empresa dedicada a la innovación legal y tecnológica, facilitando el acceso a la ley a través de soluciones inteligentes como Lawxia.</p>
          <p className="text-textSecondary">Más información próximamente.</p>
        </section>
      </main>
    </div>
  );
} 