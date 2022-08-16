import StateModule from "../module";

/**
 * Состояние каталога
 */
class ArticleState extends StateModule {

  /**
   * Начальное состояние
   * @return {Object}
   */
  initState() {
    return {
      article: {}
    };
  }

  /**
   * Загрузка данных товара
   */
  async loadArticle(articleId) {
    const response = await fetch(
      '/api/v1/articles/' + articleId + '?fields=*,maidIn(title,code),category(title)');
    const json = await response.json();
    this.setState({
      article: json.result
    })
  }
}

export default ArticleState;