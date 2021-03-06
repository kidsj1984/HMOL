import request from 'request';
import qs from 'query-string';
//import {
//    INTERNAL_ERROR
//} from '../middlewares/responseHelper';
const domain = 'http://120.76.248.8:7001/API';

const modules = [
  'QueryCommentPageList',                 //评论列表
  'AddComment',                           //添加评论
  'SearchTitle',                          //搜索
  'QueryMarkList',                        //查询热词
  'QueryADInfoList',                      //首页广告位
  'QueryCategoryList',                    //首页导航分类
  'QueryWordInfoPageList',                //首页文章列表
  'QueryWordInfoDetail',                  //文章详情
  'QueryUserPageListByRecommendation',    //推荐作者列表
  'QueryWordInfoPageListByUserId',        //查询某个的文章
  'QueryUser',                            //查询某个用户信息
  'QueryMine',                            //查询自己的用户信息
  'MyFansList',                           //我喜欢的人分页列表
  'MyFavoriteInfoList',                   //我喜欢的文章分页列表
  'MyWordInfoList'                        //我的文章分页列表
]


function _request (uri, options) {
  return function (callback) {
    request.post({
      headers: {'content-type' : 'application/x-www-form-urlencoded'},
      url:     uri,
      body:    qs.stringify(options)
    }, function (error, response, body) {
      callback(error, response);
    })
  }
}



exports.default = function(router){
  // console.log(isEmpty(null));
  router.use('/', function *(next) {

    // console.log(url);
    const _url = this.request.url && this.request.url.replace('/api', '');
    this.url = `${domain}${_url}`;


    yield *next;
  });


  for (const module of modules) {
    const moduleUrl = `/${module}`;
    router.get(moduleUrl, function *() {
      const response = yield invoke(this.url);
      this.body = response.body

    }).post(moduleUrl, function *() {


      const response = yield invoke(this.url, this.request.body);

      this.body = JSON.parse(response.body);
      // this.body = {
      //   'code': 0
      // }
      // console.log(`${domain}${this.url}`);

    })
  }

  function* invoke(url, postData) {
    const newUrl = `${url}?${qs.stringify(postData)}`;

    console.log(`开始请求接口:${newUrl}`);

    // request.post({
    //   headers: {'content-type' : 'application/x-www-form-urlencoded'},
    //   url:     'http://localhost/test2.php',
    //   body:    "mes=heydude"
    // }, function(error, response, body){
    //   console.log(body);
    // });


    const response = yield _request(url, postData);

    console.log(JSON.parse(response.body));
    return response;
  }



};