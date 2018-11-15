import { Injectable, EventEmitter } from '@angular/core'
import { Subject, Observable } from 'rxjs';
import { IEvent, ISession } from './event.model';



@Injectable()
export class EventService {
    getEvents():Observable<IEvent[]>{
      let subject = new Subject<IEvent[]>()
      setTimeout(() => {subject.next(EVENTS); subject.complete();}, 100)
        return subject 
    }
    getEvent(id):IEvent{
      return EVENTS.find(event => event.id === id)
    }
    saveEvent(event)
    {
      event.id = 999
      event.session = []
      EVENTS.push(event)
    }
    updateEvent(event){
      let index = EVENTS.findIndex(x => x.id = event.id)
      EVENTS[index]= event
        }
        searchSessions(searchTerm: string) {
          var Term = searchTerm.toLocaleLowerCase();
          var results: ISession[]=[];

          EVENTS.forEach(event => {
            var matchingSessions = event.sessions.filter(session => 
              session.name.toLocaleLowerCase().indexOf(searchTerm) > -1);
            matchingSessions = matchingSessions.map((session:any) => {
              session.eventId = event.id;
              return session;
            })
            results= results.concat(matchingSessions);
          })

        var emitter = new EventEmitter(true);
        setTimeout(() => {
          emitter.emit(results);
        },100);
        return emitter;
        }
      
}

