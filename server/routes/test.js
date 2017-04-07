
exports.default = function(router){
  router.use('/', function *(next) {
    yield *next;
  });


  router.get('/index', function *() {
    this.session.test = 1111;
    //输出json 格式{uptoken:'xxxxxxxxx'}
    this.body = {
      test: 1111
    }

  });

  //获取uptoken
  router.get('/index2', function *() {
    console.log(this.session.test)
    //输出json 格式{uptoken:'xxxxxxxxx'}
    this.body = {
      test: 2222
    }
    // yield this.render('qiniu');
  });



};
