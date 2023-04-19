import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Bios, Job } from '../interfaces/bios';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent {
  public jobs: Job[];
  public firstName: string;
  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation()!;
    const state = navigation.extras.state as Bios;
    this.jobs = state.jobs;
    this.firstName = state.person.name.split(' ')[0];
  }

  ngOnInit(): void {}
}
