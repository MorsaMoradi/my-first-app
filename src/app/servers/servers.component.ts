import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  // selector: '.app-servers',
  // template: `
  // <app-server></app-server>
  // <app-server></app-server>` ,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!'; 
  constructor() {
    setTimeout(() => { this.allowNewServer = !this.allowNewServer; }, 2000);
  }
  onCreateServer(){
    this.serverCreationStatus = 'Server was created';
  }
}
