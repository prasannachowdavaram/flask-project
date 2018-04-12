import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignassets',
  templateUrl: './assignassets.component.html',
  styleUrls: ['./assignassets.component.css']
})
export class AssignassetsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
   $(function () {
        $('#datetimepicker6').datetimepicker();
        $('#datetimepicker7').datetimepicker({
            useCurrent: false //Important! See issue #1075
        });
        $("#datetimepicker6").on("dp.change", function (e) {
            $('#datetimepicker7').data("DateTimePicker").minDate(e.date);
        });
        $("#datetimepicker7").on("dp.change", function (e) {
            $('#datetimepicker6').data("DateTimePicker").maxDate(e.date);
        });
    });
}
