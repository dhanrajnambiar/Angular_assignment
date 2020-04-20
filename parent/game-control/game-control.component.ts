import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output("GameStartEvent") game_start  = new EventEmitter();

  @Output("GameStopEvent") game_stop = new EventEmitter();

  is_emitting : boolean = false;
  emitter_var : any;

  emit_func(){
    // console.log(this);
    this.game_start.emit();
  }

  start_game_call(){
    this.emitter_var = setInterval(this.emit_func.bind(this), 1000);
    this.is_emitting = true;
  }

  stop_game_call(){
    clearInterval(this.emitter_var);
    this.game_stop.emit();
    this.is_emitting = false;
  }

}
