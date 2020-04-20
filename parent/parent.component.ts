import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
  }
  current_emit_count : number = 0;
  even_emit_store : number[] = [];
  odd_emit_store : number[] = [];

  increment_emit_count(){
    this.current_emit_count += 1;
  }

  store_emit_count(){
    if (this.current_emit_count % 2 == 0){
        this.even_emit_store.push(this.current_emit_count);
    }else{
      this.odd_emit_store.push(this.current_emit_count);
    }
    this.current_emit_count = 0;
    console.log(this.even_emit_store, this.odd_emit_store);
  }

}
