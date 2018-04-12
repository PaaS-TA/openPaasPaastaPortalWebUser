import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {CatalogComponent} from './catalog/catalog.component';
import {DomainComponent} from './domain/domain.component';
import {LogComponent} from './log/log.component';
import {LoginComponent} from './login/login.component';
import {MenuComponent} from './menu/menu.component';
import {OrgComponent} from './org/org.component';
import {ServiceComponent} from './service/service.component';
import {SpaceComponent} from './space/space.component';
import {UsageComponent} from './usage/usage.component';
import {UserComponent} from './user/user.component';
import {WebIdeUserComponent} from './web-ide-user/web-ide-user.component';
import {CfAppComponent} from './cf-app/cf-app.component';
import {IndexComponent} from './index/index.component';
import {RoutingModule} from './app.routing';
import {HttpClientModule} from '@angular/common/http';
import {TopComponent} from './layout/top/top.component';
import {BottonComponent} from './layout/botton/botton.component';
import {LeftComponent} from './layout/left/left.component';
import {FormsModule} from '@angular/forms';

import {UaaSecurityService} from './auth/uaa-security.service';
import {CallbackComponent} from './callback/callback.component';
import {LoggerModule, NgxLoggerLevel} from 'ngx-logger';
import {LogoutComponent} from './logout/logout.component';

import {DashboardService} from './dashboard/dashboard.service';
import {JsonpModule} from '@angular/http';
import {ANIMATION_TYPES, LoadingModule} from 'ngx-loading';
import {CommonService} from "./common/common.service";





@NgModule({
  declarations: [
    AppComponent,
    CfAppComponent,
    DashboardComponent,
    CatalogComponent,
    DomainComponent,
    LogComponent,
    LoginComponent,
    MenuComponent,
    OrgComponent,
    ServiceComponent,
    SpaceComponent,
    UsageComponent,
    UserComponent,
    WebIdeUserComponent,
    IndexComponent,
    TopComponent,
    BottonComponent,
    LeftComponent,
    CallbackComponent,
    LogoutComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'serverApp'}),
    FormsModule,
    RoutingModule,
    HttpClientModule,
    LoadingModule.forRoot({
      animationType: ANIMATION_TYPES.rectangleBounce,
      backdropBackgroundColour: '#787878',
      backdropBorderRadius: '4px',
      primaryColour: '#EB0000',
      secondaryColour: '#B2FA5C',
      tertiaryColour: '#3296FF'
    }),
    LoggerModule.forRoot({serverLoggingUrl: '/ps/logs', level: NgxLoggerLevel.DEBUG, serverLogLevel: NgxLoggerLevel.ERROR}), JsonpModule
  ],
  providers: [CommonService, UaaSecurityService, DashboardService],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule {
}
