import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ListArticleComponent } from './pages/article/list-article/list-article.component';
import { AddEditArticleComponent } from './pages/article/add-edit-article/add-edit-article.component';
import { ViewArticleComponent } from './pages/article/view-article/view-article.component';
import { ListQuestionComponent } from './pages/question/list-question/list-question.component';
import { ViewQuestionComponent } from './pages/question/view-question/view-question.component';
import { DashboardComponent } from './pages/account/dashboard/dashboard.component';
import { ActivateComponent } from './pages/account/activate/activate.component';
import { LogoutComponent } from './pages/account/logout/logout.component';
import { ErrorPageComponent } from './pages/errors/error-page/error-page.component';
import { AddEditQuestionComponent } from './pages/question/add-edit-question/add-edit-question.component';
import { SearchComponent } from './pages/search/search.component';


const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full', data: {title:'Infomil KRS - Homepage', showAccount: true}},
  { path: 'search', component: SearchComponent, data: {title:'Infomil KRS - Advance search', showAccount: true} },
  { path: 'user/:id', component: DashboardComponent, data: {title:'Infomil KRS - My dashboard', showAccount: true} },
  { path: 'activate', component: ActivateComponent, data: {title:'Infomil KRS - Activate your account', showAccount: false} },
  { path: 'activate/:id/:key', component: ActivateComponent, data: {title:'Infomil KRS - Activate your account', showAccount: false}},
  { path: 'logout', component: LogoutComponent, data: {title:'Infomil KRS - Logout', showAccount: false}},
  { path: 'articles', component: ListArticleComponent, data: {title:'Infomil KRS - Articles', showAccount: true}},
  { path: 'articles/view/:id', component: ViewArticleComponent, data: {title:'Infomil KRS - View article', showAccount: true}},
  { path: 'articles/edit/:id', component: AddEditArticleComponent, data: {title:'Infomil KRS - Edit article', showAccount: true}},
  { path: 'articles/create', component: AddEditArticleComponent, data: {title:'Infomil KRS - Add article', showAccount: true}},
  { path: 'questions', component: ListQuestionComponent, data: {title:'Infomil KRS - Questions', showAccount: true}},
  { path: 'questions/view/:id', component: ViewQuestionComponent, data: {title:'Infomil KRS - View question', showAccount: true}},
  { path: 'questions/edit/:id', component: AddEditQuestionComponent, data: {title:'Infomil KRS - Edit a question', showAccount: true}},
  { path: 'questions/create', component: AddEditQuestionComponent, data: {title:'Infomil KRS - Add a question', showAccount: true}},

  { path: '400', component: ErrorPageComponent, data: {title:'Infomil KRS - Error 400', showAccount: false, errorCode: 400}},
  { path: '401', component: ErrorPageComponent, data: {title:'Infomil KRS - Error 401', showAccount: false, errorCode: 401}},
  { path: '404', component: ErrorPageComponent, data: {title:'Infomil KRS - Error 404', showAccount: false, errorCode: 404}},
  { path: '405', component: ErrorPageComponent, data: {title:'Infomil KRS - Error 405', showAccount: false, errorCode: 405}},
  { path: '408', component: ErrorPageComponent, data: {title:'Infomil KRS - Error 408', showAccount: false, errorCode: 408}},
  { path: '500', component: ErrorPageComponent, data: {title:'Infomil KRS - Error 500', showAccount: false, errorCode: 500}},

  // Catching all other routes for unknown paths
  { path: '**', redirectTo: '/404', data: {showAccount: false} }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
