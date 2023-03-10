

  var boxContainer = document.querySelector('.box-container');
  var boxImage = document.querySelector('.box-image');
  var cardImage = document.querySelector('.card-image');

// Lấy thẻ button và bắt sự kiện click chuột
  var showBoxButton = document.getElementById('show-box');

  showBoxButton.addEventListener('click', function() {
      boxImage.classList.add('shake');
      setTimeout(() => {
      boxImage.classList.remove('shake');
      }, 3000);
  });


          // Bắt sự kiện click vào nút bấm
  showBoxButton.addEventListener('click', function() {

  // Hiển thị hình ảnh
      cardImage.style.transform = 'translateY(0)';
  });



  // Bắt sự kiện nhấn nút
  showBoxButton.addEventListener('click', function() {
    // Thiết lập hàm đếm thời gian 3 giây
    setTimeout(function() {
      // Hàm thông báo sẽ được gọi sau 3 giây
      alert('Bạn đã bốc quẻ thành công, ấn và giữ nút "Dechiper lucky card" để giải quẻ và xem kết quả nhé!');
    }, 3000); // 3000ms = 3 giây
  });

  //nút làm mới trang

  function refreshPage() {
    location.reload();
}


//Container Result 
let foodList = [
  {
    name: "Chả cá Lã Vọng",
    image: "./pictrure/dishes/Gửi-RGB.vn-2.jpg",
    description: "Chả cá Lã Vọng là tên của món chả cá đặc sản Hà Nội. Đây là món chả làm từ cá (thường là cá lăng) thái miếng đem tẩm ướp, nướng trên than củi rồi rán lại trong chảo mỡ, do gia đình họ Đoàn tại số nhà 14 phố Chả Cá (trước đây là phố Hàng Sơn) trong khu phố cổ giữ bí quyết kinh doanh từ năm 1871 và đặt tên cho nó như trên."
  },
  {
    name: "Bánh Đa Cua",
    image: "./pictrure/dishes/Gửi-RGB.vn-3.jpg",
    description: "Bánh đa cua có nguồn gốc từ Hải Phòng, theo chân người mà làm giàu thêm nét văn hóa ẩm thực của mảnh đất Kinh kỳ được vài chục năm nay. Bánh đa cua ăn mùa nào cũng hợp. Mùa hè, bánh đa cua khéo léo gọi mời thực khách bằng màu xanh mát mắt của rau muống đầm xanh và giòn, còn mùa đông là vị ấm áp của cua đồng béo ngậy."
  },
  {
      name: "Bún Mọc",
      image: "./pictrure/dishes/Gửi-RGB.vn-4.jpg",
      description: "Bún mọc, món ngon đặc trưng Hà thành dường như đã trở thành một phần quen thuộc trong đời sống ẩm thực Sài Gòn.Nó có mặt ở mọi ngóc ngách thành phố này, từ những con đường sầm uất cho đến những ngõ hẻm lao động với đủ khẩu vị và biến thể khác nhau. Người ta cũng thường tranh cãi về việc gọi sao cho đúng cái chữ “mọc” đó. Chỗ gọi là “mọc” vì món này được cho là có xuất xứ từ làng Mọc (Nhân Mục – Nhân Chính), nay là quận Thanh Xuân, Hà Nội."
    },
    {
      name: "Bún Bò Huế",
      image: "./pictrure/dishes/Gửi-RGB.vn-5.jpg",
      description: "Bún bò là một trong những đặc sản của xứ Huế, mặc dù món bún này phổ biến trên cả ba miền ở Việt Nam và cả người Việt tại hải ngoại. Tại Huế, món này được gọi đơn giản là bún bò hoặc gọi cụ thể hơn là bún bò thịt bò. Các địa phương khác gọi là bún bò Huế, bún bò gốc Huế để chỉ xuất xứ của món ăn này. Món ăn có nguyên liệu chính là bún, thịt bắp bò, giò heo, cùng nước dùng có màu đỏ đặc trưng và vị sả và ruốc."
    },
    {
      name: "Cơm Lá Sen",
      image: "./pictrure/dishes/Gửi-RGB.vn-6.jpg",
      description: "Cơm hấp lá sen là món được mệnh danh là món tiến Vua nên đòi hỏi người đầu bếp phải thật tinh tế và tỉ mỉ. Hạt sen phải chọn loại to, mẩy, trắng đều và không bị nát. Tim sen phải được lấy thật kỹ để khi hấp không bị đắng."
    },
    {
      name: "Bánh Khoái",
      image: "./pictrure/dishes/Gửi-RGB.vn-7.jpg",
      description: "Bánh khoái là món bánh chiên đặc biệt của xứ Huế. Cách thực hiện khá giống với món bánh xèo Nam bộ nhưng dạng bánh lại khác nhau hoàn toàn. Bánh khoái có hình tròn theo dạng khuôn đổ, bánh được làm từ thành phần chính đó là bột gạo, có nhân ở trên, bánh thường được ăn kèm với rau sống và nước chấm."
    },
    {
      name: "Bánh Bèo Chén",
      image: "./pictrure/dishes/Gửi-RGB.vn-8.jpg",
      description: "Không biết bánh Bèo có từ bao giờ, chỉ biết rằng những chiếc bánh mỏng manh, bình dị đó là đặc sản khá nổi tiếng của vùng đất Cố Đô. Được chế biến từ bột gạo, khuôn bánh là những chiếc chén nhỏ xíu, ăn kèm với nước mắm ngọt, món ăn đơn giản là vậy nhưng ẩn chứa bên trong là một quá trình chế biến tương đối công phu."
    },
    {
      name: "Bánh Canh cá lóc",
      image: "./pictrure/dishes/Gửi-RGB.vn-9.jpg",
      description: "Bánh canh cá lóc là món ăn dân dã, thường được bán ở các vỉa hè, phố nhỏ và có nguồn gốc từ khu vực Bình Trị Thiên. Mặc dù được chế biến đơn giản, bao gồm sợi bánh canh làm từ bột gạo và thịt cá cá lóc nhưng được nhiều người yêu thích bởi hương vị thơm ngọt, đậm đà."
    },
    {
      name: "Nem lụi",
      image: "./pictrure/dishes/Gửi-RGB.vn-10.jpg",
      description: "Những chiếc nem lụi được nướng vàng ươm, thơm phức trên bếp than hoa đỏ rực, ăn kèm với các loại rau sống thơm mát, chấm với nước chấm đặc biệt làm ngẩn ngơ lòng bao thực khách. Nem lụi được bày trên đĩa với đủ màu sắc cuốn hút: màu vàng ươm của miếng thịt đã được nướng, màu xanh của rau, màu nâu của nước chấm và thêm chút đỏ tươi của ớt thái nhuyễn."
    },
    {
      name: "Mì Quảng",
      image: "./pictrure/dishes/Gửi-RGB.vn-11.jpg",
      description: "Ngày nay Mì Quảng được biết đến như một món ăn quen thuộc của tất cả các vùng miền từ Bắc đến Nam, nhưng để có một bát mì ngon tuyệt, đúng hương vị, đậm đà trong từng sợi mì… thì chỉ có Mì Quảng ở miền trung nổi tiếng ở vùng đất Quảng Nam."
    },
    {
      name: "Bánh Khọt",
      image: "./pictrure/dishes/Gửi-RGB.vn-12.jpg",
      description: "Bánh khọt là loại bánh Việt Nam (chính xác là loại bánh đặc trưng của miền nam Việt Nam) làm từ bột gạo hoặc bột sắn, có nhân tôm, được nướng và ăn kèm với rau sống, ớt tươi, thường ăn với nước mắm pha ngọt, rất ít khi chấm nước sốt mắm tôm (không phải mắm tôm hay mắm tôm chua)."
    },
    {
      name: "Bánh Cuốn",
      image: "./pictrure/dishes/Gửi-RGB.vn-13.jpg",
      description: "Bánh cuốn được biết đến như một loại bánh được làm từ bột gạo hấp, cán mỏng rồi sau đó cuộn với nhân gồm thịt, mộc nhĩ, nấm hương thái nhỏ, được rắc bên trên một chút hành khô, ăn kèm với nước chấm chua ngọt đúng điệu."
    },
    {
      name: "Phá lấu",
      image: "./pictrure/dishes/Gửi-RGB.vn-15.jpg",
      description: "Phá lấu được làm từ những nguyên liệu chính là các bộ phận như lưỡi, tai, ruột và bao tử của heo, bò hoặc vịt. Món này thường được ăn kèm với bánh mì, bún hoặc cơm trắng đều rất ngon."
    },
    {
      name: "Bò né",
      image: "./pictrure/dishes/Gửi-RGB.vn-16.jpg",
      description: "Bò né là một món ăn sáng ở Việt Nam, đặc trưng của Phan Thiết , với đầy đủ các thành phần dinh dưỡng thiết yếu cho cơ thể: chất đạm từ thịt bò, xíu mại và Pa tê, chất bột từ bánh mì, chất béo từ trứng ốpla và khoáng chất, vitamin từ rau, hành, ngò. Sở dĩ có tên gọi là bò né vì đây là một món bít tết (thịt bò) kiểu Việt Nam và được trình bày trên một cái chảo gang cỡ nhỏ và dọn ra khi dầu đang sôi, bắn bọt, vì vậy thực khách phải de người, nghiêng người để tránh bị bắn vào, bị văng vào người do đó mới có tên gọi là bò né."
    },
    {
      name: "Hoành thánh mì xà xíu",
      image: "./pictrure/dishes/Gửi-RGB.vn-17.jpg",
      description: "Mì hoành thánh (còn được gọi là mì vằn thắn) (Bính âm Hán ngữ: Yúntūn miàn; phiên âm tiếng Quảng Châu: wàhn tān mihn) là một món mì Quảng Đông."
    },
    {
      name: "Bún thịt nướng",
      image: "./pictrure/dishes/Gửi-RGB.vn-19.jpg",
      description: "Bún thịt nướng là một món ăn có nguồn gốc ở miền Nam Việt Nam, về sau đã phổ biến lan rộng tại nhiều nơi trên cả nước. Mỗi nơi đều có thể có cho mình một hương vị đặc trưng riêng tùy theo khẩu vị từng nơi. Món bún này có thể dùng làm điểm tâm, bữa chính hay bữa phụ đều phù hợp. Yêu cầu của món Bún thịt nướng là thịt được nướng vàng đều, có vị đậm đà cùng hương thơm của sả và vừng; nước mắm chua ngọt vừa ăn; và các loại rau dùng kèm đa dạng"
    },
    {
      name: "Bánh canh ghẹ",
      image: "./pictrure/dishes/Gửi-RGB.vn-20.jpg",
      description: "Bánh canh được làm từ bột mì, đem nấu với tôm, cua, ghẹ, giò heo, thịt bò vụn… là một món ăn phổ biến của người miền Trung. Cách chế biến cũng đơn giản, nhanh - gọn - lẹ, chỉ cần chưa tới một tiếng đồng hồ là đã có ngay một nồi bánh canh ghẹ thơm phức."
    },
    {
      name: "Bò nướng lá lốt",
      image: "./pictrure/dishes/Gửi-RGB.vn-21.jpg",
      description: "Bò nướng lá lốt hay còn gọi là bò lá lốt hoặc là thịt bò lá lốt hay bò cuốn lá lốt là một món ăn trong ẩm thực Việt Nam, thịnh hành ở vùng Nam bộ, nguyên liệu chính là thịt bò và lá lốt được chế biến theo phương pháp nướng, có thể kèm theo mỡ chài."
    },
    {
      name: "Hủ tíu Nam Vàng",
      image: "./pictrure/dishes/Gửi-RGB.vn-22.jpg",
      description: "Hủ tiếu Nam Vang là món ăn khá phổ biến ở Nam Bộ. Một tô hủ tiếu Nam Vang sẽ bao gồm rất nhiều nguyên liệu và phần nước lèo thơm ngon. Món đặc sản này là sự kết tinh của 2 nền văn hóa ẩm thực Việt Nam và Campuchia."
    },
    {
      name: "Bún Mắm",
      image: "./pictrure/dishes/Gửi-RGB.vn-23.jpg",
      description: "Trước đây, bún mắm là một món ăn dân dã và được chế biến giản dị, nó thường được dùng cho những bữa ăn nhanh. Con mắm được nấu rã ra, sau đó lọc lấy phần nước trong, cho thêm một ít đường, hành sả và dùng chung với bún. Về sau để tăng hương vị và độ phong phú cho bún mắm, người ta cho thêm miếng cá, tôm, mực và heo quay."
    },
    {
      name: "Bánh Mì",
      image: "./pictrure/dishes/Gửi-RGB.vn-24.jpg",
      description: "Bánh mì là một món ăn Việt Nam, với lớp vỏ ngoài là một ổ bánh mì nướng có da giòn, ruột mềm, còn bên trong là phần nhân. Tùy theo văn hóa vùng miền hoặc sở thích cá nhân, người ta có thể chọn nhiều nhân bánh mì khác nhau."
    },
    {
      name: "Cơm tấm sườn-bì-chả",
      image: "./pictrure/dishes/Gửi-RGB.vn-25.jpg",
      description: "Cơm tấm là món ăn đặc sản của người dân miền Nam. Nó được ưa chuộng tại rất nhiều vùng miền, đặc biệt là Sài Gòn. Hiện nay, món cơm tấm đã có mặt trên khắp các tỉnh thành của đất nước và cả nước ngoài. Cơm tấm được làm từ hạt tấm, trứng ốp la, chả trứng, lạp xưởng. Cơm tấm thường được sử dụng cho bữa sáng nhưng đôi khi người ta cũng thưởng thức nó vào buổi trưa hoặc buổi tối."
    },
    {
      name: "Gỏi cuốn",
      image: "./pictrure/dishes/Gửi-RGB.vn-26.jpg",
      description: "Gỏi cuốn hay còn được gọi là nem cuốn (phương ngữ Bắc bộ), là một món ăn khá phổ biến ở Việt Nam.[1] Gỏi cuốn có xuất xứ từ Miền nam Việt Nam với tên gọi là gỏi cuốn - bằng các nguyên liệu gồm rau xà lách, húng quế, tía tô, tôm khô, rau thơm, thịt luộc, tôm tươi.. tất cả được cuộn trong vỏ bánh tráng."
    },
    {
      name: "Phở Bò",
      image: "./pictrure/dishes/Gửi-RGB.vn-27.jpg",
      description: "Phở là một món ăn truyền thống của Việt Nam, có nguồn gốc từ Nam Định, Hà Nội và được xem là một trong những món ăn tiêu biểu cho nền ẩm thực Việt Nam. Thành phần chính của phở là bánh phở và nước dùng cùng với thịt bò hoặc thịt gà cắt lát mỏng. Thịt bò thích hợp nhất để nấu phở là thịt, xương từ các giống bò ta (bò nội, bò vàng). "
    },
  
];

function getRandomFood() {
  const randomIndex = Math.floor(Math.random() * foodList.length);
  const food = foodList[randomIndex];
  document.getElementById("foodImage").src = food.image;
  document.getElementById("foodName").innerText = food.name;
  document.getElementById("foodDescription").innerText = food.description;
}