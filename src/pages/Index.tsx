import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      author: 'Юджи Фанат',
      title: 'Теория о силе Сукуны',
      content: 'Считаю, что истинная сила Сукуны связана с его техникой расчленения. Это не просто физическая атака...',
      likes: 42,
      comments: 15,
    },
    {
      id: 2,
      author: 'Годжо Адепт',
      title: 'Анализ боя Годжо vs Сукуна',
      content: 'Этот бой показал невероятную технику обоих. Бесконечность против Малеволент Шрайн - эпично!',
      likes: 89,
      comments: 34,
    },
  ]);

  const [newPost, setNewPost] = useState({ title: '', content: '' });

  const handleAddPost = () => {
    if (newPost.title && newPost.content) {
      setPosts([
        {
          id: posts.length + 1,
          author: 'Новый участник',
          title: newPost.title,
          content: newPost.content,
          likes: 0,
          comments: 0,
        },
        ...posts,
      ]);
      setNewPost({ title: '', content: '' });
    }
  };

  const characters = [
    {
      name: 'Юджи Итадори',
      role: 'Главный герой',
      power: 'Сосуд Сукуны',
      grade: 'Особый класс',
      description: 'Обычный школьник, ставший сосудом Короля проклятий',
      stats: { strength: 95, speed: 90, technique: 75, intelligence: 70 },
      image: 'https://cdn.poehali.dev/projects/7a12e299-67d4-42ae-bc9b-44b898cb3909/files/16a4385d-51b7-4bd7-ad52-e13cb1bb92e9.jpg',
    },
    {
      name: 'Сатору Годжо',
      role: 'Сильнейший маг',
      power: 'Бесконечность + Шесть глаз',
      grade: 'Особый класс',
      description: 'Сильнейший современный маг с абсолютной техникой',
      stats: { strength: 100, speed: 100, technique: 100, intelligence: 95 },
      image: 'https://cdn.poehali.dev/projects/7a12e299-67d4-42ae-bc9b-44b898cb3909/files/1e5173c2-b6b6-464a-8199-e0f2366f4bea.jpg',
    },
    {
      name: 'Мегуми Фушигуро',
      role: 'Техника теней',
      power: 'Десять теневых божественных генералов',
      grade: '2 класс',
      description: 'Талантливый маг клана Зенин с уникальной техникой',
      stats: { strength: 75, speed: 80, technique: 90, intelligence: 85 },
      image: 'https://cdn.poehali.dev/projects/7a12e299-67d4-42ae-bc9b-44b898cb3909/files/f1b63a5d-303a-4722-a1cb-3d3df4899999.jpg',
    },
    {
      name: 'Нобара Кугисаки',
      role: 'Техника соломенных кукол',
      power: 'Резонанс проклятий',
      grade: '3 класс',
      description: 'Уверенная в себе маг из сельской местности',
      stats: { strength: 70, speed: 75, technique: 85, intelligence: 80 },
      image: 'https://cdn.poehali.dev/projects/7a12e299-67d4-42ae-bc9b-44b898cb3909/files/d46ff156-ca56-4619-b565-aa952dc6cb74.jpg',
    },
    {
      name: 'Рёмен Сукуна',
      role: 'Король проклятий',
      power: 'Малеволент Шрайн',
      grade: 'Особое проклятие',
      description: 'Древнейший и сильнейший маг в истории',
      stats: { strength: 100, speed: 95, technique: 100, intelligence: 100 },
      image: 'https://cdn.poehali.dev/projects/7a12e299-67d4-42ae-bc9b-44b898cb3909/files/06339780-b06a-40cd-a7b2-fed56c1c47dd.jpg',
    },
  ];

  const techniques = [
    {
      name: 'Бесконечность',
      user: 'Сатору Годжо',
      description: 'Манипуляция пространством на атомном уровне создающая непреодолимый барьер',
      type: 'Врожденная техника',
      color: 'from-blue-500 to-cyan-400',
      icon: 'Shield',
      power: 100,
    },
    {
      name: 'Малеволент Шрайн',
      user: 'Рёмен Сукуна',
      description: 'Техника расчленения с двумя типами атак: Cleave и Dismantle',
      type: 'Расширение домена',
      color: 'from-red-600 to-pink-500',
      icon: 'Slash',
      power: 100,
    },
    {
      name: 'Десять теней',
      user: 'Мегуми Фушигуро',
      description: 'Призыв божественных генералов из теней через ритуальные жесты',
      type: 'Наследственная техника',
      color: 'from-gray-700 to-slate-900',
      icon: 'Ghost',
      power: 85,
    },
    {
      name: 'Дивергентный кулак',
      user: 'Юджи Итадори',
      description: 'Удар с задержкой проклятой энергии создающий двойной эффект',
      type: 'Боевая техника',
      color: 'from-orange-500 to-red-500',
      icon: 'Zap',
      power: 80,
    },
    {
      name: 'Резонанс',
      user: 'Нобара Кугисаки',
      description: 'Атака через связь с частью тела противника используя гвозди и молоток',
      type: 'Боевая техника',
      color: 'from-purple-500 to-pink-500',
      icon: 'Sparkles',
      power: 75,
    },
    {
      name: 'Неограниченная пустота',
      user: 'Сатору Годжо',
      description: 'Расширение домена перегружающее разум противника бесконечной информацией',
      type: 'Расширение домена',
      color: 'from-indigo-600 to-purple-500',
      icon: 'Eye',
      power: 100,
    },
  ];

  const arcs = [
    {
      title: 'Арка Проклятого чрева',
      chapters: '1-17',
      description: 'Юджи становится сосудом Сукуны и вступает в мир магов',
      year: '2018',
      status: 'Завершена',
      keyEvents: ['Смерть деда Юджи', 'Съедание пальца Сукуны', 'Поступление в Технический колледж'],
    },
    {
      title: 'Турнир Киото',
      chapters: '32-54',
      description: 'Битва двух школ магов и появление особых проклятий',
      year: '2018',
      status: 'Завершена',
      keyEvents: ['Соревнование школ', 'Атака проклятий', 'Появление Махито и Ханами'],
    },
    {
      title: 'Инцидент Шибуя',
      chapters: '79-136',
      description: 'Переломный момент в истории с запечатыванием Годжо',
      year: '2018',
      status: 'Завершена',
      keyEvents: ['Запечатывание Годжо', 'Смерть Нанами и Нобары', 'Пробуждение Сукуны'],
    },
    {
      title: 'Игра на выбывание',
      chapters: '159-221',
      description: 'Масштабная игра магов на территории всей Японии',
      year: '2018-2019',
      status: 'Завершена',
      keyEvents: ['Правила игры', 'Освобождение Годжо', 'Битва с Кенджаку'],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div
        className="relative bg-cover bg-center py-32 px-4"
        style={{
          backgroundImage: `linear-gradient(rgba(10, 10, 15, 0.85), rgba(10, 10, 15, 0.85)), url('https://cdn.poehali.dev/projects/7a12e299-67d4-42ae-bc9b-44b898cb3909/files/8634227a-7500-4959-a42b-a4247f8e7703.jpg')`,
        }}
      >
        <div className="max-w-6xl mx-auto text-center animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 glow-purple">
            МАГИЧЕСКАЯ БИТВА
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Добро пожаловать в мир проклятий и магических сражений
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="hover-glow">
              <Icon name="Flame" className="mr-2" size={20} />
              Исследовать мир
            </Button>
            <Button size="lg" variant="outline" className="hover-glow">
              <Icon name="Users" className="mr-2" size={20} />
              Присоединиться к сообществу
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16">
        <Tabs defaultValue="characters" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
            <TabsTrigger value="characters">
              <Icon name="User" className="mr-2" size={16} />
              Персонажи
            </TabsTrigger>
            <TabsTrigger value="techniques">
              <Icon name="Zap" className="mr-2" size={16} />
              Техники
            </TabsTrigger>
            <TabsTrigger value="arcs">
              <Icon name="BookOpen" className="mr-2" size={16} />
              Сюжет
            </TabsTrigger>
            <TabsTrigger value="community">
              <Icon name="MessageCircle" className="mr-2" size={16} />
              Форум
            </TabsTrigger>
          </TabsList>

          <TabsContent value="characters">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {characters.map((char, idx) => (
                <Card key={idx} className="hover-glow overflow-hidden group">
                  <div className="h-72 overflow-hidden relative">
                    <img
                      src={char.image}
                      alt={char.name}
                      className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
                    />
                    <div className="absolute top-3 right-3">
                      <Badge className="bg-primary/90 backdrop-blur">{char.grade}</Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-2xl glow-purple">{char.name}</CardTitle>
                    <Badge variant="secondary" className="w-fit">{char.role}</Badge>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-foreground">{char.description}</p>
                    <div className="flex items-center gap-2 text-sm">
                      <Icon name="Sparkles" size={16} className="text-primary" />
                      <span className="text-muted-foreground">{char.power}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 pt-2 border-t border-border">
                      <div className="space-y-1">
                        <div className="flex justify-between text-xs">
                          <span className="text-muted-foreground">Сила</span>
                          <span className="text-primary font-semibold">{char.stats.strength}</span>
                        </div>
                        <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-primary to-secondary transition-all" style={{ width: `${char.stats.strength}%` }} />
                        </div>
                      </div>
                      <div className="space-y-1">
                        <div className="flex justify-between text-xs">
                          <span className="text-muted-foreground">Скорость</span>
                          <span className="text-accent font-semibold">{char.stats.speed}</span>
                        </div>
                        <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-accent to-primary transition-all" style={{ width: `${char.stats.speed}%` }} />
                        </div>
                      </div>
                      <div className="space-y-1">
                        <div className="flex justify-between text-xs">
                          <span className="text-muted-foreground">Техника</span>
                          <span className="text-destructive font-semibold">{char.stats.technique}</span>
                        </div>
                        <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-destructive to-accent transition-all" style={{ width: `${char.stats.technique}%` }} />
                        </div>
                      </div>
                      <div className="space-y-1">
                        <div className="flex justify-between text-xs">
                          <span className="text-muted-foreground">Интеллект</span>
                          <span className="text-secondary font-semibold">{char.stats.intelligence}</span>
                        </div>
                        <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all" style={{ width: `${char.stats.intelligence}%` }} />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="techniques">
            <div className="grid md:grid-cols-2 gap-6">
              {techniques.map((tech, idx) => (
                <Card key={idx} className="hover-glow group relative overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                  <CardHeader>
                    <div className="flex justify-between items-start gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <div className={`p-2 rounded-lg bg-gradient-to-br ${tech.color} animate-pulse-glow`}>
                            <Icon name={tech.icon} size={24} className="text-white" />
                          </div>
                          <CardTitle className="text-2xl glow-purple">
                            {tech.name}
                          </CardTitle>
                        </div>
                        <p className="text-sm text-muted-foreground mt-2 flex items-center gap-2">
                          <Icon name="User" size={14} />
                          {tech.user}
                        </p>
                      </div>
                      <Badge className="animate-pulse-glow shrink-0">{tech.type}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-foreground leading-relaxed">{tech.description}</p>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground flex items-center gap-2">
                          <Icon name="Zap" size={14} />
                          Уровень силы
                        </span>
                        <span className="text-lg font-bold text-primary">{tech.power}</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div 
                          className={`h-full bg-gradient-to-r ${tech.color} transition-all duration-1000 ease-out`}
                          style={{ width: `${tech.power}%` }}
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="arcs">
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-destructive" />
              <div className="space-y-8">
                {arcs.map((arc, idx) => (
                  <div key={idx} className="relative pl-20">
                    <div className="absolute left-4 top-6 w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center animate-pulse-glow">
                      <span className="text-sm font-bold text-white">{idx + 1}</span>
                    </div>
                    <Card className="hover-glow group">
                      <CardHeader>
                        <div className="flex justify-between items-start flex-wrap gap-4">
                          <div className="flex-1">
                            <CardTitle className="text-3xl glow-purple mb-2">{arc.title}</CardTitle>
                            <div className="flex gap-2 flex-wrap">
                              <Badge variant="outline" className="text-xs">
                                <Icon name="BookOpen" size={12} className="mr-1" />
                                Главы {arc.chapters}
                              </Badge>
                              <Badge variant="secondary" className="text-xs">
                                <Icon name="Calendar" size={12} className="mr-1" />
                                {arc.year}
                              </Badge>
                              <Badge className="text-xs bg-green-600">
                                <Icon name="CheckCircle" size={12} className="mr-1" />
                                {arc.status}
                              </Badge>
                            </div>
                          </div>
                          <Icon name="ChevronRight" size={24} className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-foreground leading-relaxed text-lg">{arc.description}</p>
                        <div className="pt-3 border-t border-border">
                          <h4 className="text-sm font-semibold text-muted-foreground mb-3 flex items-center gap-2">
                            <Icon name="Star" size={14} />
                            Ключевые события:
                          </h4>
                          <div className="grid md:grid-cols-3 gap-2">
                            {arc.keyEvents.map((event, eventIdx) => (
                              <div key={eventIdx} className="flex items-start gap-2 text-sm">
                                <Icon name="Dot" size={20} className="text-primary shrink-0 mt-0.5" />
                                <span className="text-foreground">{event}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="community">
            <div className="space-y-8">
              <Card className="hover-glow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="PenSquare" size={24} />
                    Создать новый пост
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Input
                    placeholder="Заголовок теории или обсуждения"
                    value={newPost.title}
                    onChange={(e) =>
                      setNewPost({ ...newPost, title: e.target.value })
                    }
                  />
                  <Textarea
                    placeholder="Поделитесь своими мыслями о Магической битве..."
                    value={newPost.content}
                    onChange={(e) =>
                      setNewPost({ ...newPost, content: e.target.value })
                    }
                    rows={4}
                  />
                  <Button onClick={handleAddPost} className="w-full">
                    <Icon name="Send" className="mr-2" size={16} />
                    Опубликовать
                  </Button>
                </CardContent>
              </Card>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold flex items-center gap-2">
                  <Icon name="Flame" size={24} />
                  Популярные обсуждения
                </h2>
                {posts.map((post) => (
                  <Card key={post.id} className="hover-glow">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <CardTitle className="text-xl">{post.title}</CardTitle>
                          <p className="text-sm text-muted-foreground mt-1">
                            от {post.author}
                          </p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-foreground mb-4">{post.content}</p>
                      <div className="flex gap-4 text-sm text-muted-foreground">
                        <button className="flex items-center gap-1 hover:text-primary transition-colors">
                          <Icon name="Heart" size={16} />
                          {post.likes}
                        </button>
                        <button className="flex items-center gap-1 hover:text-primary transition-colors">
                          <Icon name="MessageSquare" size={16} />
                          {post.comments}
                        </button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <footer className="bg-card border-t border-border py-8 mt-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            Фан-сайт создан с любовью к работе ГэГэ Акутами
          </p>
          <div className="flex justify-center gap-4 mt-4">
            <Button variant="ghost" size="sm">
              <Icon name="Twitter" className="mr-2" size={16} />
              Twitter
            </Button>
            <Button variant="ghost" size="sm">
              <Icon name="MessageCircle" className="mr-2" size={16} />
              Discord
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;