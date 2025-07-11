"use client";
import Header from '@/components/Header';
import ScrollExpandMedia from '@/components/scroll-expansion-hero';
import { FeaturesSectionDemo } from '@/components/FeaturesSectionDemo';
import { Features } from '@/components/features-7';
import { DemoOne } from '@/components/ui/demo';
import { Footer } from '@/components/footer-section';

const sampleMediaContent = {
  video: {
    src: 'https://me7aitdbxq.ufs.sh/f/2wsMIGDMQRdYuZ5R8ahEEZ4aQK56LizRdfBSqeDMsmUIrJN1',
    poster:
      'https://images.pexels.com/videos/5752729/space-earth-universe-cosmos-5752729.jpeg',
    background:
      'https://me7aitdbxq.ufs.sh/f/2wsMIGDMQRdYMNjMlBUYHaeYpxduXPVNwf8mnFA61L7rkcoS',
    title: 'Desbloquea la Ley. Domina tus Decisiones.',
    date: 'Lawxia',
    scrollToExpand: 'Inteligencia Artificial de ley',
    about: {
      overview:
        'Te presentamos la primera IA que habla un solo idioma: el del Boletín Oficial del Estado. No interpreta, no opina, no se equivoca.',
      conclusion:
        'Es tu acceso directo y sin filtros a la normativa que rige tu vida y tu negocio.',
    },
  },
};

export default function CompanyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-primaryBackground">
      <Header variant="landing" />
      <main className="flex-1 flex flex-col items-center justify-start w-full">
        <section className="w-full">
          <ScrollExpandMedia
            mediaType="video"
            mediaSrc={sampleMediaContent.video.src}
            posterSrc={sampleMediaContent.video.poster}
            bgImageSrc={sampleMediaContent.video.background}
            title={sampleMediaContent.video.title}
            date={sampleMediaContent.video.date}
            scrollToExpand={sampleMediaContent.video.scrollToExpand}
            textBlend
          >
            {/* Contenido eliminado: About This Component y los dos párrafos */}
          </ScrollExpandMedia>
          <FeaturesSectionDemo />
        </section>
      </main>
      <Features />
      <section className="relative z-0 w-full">
        <DemoOne />
      </section>
      <div className="relative z-10 w-full pt-40 pb-16 bg-primaryBackground">
        <Footer />
      </div>
    </div>
  );
} 