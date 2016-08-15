import isEmpty from 'lodash/isEmpty';
//import {
//    INTERNAL_ERROR
//} from '../middlewares/responseHelper';

console.log(8888);


exports.default = function(router){
  console.log(isEmpty(null));
  console.log(888);
  router.use('/', function *(next) {

    //const config = this.config.get('h5_act_igrow_conference');
    //debug(`config ${JSON.stringify(config)}`);
    //if (!config) {
    //  this.ajaxError(INTERNAL_ERROR);
    //}
    //
    //this.redisConfig = config;

    yield *next;
  });


  //查询自己状态接口
  router.post('/fundlist', function *() {
    console.log('fundlist');

  });

};

//export default (router) => {
//  console.log(888);
//  router.use('/', function *(next) {
//
//    //const config = this.config.get('h5_act_igrow_conference');
//    //debug(`config ${JSON.stringify(config)}`);
//    //if (!config) {
//    //  this.ajaxError(INTERNAL_ERROR);
//    //}
//    //
//    //this.redisConfig = config;
//
//    yield *next;
//  });
//
//
//  //查询自己状态接口
//  router.post('/fundlist', function *() {
//    console.log('fundlist');
//
//  });
//
//};
