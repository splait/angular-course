import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Photo } from '../photo/photo';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit{

  photosList: Photo[];
  filter: string = "";

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.photosList = this.activatedRoute.snapshot.data.photos;
  }
}
