# Learn_JSCRIPT
## Cha đẻ của ngôn ngữ này là Brendan Eich. JavaScript thật sự rất linh hoạt. Bạn có thể bắt đầu với các bước nhỏ, với ? viện ảnh, bố cục có tính thay đổi và phản hồi đến các nút nhấn. Khi có nhiều kinh nghiệm hơn, bạn có thể tạo ra các trò chơi, hoạt họa 2 chiều hoặc 3 chiều, ứng dụng cơ sở dữ liệu toàn diện và nhiều thứ khác!
***
### Có 2 cách gọi con trong Object: 
``` tenbien.tendoituong.tenthuoctinh = tenbien.tendoituong['tenthuoctinh'] ```
### Aray => Để gọi giá trị trong mảng ta cần vị trí của giá trị đó
``` var home = {bedroom, bathroom, livingroom, kitchen} => muốn gọi bathroom : home[1] ```
### Object => Để gọi giá trị trong Object ta cần tên thuộc tính của nó
``` var home ={bedroom: "giuong", bathroom: "bontam", livingroom: "tivi" } => gọi tivi : home.livingroom ```
### slider with js 
+ Kết hợp css và js: 
    - Vấn đề 1: sử lí event click & tạo khối slider
        - khối slider cho width mong muốn và xác định vị trí cho khối slider (left= 0)
        - có 2 nút nhận sự kiện click right & left (click right slider trượt sang phải, click left trượt sang trái)
        - function sử lí event click khi click right đưa slider đến vị trí width mong muốn & click left đưa slider về vị trí ban đầu (left= "0px")
    - Vấn đề 2: button left & right
        - khi click button left thì button left ẩn & button right hiện, khi click button right thì button   right ẩn & button left hiện (vấn đề này không khó)
        - Với nhiều slider cần có nhiều class name nhưng class của các slider  có tên giống nhau, lúc này ta xác định vị trí của class để click left & right không bị lỗi   
        - Mỗi vị trí của class tương ứng với 1 số bắt đầu từ 0 (thêm giá trị tham số vào sự kiện của function        truyền  vào tham số bên sử lí function từ đó truyền tham số vào vị trí class ví dụ:                    document.getElementsByClassName('test')[vị trí bắt đàu từ 0])

### Cần Học
    Kiểu dữ liệu thuần túy đời sống
        - number: 1, 2, 3
        - boolean: true | false
        - string: "Day la mot string"

    Kiểu dữ liệu lập trình
        - Array()
        var my_arr = [1, 2, 4, 9]
        - Object
        var my_obj = {
            "key_1": "value 1", 
            "key_2": 8,
            "key_3": ["value 1", "value"],
            "key_4": {
                "keu_1": "value"
                "key_2": 9
            }
            "key_1": "value 1","",  // Viết này sai hoàn toàn
        }

        - Json: ko phải là kiểu dữ liệu -
    {
        "key_1": "value 1", 
        "key_2": 8,
        "key_3": ["value 1", "value"],
        "key_4": {
            "keu_1": "value"
            "key_2": 9
        }
        ``` #### Note: "key_1": "value 1","",  // Viết này sai hoàn toàn```

