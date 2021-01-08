import {NgModule, APP_INITIALIZER} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HTTP_INTERCEPTORS,HttpClientModule} from '@angular/common/http';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {ClipboardModule} from 'ngx-clipboard';
import {TranslateModule} from '@ngx-translate/core';
import {InlineSVGModule} from 'ng-inline-svg';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AuthService} from './modules/auth/_services/auth.service';
import {environment} from 'src/environments/environment';
// Highlight JS
import {HighlightModule, HIGHLIGHT_OPTIONS} from 'ngx-highlightjs';
import highlight from 'highlight.js/lib/highlight';
import xml from 'highlight.js/lib/languages/xml';
import json from 'highlight.js/lib/languages/json';
import scss from 'highlight.js/lib/languages/scss';
import typescript from 'highlight.js/lib/languages/typescript';
import {SplashScreenModule} from './_metronic/partials/layout/splash-screen/splash-screen.module';
// #fake-start#
import {FakeAPIService} from './_fake/fake-api.service';
// #fake-end#

import {ModelModule} from './models/model.module';
import { ServicesModule } from './services/services.module';
import {HttpIntercepterBasicAuthService} from './services/http-intercepter-basic-auth.service';

function appInitializer(authService: AuthService) {
    return () => {
        return new Promise((resolve) => {
            authService.getUserByToken().subscribe().add(resolve);
        });
    };
}

export function getHighlightLanguages() {
    return [
        {name: 'typescript', func: typescript},
        {name: 'scss', func: scss},
        {name: 'xml', func: xml},
        {name: 'json', func: json},
    ];
}

@NgModule({
    declarations: [AppComponent],
    imports: [
        // our own modules
        ModelModule,
        ServicesModule,

        // built in and another modules
        BrowserModule,
        BrowserAnimationsModule,
        SplashScreenModule,
        TranslateModule.forRoot(),
        HttpClientModule,
        HighlightModule,
        ClipboardModule,
        // #fake-start#
        environment.isMockEnabled
            ? HttpClientInMemoryWebApiModule.forRoot(FakeAPIService, {
                passThruUnknownUrl: true,
                dataEncapsulation: false,
            })
            : [],
        // #fake-end#
        AppRoutingModule,
        InlineSVGModule.forRoot(),
        NgbModule,
    ],
    providers: [
        {
            provide: APP_INITIALIZER,
            useFactory: appInitializer,
            multi: true,
            deps: [AuthService],
        },
        {
            provide: HIGHLIGHT_OPTIONS,
            useValue: {
                languages: getHighlightLanguages,
            },
        },
        {provide: HTTP_INTERCEPTORS, useClass: HttpIntercepterBasicAuthService, multi: true }
    ],
    bootstrap: [AppComponent],
})
export class AppModule {
}
