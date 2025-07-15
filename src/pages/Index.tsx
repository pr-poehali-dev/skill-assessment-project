import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-yellow-400 text-black font-bold animate-fade-in">
              🔥 СКИДКА 50% - ТОЛЬКО СЕГОДНЯ!
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              Публикуй до 1400 статей в сутки
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 animate-fade-in">
              и получай +1000 заявок на автомате
            </p>
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-4">Генератор трафика 1.0 для WordPress</h2>
              <p className="text-lg text-blue-100 max-w-3xl mx-auto">
                ChatGPT в WordPress - автоматическая генерация и публикация SEO-статей за 5 минут. 
                Увеличьте органический трафик в 10 раз! Создавайте сетку сайтов без ограничений!
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
              <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-lg px-8 py-4">
                🚀 ЗАПУСТИТЬ БЕСПЛАТНЫЙ ТРАФИК
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600">
                Посмотреть демо
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover-scale">
              <CardContent className="p-6">
                <Icon name="Zap" size={48} className="mx-auto mb-4 text-blue-600" />
                <h3 className="font-bold text-lg mb-2">Публикуй до 1400 статей в сутки</h3>
              </CardContent>
            </Card>
            <Card className="text-center hover-scale">
              <CardContent className="p-6">
                <Icon name="Clock" size={48} className="mx-auto mb-4 text-blue-600" />
                <h3 className="font-bold text-lg mb-2">Экономь часы работы с автопостингом</h3>
              </CardContent>
            </Card>
            <Card className="text-center hover-scale">
              <CardContent className="p-6">
                <Icon name="TrendingUp" size={48} className="mx-auto mb-4 text-blue-600" />
                <h3 className="font-bold text-lg mb-2">Улучши SEO и привлекай новых клиентов</h3>
              </CardContent>
            </Card>
            <Card className="text-center hover-scale">
              <CardContent className="p-6">
                <Icon name="CreditCard" size={48} className="mx-auto mb-4 text-blue-600" />
                <h3 className="font-bold text-lg mb-2">Разовая оплата — пожизненные обновления</h3>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Что внутри?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover-scale">
              <CardContent className="p-6">
                <Icon name="Bot" size={32} className="mb-4 text-blue-600" />
                <h3 className="font-bold text-lg mb-2">✅ Автогенерация контента через OpenAI</h3>
              </CardContent>
            </Card>
            <Card className="hover-scale">
              <CardContent className="p-6">
                <Icon name="Send" size={32} className="mb-4 text-blue-600" />
                <h3 className="font-bold text-lg mb-2">✅ Автопубликация — статьи появляются без участия</h3>
              </CardContent>
            </Card>
            <Card className="hover-scale">
              <CardContent className="p-6">
                <Icon name="Settings" size={32} className="mb-4 text-blue-600" />
                <h3 className="font-bold text-lg mb-2">✅ Настраиваемые интервалы публикации</h3>
              </CardContent>
            </Card>
            <Card className="hover-scale">
              <CardContent className="p-6">
                <Icon name="Shield" size={32} className="mb-4 text-blue-600" />
                <h3 className="font-bold text-lg mb-2">✅ Разовая оплата — никаких подписок</h3>
              </CardContent>
            </Card>
            <Card className="hover-scale">
              <CardContent className="p-6">
                <Icon name="Wordpress" size={32} className="mb-4 text-blue-600" />
                <h3 className="font-bold text-lg mb-2">✅ Полная адаптация под WordPress</h3>
              </CardContent>
            </Card>
            <Card className="hover-scale">
              <CardContent className="p-6">
                <Icon name="BookOpen" size={32} className="mb-4 text-blue-600" />
                <h3 className="font-bold text-lg mb-2">✅ Полная инструкция по установке</h3>
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
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            ⚡️ Плагин, который работает вместо тебя — делай деньги на автомате!
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Начать получать профит уже сегодня →
          </p>
          <Badge className="mb-6 bg-yellow-400 text-black font-bold text-lg px-4 py-2">
            🔥 Только сейчас — скидка 50%! Успей забрать!
          </Badge>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-xl px-12 py-6">
              Забрать со скидкой
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;