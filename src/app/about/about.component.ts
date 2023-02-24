import { Component } from '@angular/core';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  jsonObj = {

    'scienceHeading': 'Data, Computers and Science',

    'science': [
      'Hi, my name is Christina.',
      "I’m based in Gothenburg, Sweden.",
      'I currently study to become a data scientist.',
      'The plan is that I will finish during the spring of 2024.',
      'I also hold a Bachelor’s degree in Computer Science (University of the People)',
      'My goal is to work with advanced data technologies and provide visualization of the data that help people make better decisions.'
    ],

    'passionHeading': 'Passion and Grit',

    'passion': [
      'I’m a knowledge seeker.',
      'Ever since I was a child, I have had a passion for problem-solving and improving the world around me.',
      'This mindset carries over to my approach to analyzing large data sets and understanding every aspect of the world.',
      'Constantly questioning how it can be improved, how it operates, and why.',
      'The thrill of discovering solutions to complex issues and uncovering patterns that have gone unnoticed by others is what drives me.'
    ],

    'frontHeading': 'Front End and web',

    'front': [
      'Throughout my career, I have amassed over four years of experience as a front-end developer.',
      'I’m specialized in doing websolutions for low-code technology, marketing, and e-commerce.',
      'My strong understanding of user experience, accessibility, and programming has enabled me to excel in my current role as a data scientist.',
      ' I am able to bridge the gap between users and analysts.'
    ],

    'hobbiesHeading': 'Life and Hobbies',

    'hobbies': [
      'Wallclimbing, hiking, canoeing',
      'Puzzle & board games',
      'Simulation computer games',
      'Reading and writing books and articles',
      'Drawing, sketching and painting',
      'Cooking and baking',
      'Learning new skills',
      'Designing and development of my website'
    ],

  }
}