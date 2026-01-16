import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
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
      content: 'Этот бой показал невероятную технику обоих. Бесконечность против Гробницы зла - эпично!',
      likes: 89,
      comments: 34,
    },
    {
      id: 3,
      author: 'Теоретик Магии',
      title: 'Почему Махито такой опасный противник?',
      content: 'Его способность изменять форму души делает его одним из самых страшных проклятий',
      likes: 56,
      comments: 23,
    },
  ]);

  const [newPost, setNewPost] = useState({ title: '', content: '' });
  const [likedPosts, setLikedPosts] = useState<number[]>([]);

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

  const handleLike = (postId: number) => {
    if (likedPosts.includes(postId)) {
      setLikedPosts(likedPosts.filter(id => id !== postId));
      setPosts(posts.map(post => 
        post.id === postId ? { ...post, likes: post.likes - 1 } : post
      ));
    } else {
      setLikedPosts([...likedPosts, postId]);
      setPosts(posts.map(post => 
        post.id === postId ? { ...post, likes: post.likes + 1 } : post
      ));
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
      affiliation: 'Технический колледж',
      image: 'https://cdn.poehali.dev/projects/7a12e299-67d4-42ae-bc9b-44b898cb3909/files/16a4385d-51b7-4bd7-ad52-e13cb1bb92e9.jpg',
    },
    {
      name: 'Сатору Годжо',
      role: 'Сильнейший маг',
      power: 'Бесконечность + Шесть глаз',
      grade: 'Особый класс',
      description: 'Сильнейший современный маг с абсолютной техникой',
      stats: { strength: 100, speed: 100, technique: 100, intelligence: 95 },
      affiliation: 'Технический колледж',
      image: 'https://cdn.poehali.dev/projects/7a12e299-67d4-42ae-bc9b-44b898cb3909/files/1e5173c2-b6b6-464a-8199-e0f2366f4bea.jpg',
    },
    {
      name: 'Мегуми Фушигуро',
      role: 'Техника теней',
      power: 'Десять теневых божественных генералов',
      grade: '2 класс',
      description: 'Талантливый маг клана Зенин с уникальной техникой',
      stats: { strength: 75, speed: 80, technique: 90, intelligence: 85 },
      affiliation: 'Технический колледж',
      image: 'https://cdn.poehali.dev/projects/7a12e299-67d4-42ae-bc9b-44b898cb3909/files/f1b63a5d-303a-4722-a1cb-3d3df4899999.jpg',
    },
    {
      name: 'Нобара Кугисаки',
      role: 'Техника соломенных кукол',
      power: 'Резонанс проклятий',
      grade: '3 класс',
      description: 'Уверенная в себе маг из сельской местности',
      stats: { strength: 70, speed: 75, technique: 85, intelligence: 80 },
      affiliation: 'Технический колледж',
      image: 'https://cdn.poehali.dev/projects/7a12e299-67d4-42ae-bc9b-44b898cb3909/files/d46ff156-ca56-4619-b565-aa952dc6cb74.jpg',
    },
    {
      name: 'Рёмен Сукуна',
      role: 'Король проклятий',
      power: 'Гробница зла',
      grade: 'Особое проклятие',
      description: 'Древнейший и сильнейший маг в истории',
      stats: { strength: 100, speed: 95, technique: 100, intelligence: 100 },
      affiliation: 'Проклятия',
      image: 'https://cdn.poehali.dev/projects/7a12e299-67d4-42ae-bc9b-44b898cb3909/files/06339780-b06a-40cd-a7b2-fed56c1c47dd.jpg',
    },
    {
      name: 'Махито',
      role: 'Особое проклятие',
      power: 'Преобразование без усилий',
      grade: 'Особое проклятие',
      description: 'Проклятие, рожденное из ненависти людей друг к другу',
      stats: { strength: 85, speed: 88, technique: 95, intelligence: 92 },
      affiliation: 'Проклятия',
      image: 'https://cdn.poehali.dev/projects/7a12e299-67d4-42ae-bc9b-44b898cb3909/files/9deaa262-df38-4a1e-9a6a-d8397ab9bacf.jpg',
    },
    {
      name: 'Годжо Сугуру',
      role: 'Особый маг',
      power: 'Манипуляция проклятыми духами',
      grade: 'Особый класс',
      description: 'Бывший друг Годжо и сильнейший маг-предатель',
      stats: { strength: 90, speed: 92, technique: 95, intelligence: 94 },
      affiliation: 'Антагонисты',
      image: 'https://cdn.poehali.dev/projects/7a12e299-67d4-42ae-bc9b-44b898cb3909/files/8b8189ff-a1a3-4d9c-b01c-e7322f917da6.jpg',
    },
    {
      name: 'Юта Оккоцу',
      role: 'Особый маг',
      power: 'Копирование техник',
      grade: 'Особый класс',
      description: 'Второй по силе маг после Годжо с безграничной проклятой энергией',
      stats: { strength: 92, speed: 88, technique: 96, intelligence: 87 },
      affiliation: 'Технический колледж',
      image: 'https://cdn.poehali.dev/projects/7a12e299-67d4-42ae-bc9b-44b898cb3909/files/b8409703-d54c-4b96-8fe5-7bbb3d8675f4.jpg',
    },
    {
      name: 'Панда',
      role: 'Проклятый труп',
      power: 'Три ядра',
      grade: '2 класс',
      description: 'Разумный проклятый труп с тремя типами боевых режимов',
      stats: { strength: 80, speed: 75, technique: 70, intelligence: 85 },
      affiliation: 'Технический колледж',
      image: 'https://cdn.poehali.dev/projects/7a12e299-67d4-42ae-bc9b-44b898cb3909/files/2adb9fc4-fbb0-4f2f-aeee-3d62bbcdb5ed.jpg',
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
      name: 'Гробница зла',
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
    {
      name: 'Преобразование без усилий',
      user: 'Махито',
      description: 'Изменение формы души позволяющее трансформировать тело противника',
      type: 'Врожденная техника',
      color: 'from-gray-600 to-slate-800',
      icon: 'Hand',
      power: 90,
    },
    {
      name: 'Копирование техник',
      user: 'Юта Оккоцу',
      description: 'Способность копировать и использовать техники других магов через Рику',
      type: 'Уникальная способность',
      color: 'from-teal-500 to-blue-600',
      icon: 'Copy',
      power: 95,
    },
  ];

  const domains = [
    {
      name: 'Неограниченная пустота',
      user: 'Сатору Годжо',
      effect: 'Бесконечный поток информации парализует противника',
      image: 'https://cdn.poehali.dev/projects/7a12e299-67d4-42ae-bc9b-44b898cb3909/files/8ee10a18-1783-42dd-8ec0-743518f87a0a.jpg',
      color: 'from-blue-600 to-purple-600',
      danger: 100,
    },
    {
      name: 'Гробница зла',
      user: 'Рёмен Сукуна',
      effect: 'Гарантированное попадание техники расчленения в радиусе 200 метров',
      image: 'https://cdn.poehali.dev/projects/7a12e299-67d4-42ae-bc9b-44b898cb3909/files/8ee10a18-1783-42dd-8ec0-743518f87a0a.jpg',
      color: 'from-red-600 to-pink-600',
      danger: 100,
    },
    {
      name: 'Сад химер',
      user: 'Мегуми Фушигуро',
      effect: 'Пространство теней с неполным доменом',
      image: 'https://cdn.poehali.dev/projects/7a12e299-67d4-42ae-bc9b-44b898cb3909/files/8ee10a18-1783-42dd-8ec0-743518f87a0a.jpg',
      color: 'from-gray-700 to-slate-900',
      danger: 75,
    },
    {
      name: 'Самозамкнутый круг',
      user: 'Махито',
      effect: 'Гарантированное попадание преобразования души',
      image: 'https://cdn.poehali.dev/projects/7a12e299-67d4-42ae-bc9b-44b898cb3909/files/8ee10a18-1783-42dd-8ec0-743518f87a0a.jpg',
      color: 'from-gray-600 to-slate-700',
      danger: 90,
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

  const worldLore = [
    {
      title: 'Проклятая энергия',
      icon: 'Sparkles',
      description: 'Сила, рождённая из негативных эмоций людей. Обычные люди не могут видеть или контролировать её.',
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Проклятые духи',
      icon: 'Ghost',
      description: 'Существа, материализующиеся из накопленной проклятой энергии. Могут быть уничтожены только проклятиями.',
      color: 'from-gray-600 to-slate-800',
    },
    {
      title: 'Технический колледж',
      icon: 'School',
      description: 'Учебное заведение для магов. Существует в Токио и Киото. Готовит специалистов по изгнанию проклятий.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Классификация магов',
      icon: 'Award',
      description: 'От 4 до 1 класса, плюс особый класс. Определяет силу и опасность магов и проклятий.',
      color: 'from-orange-500 to-red-500',
    },
    {
      title: 'Расширение домена',
      icon: 'Target',
      description: 'Высшая техника магов. Создаёт отдельное пространство с гарантированным попаданием атак.',
      color: 'from-red-600 to-pink-600',
    },
    {
      title: 'Связывающий обет',
      icon: 'Link',
      description: 'Контракт с самим собой или другими, усиливающий способности в обмен на ограничения.',
      color: 'from-indigo-500 to-purple-600',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div
        className="relative bg-cover bg-center py-40 px-4 bg-fixed"
        style={{
          backgroundImage: `linear-gradient(rgba(10, 10, 15, 0.9), rgba(10, 10, 15, 0.85)), url('https://cdn.poehali.dev/projects/7a12e299-67d4-42ae-bc9b-44b898cb3909/files/8634227a-7500-4959-a42b-a4247f8e7703.jpg')`,
        }}
      >
        <div className="max-w-7xl mx-auto text-center animate-fade-in">
          <div className="mb-6">
            <Badge className="text-lg px-6 py-2 animate-pulse-glow">呪術廻戦</Badge>
          </div>
          <h1 className="text-7xl md:text-9xl font-bold mb-8 glow-purple tracking-tight">
            МАГИЧЕСКАЯ БИТВА
          </h1>
          <p className="text-2xl md:text-3xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Добро пожаловать в мир проклятий, магических сражений и темных тайн
          </p>
          <div className="flex gap-6 justify-center flex-wrap">
            <Button size="lg" className="hover-glow text-lg px-8 py-6">
              <Icon name="Flame" className="mr-2" size={24} />
              Исследовать мир
            </Button>
            <Button size="lg" variant="outline" className="hover-glow text-lg px-8 py-6">
              <Icon name="Users" className="mr-2" size={24} />
              Присоединиться
            </Button>
            <Button size="lg" variant="secondary" className="hover-glow text-lg px-8 py-6">
              <Icon name="BookOpen" className="mr-2" size={24} />
              Читать мангу
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-20">
        <Tabs defaultValue="characters" className="w-full">
          <TabsList className="grid w-full grid-cols-3 md:grid-cols-6 mb-12 h-auto">
            <TabsTrigger value="characters" className="text-sm md:text-base py-3">
              <Icon name="Users" className="mr-2" size={18} />
              Персонажи
            </TabsTrigger>
            <TabsTrigger value="techniques" className="text-sm md:text-base py-3">
              <Icon name="Zap" className="mr-2" size={18} />
              Техники
            </TabsTrigger>
            <TabsTrigger value="domains" className="text-sm md:text-base py-3">
              <Icon name="Target" className="mr-2" size={18} />
              Домены
            </TabsTrigger>
            <TabsTrigger value="arcs" className="text-sm md:text-base py-3">
              <Icon name="BookOpen" className="mr-2" size={18} />
              Сюжет
            </TabsTrigger>
            <TabsTrigger value="world" className="text-sm md:text-base py-3">
              <Icon name="Globe" className="mr-2" size={18} />
              Мир
            </TabsTrigger>
            <TabsTrigger value="community" className="text-sm md:text-base py-3">
              <Icon name="MessageCircle" className="mr-2" size={18} />
              Форум
            </TabsTrigger>
          </TabsList>

          <TabsContent value="characters">
            <div className="mb-8 text-center">
              <h2 className="text-4xl font-bold glow-purple mb-4">Персонажи</h2>
              <p className="text-muted-foreground text-lg">Герои и антагонисты мира магической битвы</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {characters.map((char, idx) => (
                <Card key={idx} className="hover-glow overflow-hidden group">
                  <div className="h-80 overflow-hidden relative">
                    <img
                      src={char.image}
                      alt={char.name}
                      className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
                    />
                    <div className="absolute top-3 right-3 flex gap-2">
                      <Badge className="bg-primary/90 backdrop-blur">{char.grade}</Badge>
                    </div>
                    <div className="absolute bottom-3 left-3">
                      <Badge variant="secondary" className="backdrop-blur">{char.affiliation}</Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-2xl glow-purple">{char.name}</CardTitle>
                    <Badge variant="secondary" className="w-fit">{char.role}</Badge>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-foreground leading-relaxed">{char.description}</p>
                    <Separator />
                    <div className="flex items-center gap-2 text-sm">
                      <Icon name="Sparkles" size={16} className="text-primary" />
                      <span className="text-muted-foreground">{char.power}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-3 pt-2">
                      <div className="space-y-1">
                        <div className="flex justify-between text-xs">
                          <span className="text-muted-foreground">Сила</span>
                          <span className="text-primary font-semibold">{char.stats.strength}</span>
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-primary to-secondary transition-all" style={{ width: `${char.stats.strength}%` }} />
                        </div>
                      </div>
                      <div className="space-y-1">
                        <div className="flex justify-between text-xs">
                          <span className="text-muted-foreground">Скорость</span>
                          <span className="text-accent font-semibold">{char.stats.speed}</span>
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-accent to-primary transition-all" style={{ width: `${char.stats.speed}%` }} />
                        </div>
                      </div>
                      <div className="space-y-1">
                        <div className="flex justify-between text-xs">
                          <span className="text-muted-foreground">Техника</span>
                          <span className="text-destructive font-semibold">{char.stats.technique}</span>
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-destructive to-accent transition-all" style={{ width: `${char.stats.technique}%` }} />
                        </div>
                      </div>
                      <div className="space-y-1">
                        <div className="flex justify-between text-xs">
                          <span className="text-muted-foreground">Интеллект</span>
                          <span className="text-secondary font-semibold">{char.stats.intelligence}</span>
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
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
            <div className="mb-8 text-center">
              <h2 className="text-4xl font-bold glow-purple mb-4">Магические техники</h2>
              <p className="text-muted-foreground text-lg">Уникальные способности и боевые приёмы</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {techniques.map((tech, idx) => (
                <Card key={idx} className="hover-glow group relative overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                  <CardHeader>
                    <div className="flex justify-between items-start gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <div className={`p-3 rounded-xl bg-gradient-to-br ${tech.color} animate-pulse-glow`}>
                            <Icon name={tech.icon} size={28} className="text-white" />
                          </div>
                          <CardTitle className="text-3xl glow-purple">
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
                  <CardContent className="space-y-5">
                    <p className="text-foreground leading-relaxed text-lg">{tech.description}</p>
                    <Separator />
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground flex items-center gap-2">
                          <Icon name="Zap" size={16} />
                          Уровень силы
                        </span>
                        <span className="text-2xl font-bold text-primary">{tech.power}</span>
                      </div>
                      <div className="h-3 bg-muted rounded-full overflow-hidden">
                        <div 
                          className={`h-full bg-gradient-to-r ${tech.color} transition-all duration-1000 ease-out animate-pulse-glow`}
                          style={{ width: `${tech.power}%` }}
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="domains">
            <div className="mb-8 text-center">
              <h2 className="text-4xl font-bold glow-red mb-4">Расширения доменов</h2>
              <p className="text-muted-foreground text-lg">Высшие техники магов с гарантированным попаданием</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {domains.map((domain, idx) => (
                <Card key={idx} className="hover-glow overflow-hidden group">
                  <div className="h-64 overflow-hidden relative">
                    <img
                      src={domain.image}
                      alt={domain.name}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 brightness-75"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${domain.color} opacity-60`} />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <h3 className="text-4xl font-bold text-white glow-purple text-center px-4">{domain.name}</h3>
                    </div>
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <p className="text-sm text-muted-foreground flex items-center gap-2 mb-2">
                          <Icon name="User" size={14} />
                          {domain.user}
                        </p>
                      </div>
                      <Badge variant="destructive" className="animate-pulse-glow">
                        <Icon name="AlertTriangle" size={14} className="mr-1" />
                        Опасность: {domain.danger}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-foreground text-lg leading-relaxed">{domain.effect}</p>
                    <div className="pt-3 border-t border-border">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Icon name="Target" size={16} className="text-destructive" />
                        <span>Гарантированное попадание атаки внутри домена</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="arcs">
            <div className="mb-8 text-center">
              <h2 className="text-4xl font-bold glow-purple mb-4">Сюжетные арки</h2>
              <p className="text-muted-foreground text-lg">Хронология событий манги Магическая битва</p>
            </div>
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-destructive" />
              <div className="space-y-12">
                {arcs.map((arc, idx) => (
                  <div key={idx} className="relative pl-20">
                    <div className="absolute left-4 top-6 w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center animate-pulse-glow ring-4 ring-background">
                      <span className="text-base font-bold text-white">{idx + 1}</span>
                    </div>
                    <Card className="hover-glow group">
                      <CardHeader>
                        <div className="flex justify-between items-start flex-wrap gap-4">
                          <div className="flex-1">
                            <CardTitle className="text-4xl glow-purple mb-3">{arc.title}</CardTitle>
                            <div className="flex gap-2 flex-wrap">
                              <Badge variant="outline" className="text-sm">
                                <Icon name="BookOpen" size={14} className="mr-1" />
                                Главы {arc.chapters}
                              </Badge>
                              <Badge variant="secondary" className="text-sm">
                                <Icon name="Calendar" size={14} className="mr-1" />
                                {arc.year}
                              </Badge>
                              <Badge className="text-sm bg-green-600">
                                <Icon name="CheckCircle" size={14} className="mr-1" />
                                {arc.status}
                              </Badge>
                            </div>
                          </div>
                          <Icon name="ChevronRight" size={28} className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-5">
                        <p className="text-foreground leading-relaxed text-xl">{arc.description}</p>
                        <Separator />
                        <div className="pt-3">
                          <h4 className="text-base font-semibold text-muted-foreground mb-4 flex items-center gap-2">
                            <Icon name="Star" size={18} className="text-primary" />
                            Ключевые события:
                          </h4>
                          <div className="grid md:grid-cols-3 gap-3">
                            {arc.keyEvents.map((event, eventIdx) => (
                              <div key={eventIdx} className="flex items-start gap-2 text-sm bg-muted/50 p-3 rounded-lg">
                                <Icon name="Dot" size={24} className="text-primary shrink-0" />
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

          <TabsContent value="world">
            <div className="mb-8 text-center">
              <h2 className="text-4xl font-bold glow-purple mb-4">Мир Магической битвы</h2>
              <p className="text-muted-foreground text-lg">Основы лора и механики вселенной</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {worldLore.map((lore, idx) => (
                <Card key={idx} className="hover-glow group relative overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${lore.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                  <CardHeader>
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${lore.color} flex items-center justify-center mb-4 animate-pulse-glow`}>
                      <Icon name={lore.icon} size={32} className="text-white" />
                    </div>
                    <CardTitle className="text-2xl glow-purple">{lore.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground leading-relaxed">{lore.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="community">
            <div className="mb-8 text-center">
              <h2 className="text-4xl font-bold glow-purple mb-4">Сообщество фанатов</h2>
              <p className="text-muted-foreground text-lg">Обсуждайте теории, делитесь мыслями о Магической битве</p>
            </div>
            <div className="space-y-8">
              <Card className="hover-glow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl">
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
                    className="text-lg"
                  />
                  <Textarea
                    placeholder="Поделитесь своими мыслями о Магической битве..."
                    value={newPost.content}
                    onChange={(e) =>
                      setNewPost({ ...newPost, content: e.target.value })
                    }
                    rows={5}
                    className="text-base"
                  />
                  <Button onClick={handleAddPost} className="w-full text-lg py-6">
                    <Icon name="Send" className="mr-2" size={20} />
                    Опубликовать
                  </Button>
                </CardContent>
              </Card>

              <div className="space-y-6">
                <h2 className="text-3xl font-bold flex items-center gap-2">
                  <Icon name="Flame" size={28} className="text-primary" />
                  Популярные обсуждения
                </h2>
                {posts.map((post) => (
                  <Card key={post.id} className="hover-glow">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <CardTitle className="text-2xl mb-2">{post.title}</CardTitle>
                          <div className="flex items-center gap-3 text-sm text-muted-foreground">
                            <Icon name="User" size={14} />
                            <span>{post.author}</span>
                            <Icon name="Clock" size={14} />
                            <span>2 часа назад</span>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-foreground text-lg leading-relaxed">{post.content}</p>
                      <Separator />
                      <div className="flex gap-6 text-sm">
                        <button 
                          onClick={() => handleLike(post.id)}
                          className={`flex items-center gap-2 transition-colors ${
                            likedPosts.includes(post.id) ? 'text-destructive' : 'text-muted-foreground hover:text-primary'
                          }`}
                        >
                          <Icon name={likedPosts.includes(post.id) ? 'Heart' : 'Heart'} size={18} fill={likedPosts.includes(post.id) ? 'currentColor' : 'none'} />
                          <span className="font-semibold">{post.likes}</span>
                        </button>
                        <button className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                          <Icon name="MessageSquare" size={18} />
                          <span className="font-semibold">{post.comments}</span>
                        </button>
                        <button className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                          <Icon name="Share2" size={18} />
                          <span>Поделиться</span>
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

      <footer className="bg-card border-t border-border py-12 mt-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold glow-purple mb-4">Магическая битва</h3>
              <p className="text-muted-foreground leading-relaxed">
                Фан-сайт создан с любовью к работе ГэГэ Акутами. Манга публикуется в Weekly Shonen Jump.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Быстрые ссылки</h4>
              <div className="space-y-2 text-muted-foreground">
                <div className="hover:text-primary transition-colors cursor-pointer">О проекте</div>
                <div className="hover:text-primary transition-colors cursor-pointer">Правила форума</div>
                <div className="hover:text-primary transition-colors cursor-pointer">Контакты</div>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Социальные сети</h4>
              <div className="flex gap-3">
                <Button variant="ghost" size="icon" className="hover-glow">
                  <Icon name="Twitter" size={20} />
                </Button>
                <Button variant="ghost" size="icon" className="hover-glow">
                  <Icon name="MessageCircle" size={20} />
                </Button>
                <Button variant="ghost" size="icon" className="hover-glow">
                  <Icon name="Youtube" size={20} />
                </Button>
              </div>
            </div>
          </div>
          <Separator className="my-6" />
          <div className="text-center text-muted-foreground">
            <p>© 2024 Jujutsu Kaisen Fan Site. Все права на франшизу принадлежат Gege Akutami и MAPPA</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
