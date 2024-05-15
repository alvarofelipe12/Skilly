import { Component } from '@angular/core';
import { BiosService } from '../services/bios.service';
import { Subject, takeUntil } from 'rxjs';
import { Bios, Strength } from '../interfaces/bios';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent {
  public bioResponse: Bios;

  public unsubscribe$: Subject<void> = new Subject<void>();

  public masterSkillsExists = false;
  public expertSkillsExists = false;
  public proficientSkillsExists = false;
  public noviceSkillsExists = false;
  public noExpSkillsExists = false;
  public unknownSkillsExists = false;

  public firstName = '';

  constructor(private biosService: BiosService, private router: Router) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.biosService
      .getBios('alvarofelipe12')
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((x) => {
        this.bioResponse = x;
        this.setSkillsProficiency();
        this.firstName = this.bioResponse.person.name.split(' ')[0];
        this.bioResponse.strengths.forEach((x) => {
          x.recommendationsMessage =
            x.recommendations > 0
              ? `${
                  x.recommendations > 1
                    ? `${x.recommendations} recommendation for this skill`
                    : `1 recommendation for this skill`
                }`
              : '';
        });
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  private setSkillsProficiency() {
    this.masterSkillsExists = this.bioResponse.strengths.some(
      (x: Strength) => x.proficiency === 'master'
    );
    this.expertSkillsExists = this.bioResponse.strengths.some(
      (x: Strength) => x.proficiency === 'expert'
    );
    this.proficientSkillsExists = this.bioResponse.strengths.some(
      (x: Strength) => x.proficiency === 'proficient'
    );
    this.noviceSkillsExists = this.bioResponse.strengths.some(
      (x: Strength) => x.proficiency === 'novice'
    );
    this.noExpSkillsExists = this.bioResponse.strengths.some(
      (x: Strength) => x.proficiency === 'no-experience-interested'
    );
    this.unknownSkillsExists = this.bioResponse.strengths.some(
      (x: Strength) => x.proficiency === 'unknown'
    );
  }

  public navigateToDetails() {
    const navigationExtras: NavigationExtras = {
      state: {
        ...this.bioResponse
      },
    };
    this.router.navigate(['details'], navigationExtras);
  }
}
