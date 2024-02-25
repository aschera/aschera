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

    'title': 'Show and Tell',
    'subtitle': 'My Amazing projects',

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
          { 'class': 'mobile', 'content': 'Discrimination-Aware Mortgage Approval Predictor' },
          { 'class': 'not-mobile', 'content': 'Agile Project methodology' },
          { 'class': 'not-mobile', 'content': 'Predictive Modeling in Mortgage Approval' },
          { 'class': 'mobile', 'content': 'Python' },
          { 'class': 'not-mobile', 'content': 'Conda, Jupyter Notebook' },
          { 'class': 'mobile', 'content': 'National Home Mortgage Disclosure Act (HMDA) dataset' },
          { 'class': 'not-mobile', 'content': 'Scikit-learn, XGBoost' },
          { 'class': 'mobile', 'content': '2023' },
          { 'class': 'not-mobile', 'content': 'Predictive Modeling for Mortgage Approval with Discrimination Awareness' },
          { 'class': 'mobile', 'contenturl': "<a href='https://github.com/aschera/credit_risk_predictor' target='_blank' class='project-link' title='link to credit risk project'>link </a>" }
        ],
        [
        { 'class': 'mobile', 'content': 'Detecting emotion on images/video of human faces.' },
        { 'class': 'not-mobile', 'content': 'Deep Learning' },
        { 'class': 'not-mobile', 'content': 'Computer Vision' },
        { 'class': 'mobile', 'content': 'Python' },
        { 'class': 'not-mobile', 'content': 'Keras' },
        { 'class': 'mobile', 'content': '"Face Expression Recognition" from Kaggle.' },
        { 'class': 'not-mobile', 'content': 'Keras, Tensorflow' },
        { 'class': 'mobile', 'content': '2023' },
        { 'class': 'not-mobile', 'content': 'Emotion Detection using Deep Learning' },
        { 'class': 'mobile', 'contenturl': "<a href='https://github.com/aschera/deepLearning_faceRecognition' target='_blank' class='project-link' title='link to face recognition project'>link </a>" }
      ],
        [           
          { 'class': 'mobile', 'content': 'Meat Sales analytics dashboard' },
          { 'class': 'not-mobile', 'content': 'Power BI report' },
          { 'class': 'not-mobile', 'content': 'Data Storytelling' },
          { 'class': 'mobile', 'content': 'Dax' },
          { 'class': 'not-mobile', 'content': 'Power BI' },
          { 'class': 'mobile', 'content': 'relational database' },
          { 'class': 'not-mobile', 'content': 'built-in visualisations' },
          { 'class': 'mobile', 'content': '2023' },
          { 'class': 'not-mobile', 'content': 'school project' },
          { 'class': 'mobile', 'contenturl': "<a href='https://github.com/aschera/meat-visuals' target='_blank' class='project-link' title='link to meat dashboard project'>link </a>" }
        ],
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
            { 'class': 'mobile', 'contenturl': "<a href='https://github.com/aschera/mnist_exploration' target='_blank' class='project-link' title='link to MNIST image classification project'>link </a>" }
            
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
            { 'class': 'mobile', 'contenturl': "<a href='https://github.com/aschera/aschera' target='_blank' class='project-link' title='link to Portfolio App project'>link </a>" }
            
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
            { 'class': 'mobile', 'contenturl':  "<a href='https://github.com/aschera/FinalPythonAssignment' target='_blank' class='project-link' title='link to Craft Beer API project'>link </a>" }
           
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
            { 'class': 'mobile', 'contenturl': "<a href='https://a-long-time-ago.netlify.app/' target='_blank' class='project-link' title='link to Movie Database project'>link </a>" },
            
          ]
        ]
    }
  }
}
