import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes, withPreloading(PreloadAllModules)),
    provideFirebaseApp(() => initializeApp({
      "projectId":"fir-ionic-project-40c8d",
      "appId":"1:1052026763017:web:e577c6e399ea157f6cc5d8",
      "storageBucket":"fir-ionic-project-40c8d.appspot.com",
      "apiKey":"AIzaSyAcxbvb7aOKD_coU6onOk819uPrWDoNbHU",
      "authDomain":"fir-ionic-project-40c8d.firebaseapp.com",
      "messagingSenderId":"1052026763017"})),
      provideAuth(() => getAuth()),
      provideFirestore(() => getFirestore()),
  ],
});
