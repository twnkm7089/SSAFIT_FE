let videoList = [
    {
      "id": "gMaB-fG4u4g",
      "title": "전신 다이어트 최고의 운동 [칼소폭 찐 핵핵매운맛]",
      "part": "전신",
      "channelName": "ThankyouBUBU",
      "url": "https://www.youtube.com/embed/gMaB-fG4u4g"
    },
    {
      "id": "swRNeYw1JkY",
      "title": "하루 15분! 전신 칼로리 불태우는 다이어트 운동",
      "part": "전신",
      "channelName": "ThankyouBUBU",
      "url": "https://www.youtube.com/embed/swRNeYw1JkY"
    },
    {
      "id": "54tTYO-vU2E",
      "title": "상체 다이어트 최고의 운동 BEST [팔뚝살/겨드랑이살/등살/가슴어깨라인]",
      "part": "상체",
      "channelName": "ThankyouBUBU",
      "url": "https://www.youtube.com/embed/54tTYO-vU2E"
    },
    {
      "id": "QqqZH3j_vH0",
      "title": "상체비만 다이어트 최고의 운동 [상체 핵매운맛]",
      "part": "상체",
      "channelName": "ThankyouBUBU",
      "url": "https://www.youtube.com/embed/QqqZH3j_vH0"
    },
    {
      "id": "tzN6ypk6Sps",
      "title": "하체운동이 중요한 이유? 이것만 보고 따라하자 ! [하체운동 교과서]",
      "part": "하체",
      "channelName": "김강민",
      "url": "https://www.youtube.com/embed/tzN6ypk6Sps"
    },
    {
      "id": "u5OgcZdNbMo",
      "title": "저는 하체 식주의자 입니다",
      "part": "하체",
      "channelName": "GYM종국",
      "url": "https://www.youtube.com/embed/u5OgcZdNbMo"
    },
    {
      "id": "PjGcOP-TQPE",
      "title": "11자복근 복부 최고의 운동 [복근 핵매운맛]",
      "part": "복부",
      "channelName": "ThankyouBUBU",
      "url": "https://www.youtube.com/embed/PjGcOP-TQPE"
    },
    {
      "id": "7TLk7pscICk",
      "title": "(Sub)누워서하는 5분 복부운동!! 효과보장! (매일 2주만 해보세요!)",
      "part": "복부",
      "channelName": "SomiFit",
      "url": "https://www.youtube.com/embed/7TLk7pscICk"
    }
  ]

  let videoHtml = ``;

