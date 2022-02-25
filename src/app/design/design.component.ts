import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.scss']
})

export class DesignComponent implements OnInit {

  list: Article[] = [
    {
      title: 'Text Spacing§ WCAG 2.1 Success Criterion 1.4.12 (Level AA)',
      link: 'https://medium.com/@aschera/text-spacing-620220e003bc',
      id: 1,
      description: "This web accessibility criterion is really very important. It has four main parts. Line height, spacing after paragraphs, letter spacing and word spacing. It's about the space in and around sections of text.",
    },
    {
      title: 'R — Subsetting',
      link: 'https://medium.com/@aschera/r-subsetting-1d273131e642',
      id: 2,
      description: "In the functional language R, one can subset data in various ways. Subsetting is one of the fundamental operations and this article outlines the basics.",
    },
  ];


  title: String = "Recent Articles";

  intro: String = "I write a lot of essays and articles during my studies, and also as a hobby for the things that I want to learn. Learning is my biggest passion. Writing keeps me remembering and structuring my thoughts.";

  medium: String= 'https://medium.com/@aschera';

  constructor() {}
  ngOnInit(): void {}
}

interface Article {
  title: string,
  link: string,
  id: number,
  description: string,
}
