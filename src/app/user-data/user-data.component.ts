import { Component, OnInit, Input, OnDestroy, Injectable } from '@angular/core';

@Injectable()
export class UserService {
  getUser() {
    return {
      nombre: 'Julia',
      apellido: 'Perez'
    };
  }
}


@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css'],
  providers: [ UserService ]
})
export class UserDataComponent implements OnInit, OnDestroy {
  @Input() 
  nombre: string;

  @Input() 
  apellido: string;
  
  constructor(private userService: UserService) {
  }

  ngOnInit() {
    // let res = this.userService.getUser();
    // this.nombre = res.nombre;
    // this.apellido = res.apellido;
    console.log("init");
    
  }

  ngOnDestroy() {
    console.log("destroy");
  }

  render() {

  }

}
