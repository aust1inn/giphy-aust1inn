import { DataService } from './../data.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-gifs',
  templateUrl: './gifs.component.html',
  styleUrls: ['./gifs.component.css']
})
export class GifsComponent implements OnInit, OnDestroy {

  constructor(private dataService:DataService) { }

  gifs:any[]=[];
  subscription!:Subscription



  ngOnInit(): void {
    this.dataService.getTrendingGifs()
    this.subscription=this.dataService.getGifs()

    .subscribe((response:any) => {
      this.gifs = response;
      console.log('Data',response)
    })
}

ngOnDestroy(): void {
    this.subscription.unsubscribe();
}

}
