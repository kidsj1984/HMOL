const path = process.env.NODE_ENV === 'production' ? '/dist' : '';


const router = {
  root1: `${path}/home/index.html`,
  root2: `${path}/recommend/index.html`,
  root3: `${path}/personal/index.html`,
  search: `${path}/search/index.html`,
  user: `${path}/recommend/user.html?uid=`,
  article: `${path}/article/index.html?id=`,
  articleList: `${path}/article/list.html?type=`
};

module.exports = router;
