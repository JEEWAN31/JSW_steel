// import { Component, OnInit, ViewChild } from "@angular/core";
// import {
//   ApexAxisChartSeries,
//   ApexChart,
//   ChartComponent,
//   ApexDataLabels,
//   ApexPlotOptions,
//   ApexYAxis,
//   ApexLegend,
//   ApexStroke,
//   ApexXAxis,
//   ApexFill,
//   ApexTooltip,
//   ApexGrid
// } from "ng-apexcharts";

// export interface ChartOptions {
//   series: ApexAxisChartSeries;
//   chart: ApexChart;
//   dataLabels: ApexDataLabels;
//   plotOptions: ApexPlotOptions;
//   yaxis: ApexYAxis;
//   xaxis: ApexXAxis;
//   fill: ApexFill;
//   tooltip: ApexTooltip;
//   stroke: ApexStroke;
//   legend: ApexLegend;
//   grid: ApexGrid;
// }

// @Component({
//   selector: "app-sales-overview",
//   templateUrl: "./sales-overview.component.html"
// })
// export class SalesOverviewComponent implements OnInit {
//   @ViewChild("chart") chart: ChartComponent = Object.create(null);
//   public chartOptions: Partial<ChartOptions>;

//   constructor() {
//     this.chartOptions = {
//       series: [
//         {
//           name: "Pixel",
//           data: [44, 55, 57, 56, 61, 58],
//         },
//         {
//           name: "Ample",
//           data: [76, 85, 101, 98, 87, 105],
//         },
//       ],
//       chart: {
//         type: "bar",
//         fontFamily: "Poppins,sans-serif",
//         height: 320,
//       },
//       grid: {
//         borderColor: "rgba(0,0,0,.2)",
//         strokeDashArray: 3,
//       },
//       plotOptions: {
//         bar: {
//           horizontal: false,
//           columnWidth: "30%",
//         },
//       },
//       dataLabels: {
//         enabled: false,
//       },
//       stroke: {
//         show: true,
//         width: 2,
//         colors: ["transparent"],
//       },
//       xaxis: {
//         categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul"],
//       },

//       legend: {
//         show: false,
//       },
//       fill: {
//         colors: ["#26c6da", "#1e88e5"],
//         opacity: 1,
//       },
//       tooltip: {
//         theme: "dark",
//       },
//     };
//   }

//   ngOnInit(): void {}
// }

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
          name: "32 mm D3",
          data: [0,0,0,0,0,0,19,0,0,0,0,0,0,0,0,0],
        },
    
        {
          name: "Product D",
          data: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        },
        {
          name: "Product D",
          data: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        },
        {
          name: "Product D",
          data: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
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
          // "Lot 1",
          // "Lot 2",
          // "Lot 3",
          // "Lot 4",
          // "Lot 5",
          // "Lot 6",
          // "Lot 7",
          // "Lot 8",
          // "Lot 9",
          // "Lot 10",
          // "Lot 11",
          // "Lot 12",
          // "Lot 13",
          // "Lot 14",
          // "Lot 15",
          // "Lot 16"
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
