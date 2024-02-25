import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import Chart from 'chart.js/auto'; // Import Chart.js with auto mode

interface Milestone {
  x: string; // Change type to string for dates
  y: number; // Milestone count
  description: string; // Description of the milestone
}

@Component({
  selector: 'app-milestones-chart',
  templateUrl: './milestones-chart.component.html',
  styleUrls: ['./milestones-chart.component.sass']
})
export class MilestonesChartComponent implements OnInit {

  @ViewChild('milestonesChart', { static: true }) chartRef!: ElementRef;

  chart: any;

  // Inside the component class
  educationData: Milestone[] = [
    { x: '2015', y: 1.5, description: 'Start Bachelor of Computer Science' },
    { x: '2023', y: 1.5, description: 'End Bachelor of Computer Science' },

    { x: '2016', y: 2, description: 'Start Front End Developer Education' },
    { x: '2018', y: 2, description: 'End Front End Developer Education' },

    { x: '2022', y: 3, description: 'Start Data Science Education' },
    { x: '2024', y: 3, description: 'End Data Science Education' }
  ];

  jobChangeData: Milestone[] = [
    { x: '2018', y: 2.5, description: 'Started working in Front End Development' },
    { x: '2022', y: 2.5, description: 'Stopped working in Front End Development' }
  ];

  achievementData: Milestone[] = [
    { x: '2023', y: 3.5, description: 'Started working as a Data Scientist' },
    { x: '2024', y: 3.5, description: 'Stopped working as a Data Scientist' }
  ];

  constructor() { }

  ngOnInit(): void {
    // Define lineDatasets as an array
    const lineDatasets: any[] = [];
  
// Function to generate line datasets
const generateLineDatasets = (data: Milestone[], label: string, borderColor: string) => {
  // Create line datasets
  for (let i = 0; i < data.length; i += 2) {
    // Ensure we have at least two milestones
    if (i + 1 < data.length) {
      const start = data[i];
      const end = data[i + 1];

      // Push line dataset
      lineDatasets.push({
        label,
        type: 'line',
        data: [
          { x: start.x, y: start.y, description: start.description },
          { x: end.x, y: end.y, description: end.description }
        ],
        borderColor,
        borderWidth: 25,
        fill: false
      });
    }
  }
};


// Find the minimum and maximum years
const minYear = Math.min(
  ...this.educationData.map(milestone => Number(milestone.x)),
  ...this.jobChangeData.map(milestone => Number(milestone.x)),
  ...this.achievementData.map(milestone => Number(milestone.x))
);

const maxYear = Math.max(
  ...this.educationData.map(milestone => Number(milestone.x)),
  ...this.jobChangeData.map(milestone => Number(milestone.x)),
  ...this.achievementData.map(milestone => Number(milestone.x))
);

// Generate an array of all years between minYear and maxYear
const allYears = Array.from({ length: maxYear - minYear + 1 }, (_, i) => (minYear + i).toString());

// Generate line datasets for each category
generateLineDatasets(this.educationData, 'Education Line', '#FAFA2A');
generateLineDatasets(this.jobChangeData, 'Job Change Line', '#3c74fd');
generateLineDatasets(this.achievementData, 'Achievement Line', '#C648C6');

// Create the chart
this.chart = new Chart(this.chartRef.nativeElement.getContext('2d'), {
  type: 'scatter', // Change the type to 'scatter'
  data: {
    datasets: [
      ...lineDatasets // Add line datasets
    ]
  },
  options: {
    scales: {
      x: {
        type: 'category', // Change the x-axis type to 'category'
        labels: allYears, // Use all years as labels
        ticks: {
          font: {
            size: 16 // Increase x-axis label font size
          },
        }
      },
      y: {
        suggestedMin: 1,    // Define the minimum value for the y-axis
        suggestedMax: 4,    // Define the maximum value for the y-axis
        ticks: {
          stepSize: 0.5, // Set the step size to 1
          padding: 16,      // Adjust the padding to move the text left
          font: {
            size: 16 // Increase y-axis label font size
          },
          callback: (value, index, values) => {
            // Use custom labels for y-axis ticks
            const yAxisLabels = ['', 'Bachelor of Computer Science',  'Front End Developer Education', 'Worked as a Front End Developer', 'Data Science Education', 'Worked as a Data Scientist'];
            return yAxisLabels[index];
          }
        }
      }
    },
    plugins: {
      title: {
        display: true,
        text: 'My Educational Journey', // Title for your portfolio milestones
        font: {
          size: 18, // Adjust the font size as needed
          weight: 'bold' // Optionally, make the title bold
        },
      },
      legend: {
        display: false, // Hide the legend
        position: 'bottom', // Position of the legend
        labels: {
          font: {
            size: 14 // Customize legend font size
          }
        }
      }
    }
  }
});

  }}