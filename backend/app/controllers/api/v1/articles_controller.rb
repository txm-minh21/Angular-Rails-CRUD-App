class Api::V1::ArticlesController < ApplicationController
  def index
    articles = Article.all
    render json: articles, status: 200
  end

  def new
    Article.new
  end

  def create
    article = Article.new(
      title: article_params[:title],
      body: article_params[:body],
      author: article_params[:author]
    )
    if article.save
      render json: article, status: 200
    else
      render :new, status: :unprocessable_entity
    end
  end

  def update
    article = Article.find(params[:id])
    if article
      article.update(
        title: article_params[:title],
        body: article_params[:body],
        author: article_params[:author]
      )
      render json: "Article updated successfully", status: 204
    else
      render json: {error: "Article not found"}, status: 404
    end
  end

  def show
    article = Article.find(params[:id])
    if article
      render json: article, status: 200
    else
      render json: {message: "Article not found"}, status: 404
    end
  end

  def destroy
    article = Article.find(params[:id])
    if article
      article.destroy
      render json: {message: "Article deleted successfully"}, status: 200
    else
      render json: {message: "Article not found"}, status: 404
    end
  end

  private
  def article_params
    params.require(:article).permit(:title, :body, :author)
  end
end
