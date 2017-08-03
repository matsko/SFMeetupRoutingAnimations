import { Component, HostBinding } from '@angular/core';
import { trigger, stagger, animation, useAnimation, group, transition, animate, style, query } from '@angular/animations';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css'],
  animations: [
    trigger('pageAnimation', [
      transition(':leave', [
        query('h1, .search-bar, .record', [
          stagger(100, [
            animate('300ms ease-out', style({ transform: 'translateY(-100px)', opacity: 0 }))
          ])
        ])
      ]),
      transition(':enter', [
        query('h1, .search-bar, .record', [
          style({ opacity: 0, transform: 'translateY(-100px)' }),
          stagger(-100, [
            animate(300, style('*'))
          ])
        ])
      ]),
    ]),
    trigger('listAnimation', [
      transition(':enter', []),
      transition(':leave', []),
      transition(':increment', [
        query(':enter', [
          style({ height: '0px' }),
          stagger(100, [
            animate(300, style({ height: '*' }))
          ])
        ])
      ]),
      transition(':decrement', [
        query(':leave', [
          style({ height: '!' }),
          stagger(-100, [
            animate(300, style({ height: '0px' }))
          ])
        ])
      ]),
    ])
  ]
})
export class ListPageComponent {
  @HostBinding('@pageAnimation')
  public animatePage = true;

  constructor() {
    this.search('');
  }

  public items: any[] = [];
  private allItems = [
    {
      id: 1,
      title: "High Level Routing Animations in Angular",
      description: `
        With Angular 4.3+ routable animations are a powerful and super cool feature. Let's examine router-level animations from start to finish while exploring all the other new animations such as querying, orchestrating sub animations, and staggering.
      `
    },
    {
      id: 2,
      title: "Automated API model enforcement with Swagger and TypeScript and IoT PWA IRL FTW",
      description: `
        Progressive Web Apps are not replacing native mobile applications any time soon. Don’t disregard them just yet! They can take our web applications that we currently have running In Real Life. By using support for offline caching, push notifications, home screen icons and more, we can use PWAs to make our apps more reliable and engaging, For The Win!

        We will walk through creating a simple Angular application using the Kendo UI for Angular library to get started. Then we’ll see how quickly we can upgrade our application to a PWA. Looking into each addition, we’ll discuss why and how this progresses our application.
      `
    },
    {
      id: 3,
      title: "TypeScript & D3 Server-Side Rendering",
      description: `
        TypeScript's type system can be best described as pragmatic yet fancy. Rado will walk you through some of the fancier types and their practical uses. These include union and intersection types, literal types and more.
      `
    },
    {
      id: 4,
      title: "Progressive from the Start",
      description: `
        Core team member working to optimize the Angular platform for the next generation of applications, including mobile. Before joining the Angular team, Alex worked in the Google sales organization where he helped build the first large Angular application within Google.
      `
    },
    {
      id: 5,
      title: "Boosting the Security of Your Angular Application",
      description: `
        Angular is hot, and there is a huge amount of information available on building applications, improving performance, and various other topics. But do you know how to make your Angular applications secure? What kind of security features does Angular offer you, and which additional steps can you take to really boost the security of your applications?

        In this session, we cover one of the biggest threats in modern web applications: untrusted JavaScript code. You will learn how Angular protects you against XSS, and why you shouldn't bypass this protection. We will also dive into new security mechanisms, such as Content Security Policy. Through a few examples,the speaker will show you how you can use these mechanisms to enhance the security in your client-side context.
      `
    },
    {
      id: 6,
      title: "Be One With the Crawler",
      description: `
        Google and other search engine crawlers have gotten much more sophisticated in how they crawl Javascript applications in the past few years. For the most part, well-developed Javascript apps, including Angular apps, are crawled with no problem. In this talk, Jeff Cross of nrwl.io (former Angular team at Google) will share some Angular-specific best practices to implement, and pitfalls to avoid, in order to help crawlers navigate and understand your content.
      `
    }
  ];

  search(criteria: string) {
    const q = criteria.trim().toLowerCase();
    this.items = this.allItems.filter(item => {
      if (!q) return true;
      if (item.title.toLowerCase().indexOf(q) >= 0) return true;
      if (item.description.toLowerCase().indexOf(q) >= 0) return true;
      if (item.id.toString() == criteria) return true;
      return false;
    });
  }

  generateColorClass(i) {
    const numberVal = i % 5;
    return `index color-${numberVal}`;
  }
}
