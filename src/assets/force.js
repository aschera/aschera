
function name() {



am4core.useTheme(am4themes_animated);

// ----------------------------------------------------------------//
// --              SETUP                                         --//
// ----------------------------------------------------------------//

// Create chart
var chart = am4core.create("chartdiv", am4plugins_forceDirected.ForceDirectedTree);

// Create series
var series = chart.series.push(new am4plugins_forceDirected.ForceDirectedSeries())

// create data structure
var series = chart.series.push(new am4plugins_forceDirected.ForceDirectedSeries())

// ----------------------------------------------------------------//
// --              DATA                                          --//
// ----------------------------------------------------------------//
// Set data
series.data = [
  {
    name: "HUB",
    color: generateRandomColor(),
    type: 'The',
    children: [
      {
        name: "Novacura",
        color: generateRandomColor(),
        type: 'Organization',
        children: [
          {
            name: "MIT",
            color: generateRandomColor(),
            type: 'Environment',
            children: [
              {
                  name: "JAHASE LOCAL",
                  color: generateRandomColor(),
                  type: 'Instance',
                  value: 130
                  },
              {
                  name: "JAHASE LOCAL DEV",
                  color: generateRandomColor(),
                  type: 'Instance',
                  value: 87
                  },
              {
                  name: "NCPLRNDQA1 6.10",
                  color: generateRandomColor(),
                  type: 'Instance',
                  value: 55
                  },
              {
                  name: "reg610",
                  color: generateRandomColor(),
                  type: 'Instance',
                  value: 130
                  },
              {
                  name: "LOAD TEST 6.9 (RNDBUILD2)",
                  color: generateRandomColor(),
                  type: 'Instance',
                  value: 87
                  },
              {
                  name: "Lukasz6.10",
                  color: generateRandomColor(),
                  type: 'Instance',
                  value: 55
                  },
              {
                  name: "Tomasz 6.11",
                  color: generateRandomColor(),
                  type: 'Instance',
                  value: 130
                  },
              {
                  name: "Tomasz 6.10",
                  color: generateRandomColor(),
                  type: 'Instance',
                  value: 87
                  },
              {
                  name: "JAHASE2 FLOW-6 MASTER",
                  color: generateRandomColor(),
                  type: 'Instance',
                  value: 55
                  },
              {
                  name: "IntSec NG TEST",
                  color: generateRandomColor(),
                  type: 'Instance',
                  value: 87
                  },
              {
                  name: "graph",
                  color: generateRandomColor(),
                  type: 'Instance',
                  value: 55
                  }
            ]
          },
          {
            name: "blabla",
            color: generateRandomColor(),
            type: 'Environment',
            children: [
              {
                name: "Tomasz",
                color: generateRandomColor(),
                type: 'Instance',
                value: 53,
                },
            ]
          }
        ]
      },
      {
        name: "Sylvia Tests",
        color: generateRandomColor(),
        type: 'Organization',
        children: [
          {
            name: "okkookko",
            color: generateRandomColor(),
            type: 'Environment',
            children: [
              {
                name: "flow 6.11",
                color: generateRandomColor(),
                type: 'Instance',
                value: 130 },
              {
                name: "local2020",
                color: generateRandomColor(),
                type: 'Instance',
                value: 87 },
              {
                name: "2020_end",
                color: generateRandomColor(),
                type: 'Instance',
                value: 55 }
            ]
          },
          {
            name: "dddd",
            color: generateRandomColor(),
            type: 'Environment',
            children: [
              {
                name: "Flow 6.12 local",
                color: generateRandomColor(),
                type: 'Instance',
                value: 130 },
              {
                name: "local2020",
                color: generateRandomColor(),
                type: 'Instance',
                value: 87 },
              {
                name: "2020_end",
                color: generateRandomColor(),
                type: 'Instance',
                value: 55 }
            ]
          },
          {
            name: "hahaha",
            color: generateRandomColor(),
            type: 'Environment',
          }
        ]
      },
      {
        name: "RnD Pipeline",
        color: generateRandomColor(),
        type: 'Organization',
        children: [
          {
            name: "R&D contract",
            color: generateRandomColor(),
            type: 'Environment',
            children: [
              {
                name: "FlowTest Environment",
                color: generateRandomColor(),
                type: 'Instance',
                value: 130 },
              {
                name: "FlowDev Environment",
                color: generateRandomColor(),
                type: 'Instance',
                value: 87 },
              {
                name: "RndFlowTest",
                 color: generateRandomColor(),
                 type: 'Instance',
                value: 55 },
              {
                name: "RndFlowTest1-License2",
                color: generateRandomColor(),
                type: 'Instance',
                value: 130 },
              {
                name: "Mattias",
                color: generateRandomColor(),
                type: 'Instance',
                value: 87
                }
            ]
          }
        ]
      }
    ]
  }
];

// ----------------------------------------------------------------//
// --              Fields                                        --//
// ----------------------------------------------------------------//
// Set up data fields
series.dataFields.value = "value";  // size/weight of the circle
series.dataFields.name = "name"; // the name to show
//series.dataFields.color = "color"; // the color of the circle

// when initialized shows only 2 levels.
//series.maxLevels = 3;

// which are the sublevels
series.dataFields.children = "children";

// Add labels
series.nodes.template.label.text = "{type}\n{name}[/] ";
series.fontSize = 10;

// add Legend
chart.legend = new am4charts.Legend();

// ----------------------------------------------------------------//
// --              LINKS                                         --//
// ----------------------------------------------------------------//
// links
series.links.template.strokeWidth = 5;
series.links.template.strokeOpacity = 1;
series.links.template.distance = 2;
series.links.template.propertyFields.strokeWidth = "linkWidth";

// Tooltips on NODES
series.nodes.template.tooltipText = "{name} -> Weight: [bold]{value}[/]";

// Tooltips on LINKS
///series.links.template.tooltipText = "{name}: [bold]{value}[/]";
//series.links.template.interactionsEnabled = true;

series.minRadius = 20; // size of small circles
series.maxRadius = 40;  // size of biggest circles

// Anatomy of a Force Directed Tree
series.manyBodyStrength = -40; //  each node attracts/pushes each other away (minus means the nodes are further from the center of gravity)
series.links.template.distance = 1; // Forces get stronger when nodes are close, so the closer the "leash" the more prominent those forces will be.
series.links.template.strength = 1;
series.centerStrength = 0.7; // gravity center pullback strength

// add icons
/*var icon = series.nodes.template.createChild(am4core.Image);
icon.href = "path/to/icon.svg";
icon.horizontalCenter = "middle";
icon.verticalCenter = "middle";
icon.width = 40;
icon.height = 40;*/


// -----------------------------Functions---------------------------------------------- //

// make colors lighther
series.nodes.template.adapter.add("fill", function(fill, target) {
  return fill.lighten(target.dataItem.level * 0.25);
});

// creates a random hex color
function generateRandomColor() {
    const randomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
    const randomByte = () => randomNumber(0, 255)
    const randomPercent = () => (randomNumber(50, 100) * 0.01).toFixed(2)
    const randomCssRgba = () => `rgba(${[randomByte(), randomByte(), randomByte(), randomPercent()].join(',')})`
  return randomCssRgba;
}

// selected node action: turns RED

var hl = series.nodes.template.states.create("selected");
hl.properties.fill = am4core.color("#c55");

var selectedNode;
series.nodes.template.events.on("hit", function(ev) {
  if (selectedNode == ev.target) {
    selectedNode.fill = selectedNode.defaultState.properties.fill;
    selectedNode = undefined;
  }
  else {
    if (selectedNode) {
      selectedNode.fill = selectedNode.defaultState.properties.fill;
    }
    selectedNode = ev.target;
    selectedNode.setState("selected");
  }
});

}
