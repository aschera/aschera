import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recent',
  templateUrl: './recent.component.html',
  styleUrls: ['./recent.component.scss']
})
export class RecentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  jsonObj = {

    'title': 'Here you find my awesome work',
    'subtitle': 'Amazing projects and ideas',

    'table': {

      'columns': [
        { 'class': 'mobile', 'content': 'Name' },
        { 'class': 'not-mobile', 'content': 'Type' },
        { 'class': 'not-mobile', 'content': 'Theme' },
        { 'class': 'mobile', 'content': 'Language' },
        { 'class': 'not-mobile', 'content': 'Framework' },
        { 'class': 'mobile', 'content': 'Database' },
        { 'class': 'not-mobile', 'content': 'Libraries' },
        { 'class': 'mobile', 'content': 'Year' },
        { 'class': 'not-mobile', 'content': 'Project' },
        { 'class': 'mobile', 'content': 'Link' },
      ],

      'rows':
        [ 
          [
            { 'class': 'mobile', 'content': 'MNIST image classification' },
            { 'class': 'not-mobile', 'content': 'Jupyter Notebook' },
            { 'class': 'not-mobile', 'content': 'Datamodelling of images' },
            { 'class': 'mobile', 'content': 'Python' },
            { 'class': 'not-mobile', 'content': 'Scikitlearn' },
            { 'class': 'mobile', 'content': 'none' },
            { 'class': 'not-mobile', 'content': 'a lot different python stuff.' },
            { 'class': 'mobile', 'content': '2023' },
            { 'class': 'not-mobile', 'content': 'school project' },
            { 'class': 'mobile', 'contenturl': 'https://github.com/aschera/mnist_exploration' }
          ],
          [
            { 'class': 'mobile', 'content': 'Portfolio App ' },
            { 'class': 'not-mobile', 'content': 'Angular web app' },
            { 'class': 'not-mobile', 'content': 'Portfolio page to showcase projects' },
            { 'class': 'mobile', 'content': 'JavaScript, Sass' },
            { 'class': 'not-mobile', 'content': 'Angular' },
            { 'class': 'mobile', 'content': 'none' },
            { 'class': 'not-mobile', 'content': 'Materialize, Fontawesome' },
            { 'class': 'mobile', 'content': '2023' },
            { 'class': 'not-mobile', 'content': 'personal project' },
            { 'class': 'mobile', 'contenturl': 'https://github.com/aschera/aschera' }
          ],
          [
            { 'class': 'mobile', 'content': 'Craft Beer API ' },
            { 'class': 'not-mobile', 'content': 'REST API, webscraper, webapp' },
            { 'class': 'not-mobile', 'content': 'Beer and Breweries' },
            { 'class': 'mobile', 'content': 'Python' },
            { 'class': 'not-mobile', 'content': 'Django' },
            { 'class': 'mobile', 'content': 'sqLite' },
            { 'class': 'not-mobile', 'content': 'Materialize, Beautifulsoup' },
            { 'class': 'mobile', 'content': '2023' },
            { 'class': 'not-mobile', 'content': 'school project' },
            { 'class': 'mobile', 'contenturl': 'https://github.com/aschera/FinalPythonAssignment' }
          ],
          [
            { 'class': 'mobile', 'content': 'Movie Database' },
            { 'class': 'not-mobile', 'content': 'Sort and display content from an API' },
            { 'class': 'not-mobile', 'content': 'Star Wars movies' },
            { 'class': 'mobile', 'content': 'JavaScript, Less' },
            { 'class': 'not-mobile', 'content': 'React' },
            { 'class': 'mobile', 'content': 'none' },
            { 'class': 'not-mobile', 'content': 'Fontawesome' },
            { 'class': 'mobile', 'content': '2022' },
            { 'class': 'not-mobile', 'content': 'job application' },
            { 'class': 'mobile', 'contenturl': 'https://a-long-time-ago.netlify.app/' },
          ]
        ]
    }
  }
}
