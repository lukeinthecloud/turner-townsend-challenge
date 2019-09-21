import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommunicationService } from './services/communication/communication.service';
import { MessageHandlerService } from './services/message-handler/message-handler.service';
import { MenuComponent } from './view/components/menu/menu.component';

@NgModule({
  declarations: [
    MenuComponent,
    AppComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [
    CommunicationService,
    MessageHandlerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
