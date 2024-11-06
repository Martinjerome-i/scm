import { Component } from '@angular/core';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
@Component({
  selector: 'app-material-detail',
  standalone: true,
  imports: [MatPaginatorModule,MatMenuModule,MatIconModule],
  templateUrl: './material-detail.component.html',
  styleUrl: './material-detail.component.css'
})
export class MaterialDetailComponent {

}
