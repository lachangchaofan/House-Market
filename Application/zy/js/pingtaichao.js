$(function () {
    var i = 0;
    var iTimer = null;
    var aLi = $('.banner_tr ul').find('li');
    var aSpan = $('.banner_tr p').find('span');

    //�����е�span��ӵ������
    aSpan.click(function () {

        i = $(this).index();
        //console.log(i);
        fadeFn();

    });
    //���prev��ͼƬ��ʾ��һ�ţ�
    $('.prev').click(function () {
        if (i > 0) {
            i--;
            fadeFn();
        }
    });

    //���next,ͼƬ��ʾ ��һ�ţ�
    $('.next').click(function () {
        //console.log(i);
        if (i < aLi.size() - 1) {
            i++;
            fadeFn();
        }
    });

    //�ҵ����е�li���������li��class;����һ��li���cur,���Ҹı�li��͸���ȣ���������һ��li���class��
    function fadeFn() {
        aLi.removeClass().hide();
        aLi.eq(i).addClass('cur').fadeIn('slow');
        aSpan.removeClass();
        aSpan.eq(i).addClass('active');
    }

    function autoPlay() {
        i++;
        i %= aLi.size();
        fadeFn();
    }

    iTimer = setInterval(autoPlay, 3000);

    //�������ֹͣ��ʱ��������ƿ�������ʱ����
    $('.banner_tr').mouseover(function () {
        clearInterval(iTimer);
        $('.prev').show();
        $('.next').show();
    });

    $('.banner_tr').mouseout(function () {
        clearInterval(iTimer); //��ֹͣ���ٿ�����
        iTimer = setInterval(autoPlay, 3000);
        $('.prev').hide();
        $('.next').hide();
    });

})