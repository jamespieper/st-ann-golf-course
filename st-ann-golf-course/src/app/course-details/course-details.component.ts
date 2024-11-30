import { Component } from '@angular/core';

import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';

@Component({
  selector: 'app-course-details',
  imports: [MatCardModule, MatChipsModule],
  templateUrl: './course-details.component.html',
  styleUrl: './course-details.component.css'
})
export class CourseDetailsComponent {
  
  hole1 = "A straightforward, short par 4 that offers a welcoming start to the round. The wide fairway is framed by trees on both sides, providing a simple but steady challenge for golfers easing into the course."
  hole2 = "The first of three par 3s, this hole presents a clean, open tee shot with just a few trees on the left as the primary obstacle. Missing the green is not a major setback, as most players should be able to recover and still make par."
  hole3 = "A slight dogleg left, this hole offers a comfortable route for left-handed golfers. The elevated green is protected by a greenside bunker on the short side, requiring a precise approach to avoid trouble."
  hole4 = "A demanding hole featuring a sharp left dogleg that challenges players to navigate around the trees. With a second greenside bunker guarding the green, strategic tee placement is key to avoiding the hole’s difficulty."
  hole5 = "A picturesque, short par 3 over a creek to a green protected by a bunker on the left. The green sits atop a hill, so any miss could lead to a tricky recovery, making accuracy a premium."
  hole6 = "The course’s only par 5, this hole offers a wide fairway but features a creek that crosses at approximately 270 yards and runs along the entire left side. While the hole is generally open, careful placement is needed to avoid the water hazards."
  hole7 = "This par 4 requires a drive over the creek, followed by a downsloping fairway that leads directly to the green. One of the more forgiving holes, it presents a good opportunity to score."
  hole8 = "A challenging par 3 that demands accuracy down a narrow lane flanked by trees on either side. The green features more slope than any other on the course, making a precise approach essential."
  hole9 = "The closing hole offers a sharp right dogleg at about 200 yards, followed by another 100 yards to the green. Despite the presence of two greenside bunkers, this hole is fairly forgiving and provides a solid opportunity to finish the round strong."

}
