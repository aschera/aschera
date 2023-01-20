import { Component} from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  htmlStr1: string = 'I’m an <b>data science student</b> who has been creating engaging web experiences for several years as a front-end developer. Now, I am focused on utilizing data to generate valuable insights and drive business decisions.';
  
  htmlStr2: string = 'I’m currently studying for a <b>B.A. in Computer Science</b> <br> at the <a class="strike yellow-link" href=" https://www.uopeople.edu/" target="_blank">University of the People</a> , and am in my last year of study. <br> As a student, I’ve completed a variety of computer science courses, which you can view in my portfolio <a class="strike yellow-link" href="../../assets/images/courses.png" target="_blank">here.</a>';

  htmlStr4: string = 'In addition, I am pursuing a <b>vocational degree in Data science</b>  at <a class="strike yellow-link" href="" target="_blank">EC Utbildning </a> where I have completed courses in business analytics, R, statistics and SQL. <br>';
  
  htmlStr3: string = 'In my free time, I enjoy continuing my education through online platforms like Pluralsight, Udemy, EdX, and Coursera. ';

}
