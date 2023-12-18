(function ($) {
    "use strict";


    // Khởi tạo carousel cho danh sách.
    $(".vegetable-carousel").owlCarousel({
        autoplay: true, // Tự động trượt các mục trong carousel.
        loop: true, // Cho phép vòng lặp vô hạn của carousel.
        margin: 25, // Khoảng cách giữa các mục trong carousel.
        nav: true, // Hiển thị các nút điều hướng trước và sau để chuyển đổi giữa các mục.
        navText: [
            '<i class="bi bi-arrow-left"></i>', // Mã HTML của nút điều hướng trước.
            '<i class="bi bi-arrow-right"></i>' // Mã HTML của nút điều hướng sau.
        ],
        responsiveClass: true, // Thêm lớp 'owl-responsive' cho các thiết bị có độ phân giải khác nhau.
        responsive: {
            0: {
                items: 1 // Hiển thị 1 mục trên các thiết bị có độ phân giải từ 0 đến 575px.
            },
            576: {
                items: 1 // Hiển thị 1 mục trên các thiết bị có độ phân giải từ 576px đến 767px.
            },
            768: {
                items: 2 // Hiển thị 2 mục trên các thiết bị có độ phân giải từ 768px đến 991px.
            },
            992: {
                items: 3 // Hiển thị 3 mục trên các thiết bị có độ phân giải từ 992px đến 1199px.
            },
            1200: {
                items: 4 // Hiển thị 4 mục trên các thiết bị có độ phân giải lớn hơn hoặc bằng 1200px.
            }
        }
    });

})(jQuery);


