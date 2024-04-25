import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SkillService {
  public itemsFirst = [
    {
      title:'HTML',
      image: '/assets/img/skills/html.svg',
    },
    {
      title:'CSS',
      image:'/assets/img/skills/css-3.svg'
    },
    {
      title:'Javascript',
      image:'/assets/img/skills/javascript.svg'
    },
    {
      title:'Nodejs',
      image:'/assets/img/skills/nodejs.svg'
    },
    {
      title:'Angular',
      image:'/assets/img/skills/angular.svg'
    },
    {
      title:'Bootstrap',
      image:'/assets/img/skills/bootstrap.svg'
    },
    {
      title:'Tailwindcss',
      image:'/assets/img/skills/tailwind-css.svg'
    },
  ]  
  public itemsSecond = [
    {
      title:'Postgresql',
      image:'/assets/img/skills/postgresql.svg'
    },
    {
      title:'Php',
      image:'/assets/img/skills/php.svg'
    },
    {
      title:'Docker',
      image:'/assets/img/skills/docker.svg'
    },
    {
      title:'Laravel',
      image:'/assets/img/skills/laravel.svg'
    },
    {
      title:'Mongodb',
      image:'/assets/img/skills/mongodb.svg'
    },
    {
      title:'Mysql',
      image:'/assets/img/skills/mysql-logo.svg'
    },
    {
      title:'Figma',
      image:'/assets/img/skills/figma.svg'
    },
    {
      title:'Postman',
      image:'/assets/img/skills/postman-icon.svg'
    }
  ]

  public items = [
    {
      title:'Angular',
      image:'/assets/img/skills/angular.svg'
    },
    {
      title:'Nodejs',
      image:'/assets/img/skills/nodejs.svg'
    },
    {
      title:'Javascript',
      image:'/assets/img/skills/javascript.svg'
    },
    {
      title:'HTML',
      image: '/assets/img/skills/html.svg',
    },
    {
      title:'CSS',
      image:'/assets/img/skills/css-3.svg'
    },
    {
      title:'Bootstrap',
      image:'/assets/img/skills/bootstrap.svg'
    },
    {
      title:'Tailwindcss',
      image:'/assets/img/skills/tailwind-css.svg'
    },
    {
      title:'Postgresql',
      image:'/assets/img/skills/postgresql.svg'
    },
    {
      title:'Mysql',
      image:'/assets/img/skills/mysql-logo.svg'
    },
    {
      title:'Mongodb',
      image:'/assets/img/skills/mongodb.svg'
    },
    {
      title:'Docker',
      image:'/assets/img/skills/docker.svg'
    },
    {
      title:'Php',
      image:'/assets/img/skills/php.svg'
    },
    {
      title:'Laravel',
      image:'/assets/img/skills/laravel.svg'
    },
    {
      title:'Figma',
      image:'/assets/img/skills/figma.svg'
    },
    {
      title:'Postman',
      image:'/assets/img/skills/postman-icon.svg'
    },
    {
      title:'Github',
      image:'/assets/img/skills/github.svg'
    }    
  ]

  constructor() { }

  getItemFirst(){
    return this.itemsFirst;
  }
  getItemSecond(){
    return this.itemsSecond
  }
  gitItem(){
    return this.items;
  }

}
