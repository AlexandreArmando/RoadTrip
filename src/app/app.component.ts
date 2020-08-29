import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Gérer mes évènements',
      url: '/folder/Inbox',
      icon: 'grid-outline'
    },
    {
      title: 'Créer un évènement',
      url: '/folder/Outbox',
      icon: 'add-circle-outline'
    },
    {
      title: 'Ajouter une activité',
      url: '/folder/Favorites',
      icon: 'heart'
    },
    {
      title: 'Besoin d\'aide',
      url: '/folder/Archived',
      icon: 'help-outline'
    },
    {
      title: 'Regarder une publicité',
      url: '/folder/Spam',
      icon: 'eye-outline'
    },
    {
      title: 'Paramètres',
      url: '/folder/Spam',
      icon: 'settings-outline'
    },
    {
      title: 'A propos',
      url: '/folder/Spam',
      icon: 'information-circle-outline'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
}
