import { Component,OnInit } from '@angular/core';
import { PostService } from './Services/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  posts:any;

  title = 'JSONServer';
  columns = ["Id","EmployeeName","StarTimeUtc", "EndTimeUtc", "EntryNotes", "DeletedOn"];
  index = ["Id", "EmployeeName", "StarTimeUtc", "EndTimeUtc", "EntryNotes", "DeletedOn"];

  constructor(private service:PostService){}
  ngOnInit() {
    this.service.getPosts()
      .subscribe(response => {
        this.posts = response;
      });
}
}