//   videoList.forEach((video)=> {
//       videoHtml += `
//         <iframe width="560" height="315" src="https://www.youtube.com/embed/${video.id}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
//       `
//   })

  for(let i = 0; i < 4; i++){
    videoHtml += `
    <div class="card" style="width: 18rem;">
    <iframe width="286" height="190" src="https://www.youtube.com/embed/${videoList[i].id}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    <div class="card-body">
      <h5 class="card-title">${videoList[i].title}</h5>
      <p class="card-text">${videoList[i].channelName}<span class="badge text-bg-primary">${videoList[i].part}</span></p>
      <a href="review.html" class="btn btn-primary">리뷰보기</a>
    </div>
</div>
    `
  }

  videoHtml += `<a href="movies.html"><button type="button" class="btn btn-outline-dark">전체보기</button></a>`
  
  
  document.querySelector("#video_container").innerHTML = videoHtml;

  document.querySelector("#filter_container").innerHTML = videoHtml;

  //filter button 입력
  let btn1 = document.querySelector("#btncheck1");
  btn1.addEventListener('click', function(event){
    videoHtml = "";
    videoList.forEach((video)=>{
      if(video.part === "전신"){
        videoHtml += `
            <div class="card" style="width: 18rem;">
            <iframe width="286" height="190" src="https://www.youtube.com/embed/${video.id}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <div class="card-body">
              <h5 class="card-title">${video.title}</h5>
              <p class="card-text">${video.channelName}<span class="badge text-bg-primary">${video.part}</span></p>
              <a href="review.html" class="btn btn-primary">리뷰보기</a>
            </div>
        </div>
            `
      }
    })
    document.querySelector("#filter_container").innerHTML = videoHtml;
  });

  let btn2 = document.querySelector("#btncheck2");
  btn2.addEventListener('click', function(event){
    videoHtml = "";
    videoList.forEach((video)=>{
      if(video.part === "상체"){
        videoHtml += `
            <div class="card" style="width: 18rem;">
            <iframe width="286" height="190" src="https://www.youtube.com/embed/${video.id}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <div class="card-body">
              <h5 class="card-title">${video.title}</h5>
              <p class="card-text">${video.channelName}<span class="badge text-bg-primary">${video.part}</span></p>
              <a href="review.html" class="btn btn-primary">리뷰보기</a>
            </div>
        </div>
            `
      }
    })
    document.querySelector("#filter_container").innerHTML = videoHtml;
  });

  let btn3 = document.querySelector("#btncheck3");
  btn3.addEventListener('click', function(event){
    videoHtml = "";
    videoList.forEach((video)=>{
      if(video.part === "하체"){
        videoHtml += `
            <div class="card" style="width: 18rem;">
            <iframe width="286" height="190" src="https://www.youtube.com/embed/${video.id}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <div class="card-body">
              <h5 class="card-title">${video.title}</h5>
              <p class="card-text">${video.channelName}<span class="badge text-bg-primary">${video.part}</span></p>
              <a href="review.html" class="btn btn-primary">리뷰보기</a>
            </div>
        </div>
            `
      }
    })
    document.querySelector("#filter_container").innerHTML = videoHtml;
  });

  let btn4 = document.querySelector("#btncheck4");
  btn4.addEventListener('click', function(event){
    videoHtml = "";
    videoList.forEach((video)=>{
      if(video.part === "복부"){
        videoHtml += `
            <div class="card" style="width: 18rem;">
            <iframe width="286" height="190" src="https://www.youtube.com/embed/${video.id}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <div class="card-body">
              <h5 class="card-title">${video.title}</h5>
              <p class="card-text">${video.channelName}<span class="badge text-bg-primary">${video.part}</span></p>
              <a href="review.html" class="btn btn-primary">리뷰보기</a>
            </div>
        </div>
            `
      }
    })
    document.querySelector("#filter_container").innerHTML = videoHtml;
  });

  let btn5 = document.querySelector("#btncheck5");
  btn5.addEventListener('click', function(event){
    videoHtml = "";
    for(let i = 0; i < 4; i++){
      videoHtml += `
      <div class="card" style="width: 18rem;">
      <iframe width="286" height="190" src="https://www.youtube.com/embed/${videoList[i].id}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <div class="card-body">
        <h5 class="card-title">${videoList[i].title}</h5>
        <p class="card-text">${videoList[i].channelName}<span class="badge text-bg-primary">${videoList[i].part}</span></p>
        <a href="review.html" class="btn btn-primary">리뷰보기</a>
      </div>
  </div>
      `
    }
    videoHtml += `<a href="movies.html"><button type="button" class="btn btn-outline-dark">전체보기</button></a>`
    document.querySelector("#filter_container").innerHTML = videoHtml;
  });


  //password 확인
  let regist_pw = document.querySelector("#inputPassword");
  regist_pw.addEventListener('keyup', function(event){
    let p1 = regist_pw.value;
    let msgbox = document.querySelector("#passwordHelpBlock");
    if(p1.length < 8){
      msgbox.innerText = "8자 이상으로 입력해 주세요."
    } else if(p1.length > 20){
      msgbox.innerText = "20자 이내로 입력해 주세요."
    } else{
      msgbox.innerText = "적절합니다."
    }
  });

  let certify_pw = document.querySelector("#certifypw");
  certify_pw.addEventListener('keyup', function(event){
    let p1 = regist_pw.value;
    let p2 = certify_pw.value;
    let msgbox = document.querySelector("#passwordCheck");
    if(p1 === p2){
      msgbox.innerText = "일치합니다."
    } else{
      msgbox.innerText = "불일치합니다."
    }
  });

