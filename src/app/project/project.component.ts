import { Component, OnInit } from '@angular/core';
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { faCodeBranch, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  faEye = faEye
  faCodeBranch = faCodeBranch
  faPlus = faPlus
  faMinus = faMinus

  projects: any = [
    {
      img: '../../assets/images/project/wiki.png',
      name: "Wikipedia",
      ref: "https://wiki.lesna-skolka.sk",
      git: "https://github.com/MinoHaluska/Wiki"
    },
    {
      img: '../../assets/images/project/photo.png',
      name: "Photo Searcher",
      ref: "https://photo.lesna-skolka.sk",
      git: "https://github.com/MinoHaluska/Photo-Searcher"
    },
    {
      img: '../../assets/images/project/style.png',
      name: "Compare style",
      ref: "https://style.lesna-skolka.sk",
      git: "https://github.com/MinoHaluska/Different-Style"
    }
  ]

  projectMore = [
    {
      img: '../../assets/images/project/password.png',
      name: "Password generator",
      ref: "https://password.lesna-skolka.sk",
      git: "https://github.com/MinoHaluska/Password-generator"
    },
    {
      img: '../../assets/images/project/todo.png',
      name: "ToDo App",
      ref: "https://todo.lesna-skolka.sk",
      git: "https://github.com/MinoHaluska/Todo-App"
    },
    {
      img: '../../assets/images/project/resume.png',
      name: "Resume",
      ref: "none",
      git: "https://github.com/MinoHaluska/Resume"
    }
  ]


  more:boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  giveMeMore(){
    this.more = !this.more

    for(let i = 0; i < this.projectMore.length; i++ ){
      this.projects.push(this.projectMore[i])
    }
  }

  giveMeLess(){
    this.more = !this.more

    this.projects.splice(-3)
  }

}
