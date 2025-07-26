import React, { useState, useEffect } from 'react';
import { 
  Star, 
  Heart, 
  Sparkles, 
  Clock, 
  Truck, 
  CreditCard, 
  MapPin, 
  Phone, 
  Package,
  ChevronRight,
  Gift,
  Shield,
  Zap
} from 'lucide-react';

function App() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 47,
    seconds: 32
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const cities = [
    "São Paulo", "Guarulhos", "Santo André", "São Bernardo do Campo", 
    "São Caetano do Sul", "Diadema", "Mauá", "Osasco", "Barueri", 
    "Cotia", "Carapicuíba", "Jandira", "Itapevi", "Embu das Artes",
    "Taboão da Serra", "Arujá", "Ferraz de Vasconcelos", "Mogi das Cruzes",
    "Suzano", "Poá", "Itaquaquecetuba", "Jundiaí", "Franco da Rocha",
    "Francisco Morato", "Caieiras", "Cajamar", "Campo Limpo Paulista", "Mairiporã"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-amber-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-pink-100 via-rose-50 to-amber-50">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-amber-400/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-16 sm:py-24">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-gradient-to-r from-pink-500 to-rose-400 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center gap-2 animate-pulse">
                <Sparkles className="w-4 h-4" />
                OFERTA EXCLUSIVA
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-pink-600 via-rose-500 to-amber-500 bg-clip-text text-transparent mb-6">
              Chloé EDP
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-700 mb-4">
              A Elegância Atemporal e o Toque Floral que Vão te Conquistar
            </p>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-pink-100 max-w-md mx-auto mb-8">
              <p className="text-lg font-semibold text-gray-800 mb-2">Decant Exclusivo 25ml</p>
              <div className="text-3xl font-bold text-pink-600 mb-2">R$ 90,00</div>
              <div className="text-sm text-gray-600">Pagamento na entrega • Frete GRÁTIS</div>
            </div>

            {/* Countdown Timer */}
            <div className="bg-gradient-to-r from-pink-500 to-rose-400 text-white rounded-2xl p-6 max-w-md mx-auto mb-8">
              <p className="text-sm font-semibold mb-2">OFERTA TERMINA EM:</p>
              <div className="flex justify-center gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold">{timeLeft.hours.toString().padStart(2, '0')}</div>
                  <div className="text-xs">HORAS</div>
                </div>
                <div className="text-2xl font-bold">:</div>
                <div className="text-center">
                  <div className="text-2xl font-bold">{timeLeft.minutes.toString().padStart(2, '0')}</div>
                  <div className="text-xs">MIN</div>
                </div>
                <div className="text-2xl font-bold">:</div>
                <div className="text-center">
                  <div className="text-2xl font-bold">{timeLeft.seconds.toString().padStart(2, '0')}</div>
                  <div className="text-xs">SEG</div>
                </div>
              </div>
            </div>

            <a 
              href="https://entrega.logzz.com.br/pay/mem8yxrpk/rnqzj-1-unidadee"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-pink-500 to-rose-400 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-pink-600 hover:to-rose-500 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Zap className="w-6 h-6" />
              PEDIR AGORA
              <ChevronRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Por que Escolher o Chloé EDP?
            </h2>
            <p className="text-xl text-gray-600">Descubra os benefícios exclusivos da nossa oferta</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 border border-pink-100">
              <div className="bg-gradient-to-r from-pink-500 to-rose-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Entrega em 24h</h3>
              <p className="text-gray-600">Receba seu perfume rapidamente via motoboy</p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 border border-green-100">
              <div className="bg-gradient-to-r from-green-500 to-emerald-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Frete 100% Grátis</h3>
              <p className="text-gray-600">Sem custos adicionais para sua região</p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 border border-blue-100">
              <div className="bg-gradient-to-r from-blue-500 to-cyan-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Pagamento Seguro</h3>
              <p className="text-gray-600">Pague apenas quando receber o produto</p>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 border border-amber-100">
              <div className="bg-gradient-to-r from-amber-500 to-orange-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Gift className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">100% Original</h3>
              <p className="text-gray-600">Mesma qualidade do frasco original</p>
            </div>
          </div>
        </div>
      </div>

      {/* Product Details */}
      <div className="py-16 bg-gradient-to-br from-pink-50 to-rose-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Uma Assinatura Floral Única
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-pink-500 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                    <Heart className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-2">Fragrância Inconfundível</h3>
                    <p className="text-gray-600">Combina delicadeza da peônia e lichia com sofisticação da rosa, criando um aroma fresco, feminino e levemente atalcado.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-rose-500 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-2">Fixação Elegante</h3>
                    <p className="text-gray-600">Mesma qualidade do frasco original. Nosso processo preserva 100% da fórmula para uma experiência autêntica.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-amber-500 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                    <Star className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-2">Versatilidade Total</h3>
                    <p className="text-gray-600">Perfeito para dia a dia, trabalho ou encontros românticos. Elegância discreta para qualquer ocasião.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-3xl p-8 shadow-2xl border border-pink-100">
                <div className="text-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-pink-200 to-rose-200 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <Package className="w-16 h-16 text-pink-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Chloé EDP 25ml</h3>
                  <div className="space-y-2 text-left">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Concentração:</span>
                      <span className="font-semibold">Eau de Parfum</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Volume:</span>
                      <span className="font-semibold">25ml</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Frasco:</span>
                      <span className="font-semibold">Vidro com borrifador</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Duração:</span>
                      <span className="font-semibold">6-8 horas</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* What is Decant */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              O que é um Decant?
            </h2>
            <p className="text-xl text-gray-600">Sua oportunidade de ter um perfume de luxo</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 text-center border border-blue-100">
              <div className="bg-gradient-to-r from-blue-500 to-cyan-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <CreditCard className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Economize</h3>
              <p className="text-gray-600">Conheça e teste a fragrância na sua pele antes de se comprometer com o frasco maior.</p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 text-center border border-green-100">
              <div className="bg-gradient-to-r from-green-500 to-emerald-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Package className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Praticidade</h3>
              <p className="text-gray-600">Tamanho de 25ml perfeito para carregar na bolsa, viagens ou nécessaire.</p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 text-center border border-purple-100">
              <div className="bg-gradient-to-r from-purple-500 to-pink-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Inteligência</h3>
              <p className="text-gray-600">Avalie evolução e fixação, se apaixone pelo perfume sem alto custo inicial.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Coverage Area */}
      <div className="py-16 bg-gradient-to-br from-gray-50 to-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <MapPin className="w-8 h-8 text-pink-500 mr-2" />
              <h2 className="text-3xl font-bold text-gray-800">Área de Entrega</h2>
            </div>
            <p className="text-lg text-gray-600">Entregamos APENAS nas seguintes cidades:</p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {cities.map((city, index) => (
                <div key={index} className="flex items-center gap-2 p-2 rounded-lg hover:bg-pink-50 transition-colors">
                  <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                  <span className="text-gray-700">{city}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* How to Buy */}
      <div className="py-16 bg-gradient-to-r from-pink-500 to-rose-400 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Como Comprar AGORA
            </h2>
            <p className="text-xl opacity-90">Processo simples, rápido e 100% seguro!</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="bg-white/20 backdrop-blur-sm w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-lg font-bold mb-2">Clique e Informe</h3>
              <p className="opacity-90">Clique no link e informe seu endereço de entrega</p>
            </div>

            <div className="text-center">
              <div className="bg-white/20 backdrop-blur-sm w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-lg font-bold mb-2">Confirmação</h3>
              <p className="opacity-90">Nossa equipe confirma e organiza a rota de entrega</p>
            </div>

            <div className="text-center">
              <div className="bg-white/20 backdrop-blur-sm w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-lg font-bold mb-2">Receba e Pague</h3>
              <p className="opacity-90">Receba em 24h e pague na entrega. Simples assim!</p>
            </div>
          </div>

          <div className="text-center">
            <a 
              href="https://entrega.logzz.com.br/pay/mem8yxrpk/rnqzj-1-unidadee"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-pink-600 px-10 py-5 rounded-xl font-bold text-xl hover:bg-gray-50 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Zap className="w-6 h-6" />
              FAZER PEDIDO AGORA
              <ChevronRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Support */}
      <div className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Precisa de Ajuda?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Nosso suporte está sempre disponível para esclarecer suas dúvidas
          </p>
          
          <a 
            href="https://wa.me/5522992613485?text=Ola!%20Vim%20do%20an%C3%BAncio%20no%20google%2C%20tenho%20interesse%20no%20perfume%20Chlo%C3%A9%20edp%20%2025%20ml."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-green-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <Phone className="w-6 h-6" />
            FALAR NO WHATSAPP
          </a>
        </div>
      </div>

      {/* Final CTA */}
      <div className="py-16 bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-gradient-to-r from-pink-500/20 to-rose-400/20 rounded-2xl p-8 border border-pink-500/30">
            <div className="flex items-center justify-center mb-4">
              <Sparkles className="w-8 h-8 text-pink-400 mr-2" />
              <span className="text-pink-400 font-bold text-lg">ESTOQUE LIMITADO</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Garanta já o seu!
            </h2>
            
            <p className="text-xl mb-8 opacity-90">
              Os decants de Chloé EDP são um sucesso de vendas. Não perca a chance de ter essa joia da perfumaria mundial.
            </p>
            
            <a 
              href="https://entrega.logzz.com.br/pay/mem8yxrpk/rnqzj-1-unidadee"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-pink-500 to-rose-400 text-white px-10 py-5 rounded-xl font-bold text-xl hover:from-pink-600 hover:to-rose-500 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Gift className="w-6 h-6" />
              QUERO MEU CHLOÉ AGORA
              <ChevronRight className="w-5 h-5" />
            </a>
            
            <p className="text-sm mt-4 opacity-75">
              Clique agora e sinta a elegância atemporal de Chloé ainda amanhã! 💥
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;