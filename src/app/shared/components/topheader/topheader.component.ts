import { Component } from '@angular/core';
import { Size } from 'src/app/shared/enums/size.enum';

@Component({
  selector: 'app-topheader',
  templateUrl: './topheader.component.html',
  styleUrls: ['./topheader.component.scss']
})
export class TopheaderComponent {
  public logoSize: Size = Size.MD;
}
