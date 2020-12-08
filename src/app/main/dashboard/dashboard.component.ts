import { Component, OnInit } from '@angular/core';
import * as CanvasJS from '../../../assets/js/canvasjs/canvasjs.min.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let chart = new CanvasJS.Chart("chartContainer", {
		animationEnabled: true,
		exportEnabled: true,
		title: {
			text: ""
		},
		data: [{
			type: "column",
			dataPoints: [
        { y: 71, label: "Áo" },
        { y: 60, label: "Quần" },
				{ y: 95, label: "Váy đầm" },
				{ y: 80, label: "Đồ bộ" },
				{ y: 65, label: "LV" },
				{ y: 95, label: "Dior" },
				{ y: 68, label: "Chanel" },
			]
		}]
	});
	chart.render();
   }
}
