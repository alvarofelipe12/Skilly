import { Component } from '@angular/core';
import { BiosService } from '../services/bios.service';
// import { Bios } from '../interfaces/bios';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {

  public bioResponse: any;

  constructor(
    private biosService: BiosService
  ) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.bioResponse = this.biosService.getBios('alvarofelipe12');
  }
}
