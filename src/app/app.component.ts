import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  columnLoopData = [];
  columnNumber = 1;
  addRowColumnCount = 0;
  command = false;
  alertMst = "";

  ngOnInit() {

  }

  

  addRowColumn(columnCount){
    this.columnLoopData = [];
    for(this.columnNumber = 1;columnCount>=this.columnNumber;this.columnNumber++) {
      this.columnLoopData.push(this.columnNumber);
    }
  }

  rowColumnForm(formData: NgForm){
      this.addRowColumnCount = formData.value.column;
    if(this.addRowColumnCount > 1){
      this.columnLoopData = [];
      this.addRowColumn(formData.value.column);
      this.command = true;
      this.alertMst = "";
    }else{
      this.alertMst = "Please add column more then 1";
      this.command = false;
      this.columnLoopData = [];
    }
  }

  numberOfElementsToRemove = 0;
  rowColumnCommandForm(formData: NgForm){
        var startIndex = 0;
        this.numberOfElementsToRemove = 0;
        if(formData.value.move > 0){
          this.numberOfElementsToRemove = this.addRowColumnCount - formData.value.move;
        }
        if(formData.value.move < 0){
          var numberOfElementsToRemove0 = this.addRowColumnCount + formData.value.move;
          this.numberOfElementsToRemove = this.addRowColumnCount - numberOfElementsToRemove0;
        }
        var removedData = this.columnLoopData.splice(startIndex, this.numberOfElementsToRemove);
        for(let getData of removedData) {
          this.columnLoopData.push(getData);
        }

        
  }
  
}
