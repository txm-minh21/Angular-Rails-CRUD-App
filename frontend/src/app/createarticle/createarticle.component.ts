import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-createarticle',
  templateUrl: './createarticle.component.html',
  styleUrls: ['./createarticle.component.scss'],
})
export class CreatearticleComponent {
  article: any;
  // Flag to show notification
  isSubmitted = false;

  articleForm = new FormGroup({
    title: new FormControl(''),
    body: new FormControl(''),
    author: new FormControl(''),
  });

  constructor(private articleService: ArticleService) {}

  onSubmit() {
    this.articleService
      .addArticle(this.articleForm.value)
      .subscribe((article) => {
        this.article = article;
        this.isSubmitted = true;
        // Clear form fields after successful submission
        this.articleForm.reset();
        // Optional: Auto-hide notification after a few seconds
        setTimeout(() => {
          this.isSubmitted = false;
        }, 3000); // Hide after 3 seconds
      });
  }
}
