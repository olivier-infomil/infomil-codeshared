import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Size } from 'src/app/shared/enums/size.enum';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent {

  constructor(private _router: Router){}

  @Input() size!: Size;

  ngOnInit(): void {
  }

  navigateToHome(){
    this._router.navigateByUrl("/");
  }

}
