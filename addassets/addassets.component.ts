import { Component, OnInit } from '@angular/core';
import { AssetsService } from '../assets.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-addassets',
  templateUrl: './addassets.component.html',
  styleUrls: ['./addassets.component.css']
})

export class AddassetsComponent implements OnInit {
	public assets: any = ''

  constructor(private assetsService: AssetsService) { }

  ngOnInit() {
  }

onSubmit(f: NgForm) {
     console.log(f.value);
  this.assetsService.addAssets(f.value)
    .subscribe(data =>  {
      console.log(data);
      alert("Asset added.");
      window.location.href='/addassets';
    });
  }

}

