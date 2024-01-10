import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';
@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name: string = "ironman";
  public age: number = 45

  get capitalizedName():string {
    return this.name.toUpperCase()
  }

  getHeroDescription():string {

    return `${this.name} - ${ this.age}`;
  }

  changeHero():void{
    this.name = 'Zenon'

  }
  changeAge(){
    this.age = 19
  }

  resetForm():void{
    this.name = 'ironman'
    this.age = 45
    // document.querySelectorAll('h1')!.forEach(element => {
    //   element.innerHTML = '<h1>Desde Angular</h1>'
    // });
  }
}
