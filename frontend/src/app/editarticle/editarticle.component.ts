import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ArticleService } from '../services/article.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editarticle',
  templateUrl: './editarticle.component.html',
  styleUrls: ['./editarticle.component.scss']
})
export class EditarticleComponent {
  articleForm!: FormGroup;
  article: any;
  id: any;
  // Flag to show notification
  isSubmitted = false;

  constructor(private articleService: ArticleService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    this.id = Number(routeParams.get('articleID'));
    this.articleService.findArticle(this.id).subscribe(
      article => {
        this.article = article
        this.articleForm = new FormGroup({
          title: new FormControl(this.article.title),
          body: new FormControl(this.article.body),
          author: new FormControl(this.article.author),
        })
      }
    )
  }

  onSubmit() {
    this.articleService.updateArticle(this.articleForm.value, this.id).subscribe(
      article => {
        console.log("Article updated successfully!");
        this.isSubmitted = true;
        setTimeout(() => {
          this.isSubmitted = false;
        }, 3000); // Hide after 3 seconds
      }
    )
  }

}
