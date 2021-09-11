  import { Component, ViewChild, ElementRef } from '@angular/core';
  import * as d3 from 'd3';
  import * as d3Scale from 'd3';
  import * as d3Shape from 'd3';
  import * as d3Array from 'd3';
  import * as d3Axis from 'd3';

  @Component({
    selector: 'app-force',
    templateUrl: './force.component.html',
    styleUrls: ['./force.component.scss']
  })

  export class ForceComponent  {
    getBBox() {
      throw new Error('Method not implemented.');
    }

      private nodes = [
        {
          "name": "Peter",
          "label": "Person",
          "id": 1
        },
        {
          "name": "Michael",
          "label": "Person",
          "id": 2
        },
        {
          "name": "Neo4j",
          "label": "Database",
          "id": 3
        },
        {
          "name": "Graph Database",
          "label": "Database",
          "id": 4
        }
      ];

      private links = [
        {
          "source": 1,
          "target": 2,
          "type": "KNOWS",
          "since": 2010
        },
        {
          "source": 1,
          "target": 3,
          "type": "FOUNDED"
        },
        {
          "source": 2,
          "target": 3,
          "type": "WORKS_ON"
        },
        {
          "source": 3,
          "target": 4,
          "type": "IS_A"
        }
      ]

      private colors = d3.scaleOrdinal(d3.schemeCategory10);
      private svg: any;
      private margin = 100;
      private width = 750 - (this.margin * 2);
      private height = 400 - (this.margin * 2);
      private   node: any;
      private   link: any;
    edgepaths: any;
    edgelabels: any;
    simulation: any;


    //http://bl.ocks.org/fancellu/2c782394602a93921faff74e594d1bb1
    ngOnInit(): void {
    }

  }
