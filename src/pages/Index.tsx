import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative overflow-hidden gradient-bg">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-primary/30"></div>
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="floating absolute top-10 left-10 w-20 h-20 bg-primary/30 rounded-full blur-xl"></div>
            <div className="floating absolute top-32 right-20 w-32 h-32 bg-accent/20 rounded-full blur-xl" style={{animationDelay: '1s'}}></div>
            <div className="floating absolute bottom-20 left-1/4 w-16 h-16 bg-primary/40 rounded-full blur-xl" style={{animationDelay: '2s'}}></div>
          </div>
        </div>
        <div className="relative container mx-auto px-4 py-24">
          <div className="max-w-5xl mx-auto text-center">
            <Badge className="mb-8 bg-accent text-accent-foreground font-bold text-lg px-6 py-2 neon-glow shimmer">
              🔥 СКИДКА 50% - ТОЛЬКО СЕГОДНЯ!
            </Badge>
            <h1 className="text-6xl md:text-7xl font-black mb-8 leading-tight">
              <span className="gradient-text">Публикуй до 1400</span><br/>
              <span className="text-foreground">статей в сутки</span>
            </h1>
            <p className="text-2xl md:text-3xl mb-10 text-muted-foreground font-medium">
              и получай <span className="gradient-text font-bold">+1000 заявок</span> на автомате
            </p>
            <div className="mb-12 glass-effect rounded-2xl p-8 backdrop-blur-md">
              <h2 className="text-4xl font-bold mb-6 gradient-text">Генератор трафика 1.0 для WordPress</h2>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                ChatGPT в WordPress - автоматическая генерация и публикация SEO-статей за 5 минут. 
                Увеличьте органический трафик в 10 раз! Создавайте сетку сайтов без ограничений!
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-xl px-12 py-6 neon-glow hover-scale shimmer">
                🚀 ЗАПУСТИТЬ БЕСПЛАТНЫЙ ТРАФИК
              </Button>
              <Button size="lg" variant="outline" className="glass-effect border-primary/30 text-foreground hover:bg-primary/10 text-lg px-8 py-6 hover-scale">
                Посмотреть демо
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover-scale glass-effect border-primary/20">
              <CardContent className="p-8">
                <div className="neon-glow rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center bg-primary/10">
                  <Icon name="Zap" size={48} className="text-primary" />
                </div>
                <h3 className="font-bold text-xl mb-3 gradient-text">Публикуй до 1400 статей в сутки</h3>
                <p className="text-muted-foreground">Невероятная производительность</p>
              </CardContent>
            </Card>
            <Card className="text-center hover-scale glass-effect border-primary/20">
              <CardContent className="p-8">
                <div className="neon-glow rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center bg-accent/10">
                  <Icon name="Clock" size={48} className="text-accent" />
                </div>
                <h3 className="font-bold text-xl mb-3 gradient-text">Экономь часы работы с автопостингом</h3>
                <p className="text-muted-foreground">Полная автоматизация процесса</p>
              </CardContent>
            </Card>
            <Card className="text-center hover-scale glass-effect border-primary/20">
              <CardContent className="p-8">
                <div className="neon-glow rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center bg-primary/10">
                  <Icon name="TrendingUp" size={48} className="text-primary" />
                </div>
                <h3 className="font-bold text-xl mb-3 gradient-text">Улучши SEO и привлекай новых клиентов</h3>
                <p className="text-muted-foreground">Рост органического трафика</p>
              </CardContent>
            </Card>
            <Card className="text-center hover-scale glass-effect border-primary/20">
              <CardContent className="p-8">
                <div className="neon-glow rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center bg-accent/10">
                  <Icon name="CreditCard" size={48} className="text-accent" />
                </div>
                <h3 className="font-bold text-xl mb-3 gradient-text">Разовая оплата — пожизненные обновления</h3>
                <p className="text-muted-foreground">Никаких подписок</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 gradient-bg">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-black text-center mb-16 gradient-text">Что внутри?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover-scale glass-effect border-primary/20">
              <CardContent className="p-8">
                <Icon name="Bot" size={40} className="mb-6 text-primary neon-glow" />
                <h3 className="font-bold text-xl mb-4 gradient-text">✅ Автогенерация контента через OpenAI</h3>
                <p className="text-muted-foreground">Умный ИИ создает уникальный контент</p>
              </CardContent>
            </Card>
            <Card className="hover-scale glass-effect border-primary/20">
              <CardContent className="p-8">
                <Icon name="Send" size={40} className="mb-6 text-accent neon-glow" />
                <h3 className="font-bold text-xl mb-4 gradient-text">✅ Автопубликация — статьи появляются без участия</h3>
                <p className="text-muted-foreground">Работает 24/7 без вашего участия</p>
              </CardContent>
            </Card>
            <Card className="hover-scale glass-effect border-primary/20">
              <CardContent className="p-8">
                <Icon name="Settings" size={40} className="mb-6 text-primary neon-glow" />
                <h3 className="font-bold text-xl mb-4 gradient-text">✅ Настраиваемые интервалы публикации</h3>
                <p className="text-muted-foreground">Полный контроль частоты постинга</p>
              </CardContent>
            </Card>
            <Card className="hover-scale glass-effect border-primary/20">
              <CardContent className="p-8">
                <Icon name="Shield" size={40} className="mb-6 text-accent neon-glow" />
                <h3 className="font-bold text-xl mb-4 gradient-text">✅ Разовая оплата — никаких подписок</h3>
                <p className="text-muted-foreground">Купил раз - пользуйся всегда</p>
              </CardContent>
            </Card>
            <Card className="hover-scale glass-effect border-primary/20">
              <CardContent className="p-8">
                <Icon name="Wordpress" size={40} className="mb-6 text-primary neon-glow" />
                <h3 className="font-bold text-xl mb-4 gradient-text">✅ Полная адаптация под WordPress</h3>
                <p className="text-muted-foreground">Легкая установка и настройка</p>
              </CardContent>
            </Card>
            <Card className="hover-scale glass-effect border-primary/20">
              <CardContent className="p-8">
                <Icon name="BookOpen" size={40} className="mb-6 text-accent neon-glow" />
                <h3 className="font-bold text-xl mb-4 gradient-text">✅ Полная инструкция по установке</h3>
                <p className="text-muted-foreground">Пошаговое руководство для новичков</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Как генерируется +1400 статей в сутки</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold">1</div>
                <div>
                  <h3 className="font-bold text-lg mb-2">В настройках укажи ключевые фразы</h3>
                  <p className="text-gray-600">по которым Chat GPT сгенерирует статьи</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold">2</div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Укажи рекламный текст и ссылку</h3>
                  <p className="text-gray-600">которые система будет вставлять в каждую статью, и запусти постинг</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold">3</div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Получай результат</h3>
                  <p className="text-gray-600">Статьи публикуются автоматически, трафик растет на автопилоте</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <img 
                src="/img/f8a3111d-b7a0-4bb8-b64b-5f5f78989c89.jpg" 
                alt="Настройки плагина"
                className="rounded-lg shadow-lg hover-scale"
              />
              <img 
                src="/img/c59b6590-32b6-4888-ab3a-4d9593d78512.jpg" 
                alt="Пример SEO-статьи"
                className="rounded-lg shadow-lg hover-scale"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <Icon name="Lightbulb" size={48} className="mx-auto mb-4" />
              <h3 className="font-bold text-xl mb-2">💡 Идеально для арбитражников трафика</h3>
            </div>
            <div className="text-center">
              <Icon name="DollarSign" size={48} className="mx-auto mb-4" />
              <h3 className="font-bold text-xl mb-2">💰 Экономь время и деньги</h3>
              <p className="text-blue-100">Пока конкуренты нанимают авторов, ты генерируешь статьи на автопилоте</p>
            </div>
            <div className="text-center">
              <Icon name="Target" size={48} className="mx-auto mb-4" />
              <h3 className="font-bold text-xl mb-2">💎 Моментальный эффект для всех ниш</h3>
              <p className="text-blue-100">Товарка, гемблинг, крипта, финансы, нутра</p>
            </div>
            <div className="text-center">
              <Icon name="Search" size={48} className="mx-auto mb-4" />
              <h3 className="font-bold text-xl mb-2">🚀 Ранжируйся выше в Google и Яндекс</h3>
              <p className="text-blue-100">SEO-оптимизированные тексты с метаданными</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Что говорят наши пользователи?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover-scale">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">А</div>
                  <div className="ml-3">
                    <h4 className="font-bold">Алексей</h4>
                    <p className="text-gray-600">арбитражник</p>
                  </div>
                </div>
                <p className="text-gray-700">
                  "Сайты начали расти в среднем через 12 дней после запуска. Теперь генерирую по 1000+ статей в день 
                  и трафик растёт как на дрожжах. Окупил плагин за 1 день с 2 апрувов!"
                </p>
              </CardContent>
            </Card>
            <Card className="hover-scale">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">Д</div>
                  <div className="ml-3">
                    <h4 className="font-bold">Дмитрий</h4>
                    <p className="text-gray-600">SEO-специалист</p>
                  </div>
                </div>
                <p className="text-gray-700">
                  "Раньше платил авторам по 300р за статью. Теперь просто запускаю генерацию — 
                  экономлю десятки тысяч в месяц."
                </p>
              </CardContent>
            </Card>
            <Card className="hover-scale">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">Е</div>
                  <div className="ml-3">
                    <h4 className="font-bold">Елена</h4>
                    <p className="text-gray-600">интернет-маркетолог</p>
                  </div>
                </div>
                <p className="text-gray-700">
                  "Создала 3 сайта под разные ниши за неделю. Автопостинг работает без сбоев. 
                  По метрике уже пошел рост органики!"
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-4xl font-bold text-center mb-12">Вопросы и ответы</h2>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>❓ Нужен ли API ключ ChatGPT?</AccordionTrigger>
              <AccordionContent>
                Да, нужен. Но он легко создаётся в аккаунте OpenAI.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>❓ Можно ли использовать на нескольких сайтах?</AccordionTrigger>
              <AccordionContent>
                Да, вы можете установить плагин на любое количество сайтов.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>❓ Есть ли техподдержка?</AccordionTrigger>
              <AccordionContent>
                Да, мы предоставляем помощь в настройке и использовании.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 gradient-bg relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="floating absolute top-10 right-10 w-32 h-32 bg-primary/20 rounded-full blur-2xl"></div>
          <div className="floating absolute bottom-10 left-10 w-24 h-24 bg-accent/30 rounded-full blur-xl" style={{animationDelay: '1s'}}></div>
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <h2 className="text-5xl md:text-6xl font-black mb-8 leading-tight">
            <span className="gradient-text">⚡️ Плагин, который работает вместо тебя</span><br/>
            <span className="text-foreground">— делай деньги на автомате!</span>
          </h2>
          <p className="text-2xl mb-12 text-muted-foreground font-medium max-w-3xl mx-auto">
            Начать получать профит уже сегодня →
          </p>
          <Badge className="mb-10 bg-accent text-accent-foreground font-bold text-xl px-8 py-4 neon-glow shimmer">
            🔥 Только сейчас — скидка 50%! Успей забрать!
          </Badge>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-2xl px-16 py-8 neon-glow hover-scale shimmer">
              Забрать со скидкой
            </Button>
            <Button size="lg" variant="outline" className="glass-effect border-primary/30 text-foreground hover:bg-primary/10 text-xl px-12 py-8 hover-scale">
              Связаться с поддержкой
            </Button>
          </div>
          <div className="mt-12 glass-effect rounded-2xl p-6 max-w-2xl mx-auto">
            <p className="text-lg text-muted-foreground">
              🎯 <span className="font-bold gradient-text">Гарантия возврата 30 дней</span> • 
              💎 <span className="font-bold">Бесплатная техподдержка</span> • 
              🚀 <span className="font-bold">Мгновенная доставка</span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;