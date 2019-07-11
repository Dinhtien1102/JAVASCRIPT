// Làm quen function
// Bài 1: Nhập vào 5 số tính tổng 5 số đó và hiển thị giá trị ra console
// Bài 2: Nhập vào 5 số tính tích 5 số đó và hiển thị giá trị ra console
// bài 3: Nhập vào 1 số -> Hiển thị bình phương số đó: Ví dụ nhạp vào 3 => kết quả: 9

    function myFunction(a,b,c,d,e){
        var tong= a+b+c+d+e;
        console.log("Tính Tổng: " + tong);
        var tich= a*b*c*d*e;
        console.log("Tính Tích: " + tich);
        var binhphuong= a * a ;
        console.log("Bình Phương: " + binhphuong)

    }
    myFunction(2,3,4,6,9)

/*
    Bài tập về for + if else
    Bài 1: Dùng for hiển thị 5 lần "hello world"
    Bài 2: Nhập 1 số kiểm tra đó là số chẵn hay số lẻ
    Bài 3: Nhập vào 1 số, hiển thị các số từ 1 tới chính nó
    Bài 4: Nhập 1 số hiển thị các số chẵn từ 1 tới chính nó: for
    Bài 5: Nhập 1 số hiển thị các ước của nó
    Bài 6: Nhập 1 số kiểm tra xem số đó số nguyên tố hay ko
    Bài 7: Nhập  1 số. Hiển thị số từ 1 tới chính nó, đồng thời hiển thị tính chẵn lẻ của số hiển thị; đếm số chẵn đếm số lẻ
*/


// Bài 1: Dùng for hiển thị 5 lần "hello world"
    function bai1()
    {
        var i;
        for(i=0; i < 5; i = i + 1 ){
            console.log("Hello World")
        }
    }
    bai1()

    // Bài 2: Nhập 1 số kiểm tra đó là số chẵn hay số lẻ
    function bai2(a)
    {
        if(a % 2 ==0 ){
            console.log( a + " Là Số Chẵn" )
        }
    }
    bai2(8)

    // Bài 3: Nhập vào 1 số, hiển thị các số từ 1 tới chính nó
    function bai3(b){
        var i;
        for(i =1; i <= b; i= i + 1 ){
            console.log(i)
        }
    }
    bai3(7)

    // Bài 4: Nhập 1 số hiển thị các số chẵn từ 1 tới chính nó: for
    function bai4(c){
        var i;
        for( i = 0; i <= c; i = i + 1){
            if(i % 2 == 0){
                console.log(i)
            }
        }
    }
    bai4(8)

    // Bài 5: Nhập 1 số hiển thị các ước của nó
    function bai5(d){
        for( i = 1; i <= d; i = i + 1){
            if( d % i == 0){
                console.log(i)
            }
        }
    }
    bai5(9)

    // Bài 6: Nhập 1 số kiểm tra xem số đó số nguyên tố hay ko
    function bai6(n){
        var i, dem = 0;

        for(i=1; i<= n; i = i+1){
            if(n%i==0){
                console.log(i);
                dem = dem + 1;
            }
        }

        if(dem <= 2){
            console.log( n + " Là Số Nguyên Tố")
        }
        else{
            console.log( n + " Không Là Số Nguyên Tố")
        }
    }
    bai6(12)

    // Bài 7: Nhập  1 số. Hiển thị số từ 1 tới chính nó, đồng thời hiển thị tính chẵn lẻ của số hiển thị; đếm số chẵn đếm số lẻ
    function bai7(e){
        var demchan = 0;
        var demle = 0;
        for(i=0; i<=e; i=i+1){
            if( i % 2 == 0){
                console.log("Số Chẵn: " + i);
                demchan = demchan + 1;
            }
            else{
                console.log("Số Lẻ: " + i)
                demle = demle + 1;
            }
        }
        console.log("Tổng Số Chẵn: " + demchan);
        console.log("Tổng Số Lẻ: " + demle);
    }
    bai7(11)


// Bài 1: Cho người dùng nhập vào tên và tuổi. Hãy viết lại tên và tuổi của người đó ra màn hình 
// bằng hàm document.write, trong đó tên có màu đậm, tuổi được gạch chân. 

// Bài 2: Tạo một nút nhấn (button) có name là welcome, value là " Welcome ".
// Một textbox có tên là msg, value = "Welcome to".

// Bài 3: Tạo một nút như trong ví dụ 2 và thêm chức năng sau: 
// Khi người dùng click vào nút welcome thì hiển thị thông báo "Welcome to JavaScript"

// Bài 4: Lấy (đọc) giá trị của một phần tử HTML. Tạo 2 phần tử như trong ví dụ 2 bằng thẻ HTML, 
// khi người dùng click chuột vào nút Welcome thì hiển thị nội dung chứa trong text có tên là msg.

// Bài 5: Khai báo hàm trong JavaScript và cách liên kết nút nhấn với một hàm. Tạo 2 phần tử như ví dụ 2, khi người dùng 
// nhấn nút thì gọi một hàm có tên là HienThi, hàm hiển thị có chức năng hiển thịnội dung trong text có tên là msg ở trên.

// Bài 6: Hãy hiển thị ngày và giờ của hệ thống máy tính khi trang Web được nạp. Thông tin hiển thị ra hộp thông báo(aleart)

// Bài 7: Minh hoạ sử khai báo và dùng đối tượng Date để lấy giờ, phút, giây của hệ thống.

// Yêu cầu: Hiển thị Giờ và phút trong thanh tiêu đề của cửa sổ khi trang Web được nạp.

// Hướng dẫn: Giá trị hiển thị trong thanh tiêu đề của trang web được lưu trong thuộc tính title của đối tượng document, 
// do vậy để hiển thị thông tin trên thanh tiêu đề, bạn cần viết: document.title = <Giá trị>. 
// Ví dụ, để hiển thị dòng chữ "Hello Every body !", bạn viết: document.title "Hello Every body !"

// Bài 8: Cho người dùng nhập vào năm sinh của họ, sau đó hiển thị tuổi tương ứng.

// Bài Tập Từ: https://quantrimang.com/bai-tap-javascript-co-giai-159572
