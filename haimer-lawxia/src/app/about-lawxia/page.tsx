"use client";
import Header from '@/components/Header';

export default function AboutLawxiaPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header variant="landing" />
      <main className="flex-1 p-4">
        <div className="max-w-4xl mx-auto mt-8 space-y-8">
          {/* Mensajes de la conversación */}
          
          {/* Primer mensaje - siempre visible */}
          <div className="flex justify-end">
            <div className="flex items-center gap-3 justify-end w-full">
              <div className="bg-interactiveBlue text-white rounded-large px-4 py-3 max-w-[80%] shadow-[0_4px_24px_rgba(0,0,0,0.85)] font-thin order-2">
                <p className="text-sm">
                  Quiero alquilar mi piso vacío. ¿Qué necesito saber sobre la duración del contrato?
                </p>
              </div>
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-black/60 flex items-center justify-center order-1">
                <img src="/images/user-icon.svg" alt="Usuario" className="h-7 w-7 object-contain" />
              </div>
            </div>
          </div>

          {/* Segundo mensaje - aparece con scroll */}
          <div className="flex justify-start opacity-0 animate-fade-in-delayed">
            <div className="flex items-center gap-3">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-black/60 flex items-center justify-center">
                <img src="/images/lawxia-white-logo.png" alt="Lawxia Logo" className="h-7 w-7 object-contain" />
              </div>
              <div className="bg-componentSubtle text-textPrimary rounded-large px-4 py-3 max-w-[80%] shadow-[0_4px_24px_rgba(0,0,0,0.85)] font-thin">
                <p className="text-sm mb-3">
                  Para un contrato de alquiler de vivienda habitual, la duración inicial es pactada libremente por ambas partes. Sin embargo, si el plazo es inferior a 5 años (o 7 años si el propietario es una empresa), el contrato se prorrogará anualmente de forma obligatoria hasta alcanzar esa duración mínima, a menos que el inquilino manifieste su voluntad de no renovar.
                </p>
                <div className="bg-black/20 rounded-medium p-3 text-xs">
                  <p className="font-semibold mb-1">Fuente: Ley 29/1994, de 24 de noviembre, de Arrendamientos Urbanos, Artículo 9.1.</p>
                  <p className="italic">
                    "La duración del arrendamiento será libremente pactada por las partes. Si esta fuera inferior a cinco años, o inferior a siete años si el arrendador fuese persona jurídica, llegado el día del vencimiento del contrato, este se prorrogará obligatoriamente por plazos anuales hasta que el arrendamiento alcance una duración mínima de cinco años, o de siete años si el arrendador fuese persona jurídica..."
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Tercer mensaje - aparece con más scroll */}
          <div className="flex justify-end opacity-0 animate-fade-in-more-delayed">
            <div className="flex items-center gap-3 justify-end w-full">
              <div className="bg-interactiveBlue text-white rounded-large px-4 py-3 max-w-[80%] shadow-[0_4px_24px_rgba(0,0,0,0.85)] font-thin order-2">
                <p className="text-sm">
                  Entendido. ¿Y puedo pedir una fianza de tres meses para cubrirme?
                </p>
              </div>
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-black/60 flex items-center justify-center order-1">
                <img src="/images/user-icon.svg" alt="Usuario" className="h-7 w-7 object-contain" />
              </div>
            </div>
          </div>

          {/* Cuarto mensaje - aparece con aún más scroll */}
          <div className="flex justify-start opacity-0 animate-fade-in-most-delayed">
            <div className="flex items-center gap-3">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-black/60 flex items-center justify-center">
                <img src="/images/lawxia-white-logo.png" alt="Lawxia Logo" className="h-7 w-7 object-contain" />
              </div>
              <div className="bg-componentSubtle text-textPrimary rounded-large px-4 py-3 max-w-[80%] shadow-[0_4px_24px_rgba(0,0,0,0.85)] font-thin">
                <p className="text-sm mb-3">
                  No. La ley establece que la fianza en metálico será de una mensualidad de renta en el arrendamiento de viviendas. Es posible pactar garantías adicionales (como un depósito o aval), pero la fianza obligatoria no puede exceder ese importe.
                </p>
                <div className="bg-black/20 rounded-medium p-3 text-xs">
                  <p className="font-semibold mb-1">Fuente: Ley 29/1994, de 24 de noviembre, de Arrendamientos Urbanos, Artículo 36.1.</p>
                  <p className="italic">
                    "A la celebración del contrato será obligatoria la exigencia y prestación de fianza en metálico en cantidad equivalente a una mensualidad de renta en el arrendamiento de viviendas y de dos en el arrendamiento para uso distinto del de vivienda."
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Espacio adicional para scroll */}
          <div className="h-96"></div>
        </div>
      </main>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-delayed {
          animation: fadeIn 0.8s ease-out 0.5s forwards;
        }
        
        .animate-fade-in-more-delayed {
          animation: fadeIn 0.8s ease-out 1s forwards;
        }
        
        .animate-fade-in-most-delayed {
          animation: fadeIn 0.8s ease-out 1.5s forwards;
        }
      `}</style>
    </div>
  );
} 