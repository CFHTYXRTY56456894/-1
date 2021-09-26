// index.js
var principal,rate,sum;
Page({
    principalNum:function(e){
      principal=parseInt(e.detail.value);
  },
    rateNum:function(e){
      rate=parseFloat(e.detail.value);
  },
  calc:function(){
    sum=principal;
    for(var i=0;i<=5;i++){
      sum=sum*rate+sum;
    }
    this.setData({
      sum:sum
    })
}
  })
