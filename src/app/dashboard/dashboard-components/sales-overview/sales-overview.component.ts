import { Component, OnInit, ViewChild } from "@angular/core";
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexXAxis,
  ApexResponsive,
  ApexLegend,
  ApexFill
} from "ng-apexcharts";

export interface ChartOptions {
  series : ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  xaxis: ApexXAxis;
  responsive: ApexResponsive[];
  legend: ApexLegend;
  fill: ApexFill;
}

@Component({
  selector: "app-sales-overview",
  templateUrl: "./sales-overview.component.html"
})
export class SalesOverviewComponent implements OnInit {
  @ViewChild("chart") chart: ChartComponent = Object.create(null);
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "Billet",
          data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,1],
        },
        {
          name: "Online Short TMT",
          data: [13, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0],
        },
        {
          name: "12 D2 INT",
          data: [0, 3, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0,0],
        },
        {
          name: "16 mm D3",
          data: [0, 19, 0,22, 0, 22, 0, 0, 0, 0, 0, 0, 0, 0, 0,0],
        },
        
        {
          name: "20 mm D3",
          data: [0, 0, 22, 0, 22, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,17],
        },
        {
          name: "CRS",
          data: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        },
        {
          name: "40mm comm",
          data: [0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0],
        },
        {
          name: "32 mm D3",
          data: [0,0,0,0,0,0,19,17,0,0,0,0,0,0,0,0],
        },
    
        {
          name: "12 mm D3",
          data: [0,0,0,0,0,0,0,0,19,0,0,0,0,0,0,0]
        },
        {
          name: "Hold Clear",
          data: [0,0,0,0,0,0,0,0,0,0,0,0,0,15,0,0]
        },
        {
          name: "32 D2 CRS",
          data: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,0],
        },
        {
          name: "12 CRS",
          data: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0],
        },
      ],
      chart: {
        type: "bar",
        height: 600,
        stacked:true,
        fontFamily: "Poppins,sans-serif",
        toolbar: {
          show: true,
        },
        zoom: {
          enabled: true,
        }
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              position: "bottom",
              offsetX: -10,
              offsetY: 0
            }
          }
        }
      ],
      plotOptions: {
        bar: {
          horizontal: false
        }
      },
      xaxis: {
        type: "category",
        categories: [
          "Lot 1",
          "Lot 2",
          "Lot 3",
          "Lot 4",
          "Lot 5",
          "Lot 6",
          "Lot 7",
          "Lot 8",
          "Lot 9",
          "Lot 10",
          "Lot 11",
          "Lot 12",
          "Lot 13",
          "Lot 14",
          "Lot 15",
          "Lot 16"
        ]
      },
      legend: {
        position: "right",
        offsetY: 40
      },
      fill: {
        opacity: 10
      }
      
    };
  }

  ngOnInit(): void {}
}
