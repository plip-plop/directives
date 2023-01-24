import { Component, OnInit } from '@angular/core';
import { CleUser, user } from './datas';

@Component({
  selector: 'app-keyof-typeof',
  templateUrl: './keyof-typeof.component.html',
  styleUrls: ['./keyof-typeof.component.scss']
})
export class KeyofTypeofComponent implements OnInit {

  ngOnInit() {
    const myVar = "PLIP" as CleUser;
    console.log("KeyofTypeofComponent says:", user[myVar]); // CleUser, with"keyof typeof" -> OK!
    // CleUser, without "keyof typeof" -> COMPILATION: type 'CleUser' can't be used to index type 'User'.
    console.log("KeyofTypeofComponent says:", user["PLOP"]); // String values could always be used as an index.
    // console.log("KeyofTypeofComponent says:", user["Error"]); // COMPILATION: Property 'Error' does not exist on type 'User'

  }

}
