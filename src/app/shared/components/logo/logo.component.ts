import { Component, Input } from '@angular/core';
import { Size } from 'src/app/shared/enums/size.enum';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent {

  @Input() size!: Size;

  ngOnInit(): void {
    this.size = Size.MD;
  }

}
