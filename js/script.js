        //메인 슬라이드
    var swiper = new Swiper(".msv_bx", {
      slidesPerView: 1,
      spaceBetween: 30,
      autoplay: true,
        loop: true,
        loopedSlides:3,
      breakpoints: {
          768: {
            slidesPerView: 3,  
            spaceBetween: 10,
          },

          1024: {
            slidesPerView: 5,  
            spaceBetween: 10,
          },
        },
    });

    //카테고리
    var swiper = new Swiper(".ctg_bx", {
      slidesPerView: 4,
      spaceBetween: 0,
       breakpoints: {
          1024: {
            slidesPerView: 15,  //브라우저가 1024보다 클 때
            spaceBetween: 0,
          },
        },
    });

    //인기
    var swiper = new Swiper(".popular", {
      slidesPerView: 1,
      spaceBetween: 0,
       breakpoints: {
        500: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 10,
          },

          1024: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
        },
    });

    //곧 오는 팝업
    var swiper = new Swiper(".soon", {
      slidesPerView: 1,
      spaceBetween: 0,
       breakpoints: {
        500: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
        768: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
        },
    });

    //cont 1,2
 const popupData = {
    popular: [
      {
        img: 'img/popup01.png',
        loc: '서울 영등포구',
        name: '점프샵 팝업스토어',
        date: '25.02.15 ~ 25.02.20',
        link: '#'
      },
      {
        img: 'img/popup02.png',
        loc: '부산 해운대구',
        name: '점프샵 팝업스토어',
        date: '25.02.15 ~ 25.02.20',
        link: '#'
      },
      {
        img: 'img/popup03.png',
        loc: '서울 종로구',
        name: '점프샵 팝업스토어',
        date: '25.02.15 ~ 25.02.20',
        link: '#'
      },
      {
        img: 'img/popup04.png',
        loc: '부산 부산진구',
        name: '점프샵 팝업스토어',
        date: '25.02.15 ~ 25.02.20',
        link: '#'
      },
      {
        img: 'img/popup05.png',
        loc: '대구 중구',
        name: '점프샵 팝업스토어',
        date: '25.02.15 ~ 25.02.20',
        link: '#'
      },
    ],
    soon: [
      {
        img: 'img/popup06.png',
        dday: 'D-3',
        loc: '부산 해운대구',
        name: '캐릭터 팝업스토어',
        date: '25.03.01 ~ 25.03.10',
        link: '#'
      },
      {
        img: 'img/popup07.png',
        dday: 'D-5',
        loc: '부산 해운대구',
        name: '캐릭터 팝업스토어',
        date: '25.03.01 ~ 25.03.10',
        link: '#'
      },
      {
        img: 'img/popup08.png',
        dday: 'D-7',
        loc: '부산 해운대구',
        name: '캐릭터 팝업스토어',
        date: '25.03.01 ~ 25.03.10',
        link: '#'
      },
      {
        img: 'img/popup09.png',
        dday: 'D-9',
        loc: '부산 해운대구',
        name: '캐릭터 팝업스토어',
        date: '25.03.01 ~ 25.03.10',
        link: '#'
      },
      {
        img: 'img/popup10.png',
        dday: 'D-11',
        loc: '부산 해운대구',
        name: '캐릭터 팝업스토어',
        date: '25.03.01 ~ 25.03.10',
        link: '#'
      },
    ],
     locpop: [
      {
        img: 'img/popup01.png',
        loc: '서울 영등포구',
        name: '점프샵 팝업스토어',
        link: '#'
      },
      {
        img: 'img/popup02.png',
        loc: '부산 해운대구',
        name: '점프샵 팝업스토어',
        link: '#'
      },
      {
        img: 'img/popup03.png',
        loc: '서울 종로구',
        name: '점프샵 팝업스토어',
        link: '#'
      },
      {
        img: 'img/popup04.png',
        loc: '부산 부산진구',
        name: '점프샵 팝업스토어',
        link: '#'
      },
      {
        img: 'img/popup05.png',
        loc: '대구 중구',
        name: '점프샵 팝업스토어',
        link: '#'
      },
    ],
  };

  const template = document.getElementById('popup-template');

  Object.keys(popupData).forEach(groupKey => {
    const container = document.querySelector(
      `.popup_bx[data-popup-group="${groupKey}"]`
    );
    if (!container) return;

    popupData[groupKey].forEach(item => {
      const clone = template.content.cloneNode(true);

      const link = clone.querySelector('a');
      const img = clone.querySelector('img');
      const ddayEl = clone.querySelector('.dday');

      link.href = item.link;
      img.src = item.img;
      img.alt = item.name;

      clone.querySelector('.loc').textContent = item.loc;
      clone.querySelector('.name').textContent = item.name;
      clone.querySelector('.date').textContent = item.date;

      // ✅ dday 조건 처리 (핵심)
      if (item.dday) {
        ddayEl.textContent = item.dday;
      } else {
        ddayEl.remove(); 
      }

      container.appendChild(clone);
    });
  });