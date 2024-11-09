import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from "../../../Admin/Component/admin/admin.component";
import { FirstComponent } from 'src/app/Component/first/first.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, AdminComponent  ],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
  
})
export class UserComponent {

}
