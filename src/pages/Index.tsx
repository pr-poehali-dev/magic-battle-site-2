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
      image: 'https://cdn.poehali.dev/projects/7a12e299-67d4-42ae-bc9b-44b898cb3909/files/f1b63a5d-303a-4722-a1cb-3d3df4899999.jpg',
    },
    {
      name: 'Сатору Годжо',
      role: 'Сильнейший маг',
      power: 'Бесконечность',
      image: 'https://cdn.poehali.dev/projects/7a12e299-67d4-42ae-bc9b-44b898cb3909/files/1e5173c2-b6b6-464a-8199-e0f2366f4bea.jpg',
    },
    {
      name: 'Мегуми Фушигуро',
      role: 'Техника теней',
      power: 'Десять теневых божественных генералов',
      image: 'https://cdn.poehali.dev/projects/7a12e299-67d4-42ae-bc9b-44b898cb3909/files/f1b63a5d-303a-4722-a1cb-3d3df4899999.jpg',
    },
    {
      name: 'Нобара Кугисаки',
      role: 'Техника соломенных кукол',
      power: 'Резонанс проклятий',
      image: 'https://cdn.poehali.dev/projects/7a12e299-67d4-42ae-bc9b-44b898cb3909/files/f1b63a5d-303a-4722-a1cb-3d3df4899999.jpg',
    },
  ];

  const techniques = [
    {
      name: 'Бесконечность',
      user: 'Сатору Годжо',
      description: 'Манипуляция пространством на атомном уровне',
      type: 'Врожденная техника',
    },
    {
      name: 'Малеволент Шрайн',
      user: 'Рёмен Сукуна',
      description: 'Техника расчленения с двумя типами атак',
      type: 'Расширение домена',
    },
    {
      name: 'Десять теней',
      user: 'Мегуми Фушигуро',
      description: 'Призыв божественных генералов из теней',
      type: 'Наследственная техника',
    },
    {
      name: 'Дивергентный кулак',
      user: 'Юджи Итадори',
      description: 'Удар с задержкой проклятой энергии',
      type: 'Боевая техника',
    },
  ];

  const arcs = [
    {
      title: 'Арка Проклятого чрева',
      chapters: '1-17',
      description: 'Юджи становится сосудом Сукуны и вступает в мир магов',
    },
    {
      title: 'Турнир Киото',
      chapters: '32-54',
      description: 'Битва двух школ магов и появление особых проклятий',
    },
    {
      title: 'Инцидент Шибуя',
      chapters: '79-136',
      description: 'Переломный момент в истории с запечатыванием Годжо',
    },
    {
      title: 'Игра на выбывание',
      chapters: '159-221',
      description: 'Масштабная игра магов на территории всей Японии',
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
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {characters.map((char, idx) => (
                <Card key={idx} className="hover-glow overflow-hidden">
                  <div className="h-64 overflow-hidden">
                    <img
                      src={char.image}
                      alt={char.name}
                      className="w-full h-full object-cover transition-transform hover:scale-110"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl">{char.name}</CardTitle>
                    <Badge variant="secondary">{char.role}</Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground flex items-center gap-2">
                      <Icon name="Sparkles" size={16} />
                      {char.power}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="techniques">
            <div className="grid md:grid-cols-2 gap-6">
              {techniques.map((tech, idx) => (
                <Card key={idx} className="hover-glow">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-2xl glow-purple">
                          {tech.name}
                        </CardTitle>
                        <p className="text-sm text-muted-foreground mt-2">
                          Пользователь: {tech.user}
                        </p>
                      </div>
                      <Badge className="animate-pulse-glow">{tech.type}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground">{tech.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="arcs">
            <div className="space-y-6">
              {arcs.map((arc, idx) => (
                <Card key={idx} className="hover-glow">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-2xl">{arc.title}</CardTitle>
                        <Badge variant="outline" className="mt-2">
                          Главы {arc.chapters}
                        </Badge>
                      </div>
                      <Icon name="ChevronRight" size={24} />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground">{arc.description}</p>
                  </CardContent>
                </Card>
              ))}
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
