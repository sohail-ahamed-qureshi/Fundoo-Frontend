import { DataServiceService } from './../../services/data-service.service';
import { NoteService } from './../../services/note-service/note.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-action-buttons',
  templateUrl: './action-buttons.component.html',
  styleUrls: ['./action-buttons.component.scss']
})
export class ActionButtonsComponent implements OnInit {
  @Input() card: any;
  constructor(private noteService: NoteService,
    private dataService: DataServiceService) { }

  ngOnInit(): void {
  }

  isArchive() {
    console.log(this.card.noteId);
    this.noteService.Archive('Notes/' + this.card.noteId + '/Archive').subscribe((response: any) => {
      this.dataService.sendMessage(response);
    },
      error => {
        console.log(error.message);
      }
    )
  }

}
