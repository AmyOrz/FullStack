//默认参数
function fck(name = "dwqdqw"){
    console.log(name)
}

//Lambda表达式 ()=>{}
let dck = {
    arr:["fck","your","hehe","youqu"],
    card:Array(52),
    createCard:function(){
        return ()=>{               //如果是return function(){}则this默认设置为window，lambda将this设置为dck
            let list = Math.random()*52 | 0;
            let suit = list/13 | 0;
            return {fck:this.arr[suit],hehe:suit};
        }
    }
};
let ct = dck.createCard();
console.log(ct());


