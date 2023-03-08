

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