/* title: 文章分类 */
import renderToApp from '../../renderToApp';
import reducer from '../../reducer/article/list';
import ListPage from '../../container/article/ListPage';

renderToApp(reducer, ListPage);
