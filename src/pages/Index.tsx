import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  const emotions = [
    { name: "Радость", value: 45, color: "bg-[#FFE347]", icon: "Smile" },
    { name: "Грусть", value: 15, color: "bg-[#6C5CE7]", icon: "Frown" },
    { name: "Нейтрально", value: 30, color: "bg-[#FFB347]", icon: "Meh" },
    { name: "Волнение", value: 10, color: "bg-[#FF6B9D]", icon: "Zap" },
  ];

  const suggestions = [
    {
      type: "Поддержка",
      text: "Я понимаю, как ты себя чувствуешь. Давай обсудим это подробнее?",
      tone: "Эмпатия",
    },
    {
      type: "Уточнение",
      text: "Расскажи мне больше о том, что произошло",
      tone: "Открытость",
    },
    {
      type: "Решение",
      text: "Может, попробуем посмотреть на это с другой стороны?",
      tone: "Конструктив",
    },
  ];

  const historyData = [
    { date: "Сегодня", mood: 8, messages: 24 },
    { date: "Вчера", mood: 6, messages: 18 },
    { date: "2 дня назад", mood: 7, messages: 32 },
    { date: "3 дня назад", mood: 9, messages: 15 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-orange-50 to-purple-50">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <header className="mb-8 text-center">
          <div className="inline-flex items-center gap-3 mb-4 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
            <Icon name="Brain" className="text-[#FF6B9D]" size={32} />
            <h1 className="text-3xl font-bold bg-gradient-to-r from-[#FF6B9D] to-[#6C5CE7] bg-clip-text text-transparent">
              Chat Reflection Bot
            </h1>
          </div>
          <p className="text-gray-600 text-lg">
            Твой помощник для осознанного общения
          </p>
        </header>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8 bg-white/80 backdrop-blur-sm p-2 rounded-2xl shadow-lg">
            <TabsTrigger
              value="dashboard"
              className="rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#FF6B9D] data-[state=active]:to-[#FFB347] data-[state=active]:text-white"
            >
              <Icon name="LayoutDashboard" size={18} className="mr-2" />
              Дашборд
            </TabsTrigger>
            <TabsTrigger
              value="analysis"
              className="rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#FFB347] data-[state=active]:to-[#FFE347] data-[state=active]:text-white"
            >
              <Icon name="Brain" size={18} className="mr-2" />
              Анализ
            </TabsTrigger>
            <TabsTrigger
              value="history"
              className="rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#FFE347] data-[state=active]:to-[#6C5CE7] data-[state=active]:text-white"
            >
              <Icon name="TrendingUp" size={18} className="mr-2" />
              История
            </TabsTrigger>
            <TabsTrigger
              value="settings"
              className="rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#6C5CE7] data-[state=active]:to-[#FF6B9D] data-[state=active]:text-white"
            >
              <Icon name="Settings" size={18} className="mr-2" />
              Настройки
            </TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard" className="space-y-6 animate-fade-in">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 bg-white/90 backdrop-blur-sm shadow-xl rounded-3xl border-0">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-gradient-to-br from-[#FF6B9D] to-[#FFB347] rounded-2xl">
                    <Icon name="Heart" size={24} className="text-white" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-800">
                    Эмоциональный профиль
                  </h2>
                </div>

                <div className="space-y-4">
                  {emotions.map((emotion) => (
                    <div key={emotion.name} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Icon
                            name={emotion.icon as any}
                            size={20}
                            className="text-gray-600"
                          />
                          <span className="font-medium text-gray-700">
                            {emotion.name}
                          </span>
                        </div>
                        <span className="text-sm font-semibold text-gray-600">
                          {emotion.value}%
                        </span>
                      </div>
                      <Progress
                        value={emotion.value}
                        className="h-3 bg-gray-100"
                      />
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="p-6 bg-white/90 backdrop-blur-sm shadow-xl rounded-3xl border-0">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-gradient-to-br from-[#FFB347] to-[#FFE347] rounded-2xl">
                    <Icon name="MessageSquare" size={24} className="text-white" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-800">
                    Статистика сегодня
                  </h2>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-gradient-to-br from-pink-50 to-orange-50 rounded-2xl">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon name="MessageCircle" size={20} className="text-[#FF6B9D]" />
                      <p className="text-sm text-gray-600">Сообщений</p>
                    </div>
                    <p className="text-3xl font-bold text-gray-800">24</p>
                  </div>
                  <div className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon name="Users" size={20} className="text-[#6C5CE7]" />
                      <p className="text-sm text-gray-600">Чатов</p>
                    </div>
                    <p className="text-3xl font-bold text-gray-800">3</p>
                  </div>
                  <div className="p-4 bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon name="Smile" size={20} className="text-[#FFB347]" />
                      <p className="text-sm text-gray-600">Настроение</p>
                    </div>
                    <p className="text-3xl font-bold text-gray-800">8/10</p>
                  </div>
                  <div className="p-4 bg-gradient-to-br from-yellow-50 to-purple-50 rounded-2xl">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon name="TrendingUp" size={20} className="text-[#FFE347]" />
                      <p className="text-sm text-gray-600">Динамика</p>
                    </div>
                    <p className="text-3xl font-bold text-green-600">+12%</p>
                  </div>
                </div>
              </Card>
            </div>

            <Card className="p-6 bg-white/90 backdrop-blur-sm shadow-xl rounded-3xl border-0">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-br from-[#6C5CE7] to-[#FF6B9D] rounded-2xl">
                  <Icon name="Lightbulb" size={24} className="text-white" />
                </div>
                <h2 className="text-xl font-bold text-gray-800">
                  Умные варианты ответов
                </h2>
              </div>

              <ScrollArea className="h-[300px]">
                <div className="space-y-4">
                  {suggestions.map((suggestion, index) => (
                    <div
                      key={index}
                      className="p-5 bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <Badge className="bg-gradient-to-r from-[#FF6B9D] to-[#6C5CE7] text-white border-0">
                          {suggestion.type}
                        </Badge>
                        <Badge variant="outline" className="border-[#FFB347] text-[#FFB347]">
                          {suggestion.tone}
                        </Badge>
                      </div>
                      <p className="text-gray-700 mb-3">{suggestion.text}</p>
                      <Button
                        size="sm"
                        className="bg-gradient-to-r from-[#FFB347] to-[#FFE347] hover:from-[#FF6B9D] hover:to-[#FFB347] text-white border-0 rounded-full"
                      >
                        <Icon name="Copy" size={14} className="mr-2" />
                        Скопировать
                      </Button>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </Card>
          </TabsContent>

          <TabsContent value="analysis" className="animate-fade-in">
            <Card className="p-6 bg-white/90 backdrop-blur-sm shadow-xl rounded-3xl border-0">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-br from-[#FF6B9D] to-[#FFB347] rounded-2xl">
                  <Icon name="Brain" size={24} className="text-white" />
                </div>
                <h2 className="text-xl font-bold text-gray-800">
                  Анализ переписки
                </h2>
              </div>

              <div className="space-y-6">
                <div className="p-6 bg-gradient-to-br from-pink-50 to-orange-50 rounded-2xl">
                  <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                    <Icon name="Target" size={20} className="text-[#FF6B9D]" />
                    Ключевые паттерны
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#FF6B9D] rounded-full"></div>
                      <p className="text-gray-700">Часто используешь вопросы для уточнения</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#FFB347] rounded-full"></div>
                      <p className="text-gray-700">Склонность к эмпатичным ответам</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#6C5CE7] rounded-full"></div>
                      <p className="text-gray-700">Быстрые реакции в эмоциональных диалогах</p>
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl">
                  <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                    <Icon name="Sparkles" size={20} className="text-[#6C5CE7]" />
                    Рекомендации
                  </h3>
                  <div className="space-y-4">
                    <div className="p-4 bg-white/80 rounded-xl">
                      <p className="text-sm text-gray-600 mb-2">💡 Совет дня</p>
                      <p className="text-gray-800">
                        Попробуй делать паузу перед ответом на эмоциональные сообщения
                      </p>
                    </div>
                    <div className="p-4 bg-white/80 rounded-xl">
                      <p className="text-sm text-gray-600 mb-2">🎯 Точка роста</p>
                      <p className="text-gray-800">
                        Добавь больше позитивных формулировок в повседневное общение
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="history" className="animate-fade-in">
            <Card className="p-6 bg-white/90 backdrop-blur-sm shadow-xl rounded-3xl border-0">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-br from-[#FFE347] to-[#6C5CE7] rounded-2xl">
                  <Icon name="TrendingUp" size={24} className="text-white" />
                </div>
                <h2 className="text-xl font-bold text-gray-800">
                  История анализов
                </h2>
              </div>

              <div className="space-y-4">
                {historyData.map((day, index) => (
                  <div
                    key={index}
                    className="p-5 bg-gradient-to-r from-orange-50 to-purple-50 rounded-2xl hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <Icon name="Calendar" size={20} className="text-[#FFB347]" />
                        <p className="font-semibold text-gray-800">{day.date}</p>
                      </div>
                      <Badge className="bg-gradient-to-r from-[#6C5CE7] to-[#FF6B9D] text-white border-0">
                        {day.messages} сообщений
                      </Badge>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex-1">
                        <p className="text-sm text-gray-600 mb-2">Настроение</p>
                        <Progress value={day.mood * 10} className="h-2" />
                      </div>
                      <div className="text-3xl font-bold text-[#FF6B9D]">
                        {day.mood}/10
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="settings" className="animate-fade-in">
            <Card className="p-6 bg-white/90 backdrop-blur-sm shadow-xl rounded-3xl border-0">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-br from-[#6C5CE7] to-[#FF6B9D] rounded-2xl">
                  <Icon name="Settings" size={24} className="text-white" />
                </div>
                <h2 className="text-xl font-bold text-gray-800">Настройки</h2>
              </div>

              <div className="space-y-6">
                <div className="p-5 bg-gradient-to-br from-pink-50 to-orange-50 rounded-2xl">
                  <h3 className="font-semibold mb-4 flex items-center gap-2">
                    <Icon name="Bell" size={20} className="text-[#FF6B9D]" />
                    Уведомления
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-white/80 rounded-xl">
                      <p className="text-gray-700">Ежедневный анализ</p>
                      <div className="w-12 h-6 bg-[#FF6B9D] rounded-full relative cursor-pointer">
                        <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white/80 rounded-xl">
                      <p className="text-gray-700">Советы по общению</p>
                      <div className="w-12 h-6 bg-[#FF6B9D] rounded-full relative cursor-pointer">
                        <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-5 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl">
                  <h3 className="font-semibold mb-4 flex items-center gap-2">
                    <Icon name="Sliders" size={20} className="text-[#6C5CE7]" />
                    Параметры анализа
                  </h3>
                  <div className="space-y-3">
                    <div className="p-3 bg-white/80 rounded-xl">
                      <p className="text-gray-700 mb-2">Глубина анализа</p>
                      <div className="flex gap-2">
                        <Badge className="bg-gradient-to-r from-[#FF6B9D] to-[#FFB347] text-white border-0">
                          Базовый
                        </Badge>
                        <Badge variant="outline">Продвинутый</Badge>
                        <Badge variant="outline">Экспертный</Badge>
                      </div>
                    </div>
                    <div className="p-3 bg-white/80 rounded-xl">
                      <p className="text-gray-700 mb-2">Фокус анализа</p>
                      <div className="flex gap-2 flex-wrap">
                        <Badge className="bg-gradient-to-r from-[#FFB347] to-[#FFE347] text-white border-0">
                          Эмоции
                        </Badge>
                        <Badge className="bg-gradient-to-r from-[#6C5CE7] to-[#FF6B9D] text-white border-0">
                          Паттерны
                        </Badge>
                        <Badge variant="outline">Тон</Badge>
                        <Badge variant="outline">Намерения</Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;
