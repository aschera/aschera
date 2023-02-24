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

      'beer_api': [
        { 'class': 'mobile', 'content': 'Craft Beer API' },
        { 'class': 'not-mobile', 'content': 'REST API, webscraper, webapp' },
        { 'class': 'not-mobile', 'content': 'Beer and Breweries' },
        { 'class': 'mobile', 'content': 'Python' },
        { 'class': 'not-mobile', 'content': 'Django' },
        { 'class': 'mobile', 'content': 'sqLite' },
        { 'class': 'not-mobile', 'content': 'Materialize, Beautifulsoup' },
        { 'class': 'mobile', 'content': '2023' },
        { 'class': 'not-mobile', 'content': 'school' },
        { 'class': 'mobile', 'content': 'URL' },
      ],
    },
  }
}
