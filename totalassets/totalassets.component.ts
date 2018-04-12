import { Component, OnInit } from '@angular/core';
import{ CommonModule } from '@angular/common';
import { NgForOf } from '@angular/common';
import { AssetsService } from '../assets.service';

@Component({
  selector: 'app-totalassets',
  templateUrl: './totalassets.component.html',
  styleUrls: ['./totalassets.component.css']
})
export class TotalassetsComponent implements OnInit {
 assets = []
  constructor(private assetsService: AssetsService) { }

  ngOnInit() {
  	this.getAssets();
  }


getAssets() {
 this.assetsService.getAssets().subscribe(data =>   {
        
console.log(data);
this.assets = data["assets"];
    });
}

}
