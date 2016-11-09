'use strict';

import Base from './base.js';

export default class extends Base {
  async indexAction(){

    let menuTree = [
      {name:'菜单管理', href:'/admin/menu'},
      {name:'用户管理', href:'/admin/user'}
    ];

    this.assign({menuTree});
    return this.display();
  }

  async menuAction(){
    return this.display();
  }

  async userAction(){
    return this.display();
  }

  async userEditAction(){
    if(this.isPost()){

    }else{
      return this.display();
    }
  }
}
