$(document).ready(function(){
    //풀페이지 설정해보기 / 섹션4,5,푸터는 정상 스크롤값으로 설정 / 상단이동버튼 보이게해줘야함 / 풀페이지 부분에는 계속해서 풀페이지 상단영역으로 이동하게된다 이것을 제거해주기
    new fullpage('#wrap', {
        scrollBar : true,
        normalScrollElements: '.sec-4,.sec-5,.footer',
        fitToSection: false,
        scrollingSpeed: 300,
        //반응형 설정
        responsiveWidth: 1800,
        responsiveHeight: 890,
    });

    // sub-menu
    // 마우스 올리면 카테고리에 맞는 탭 활성화 / 헤더 색상변경 / 서브메뉴 박스에서 마우스 나가면 기존 상태로 다시 변경
    $('.main-menu li').mouseenter(function(){
        let result = $(this).attr('data-tab');
        
        $('.sub-menu').removeClass('active');

        $(`#${result}`).addClass('active');


        // 서브메뉴박스 보이게 처리
        $('.sub-menu-box').addClass('active');

        //헤더 색상변경
        $('.header-area,.header-logo svg').addClass('active');
    });

    $('.sub-menu-box').mouseleave(function(){
        $(this).removeClass('active');
        $('.header-area,.header-logo svg').removeClass('active');
    });



    //sec-4 swiper
    //세로 자동으로 굴러가는 스와이퍼 연결해보기
    var swiper = new Swiper(".mySwiper", {
        direction: "vertical",
        loop:true,
        speed:500,
        autoplay :{
            delay: 1500
        }
    });

    // 상단이동버튼 300px 이상일때 로고 사이즈 변경하기(active 설정해놓음) / 최상단으로 올라가는 상단이동버튼 구현해보기(배너에서 없어져있다가 sec1에서부터 보이게) -> 클릭했을때 최상단으로 이동하는 부분까지!
    $(window).scroll(function(){
        let sct = $(window).scrollTop();

        if(sct >= 300){
            //로고 사이즈 변경
            $('.header-logo').addClass('active');
            $('.top-btn').fadeIn();
        }else{
            $('.header-logo').removeClass('active');
            $('.top-btn').fadeOut();
        }
    });

    $('.top-btn').click(function(){
        $('html,body').animate({
            scrollTop : 0
        },500);
    });

});