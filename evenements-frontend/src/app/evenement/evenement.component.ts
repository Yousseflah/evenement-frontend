import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Evenement } from '../evenement';
import { EvenementService } from '../evenement.service';


@Component({
  selector: 'app-evenement',
  templateUrl: './evenement.component.html',
  styleUrls: ['./evenement.component.css']
})
export class EvenementComponent implements OnInit {

  evenements: Evenement[] | undefined;
  evenement: Evenement | undefined;
  constructor(private evenementService: EvenementService) { }

  ngOnInit(): void {
    this.evenementService.getEvenements().subscribe((data: Evenement[]) => {
      console.log(data);
      this.evenements = data;
    })
  }


  public onAddEvenement(addForm: NgForm): void{
    this.evenementService.addEvenement(addForm.value).subscribe(
      (response: Evenement) => {
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    )
  }

}


