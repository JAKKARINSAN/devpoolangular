import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { textChangeRangeIsUnchanged } from 'typescript';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  hero: Hero ={
    id: 1,
    name: "ddd"
  }
heroFormGroup = new FormGroup({
  id: new FormControl(),
  name: new FormControl()
})
heroFormControl = new FormControl (this.hero)
  constructor() { }
  ngOnInit(): void {

    this.heroFormControl.setValue(this.hero)
  }

heroes = HEROES;
onSelectHero(hero: Hero) {
  this.heroFormGroup.setValue(hero);
}
}
