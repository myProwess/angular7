import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.scss']
})
export class DirectiveComponent implements OnInit {
	a=2;
	fruits:string[] = ['kiwi', 'melon', 'asdf'];
  constructor() { }

  ngOnInit() {
  }

	qshore(){
		console.log('directive cutom logic in component')
	}
  callme(evnet){
    console.log(evnet);
  }

}
