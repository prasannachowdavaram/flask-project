import { Component, OnInit } from '@angular/core';
import { AssetsService } from '../assets.service';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-deleteassets',
  templateUrl: './deleteassets.component.html',
  styleUrls: ['./deleteassets.component.css']
})
export class DeleteassetsComponent implements OnInit {
	public assets: any = ''
  constructor(private assetsService: AssetsService) { }

  ngOnInit() {
  }
 onSubmit(f: NgForm) {
     console.log(f.value);
  this.assetsService.deleteAssets(f.value)
    .subscribe(data =>  {
      console.log(data);
      alert("Asset deleted.");
      window.location.href='/deleteassets';
    });
  }

}
