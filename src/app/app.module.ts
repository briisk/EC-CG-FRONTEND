import { UserModule } from './user/user.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule,  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { StoreModule } from '@ngrx/store';
import { counterReducer, CounterComponent } from './counter';
import { AppComponent } from './app.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { BoardComponent } from './board/board.component';
import { boardReducer } from './board';
import { UserListComponent } from './user/user-list/user-list.component';
import { LoginScreenComponent } from './user/login-screen/login-screen.component';
import { PhoenixChannels } from './helpers';

export function phoenixChannelsFactory() {
  return new PhoenixChannels('ws://192.168.0.117:4000/socket');
};
@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    BoardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    StoreModule.provideStore({ counter: counterReducer, board: boardReducer }),
    StoreDevtoolsModule.instrumentOnlyWithExtension({
      maxAge: 5
    }),
    UserModule,
  ],
  providers: [{
    provide: PhoenixChannels,
    useFactory: phoenixChannelsFactory,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
