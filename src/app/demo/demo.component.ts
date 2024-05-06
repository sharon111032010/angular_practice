import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent {
  PageTitle = "新年快樂";
  isGirl=true;
  name="s1";
  user={
    name:"s1",
    isLoggedIn:true
  };
  colorStr="red";
  catName="cc"
  dogSrc="https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcQOO0X7mMnoYz-e9Zdc6Pe6Wz7Ow1DcvhEiaex5aSv6QJDoCtcooqA7UUbjrphvjlIc";

  meow(){
    alert("妙妙妙～");
  };
  touched(){
    alert(this.catName);
  };
}

