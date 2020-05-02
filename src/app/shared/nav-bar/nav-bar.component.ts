import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  fullName: string = 'Paulo Rodrigues';

  @Input() opened: boolean = false;

  @Output() menuToggle: EventEmitter<boolean> = new EventEmitter();

  openMenu() {
    this.opened = !this.opened;
    this.menuToggle.emit(this.opened);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
