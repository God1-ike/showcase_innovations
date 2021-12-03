### Основной стек технологий:

* Ruby on Rails
* React
* PostgreSQL
* Git
* Redis

### Демо

Демо сервиса доступно по адресу: http://37.143.12.141

## Среда запуска

1. развертывание сервиса производится на debian-like linux (debian 9+);
2. требуется установленный web-сервер с поддержкой Ruby(версия 2.7.2) интерпретации (apache, nginx);
3. требуется установленная СУБД PostgreSQL (версия 9.3+);
4. требуется установленный ruby и yarn ;

## Установка

### Установка пакета ruby, yarn

```
  sudo apt-get update
  sudo apt-get upgrade
  sudo apt-add-repository -y ppa:rael-gc/rvm
  sudo apt-get install rvm
  rvm install 2.7.2
  apt-get install yarn
```

### База данных

```
  apt-get install postgres postgresql libpq-dev
  sudo apt-get install software-properties-common
  apt-get install redis
```