const EVENTS:IEvent[]= [
    {
      id: 1,
      name: 'Angular',
      date: new Date('9/06/2019'),
      time: '10:00 am',
      price: 599.99,
      imageUrl: '/assets/images/angular.png',
      location: {
        address: '1057 DT',
        city: 'London',
        country: 'England'
                },
      sessions: [
        {
          id: 1,
          name: "Using Angular 4 Pipes",
          presenter: "Peter Bacon Darwin",
          duration: 1,
          level: "Intermediate",
          abstract: `Learn all about the new pipes in Angular 4, both 
          how to write them, and how to get the new AI CLI to write 
          them for you. Given by the famous PBD, president of Angular 
          University (formerly Oxford University)`,
          voters: ['bradgreen', 'igorminar', 'martinfowler']
        },
        {
          id: 2,
          name: "Getting the most out of your dev team",
          presenter: "Jeff Cross",
          duration: 1,
          level: "Intermediate",
          abstract: `We all know that our dev teams work hard, but with 
          the right management they can be even more productive, without 
          overworking them. In this session I'll show you how to get the 
          best results from the talent you already have on staff.`,
          voters: ['johnpapa', 'bradgreen', 'igorminar', 'martinfowler']
        },
        {
          id: 3,
          name: "Angular 4 Performance Metrics",
          presenter: "Rob Wormald",
          duration: 2,
          level: "Advanced",
          abstract: `Angular 4 Performance is hot. In this session, we'll see 
          how Angular gets such great performance by preloading data on 
          your users devices before they even hit your site using the 
          new predictive algorithms and thought reading software 
          built into Angular 4.`,
          voters: []
        },
        {
          id: 4,
          name: "Angular 5 Look Ahead",
          presenter: "Brad Green",
          duration: 2,
          level: "Advanced",
          abstract: `Even though Angular 5 is still 6 years away, we all want 
          to know all about it so that we can spend endless hours in meetings 
          debating if we should use Angular 4 or not. This talk will look at 
          Angular 6 even though no code has yet been written for it. We'll 
          look at what it might do, and how to convince your manager to 
          hold off on any new apps until it's released`,
          voters: []
        },
        {
          id: 5,
          name: "Basics of Angular 4",
          presenter: "John Papa",
          duration: 2,
          level: "Beginner",
          abstract: `It's time to learn the basics of Angular 4. This talk 
          will give you everything you need to know about Angular 4 to 
          get started with it today and be building UI's for your self 
          driving cars and butler-bots in no time.`,
          voters: ['bradgreen', 'igorminar']
        }
      ]
    },
    {
      id: 2,
      name: 'JavaScript',
      date: new Date('4/15/2037'),
      time: '9:00 am',
      price: 950.00,
      imageUrl: '/assets/images/javascript.png',
      onlineUrl: "https://developer.mozilla.org/bm/docs/Web/JavaScript/Reference",
  
      sessions: [
        {
          id: 1,
          name: "JavaScript: Understanding the Weird Parts",
          presenter: "Pascal Precht & Christoph Bergdorf",
          duration: 4,
          level: "Beginner",
          abstract: `In this course you will gain a deep understanding of Javascript, 
          learn how Javascript works under the hood, and how that knowledge helps you avoid
           common pitfalls and drastically improve your ability to debug problems. You will find 
           clarity in the parts that others, even experienced coders, may find weird, odd, and at
            times incomprehensible. You'll learn the beauty and deceptive power of this language that 
            is at the forefront of modern software development today.`,
          voters: ['bradgreen', 'igorminar']
        },
        {
          id: 2,
          name: "Modern JavaScript From The Beginning and Firebase",
          presenter: "David East",
          duration: 3,
          level: "Intermediate",
          abstract: `This is a front to back JavaScript course for absolutely everybody. 
          We start with the basic fundamentals and work our way to advanced programming WITHOUT
           relying on frameworks or libraries at all. You will learn a ton of pure JavaScript, 
           whether you are a beginner or an established JS programmer. 
           There is something for everyone...`,
          voters: ['bradgreen', 'igorminar', 'johnpapa']
        },
        {
          id: 3,
          name: "ES6 Javascript: The Complete Developer's Guide",
          presenter: "Patrick Stapleton",
          duration: 2,
          level: "Intermediate",
          abstract: `Mastering ES6 syntax can get you a position in web development 
          or help you build that personal project you've been dreaming of. It's a skill
           that will put you more in demand in the modern web development industry, especially
            with the release of modern web frameworks like React and Angular 2.`,
          voters: ['martinfowler']
        },
        {
          id: 4,
          name: "Hail to the Lukas",
          presenter: "Lukas Ruebbelke",
          duration: 1,
          level: "Beginner",
          abstract: `In this session, Lukas will present the 
          secret to being awesome, and how he became the President 
          of the United States through his amazing programming skills, 
          showing how you too can be success with just attitude.`, 
          voters: ['bradgreen']
        },
      ]
    },
    {
      id: 3,
      name: 'ExpressJS',
      date: new Date('5/4/2037'),
      time: '9:00 am',
      price: 759.00,
      imageUrl: '/assets/images/express.png',
      location: {
        address: 'The Palatial America Hotel',
        city: 'Salt Lake City',
        country: 'USA'
      },
      sessions: [
        {
          id: 1,
          name: "ExpressJS from Beginner to Advanced",
          presenter: "Murphy Randle",
          duration: 2,
          level: "Intermediate",
          abstract: `If you have no previous knowledge or experience in ExpressJS, 
          you will like that the course begins with the basics. Even if you do have 
          some experience, this course can help you learn some new information you had
          missed before. Each section of the course is linked to the previous one in terms 
          of utilizing what was already learned and each topic is supplied with lots of 
          examples which will help students in their process of learning. Upon the completion
           of this course, you should be able to write programs that have real-life applications.`,
          voters: ['bradgreen', 'martinfowler', 'igorminar']
        },
        {
          id: 2,
          name: "Learning Express Web Application Development",
          presenter: "Jamison Dance",
          duration: 2,
          level: "Intermediate",
          abstract: `You’ll start with using the Jade template library and 
          Bootstrap framework to create clean and maintainable code for your app. 
          You will then see how to put MongoDB to work, store data for your app, and incorporate
           best-practices such as modularization. You’ll go beyond the basics to include authentication, 
           test-driven-development, and powerful time-saving tools to get the app ready for deploying. 
           You will also explore CSS preprocessors and create RESTful services that make the best of MVC 
           libraries and add that extra edge to your app.`,
          voters: ['bradgreen', 'martinfowler']
        },
        {
          id: 3,
          name: "Learn Expressjs for beginners: A JavaScript Framework",
          presenter: "Rob Wormald",
          duration: 1,
          level: "Intermediate",
          abstract: `Express is a fast, minimalist framework that sits on top of Node.js and allows you to build
           powerful single- and multi-page web applications and websites.Express JS is built  with Node JS  and is a 
           web framework that can help developers build faster and smarter websites and web apps. NodeJS is a server-side 
           technology built using JavaScript.Express can also be integrated with other modules and databases and
            offers HTTP utilities and middleware for creating APIs.`,
          voters: ['bradgreen', 'martinfowler', 'johnpapa']
        },
        {
          id: 4,
          name: "ExpressJS Fundamentals",
          presenter: "Shai Reznik",
          duration: 1,
          level: "Beginner",
          abstract: `Node and Express go hand in hand. The ability to use this programming 
          paradigm on any kind of web or mobile application makes this skillset incredibly valuable.
          And the advantage of being able to build Full Stack applications based on just 
          one language (JavaScript) is becoming more appealing every day. This is especially 
          true for start-ups that put a big emphasis on being able to iterate early and often.`,
          voters: ['bradgreen', 'martinfowler', 'igorminar', 'johnpapa']
        },
        {
          id: 5,
          name: "Dressed for Success",
          presenter: "Ward Bell",
          duration: 2,
          level: "Beginner",
          abstract: `Being a developer in 2037 is about more than just writing bug-free code. 
          You also have to look the part. In this amazing expose, Ward will talk you through
          how to pick out the right clothes to make your coworkers and boss not only
          respect you, but also want to be your buddy.`,
          voters: ['bradgreen', 'martinfowler']
        },
        {
          id: 6,
          name: "Learn Expressjs for beginners: A JavaScript Framework",
          presenter: "John Papa",
          duration: 2,
          level: "Intermediate",
          abstract: `This course will teach you the very basics in practical steps 
          from installation to creating basic routes and using various http request and 
          response  status codes.  You will learn how to use a useful tool called postman
           to test http request methods and also the response and status codes. We will also 
           be learning how to install mongodb database and integrate it into our express app.  `,
          voters: ['bradgreen', 'martinfowler']
        },
      ]
    },
    {
      id: 4,
      name: 'MongoDB',
      date: new Date('9/6/2008'),
      time: '8:00 am',
      price: 800.00,
      imageUrl: '/assets/images/mongodb.png',
      location: {
        address: 'The UN Angular Center',
        city: 'New York',
        country: 'USA'
      },
      sessions: [
        {
          id: 1,
          name: "The Complete Developers Guide to MongoDB",
          presenter: "Sir Dave Smith",
          duration: 2,
          level: "Beginner",
          abstract: `We'll start by mastering the fundamentals of Mongo, including
           collections, validations, and common record manipulation techniques. 
           Source code is provided for each lecture, so you will always stay up-to-date
            with the course pacing.  Special attention has been paid to creating reusable 
            code that you'll be able to make use of on your own fantastic projects.`,
          voters: ['bradgreen', 'igorminar']
        },
        {
          id: 2,
          name: "Learn MongoDB : Leading NoSQL Database from scratch",
          presenter: "US Secretary of State Zach Galifianakis",
          duration: 2,
          level: "Beginner",
          abstract: `We will start with basics of MongoDB and then we go on learning advance 
          concepts to build MongoDB based applications.In this course, we will start by learning 
          basic concepts of MongoDB, MongoDB installation process on different operating systems,
           creating databases, Collections, CRUD opertaions and Indexing.You can use the exercise 
           files attached along this course to practice and follow along the each section/chapter. 
           There will be short quizzes after each section to test our understanding and also to revise
            the concepts.At the end of this course you will be mastering MongoDB based application development.`,
          voters: ['bradgreen', 'igorminar', 'johnpapa']
        },
        {
          id: 3,
          name: "Advance to MongoDB",
          presenter: "Dan Wahlin",
          duration: 3,
          level: "Advanced",
          abstract: `Goal of the course is to give you indepth understanding of what is MongoDB,
           which main features it has and of course try to use and master those features yourself.`,
          voters: ['igorminar', 'johnpapa']
        },
      ]
    },
    {
      id: 5,
      name: 'PHP',
      date: new Date('2/10/2037'),
      time: '9:00 am',
      price: 400.00,
      imageUrl: '/assets/images/php.png',
      location: {
        address: 'The Excalibur',
        city: 'Las Vegas',
        country: 'USA'
      },
      sessions: [
        {
          id: 1,
          name: "PHP for Beginners - Become a PHP Master - CMS Project",
          presenter: "John Papa",
          duration: 1,
          level: "Intermediate",
          abstract: `Are you new to PHP or need a refresher? Then this course will help you
           get all the fundamentals of Procedural PHP, Object Oriented PHP, MYSQLi and ending 
           the course by building a CMS system similar to WordPress, Joomla or Drupal.
          Knowing PHP has allowed me to make enough money to stay home and make courses
           like this one for students all over the world. Being a PHP developer can allow 
           anyone to make really good money online and offline, developing dynamic applications.
          Knowing PHP will allow you to build web applications, websites or Content Management
           systems, like WordPress, Facebook, Twitter or even Google.`,
          voters: ['bradgreen', 'igorminar']
        },
        {
          id: 2,
          name: "Complete PHP MVC tutorial. Create your own PHP MVC framework",
          presenter: "Dan Wahlin",
          duration: 2,
          level: "Beginner",
          abstract: `MVC pattern, which stands for Model View Controller, is a widely – used programming technology
           and the most popular technique in web applications development.The most popular frameworks such 
           as Laravel, Symphony, Yii, Zend are based on MVC pattern. So, it undoubtedly worth learning.
          `,
          voters: ['bradgreen', 'igorminar', 'johnpapa']
        }
      ]
    }
  ]