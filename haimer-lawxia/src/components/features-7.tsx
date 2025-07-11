"use client";
import { Cpu, Lock, Sparkles, Zap } from 'lucide-react'
import { useEffect, useRef, useState } from 'react';

export function Features() {
    // Visibilidad progresiva de los mensajes
    const [visibleMsg, setVisibleMsg] = useState(0);
    const chatRef = useRef<HTMLDivElement>(null);
    const sectionRef = useRef<HTMLDivElement>(null);
    const totalMsgs = 4;

    useEffect(() => {
      let observer: IntersectionObserver | null = null;
      let timeouts: NodeJS.Timeout[] = [];
      if (sectionRef.current) {
        observer = new window.IntersectionObserver(
          (entries) => {
            if (entries[0].isIntersecting) {
              // Cuando el usuario llega a Feature 7, inicia la animación progresiva
              for (let i = 1; i <= totalMsgs; i++) {
                timeouts.push(
                  setTimeout(() => setVisibleMsg(i), i * 700)
                );
              }
              observer && observer.disconnect();
            }
          },
          { threshold: 0.3 }
        );
        observer.observe(sectionRef.current);
      }
      return () => {
        observer && observer.disconnect();
        timeouts.forEach(clearTimeout);
      };
    }, []);

    return (
        <section ref={sectionRef} className="overflow-hidden py-16 md:py-32">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-12">
                <div className="relative z-10 max-w-2xl">
                    <h2 className="text-4xl font-semibold lg:text-5xl">Built for Scaling teams</h2>
                    <p className="mt-6 text-lg">Empower your team with workflows that adapt to your needs, whether you prefer git synchronization or a AI Agents interface.</p>
                </div>
                <div className="relative -mx-4 rounded-3xl p-3 md:-mx-12 lg:col-span-3">
                    <div className="[perspective:800px]">
                        <div className="[transform:skewY(-2deg)skewX(-2deg)rotateX(6deg)]">
                            <div className="aspect-[88/36] relative flex items-center justify-center bg-transparent">
                                {/* Chat Lawxia Demo */}
                                <div ref={chatRef} className="w-full max-w-4xl mx-auto space-y-8 px-2 md:px-8">
                                  {/* Primer mensaje */}
                                  <div className={`flex justify-end transition-opacity duration-[1500ms] ${visibleMsg >= 1 ? 'opacity-100' : 'opacity-0'}`}>
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
                                  {/* Segundo mensaje */}
                                  <div className={`flex justify-start transition-opacity duration-[1500ms] ${visibleMsg >= 2 ? 'opacity-100' : 'opacity-0'}`}>
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
                                  {/* Tercer mensaje */}
                                  <div className={`flex justify-end transition-opacity duration-[1500ms] ${visibleMsg >= 3 ? 'opacity-100' : 'opacity-0'}`}>
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
                                  {/* Cuarto mensaje */}
                                  <div className={`flex justify-start transition-opacity duration-[1500ms] ${visibleMsg >= 4 ? 'opacity-100' : 'opacity-0'}`}>
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
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative mx-auto grid grid-cols-2 gap-x-3 gap-y-6 sm:gap-8 lg:grid-cols-4">
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <Zap className="size-4" />
                            <h3 className="text-sm font-medium">Faaast</h3>
                        </div>
                        <p className="text-muted-foreground text-sm">It supports an entire helping developers and innovate.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Cpu className="size-4" />
                            <h3 className="text-sm font-medium">Powerful</h3>
                        </div>
                        <p className="text-muted-foreground text-sm">It supports an entire helping developers and businesses.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Lock className="size-4" />
                            <h3 className="text-sm font-medium">Security</h3>
                        </div>
                        <p className="text-muted-foreground text-sm">It supports an helping developers businesses innovate.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Sparkles className="size-4" />

                            <h3 className="text-sm font-medium">AI Powered</h3>
                        </div>
                        <p className="text-muted-foreground text-sm">It supports an helping developers businesses innovate.</p>
                    </div>
                </div>
            </div>
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
        </section>
    )
}
