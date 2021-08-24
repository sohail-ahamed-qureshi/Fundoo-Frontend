import { NoteService } from 'src/app/services/note-service/note.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-get-all-archive',
  templateUrl: './get-all-archive.component.html',
  styleUrls: ['./get-all-archive.component.scss']
})
export class GetAllArchiveComponent implements OnInit {
  @Input() notes: any = [];
  output: any;
  constructor(private note: NoteService) { }

  ngOnInit(): void {
    this.GetAllArchive();
  }

  GetAllArchive() {
    this.note.GetAllArchiveNotes('Notes/Archive').subscribe((response) => {
      console.log(response);
      this.output = response;
      this.notes = this.output.data;
      console.log(this.notes);
    });
  }
}
