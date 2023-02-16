import { Component, OnInit } from '@angular/core';
import { BlogPost } from '../Model/blog-post.model';
import { BlogpostService } from '../Service/blogpost.service';

@Component({
  selector: 'app-a-blog',
  templateUrl: './a-blog.component.html',
  styleUrls: ['./a-blog.component.css']
})
export class ABlogComponent implements OnInit{
  blogposts: BlogPost[] = [];

  constructor(private blogPostService: BlogpostService){}

  ngOnInit(): void {
    this.blogPostService.getAll().subscribe((data: BlogPost[]) => {
      this.blogposts = data;
    })
  }

  delete(id:number){
    this.blogPostService.delete(id).subscribe(res => {
         this.blogposts = this.blogposts.filter(item => item.blog_post_id !== id);
    })
  }

}
