import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-modialog';
import { BootstrapModalModule } from 'ngx-modialog/plugins/bootstrap';
// import { FroalaEditorModule, FroalaViewModule } from 'angular2-froala-wysiwyg';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module
import { CKEditorModule,CKEditorComponent  } from 'ng2-ckeditor';
// import { QuillModule,QuillEditorComponent } from 'ngx-quill'


import { DatePickerModule } from 'ng2-datepicker';
// import { ReactiveFormsModule } from '@angular/forms';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';

import { AppComponent } from './app.component';
import { BsDropdownModule } from 'ng2-bootstrap/dropdown';
import { TabsModule } from 'ng2-bootstrap/tabs';
import { NAV_DROPDOWN_DIRECTIVES } from './shared/nav-dropdown.directive';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { ChartsModule } from 'ng2-charts/ng2-charts';
import { SIDEBAR_TOGGLE_DIRECTIVES } from './shared/sidebar.directive';
import { AsideToggleDirective } from './shared/aside.directive';
import { BreadcrumbsComponent } from './shared/breadcrumb.component';

// Routing Module
import { AppRoutingModule } from './app.routing';
import { AuthGuard } from './_guards/index';

// Layouts
import { FullLayoutComponent } from './layouts/full-layout.component';
import { SimpleLayoutComponent } from './layouts/simple-layout.component';
import { TipsService } from './providers/tipsProvider/tipsProvider';
import { AuthService } from './providers/tipsProvider/authProvider';
import { globalService } from './providers/tipsProvider/globalService';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TagInputModule } from 'ngx-chips';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    ModalModule.forRoot(),
    BootstrapModalModule,
    HttpModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule,
    CKEditorModule,
    // QuillModule,
    Ng2Bs3ModalModule,
    // ImageCropperModule,
    // FroalaEditorModule.forRoot(), FroalaViewModule.forRoot(),
    NgxPaginationModule,
    DatePickerModule,
    BrowserAnimationsModule,
    TagInputModule
    
  ],
  declarations: [
    AppComponent,
    FullLayoutComponent,
    SimpleLayoutComponent,
    NAV_DROPDOWN_DIRECTIVES,
    BreadcrumbsComponent,
    SIDEBAR_TOGGLE_DIRECTIVES,
    AsideToggleDirective,
    //tipsListComponent
    AsideToggleDirective,
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy,
  },
    TipsService,
    AuthService,
    globalService,
    AuthGuard
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);
