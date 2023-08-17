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
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'search', component: SearchComponent},
  { path: 'user/:id', component: DashboardComponent},
  { path: 'activate', component: ActivateComponent},
  { path: 'activate/:id/:key', component: ActivateComponent},
  { path: 'logout', component: LogoutComponent},
  { path: 'articles', component: ListArticleComponent},
  { path: 'articles/view/:id', component: ViewArticleComponent},
  { path: 'articles/edit/:id', component: AddEditArticleComponent},
  { path: 'articles/add', component: AddEditArticleComponent},
  { path: 'questions', component: ListQuestionComponent},
  { path: 'questions/view/:id', component: ViewQuestionComponent},
  { path: 'questions/edit/:id', component: AddEditQuestionComponent},
  { path: 'questions/add', component: AddEditQuestionComponent},
  { path: '404', component: ErrorPageComponent },
  { path: '405', component: ErrorPageComponent },
  { path: '500', component: ErrorPageComponent },

  // Catching all other routes for unknown paths
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
