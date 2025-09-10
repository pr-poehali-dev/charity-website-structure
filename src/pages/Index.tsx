import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';

interface DonationAmount {
  amount: number;
  description: string;
  popular?: boolean;
}

const donationAmounts: DonationAmount[] = [
  { amount: 500, description: 'Обед для семьи' },
  { amount: 1500, description: 'Продукты на неделю', popular: true },
  { amount: 3000, description: 'Медицинская помощь' },
  { amount: 5000, description: 'Первая необходимость' },
];

const beneficiaryStories = [
  {
    id: 1,
    name: 'Анна',
    age: 28,
    story: 'Мать-одиночка с двумя детьми. После потери работы оказалась в сложной ситуации. Благодаря вашей поддержке смогла встать на ноги.',
    image: '/img/bac8d274-80d7-40ae-bfcb-0b67fb0cd9eb.jpg',
    helped: true
  },
  {
    id: 2,
    name: 'Михаил',
    age: 45,
    story: 'Потерял дом из-за пожара. Остался один с больной матерью. Ваша помощь дала нам второй шанс на жизнь.',
    image: '/img/e0f8abe7-00e3-44a0-9f10-492605ce295f.jpg',
    helped: true
  }
];

const programs = [
  {
    title: 'Продуктовая помощь',
    description: 'Обеспечиваем семьи базовыми продуктами питания',
    icon: 'ShoppingCart',
    helped: 245,
    target: 300
  },
  {
    title: 'Медицинская поддержка',
    description: 'Оплачиваем лечение и лекарства для нуждающихся',
    icon: 'Heart',
    helped: 89,
    target: 120
  },
  {
    title: 'Жилищная помощь',
    description: 'Помогаем найти временное жилье',
    icon: 'Home',
    helped: 67,
    target: 80
  }
];

