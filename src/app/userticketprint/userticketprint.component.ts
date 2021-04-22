import { Component, OnInit } from '@angular/core';
import  jspdf from 'jspdf'
import html2canvas from 'html2canvas'

@Component({
  selector: 'app-userticketprint',
  templateUrl: './userticketprint.component.html',
  styleUrls: ['./userticketprint.component.css']
})
export class UserticketprintComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  
  public downloadPDF(){
    var data = document.getElementById('table');
    html2canvas(data,{scrollY: -window.scrollY, scale: 1}).then(canvas => {
    //console.log(canvas)
    var imgWidth = 208;
    var pageHeight=295;
    var imgHeight = canvas.height * imgWidth / canvas.width;
    var heightLeft = imgHeight;
    
    var contentDataURL = canvas.toDataURL('image/png')
    let pdf = new jspdf('p' , 'mm', 'a4');
    var position=0;
    
    pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
    pdf.save('ticket.pdf'); 
    });                                                                                   
  }

}
