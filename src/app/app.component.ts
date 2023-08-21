import { Component } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';
import { LoaderService } from './shared/services/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Infomil KRS';

  public siteReady: boolean = false;

  constructor(private router: Router, private _route: ActivatedRoute, public loaderService: LoaderService) {

  }

  ngOnInit(): void {
    setTimeout(() => {
      this.loaderService.hideLoader();
    }, 2500);
  }

}
