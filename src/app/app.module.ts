// Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { AppRoutingModule } from './app-routing.module';
import { AutoCompleteModule } from 'primeng/autocomplete';

// Components
import { AppComponent } from './app.component';

// Shared Components
import { NavigationComponent } from './shared/components/navigation/navigation.component';
import { LogoComponent } from './shared/components/logo/logo.component';
import { LoginComponent } from './shared/components/login/login.component';
import { TopheaderComponent } from './shared/components/topheader/topheader.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { ModalComponent } from './shared/components/modal/modal.component';
import { LoaderComponent } from './shared/components/loader/loader.component';

// Pages
import { ViewArticleComponent } from './pages/article/view-article/view-article.component';
import { AddEditArticleComponent } from './pages/article/add-edit-article/add-edit-article.component';
import { ListArticleComponent } from './pages/article/list-article/list-article.component';
import { ViewQuestionComponent } from './pages/question/view-question/view-question.component';
import { AddEditQuestionComponent } from './pages/question/add-edit-question/add-edit-question.component';
import { ListQuestionComponent } from './pages/question/list-question/list-question.component';
import { HomeComponent } from './pages/home/home.component';
import { LogoutComponent } from './pages/account/logout/logout.component';
import { DashboardComponent } from './pages/account/dashboard/dashboard.component';
import { PlaygroundComponent } from './test/playground/playground.component';
import { ErrorPageComponent } from './pages/errors/error-page/error-page.component';
import { ActivateComponent } from './pages/account/activate/activate.component';
import { HpSubheaderComponent } from './components/hp-subheader/hp-subheader.component';
import { HpSearchComponent } from './components/hp-search/hp-search.component';
import { SearchComponent } from './pages/search/search.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavigationComponent,
    LogoComponent,
    TopheaderComponent,
    FooterComponent,
    SidebarComponent,
    ModalComponent,
    ViewArticleComponent,
    AddEditArticleComponent,
    ListArticleComponent,
    ViewQuestionComponent,
    AddEditQuestionComponent,
    ListQuestionComponent,
    HomeComponent,
    LogoutComponent,
    DashboardComponent,
    PlaygroundComponent,
    LoaderComponent,
    ErrorPageComponent,
    ActivateComponent,
    HpSubheaderComponent,
    HpSearchComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    InputTextModule,
    PasswordModule,
    FormsModule,
    ButtonModule,
    RippleModule,
    AutoCompleteModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
