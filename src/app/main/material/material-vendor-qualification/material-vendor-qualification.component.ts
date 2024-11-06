import { Component } from '@angular/core';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-material-vendor-qualification',
  standalone: true,
  imports: [MatPaginatorModule,MatMenuModule,MatIconModule],
  templateUrl: './material-vendor-qualification.component.html',
  styleUrl: './material-vendor-qualification.component.css'
})
export class MaterialVendorQualificationComponent {

}
