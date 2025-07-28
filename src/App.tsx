import { useState, useEffect } from 'react';
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

// Importando imagens
const chloePerfumeImage = '/chloe.png';
const everestPerfumeBox = '/ws-removebg-preview.png';
const everestPerfumeBottle = '/ww-removebg-preview.png';

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
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-yellow-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-amber-100 via-yellow-50 to-amber-50">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-yellow-400/10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(251,191,36,0.15)_1px,transparent_1px)] bg-[length:20px_20px]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(251,191,36,0.1)_25%,transparent_25%,transparent_50%,rgba(251,191,36,0.1)_50%,rgba(251,191,36,0.1)_75%,transparent_75%,transparent)] bg-[length:10px_10px] opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-16 sm:py-24">
          {/* Seção principal com layout aprimorado */}
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Coluna da imagem */}
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-amber-300 to-yellow-300 rounded-full blur-xl opacity-30 animate-pulse"></div>
                <div className="relative rounded-2xl overflow-hidden shadow-[0_10px_40px_-15px_rgba(251,191,36,0.6)] border-[6px] border-amber-200">
                  <img 
                    src={chloePerfumeImage} 
                    alt="Chloé EDP e Everest Perfume" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = 'https://placehold.co/600x400/gold/white?text=Chloé+EDP';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  <div className="absolute bottom-4 right-4 bg-amber-500/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-white flex items-center gap-1">
                    <Star className="w-3 h-3 fill-white" />
                    PREMIUM
                  </div>
                </div>
              </div>
            </div>
            
            {/* Coluna do texto */}
            <div className="order-1 lg:order-2 text-center lg:text-left">
              <div className="inline-flex items-center justify-center mb-6 bg-gradient-to-r from-amber-500 to-yellow-400 text-white px-6 py-2 rounded-full text-sm font-semibold gap-2 animate-pulse shadow-lg shadow-amber-200/50">
                <Sparkles className="w-4 h-4" />
                OFERTA EXCLUSIVA
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-400 bg-clip-text text-transparent mb-6 drop-shadow-md">
                Chloé EDP
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-700 mb-6">
                A Elegância Atemporal e o Toque Floral que Vão te Conquistar
              </p>
              
              <div className="bg-gradient-to-br from-white to-amber-50/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-amber-200 mb-8 transform hover:scale-[1.02] transition-all duration-300 relative overflow-hidden">
                {/* Elementos decorativos de fundo */}
                <div className="absolute -right-12 -top-12 w-24 h-24 bg-gradient-to-br from-amber-300 to-yellow-300 rounded-full blur-xl opacity-30"></div>
                <div className="absolute -left-12 -bottom-12 w-32 h-32 bg-gradient-to-tr from-amber-200 to-yellow-200 rounded-full blur-xl opacity-20"></div>
                <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-60"></div>
                
                {/* Selo de autenticidade */}
                <div className="absolute -top-3 -right-3 w-24 h-24 rotate-12">
                  <div className="absolute inset-0 bg-amber-500 rounded-full opacity-10 animate-pulse"></div>
                  <div className="absolute top-6 right-6 bg-gradient-to-br from-amber-600 to-yellow-500 rounded-full p-2 shadow-lg transform rotate-12">
                    <Shield className="w-4 h-4 text-white" />
                  </div>
                </div>
                
                {/* Conteúdo principal */}
                <div className="relative">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="h-4 w-4 rounded-full bg-gradient-to-r from-amber-500 to-yellow-400"></div>
                    <p className="text-lg font-semibold text-gray-800">Decant Exclusivo 25ml</p>
                  </div>
                  
                  <div className="flex items-baseline gap-2 mb-4">
                    <div className="text-4xl font-bold bg-gradient-to-r from-amber-700 to-yellow-600 bg-clip-text text-transparent">R$ 90,00</div>
                    <div className="text-sm text-gray-500 line-through">R$ 120,00</div>
                    <div className="bg-amber-100 text-amber-800 text-xs font-bold px-2 py-1 rounded">-25%</div>
                  </div>
                  
                  {/* Avaliações */}
                  <div className="flex items-center gap-1 mb-4">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                      ))}
                    </div>
                    <span className="text-xs text-gray-600 font-medium">(127 avaliações)</span>
                  </div>
                  
                  {/* Benefícios */}
                  <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 text-gray-600 mb-2">
                    <div className="flex items-center gap-1 bg-amber-100 px-3 py-1 rounded-full">
                      <CreditCard className="w-4 h-4 text-amber-700" />
                      <span className="text-sm font-medium">Pagamento na entrega</span>
                    </div>
                    <div className="flex items-center gap-1 bg-amber-100 px-3 py-1 rounded-full">
                      <Truck className="w-4 h-4 text-amber-700" />
                      <span className="text-sm font-medium">Frete GRÁTIS</span>
                    </div>
                  </div>
                  
                  {/* Estoque limitado */}
                  <div className="mt-3 text-xs font-medium text-amber-700 flex items-center gap-1">
                    <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></div>
                    Apenas 12 unidades em estoque
                  </div>
                </div>
              </div>
            </div>
          

          {/* Countdown Timer */}
          <div className="bg-gradient-to-r from-amber-600 to-yellow-500 text-white rounded-2xl p-8 max-w-md mx-auto mb-8 shadow-xl shadow-amber-200/40 border border-amber-300/50 relative overflow-hidden">
            <div className="absolute -left-8 -bottom-8 w-24 h-24 bg-white/10 rounded-full blur-md"></div>
            <div className="absolute -right-8 -top-8 w-24 h-24 bg-white/10 rounded-full blur-md"></div>
            
            <div className="flex items-center justify-center gap-2 mb-4">
              <Clock className="w-5 h-5 text-amber-200" />
              <p className="text-sm font-bold tracking-wider">OFERTA TERMINA EM:</p>
            </div>
            
            <div className="flex justify-center gap-4">
              <div className="text-center bg-amber-700/50 backdrop-blur-sm px-4 py-3 rounded-xl border border-amber-400/30 w-20">
                <div className="text-3xl font-bold">{timeLeft.hours.toString().padStart(2, '0')}</div>
                <div className="text-xs font-medium text-amber-200">HORAS</div>
              </div>
              
              <div className="text-3xl font-bold flex items-center text-amber-300">:</div>
              
              <div className="text-center bg-amber-700/50 backdrop-blur-sm px-4 py-3 rounded-xl border border-amber-400/30 w-20">
                <div className="text-3xl font-bold">{timeLeft.minutes.toString().padStart(2, '0')}</div>
                <div className="text-xs font-medium text-amber-200">MIN</div>
              </div>
              
              <div className="text-3xl font-bold flex items-center text-amber-300">:</div>
              
              <div className="text-center bg-amber-700/50 backdrop-blur-sm px-4 py-3 rounded-xl border border-amber-400/30 w-20">
                <div className="text-3xl font-bold">{timeLeft.seconds.toString().padStart(2, '0')}</div>
                <div className="text-xs font-medium text-amber-200">SEG</div>
              </div>
            </div>
          </div>

            <div className="relative inline-block">
              {/* Efeito de brilho animado ao redor do botão */}
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 rounded-full opacity-70 blur-md animate-pulse"></div>
              
              <a 
                href="https://entrega.logzz.com.br/pay/mem8yxrpk/rnqzj-1-unidadee"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  e.preventDefault();
                  // @ts-ignore - Função global definida no index.html
                  if (window.gtag_report_conversion) {
                    // @ts-ignore
                    window.gtag_report_conversion('https://entrega.logzz.com.br/pay/mem8yxrpk/rnqzj-1-unidadee');
                  } else {
                    window.location.href = 'https://entrega.logzz.com.br/pay/mem8yxrpk/rnqzj-1-unidadee';
                  }
                }}
                className="relative bg-gradient-to-r from-amber-600 to-yellow-500 text-white py-4 px-10 rounded-full text-lg font-bold shadow-lg shadow-amber-500/40 hover:shadow-xl hover:scale-[1.03] transition-all duration-300 flex items-center justify-center gap-3 overflow-hidden group border border-amber-300/80"
              >
                {/* Efeito de brilho no hover */}
                <span className="absolute inset-0 w-full h-full bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                
                {/* Partículas douradas */}
                <span className="absolute inset-0 overflow-hidden opacity-20">
                  <span className="absolute h-2 w-2 rounded-full bg-white top-[20%] left-[10%] animate-pulse"></span>
                  <span className="absolute h-1 w-1 rounded-full bg-white top-[45%] left-[20%] animate-ping"></span>
                  <span className="absolute h-2 w-2 rounded-full bg-white top-[30%] left-[85%] animate-pulse"></span>
                  <span className="absolute h-1 w-1 rounded-full bg-white top-[70%] left-[72%] animate-ping"></span>
                </span>
                
                <span className="relative flex items-center justify-center gap-3">
                  <Zap className="w-5 h-5" />
                  PEDIR AGORA
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-amber-700 via-yellow-600 to-amber-600 bg-clip-text text-transparent mb-4">
              Por que Escolher o Chloé EDP?
            </h2>
            <p className="text-xl text-gray-600">Descubra os benefícios exclusivos da nossa oferta</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 border border-amber-200">
              <div className="bg-gradient-to-r from-amber-500 to-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Entrega em 24h</h3>
              <p className="text-gray-600">Receba seu perfume rapidamente via motoboy</p>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 border border-amber-200">
              <div className="bg-gradient-to-r from-amber-600 to-yellow-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Frete 100% Grátis</h3>
              <p className="text-gray-600">Sem custos adicionais para sua região</p>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 border border-amber-200">
              <div className="bg-gradient-to-r from-amber-700 to-yellow-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Pagamento Seguro</h3>
              <p className="text-gray-600">Pague apenas quando receber o produto</p>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 border border-amber-200">
              <div className="bg-gradient-to-r from-amber-500 to-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Gift className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">100% Original</h3>
              <p className="text-gray-600">Mesma qualidade do frasco original</p>
            </div>
          </div>
        </div>
      </div>

      {/* Product Details */}
      <div className="py-16 bg-gradient-to-br from-amber-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-amber-700 via-yellow-600 to-amber-600 bg-clip-text text-transparent mb-6">
                Uma Assinatura Floral Única
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-amber-500 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                    <Heart className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-2">Fragrância Inconfundível</h3>
                    <p className="text-gray-600">Combina delicadeza da peônia e lichia com sofisticação da rosa, criando um aroma fresco, feminino e levemente atalcado.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-amber-600 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-2">Fixação Elegante</h3>
                    <p className="text-gray-600">Mesma qualidade do frasco original. Nosso processo preserva 100% da fórmula para uma experiência autêntica.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-yellow-500 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
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
              <div className="bg-white rounded-3xl p-8 shadow-2xl border border-amber-200">
                <div className="text-center">
                  {/* Segunda imagem - Everest Perfume Box */}
                  <div className="mb-6 flex justify-center">
                    <img 
                      src={everestPerfumeBox} 
                      alt="Everest Perfume Box" 
                      className="w-32 h-32 object-cover rounded-lg border-2 border-amber-200 shadow-lg"
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = 'https://placehold.co/200x200/gold/white?text=Everest+Box';
                      }}
                    />
                  </div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-amber-700 to-yellow-600 bg-clip-text text-transparent mb-4">Chloé EDP 25ml</h3>
                  <div className="space-y-2 text-left">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Concentração:</span>
                      <span className="font-semibold text-amber-700">Eau de Parfum</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Volume:</span>
                      <span className="font-semibold text-amber-700">25ml</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Frasco:</span>
                      <span className="font-semibold text-amber-700">Vidro com borrifador</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Duração:</span>
                      <span className="font-semibold text-amber-700">6-8 horas</span>
                    </div>
                    
                    {/* Terceira imagem - Everest Perfume Bottle */}
                    <div className="mt-6 flex justify-center">
                      <img 
                        src={everestPerfumeBottle} 
                        alt="Everest Perfume Bottle" 
                        className="w-full max-w-[200px] object-cover rounded-lg border-2 border-amber-200 shadow-lg"
                        onError={(e) => {
                          e.currentTarget.onerror = null;
                          e.currentTarget.src = 'https://placehold.co/200x300/gold/white?text=Everest+Bottle';
                        }}
                      />
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
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-amber-700 via-yellow-600 to-amber-600 bg-clip-text text-transparent mb-4">
              O que é um Decant?
            </h2>
            <p className="text-xl text-gray-600">Sua oportunidade de ter um perfume de luxo</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl p-8 text-center border border-amber-200">
              <div className="bg-gradient-to-r from-amber-600 to-yellow-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <CreditCard className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Economize</h3>
              <p className="text-gray-600">Conheça e teste a fragrância na sua pele antes de se comprometer com o frasco maior.</p>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl p-8 text-center border border-amber-200">
              <div className="bg-gradient-to-r from-amber-500 to-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Package className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Praticidade</h3>
              <p className="text-gray-600">Tamanho de 25ml perfeito para carregar na bolsa, viagens ou nécessaire.</p>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl p-8 text-center border border-amber-200">
              <div className="bg-gradient-to-r from-amber-700 to-yellow-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Inteligência</h3>
              <p className="text-gray-600">Avalie evolução e fixação, se apaixone pelo perfume sem alto custo inicial.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Video Section */}
      <div className="py-16 bg-gradient-to-br from-amber-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <Sparkles className="w-8 h-8 text-amber-500 mr-2" />
              <h2 className="text-3xl font-bold bg-gradient-to-r from-amber-700 to-yellow-600 bg-clip-text text-transparent">Veja o Perfume em Ação</h2>
            </div>
            <p className="text-lg text-gray-600">Confira este vídeo exclusivo sobre o Chloé EDP</p>
          </div>
          
          <div className="flex justify-center">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-amber-200 max-w-md mx-auto">
              {/* Efeito de brilho ao redor do vídeo */}
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 rounded-2xl opacity-50 blur-md"></div>
              
              <div className="relative aspect-[9/16] w-full max-w-[356px] mx-auto">
                <iframe 
                  className="w-full h-full rounded-xl" 
                  src="https://www.youtube.com/embed/YSnELABhbSo" 
                  title="26 de julho de 2025" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen
                ></iframe>
              </div>
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
      <div className="py-16 bg-gradient-to-r from-amber-600 to-yellow-500 text-white">
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
              onClick={(e) => {
                e.preventDefault();
                // @ts-ignore - Função global definida no index.html
                if (typeof window.gtag_report_conversion === 'function') {
                  // @ts-ignore
                  window.gtag_report_conversion('https://entrega.logzz.com.br/pay/mem8yxrpk/rnqzj-1-unidadee');
                } else {
                  window.location.href = 'https://entrega.logzz.com.br/pay/mem8yxrpk/rnqzj-1-unidadee';
                }
              }}
              className="inline-flex items-center gap-3 bg-white text-amber-600 px-10 py-5 rounded-xl font-bold text-xl hover:bg-gray-50 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl border border-amber-300"
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
          <div className="bg-gradient-to-r from-amber-600/20 to-yellow-500/20 rounded-2xl p-8 border border-amber-500/30">
            <div className="flex items-center justify-center mb-4">
              <Sparkles className="w-8 h-8 text-amber-400 mr-2" />
              <span className="text-amber-400 font-bold text-lg">ESTOQUE LIMITADO</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Garanta já o seu!
            </h2>
            
            <p className="text-xl mb-8 opacity-90">
              Os decants de Chloé EDP são um sucesso de vendas. Não perca a chance de ter essa joia da perfumaria mundial.
            </p>
            
            <div className="relative">
              {/* Efeito de brilho animado ao redor do botão */}
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 rounded-full opacity-70 blur-md animate-pulse"></div>
              
              <a 
                href="https://entrega.logzz.com.br/pay/mem8yxrpk/rnqzj-1-unidadee"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  e.preventDefault();
                  // @ts-ignore - Função global definida no index.html
                  if (window.gtag_report_conversion) {
                    // @ts-ignore
                    window.gtag_report_conversion('https://entrega.logzz.com.br/pay/mem8yxrpk/rnqzj-1-unidadee');
                  } else {
                    window.location.href = 'https://entrega.logzz.com.br/pay/mem8yxrpk/rnqzj-1-unidadee';
                  }
                }}
                className="relative bg-gradient-to-r from-amber-600 to-yellow-500 text-white py-5 px-12 rounded-full text-xl font-bold shadow-lg shadow-amber-500/40 hover:shadow-xl hover:scale-[1.03] transition-all duration-300 flex items-center justify-center gap-3 overflow-hidden group border border-amber-300/80"
              >
                {/* Efeito de brilho no hover */}
                <span className="absolute inset-0 w-full h-full bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                
                {/* Partículas douradas */}
                <span className="absolute inset-0 overflow-hidden opacity-20">
                  <span className="absolute h-2 w-2 rounded-full bg-white top-[20%] left-[10%] animate-pulse"></span>
                  <span className="absolute h-1 w-1 rounded-full bg-white top-[45%] left-[20%] animate-ping"></span>
                  <span className="absolute h-2 w-2 rounded-full bg-white top-[30%] left-[85%] animate-pulse"></span>
                  <span className="absolute h-1 w-1 rounded-full bg-white top-[70%] left-[72%] animate-ping"></span>
                </span>
                
                <span className="relative flex items-center justify-center gap-3">
                  <Gift className="w-6 h-6" />
                  COMPRAR AGORA
                  <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </a>
            </div>
            
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