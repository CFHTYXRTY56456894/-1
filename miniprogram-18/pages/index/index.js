// pages/kj/RandomSum/index.js
var rand, sum;
function createRand() {
  rand = []; 
  for (var i = 0; i < 7; i++) {
    var r = (Math.random() * 30).toFixed(0) * 1+1;
    rand.push(r); 
    console.log(rand[i]); 
  }
};

Page({
  onLoad: function() {
    createRand(); //调用产生随机数函数
    this.setData({
      rand: rand,
    })
  },
  newRand: function() {
    createRand(); //调用产生随机数函数
    this.setData({
      rand: rand,
    })
  }
})