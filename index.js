function BoardMember(name, homeState, training){
  this.name = name
  this.homeState = homeState
  this.training = training

  //Change this to user.prototype//
  user.prototype.veto = function(){
    return 'No, I must disagree'
  }
  user.prototype.approve = function(){
    return 'You can do that!'
  }
  user.prototype.doCharity = function(){
    return "I like to help people."
  }

  user.prototype.releasePressStatement = function(){
    return "You will see great things from Scuber."
  }

  user.prototype.sayHi = function(){
    return `Hi, my name is ${this.name}. I am from ${this.homeState}, and I was trained in ${this.training}.`
  }
}

polishedBoardMember = new BoardMember("Mr. Polished", "New York", "law")
backSlappingGene = new BoardMember("Mr. Gene", "Delaware", "business")