export default function Index() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(1500);
  const [customAmount, setCustomAmount] = useState('');

  const handleDonate = () => {
    const amount = selectedAmount || parseInt(customAmount);
    if (amount > 0) {
      alert(`Спасибо! Перенаправляем на оплату ${amount} ₽`);
    }
  };

  return (
    <div className="min-h-screen bg-background font-open-sans">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Heart" className="text-primary" size={32} />
              <h1 className="text-2xl font-montserrat font-bold text-secondary">
                Центр помощи Хаер
              </h1>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <a href="#stories" className="text-secondary hover:text-primary transition-colors">
                Истории
              </a>
              <a href="#programs" className="text-secondary hover:text-primary transition-colors">
                Программы
              </a>
              <a href="#donate" className="text-secondary hover:text-primary transition-colors">
                Помочь
              </a>
              <a href="#contact" className="text-secondary hover:text-primary transition-colors">
                Контакты
              </a>
            </div>
            <Button className="bg-primary hover:bg-primary/90 text-white font-medium">
              Стать волонтером
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl md:text-6xl font-montserrat font-bold text-secondary mb-6">
            Каждая помощь меняет жизнь
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Мы помогаем людям в трудных жизненных ситуациях обрести надежду и веру в завтрашний день. 
            Ваша поддержка — это шанс для тех, кто в ней нуждается.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg font-medium"
              onClick={() => document.getElementById('donate')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Icon name="Heart" size={20} className="mr-2" />
              Помочь сейчас
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-secondary text-secondary hover:bg-secondary hover:text-white px-8 py-4 text-lg"
              onClick={() => document.getElementById('stories')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Icon name="Users" size={20} className="mr-2" />
              Читать истории
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-montserrat font-bold text-primary mb-2">1,247</div>
              <p className="text-muted-foreground">Семей получили помощь</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-montserrat font-bold text-primary mb-2">3.2М ₽</div>
              <p className="text-muted-foreground">Собрано пожертвований</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-montserrat font-bold text-primary mb-2">156</div>
              <p className="text-muted-foreground">Активных волонтеров</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stories Section */}
      <section id="stories" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-montserrat font-bold text-secondary mb-4">
              Истории наших подопечных
            </h3>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              За каждым пожертвованием стоит реальная история человека, которому вы помогли
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {beneficiaryStories.map((story) => (
              <Card key={story.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    src={story.image} 
                    alt={story.name}
                    className="w-full h-full object-cover"
                  />
                  {story.helped && (
                    <Badge className="absolute top-4 left-4 bg-accent text-white">
                      <Icon name="Check" size={16} className="mr-1" />
                      Помощь оказана
                    </Badge>
                  )}
                </div>
                <CardContent className="p-6">
                  <CardHeader className="p-0 mb-4">
                    <CardTitle className="text-xl font-montserrat font-semibold text-secondary">
                      {story.name}, {story.age} лет
                    </CardTitle>
                  </CardHeader>
                  <p className="text-muted-foreground leading-relaxed">
                    {story.story}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
              <Icon name="BookOpen" size={20} className="mr-2" />
              Читать больше историй
            </Button>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-montserrat font-bold text-secondary mb-4">
              Наши программы помощи
            </h3>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Мы работаем по нескольким направлениям, чтобы помочь максимально эффективно
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {programs.map((program, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon name={program.icon as any} className="text-primary" size={32} />
                  </div>
                  <CardTitle className="text-xl font-montserrat font-semibold text-secondary mb-4">
                    {program.title}
                  </CardTitle>
                  <p className="text-muted-foreground mb-6">
                    {program.description}
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Помогли: {program.helped}</span>
                      <span>Цель: {program.target}</span>
                    </div>
                    <Progress value={(program.helped / program.target) * 100} className="h-2" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Section */}
      <section id="donate" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h3 className="text-4xl font-montserrat font-bold text-secondary mb-4">
                Сделать пожертвование
              </h3>
              <p className="text-xl text-muted-foreground">
                Выберите сумму или укажите свою. Каждый рубль идет на помощь нуждающимся
              </p>
            </div>
            
            <Card className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                {donationAmounts.map((donation) => (
                  <div 
                    key={donation.amount}
                    className={`relative p-6 border-2 rounded-lg cursor-pointer transition-all duration-200 ${
                      selectedAmount === donation.amount 
                        ? 'border-primary bg-primary/5' 
                        : 'border-gray-200 hover:border-primary/50'
                    }`}
                    onClick={() => setSelectedAmount(donation.amount)}
                  >
                    {donation.popular && (
                      <Badge className="absolute -top-2 left-4 bg-primary text-white">
                        Популярно
                      </Badge>
                    )}
                    <div className="text-2xl font-montserrat font-bold text-secondary mb-2">
                      {donation.amount.toLocaleString()} ₽
                    </div>
                    <p className="text-muted-foreground">{donation.description}</p>
                  </div>
                ))}
              </div>
              
              <div className="mb-8">
                <label className="block text-sm font-medium text-secondary mb-2">
                  Или укажите свою сумму
                </label>
                <div className="relative">
                  <input
                    type="number"
                    placeholder="Введите сумму"
                    className="w-full p-4 border border-gray-200 rounded-lg focus:border-primary focus:outline-none text-lg"
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(e.target.value);
                      setSelectedAmount(null);
                    }}
                  />
                  <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-muted-foreground">₽</span>
                </div>
              </div>
              
              <div className="space-y-4">
                <Button 
                  onClick={handleDonate}
                  className="w-full bg-primary hover:bg-primary/90 text-white py-4 text-lg font-medium"
                  size="lg"
                >
                  <Icon name="CreditCard" size={20} className="mr-2" />
                  Пожертвовать {selectedAmount ? selectedAmount.toLocaleString() : customAmount || '...'} ₽
                </Button>
                
                <div className="flex items-center justify-center space-x-4 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Icon name="Shield" size={16} className="mr-1" />
                    Безопасная оплата
                  </div>
                  <div className="flex items-center">
                    <Icon name="Lock" size={16} className="mr-1" />
                    SSL шифрование
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Volunteer Section */}
      <section className="py-20 bg-gradient-to-r from-accent/10 to-primary/10">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-4xl font-montserrat font-bold text-secondary mb-6">
            Станьте волонтером
          </h3>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Помогайте не только деньгами, но и своим временем. Присоединяйтесь к нашей команде волонтеров
          </p>
          <img 
            src="/img/73376910-0ccb-4916-adae-9c2e22ec6930.jpg" 
            alt="Волонтеры" 
            className="w-full max-w-2xl mx-auto rounded-lg shadow-lg mb-8"
          />
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-white px-8 py-4 text-lg font-medium">
            <Icon name="Users" size={20} className="mr-2" />
            Стать волонтером
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-secondary text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Heart" className="text-primary" size={24} />
                <h4 className="text-xl font-montserrat font-bold">Центр помощи Хаер</h4>
              </div>
              <p className="text-gray-300">
                Помогаем людям в трудных жизненных ситуациях с 2018 года
              </p>
            </div>
            
            <div>
              <h5 className="font-montserrat font-semibold mb-4">Контакты</h5>
              <div className="space-y-2 text-gray-300">
                <div className="flex items-center">
                  <Icon name="Phone" size={16} className="mr-2" />
                  +7 (495) 123-45-67
                </div>
                <div className="flex items-center">
                  <Icon name="Mail" size={16} className="mr-2" />
                  info@center-haer.ru
                </div>
                <div className="flex items-center">
                  <Icon name="MapPin" size={16} className="mr-2" />
                  Москва, ул. Примерная, 123
                </div>
              </div>
            </div>
            
            <div>
              <h5 className="font-montserrat font-semibold mb-4">Полезные ссылки</h5>
              <div className="space-y-2">
                <a href="#" className="block text-gray-300 hover:text-white transition-colors">О нас</a>
                <a href="#" className="block text-gray-300 hover:text-white transition-colors">Отчеты</a>
                <a href="#" className="block text-gray-300 hover:text-white transition-colors">Новости</a>
                <a href="#" className="block text-gray-300 hover:text-white transition-colors">FAQ</a>
              </div>
            </div>
            
            <div>
              <h5 className="font-montserrat font-semibold mb-4">Документы</h5>
              <div className="space-y-2">
                <a href="#" className="block text-gray-300 hover:text-white transition-colors">Устав</a>
                <a href="#" className="block text-gray-300 hover:text-white transition-colors">Политика конфиденциальности</a>
                <a href="#" className="block text-gray-300 hover:text-white transition-colors">Публичная оферта</a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-600 mt-12 pt-8 text-center text-gray-300">
            <p>&copy; 2024 Центр помощи Хаер. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}