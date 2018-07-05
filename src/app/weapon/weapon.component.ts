import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weapon',
  templateUrl: './weapon.component.html',
  styleUrls: ['./weapon.component.css']
})
export class WeaponComponent implements OnInit {
  title = 'Weapon Configuration';
  weapons = JSON.parse(localStorage.getItem('weapon')) || [];
  constructor() { }
  public open(weaponName, weaponType, weaponOptics, weaponAmmunition) { const test = confirm('Are you sure?');
    localStorage.removeItem('weapon');
    const obj =  {
      weaponname: weaponName.toUpperCase(),
      weapontype: weaponType.toUpperCase(),
      weaponoptics: weaponOptics.toUpperCase(),
      weaponammunition: weaponAmmunition.toUpperCase()
    };
    console.log(obj);
    if (test) {
      this.weapons.push(obj);
      localStorage.setItem('weapon', JSON.stringify(this.weapons));
      window.open('/home', '_self');
    }
  }
  ngOnInit() {
  }

}
