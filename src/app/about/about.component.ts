import { Component} from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  htmlStr1: string = 'I’m an <b>Front end developer</b> who’s been creating experiences for the web for some years.';

  htmlStr2: string = 'I’m currently studying for a <br> <b>B.A. in Computer Science</b> <br> at the <a class="strike yellow-link" href=" https://www.uopeople.edu/" target="_blank">University of the People.</a> <br> I’m now in a my last year. <br> You can see a chart of completed courses <a class="strike yellow-link" href="../../assets/images/courses.png" target="_blank">here.</a>';

  htmlStr3: string = 'I love learning new things. I am enjopying courses on Pluralsight, Udemy, EdX and Coursera and more.';

}
