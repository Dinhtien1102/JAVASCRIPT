
// Bài 1: Nhập vào 5 số tính tổng 5 số đó và hiển thị giá trị ra console
// Bài 2: Nhập vào 5 số tính tích 5 số đó và hiển thị giá trị ra console
// bài 3: Nhập vào 1 số -> Hiển thị bình phương số đó: Ví dụ nhạp vào 3 => kết quả: 9


// function JSlearn(a, b, c, d, e) {
//     console.log("Tính Tổng : ");
//     console.log(a + b + c + d + e);
//     console.log("Tính Tích :");
//     console.log(a * b * c * d * e);
//     console.log("Bình Phương :");
//     console.log(Math.pow(a, 2));
// }
// JSlearn(45,6,7,9,4)





/*
    Bài tập về for + if else
    Bài 1: Dùng for hiển thị 5 lần "hello world"
    Bài 2: Nhập 1 số kiểm tra đó là số chẵn hay số lẻ
    Bài 3: Nhập vào 1 số, hiển thị các số từ 1 tới chính nó
    Bài 4: Nhập 1 số hiển thị các số chẵn từ 1 tới chính nó: for
    Bài 5: Nhập 1 số hiển thị các ước của nó
    Bài 6: Nhập 1 số kiểm tra xem số đó số nguyên tố hay ko
    Bài 7: Nhập  1 số. Hiển thị số từ 1 tới chính nó, đồng thời hiển thị tính chẵn lẻ của số hiển thị
     
*/

console.log("Bài 1: Dùng for hiển thị 5 lần hello world")
function hello() {
    var i;
    for (i = 0; i < 5; i++) {
    console.log("Hello World !")
    }
}
hello()


console.log("Bài 2: Nhập 1 số kiểm tra đó là số chẵn hay số lẻ")
 function chanle(a){
    if(a%2==0){
        console.log( a+ " Là Số Chẵn" )
    }
    else{
        console.log( a+ " Là Số Lẻ" )
    }
}
chanle(9)



console.log("Bài 3: Nhập vào 1 số, hiển thị các số từ 1 tới chính nó")
 function tangdan(a){
    var i;
    for( i = 1 ; i <=a ; i++ ){
        console.log(i)
    }
}
tangdan(9)




console.log("Bài 4: Nhập 1 số hiển thị các số chẵn từ 1 tới chính nó: for")
 function chan(a){
    var i;
    for( i = 0; i<= a; i++ ){
        if( i %2 == 0 ){
            console.log(i)
        }
    }
}
chan(6)



console.log("Bài 5: Nhập 1 số hiển thị các ước của nó")
 function showuoc(a){
    var i;  
    for( i = 1; i <= a ; i++ ){
        if( a % i == 0 ){
            console.log(i)
        }
        else{
            console.log("Ko là ước")
        }
    }
}
showuoc(8)


// console.log("Bài 6: Nhập 1 số kiểm tra xem số đó số nguyên tố hay ko")
// function nguyento(a){
//     var i;
//     for(i = 2; a >= i; i++ ){
//         if(a % i ==0 ){

//         }
//     }
// }
// nguyento(a)

console.log("Bài 7: Nhập  1 số. Hiển thị số từ 1 tới chính nó, đồng thời hiển thị tính chẵn lẻ của số hiển thị")
function lechan(b){
    var i;
    var dem_chan = 0, dem_le = 0 
    for( i = 0; i<= b; i++ ){
        if( i % 2 == 0 ){
            console.log(i + " Số Chẵn")
            dem_chan = dem_chan + 1
        }
        else{
            console.log(i + " Số Lẻ")
            console.log(dem_le++)
        }
    }

    console.log('Tổng số chẵn: ' + dem_chan)
}
lechan(9)

// var car1 = {type: "vin", color : "black", model : "9800" }
// var car2 = {type: "vin", color : "blue", model : "700" }
// var car3 = {type: "vin", color : "red", model : "650" }
var car4 = {
    type: "vin", 
    color : "white",
    model : "4000",
    fullname : function(){
        console.log(this.type)
    }
 }
console.log(this.color)
// console.log(car2.color)
// console.log(car3.color)
// console.log(car4.color)
