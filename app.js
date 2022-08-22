

/*let img = document.getElementById("img");
let arr_img = ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg"];
let new_arry_img = arr_img.length;
let count = 0;

function next(){
    count ++;
    if(count >=new_arry_img){
        count = 0;
        img.src = arr_img[count];
    }else{
        img.src = arr_img[count];
    }


}
function prev(){
    count --;
    if(count < 0){
        count = new_arry_img - 1 
        img.src = arr_img[count];
    }else{
        img.src = arr_img[count];
    }
}*/setInterval(fun, 3000);
let img = document.getElementById("img");
let arry_img = ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg"];
let new_arry_img = arry_img.length;
let count = 1;

function fun(){
    count ++;
    if(count >= new_arry_img){
        count = 0;
        img.src = arry_img[count];
    }else{
        img.src = arry_img[count];
    }
}
