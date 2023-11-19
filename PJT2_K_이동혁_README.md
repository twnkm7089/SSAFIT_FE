# 🎬 PJT 02



__✔ 작성 정보__

작  성  자 : 서울 7반 F조 이동혁

날        짜 : 2023-08-11

환        경 : Windows 10 Pro

개발도구 : VScode


✔ **프로젝트 요구사항**

- 영상 조회 기능
    - 가장 많이 본 영상 조회
    - 운동 부위별 영상 조회
    - 전체 영상 조회

- 리뷰 기능
    - 리뷰 등록
    - 리뷰 조회
    - 리뷰 수정




✔ **프로젝트 목표**

- 영상에 대한 정보 객체지향적 구현
- JSON 데이터 처리 설계
- 사용자 인터페이스 구현
- 파일 입출력 설계
- 네비게이션 구현
- 에러 핸들링 : 적절한 에러를 통해 사용자에게 정확한 비밀번호 값을 입력받음.



 **구조**
ㄴ index.html
ㄴ movies.html
ㄴ mypage.html
ㄴ review.html
ㄴ video.jason
  📂 js
  ㄴ 📄 list.js
  ㄴ 📄 main.js
  ㄴ 📄 member.js
  ㄴ 📄 npm.js
  📂 css
  ㄴ 📄 list.css
  ㄴ 📄 main.css
  📂 .vscode
  ㄴ 📄 settings.json


## 🔹 기본 기능 구현 화면 Capture / Source

-Capture

https://user-images.githubusercontent.com/139304883/259958380-76abfcc3-6ed0-483b-bd77-b9a9427e3a5c.png

-Source

📄 index.html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SSAFIT</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous">
    <link rel="stylesheet" href="./css/main.css">
</head>
<body>
    <header>
        <nav id="menu">
            <div id="title">SSAFIT</div>
            <div id="menu_bar">
                <a href="index.html"><a href=""><button type="button" class="btn btn-dark">홈</button></a></a>
                <a href=""><a href=""><button type="button" class="btn btn-dark">헬스장 찾기</button></a></a>
                <!--회원가입-->
                <!-- Button trigger modal -->
                <button type="button" class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    회원가입
                </button>
                
                <!-- Modal -->
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">회원가입</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                        <form>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">email 주소</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
                            </div>
                            <div class="mb-3">
                                <label for="nickname" class="form-label">닉네임</label>
                                <input type="text" class="form-control" id="nickname" placeholder="">
                            </div>
                            <label for="inputPassword" class="form-label">비밀번호</label>
                            <input type="password" id="inputPassword" class="form-control" aria-describedby="passwordHelpBlock">
                            <div id="passwordHelpBlock" class="form-text">
                            8~20자 사이로.
                            </div>
                            <label for="certifypw" class="form-label">비밀번호 확인</label>
                            <input type="password" id="certifypw" class="form-control" aria-describedby="passwordCheck">
                            <div id="passwordCheck" class="form-text">
                            비밀번호가 일치하지 않습니다.
                            </div>

                        </form>
                        </div>
                        <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">취소</button>
                        <button type="button" class="btn btn-primary">회원가입</button>
                        </div>
                    </div>
                    </div>
                </div>
                
                


                <!--로그인-->
                 <!-- Button trigger modal -->
                 <button type="button" class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#loginModal">
                    로그인
                </button>
                
                <!-- Modal -->
                <div class="modal fade" id="loginModal" tabindex="-1" aria-labelledby="loginLabel" aria-hidden="true">
                    <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                        <h1 class="modal-title fs-5" id="loginLabel">로그인</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                        <form>
                            <div class="mb-3">
                                <label for="loginEmail" class="form-label">email 주소</label>
                                <input type="email" class="form-control" id="loginEmail" placeholder="name@example.com">
                            </div>
                            <label for="loginPw" class="form-label">비밀번호</label>
                            <input type="password" id="loginPw" class="form-control">

                        </form>
                        </div>
                        <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">취소</button>
                        <a href="mypage.html"><button type="button" class="btn btn-primary">로그인</button></a>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </nav>
    </header>
    <body>
        <div id="images">
            <img src="./assets/gym.jpg" alt="운동장" width="100%" height="300px">
        </div>
        <div id="search">
            <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="원하는 영상 키워드를 검색" aria-label="keyword_of_video" aria-describedby="button-addon2">
                <button class="btn btn-outline-secondary" type="button" id="button-addon2">검색</button>
            </div>
        </div>
        <div id="popular_label"><b>가장 많이 본 영상</b></div>
        <div id="popular_movies">
            <div id="video_container">

            </div>
        </div>
        <div id="filter_label"><b>운동 부위 선택</b></div>
        <!--부위 선택 버튼-->
        <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
            <input type="radio" name="select" class="btn-check" id="btncheck1" autocomplete="off">
            <label class="btn btn-outline-primary" for="btncheck1">전신</label>
          
            <input type="radio" name="select" class="btn-check" id="btncheck2" autocomplete="off">
            <label class="btn btn-outline-primary" for="btncheck2">상체</label>
          
            <input type="radio" name="select" class="btn-check" id="btncheck3" autocomplete="off">
            <label class="btn btn-outline-primary" for="btncheck3">하체</label>

            <input type="radio" name="select" class="btn-check" id="btncheck4" autocomplete="off">
            <label class="btn btn-outline-primary" for="btncheck4">복부</label>

            <input type="radio" name="select" class="btn-check" id="btncheck5" autocomplete="off" checked>
            <label class="btn btn-outline-primary" for="btncheck5">원래대로</label>
        </div>

        <div id="filtered_movies">
            <div id="filter_container">

            </div>      
        </div>
    </body>
    <footer>


    </footer>



    <script src="./js/main.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm" crossorigin="anonymous"></script>
</body>
</html>
📄 movies.html //전체영상
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SSAFIT</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous">
    <link rel="stylesheet" href="./css/list.css">
</head>
<body>
    <header>
        <nav id="menu">
            <div id="title">SSAFIT</div>
            <div id="menu_bar">
                <a href="index.html"><a href=""><button type="button" class="btn btn-dark">홈</button></a></a>
                <a href=""><a href=""><button type="button" class="btn btn-dark">헬스장 찾기</button></a></a>
                <a href=""><button type="button" class="btn btn-dark">회원가입</button></a>
                <a href=""><button type="button" class="btn btn-dark">로그인</button></a>
            </div>
        </nav>
    </header>
    <body>
        <div id="images"> 
            <img src="./assets/gym.jpg" alt="운동장" width="100%" height="300px">
        </div>
        <div id="search">
            <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="원하는 영상 키워드를 검색" aria-label="keyword_of_video" aria-describedby="button-addon2">
                <button class="btn btn-outline-secondary" type="button" id="button-addon2">검색</button>
            </div>
        </div>
        <div id="popular_label"><b>전체 영상</b></div>
        <div id="popular_movies">
            <div id="video_container">

            </div>
        </div>
        <div id="to_home">
            <a href="index.html" id="to_home"><button type="button" class="btn btn-outline-dark">메인으로</button></a>
        </div>
    </body>
    <footer>


    </footer>



    <script src="./js/list.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm" crossorigin="anonymous"></script>
</body>
</html>
📄 mypage.html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SSAFIT</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous">
    <link rel="stylesheet" href="./css/main.css">
</head>
<body>
    <header>
        <nav id="menu">
            <div id="title">SSAFIT</div>
            <div id="menu_bar">
                <a href="index.html"><a href=""><button type="button" class="btn btn-dark">홈</button></a></a>
                <a href=""><a href=""><button type="button" class="btn btn-dark">헬스장 찾기</button></a></a>
                
                 <!-- Button trigger modal -->
                <a href="index.html"> <button type="button" class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#loginModal">
                    로그아웃
                </button></a>
                
                
            </div>
        </nav>
    </header>
    <body>
        <div id="images">
            <img src="./assets/gym.jpg" alt="운동장" width="100%" height="300px">
        </div>
        <div id="search">
            <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="원하는 영상 키워드를 검색" aria-label="keyword_of_video" aria-describedby="button-addon2">
                <button class="btn btn-outline-secondary" type="button" id="button-addon2">검색</button>
            </div>
        </div>
        <div id="popular_label"><b>가장 많이 본 영상</b></div>
        <div id="popular_movies">
            <div id="video_container">

            </div>
        </div>
        <div id="filter_label"><b>운동 부위 선택</b></div>
        <!--부위 선택 버튼-->
        <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
            <input type="radio" name="select" class="btn-check" id="btncheck1" autocomplete="off">
            <label class="btn btn-outline-primary" for="btncheck1">전신</label>
          
            <input type="radio" name="select" class="btn-check" id="btncheck2" autocomplete="off">
            <label class="btn btn-outline-primary" for="btncheck2">상체</label>
          
            <input type="radio" name="select" class="btn-check" id="btncheck3" autocomplete="off">
            <label class="btn btn-outline-primary" for="btncheck3">하체</label>

            <input type="radio" name="select" class="btn-check" id="btncheck4" autocomplete="off">
            <label class="btn btn-outline-primary" for="btncheck4">복부</label>

            <input type="radio" name="select" class="btn-check" id="btncheck5" autocomplete="off" checked>
            <label class="btn btn-outline-primary" for="btncheck5">원래대로</label>
        </div>

        <div id="filtered_movies">
            <div id="filter_container">

            </div>      
        </div>

        <div id="favorites_label"><b>찜 영상</b></div>
        <div id="favorite_movies">
            <div id="favorite_container"></div>
        </div>
    </body>
    <footer>


    </footer>



    <script src="./js/member.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm" crossorigin="anonymous"></script>
</body>
</html>
📄 review.html
<!DOCTYPE html>
<html>
<head>
    <title>운동영상 리뷰</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f5f5f5;
        }
        header {
            background-color: #333;
            color: white;
            text-align: center;
            padding: 10px;
        }
        .container {
            max-width: 600px;
            margin: 20px auto;
            padding: 20px;
            background-color: white;
            border-radius: 5px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        label {
            display: block;
            font-weight: bold;
            margin-bottom: 5px;
        }
        input[type="text"], textarea {
            width: 100%;
            padding: 8px;
            margin-bottom: 10px;
            border: 1px solid #ccc;
            border-radius: 3px;
        }
        button {
            padding: 10px 20px;
            background-color: #333;
            color: white;
            border: none;
            border-radius: 3px;
            cursor: pointer;
        }
        button.cancel {
            background-color: #999;
        }
        .main-button {
            display: inline-block;
            padding: 8px 15px;
            background-color: #333;
            color: white;
            border: none;
            border-radius: 3px;
            text-decoration: none;
            margin-top: 10px;
            font-size:14px;
        }
    </style>
</head>
<body>
    <header>
        <h1>[운동영상]</h1>
        <a href="index.html" class="main-button">메인으로</a>
    </header>
    <div class="container">
        <button id="showPopup">리뷰 등록</button>
        <div class="popup" id="reviewPopup">
            <h2>리뷰 등록</h2>
            <form id="reviewForm">
                <label for="title">제목</label>
                <input type="text" id="title" name="title" required>

                <label for="content">내용</label>
                <textarea id="content" name="content" rows="4" required></textarea>

                <button type="submit">등록</button>
                <button type="button" class="cancel">취소</button>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                <a href="index.html" buttton type="submit" class="main-button">목록</a>
            </form>
        </div>
        <div class="overlay" id="overlay"></div>
    </div>
    <div class="container">
        <h2>리뷰 목록</h2>
        <ul id="reviewList"></ul>
    </div>
    
    <script>
document.addEventListener("DOMContentLoaded", function() {
    const showPopupButton = document.getElementById('showPopup');
    const reviewPopup = document.getElementById('reviewPopup');
    const overlay = document.getElementById('overlay');
    const reviewForm = document.getElementById('reviewForm');
    const reviewList = document.getElementById('reviewList');
    const cancelButton = reviewForm.querySelector('.cancel');
    const reviews = [];
    let currentEditIndex = null; // 현재 수정 중인 리뷰의 인덱스

    function openPopup() {
        reviewPopup.style.display = 'block';
        overlay.style.display = 'block';
    }

    function closePopup() {
        reviewPopup.style.display = 'none';
        overlay.style.display = 'none';
        reviewForm.reset();
    }

    reviewForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const title = document.getElementById('title').value;
        const content = document.getElementById('content').value;

        if (currentEditIndex  !== null) {
            // 수정 모드
            reviews[currentEditIndex] = { title, content };
            const updatedReview = reviewList.children[currentEditIndex];
            updatedReview.innerHTML = `<strong>${title}</strong>: ${content} <button class="edit" data-index="${currentEditIndex}">수정</button>`;
            currentEditIndex = null;
        } else {
            // 새 리뷰 추가
            const newReview = { title, content };
            reviews.push(newReview);
            renderReview(newReview, reviews.length - 1);
        }
        closePopup();
        alert('리뷰가 저장되었습니다!');
    });

    function renderReview(review, index) {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${review.title}</strong>: ${review.content} <button class="edit" data-index="${index}">수정</button>`;
        reviewList.appendChild(li);
    }

    reviewList.addEventListener('click', function(event) {
        if (event.target.classList.contains('edit')) {
            const index = parseInt(event.target.getAttribute('data-index'));
            const review = reviews[index];
            document.getElementById('title').value = review.title;
            document.getElementById('content').value = review.content;
            currentEditIndex = index;
            openPopup();
        }
    });

    cancelButton.addEventListener('click', function() {
        closePopup();
    });

    showPopupButton.addEventListener('click', function() {
        openPopup();
    });
});

    </script>
</body>
</html>
📄 main.js
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


📄 member.js
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
      <a class="btn btn-dark favorite">찜</a>
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
              <a class="btn btn-dark favorite">찜</a>
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
              <a class="btn btn-dark favorite">찜</a>
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
              <a class="btn btn-dark favorite">찜</a>
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
              <a class="btn btn-dark favorite">찜</a>
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
        <a class="btn btn-dark favorite">찜</a>
      </div>
  </div>
      `
    }
    videoHtml += `<a href="movies.html"><button type="button" class="btn btn-outline-dark">전체보기</button></a>`
    document.querySelector("#filter_container").innerHTML = videoHtml;
  });

  let favoriteHTML = "";
  let favorite = document.querySelectorAll(".favorite");
  favorite.forEach((btn)=>{
    btn.addEventListener('click',function(event){
      favoriteHTML += `<div class="card" style="width: 18rem;">`
      favoriteHTML += this.parentNode.parentNode.innerHTML;
      favoriteHTML += `</div>`
      console.log(favoriteHTML);
      document.querySelector("#favorite_container").innerHTML = favoriteHTML;
    });
  });


📄 npm.js
// This file is autogenerated via the `commonjs` Grunt task. You can require() this file in a CommonJS environment.
require('../../js/transition.js')
require('../../js/alert.js')
require('../../js/button.js')
require('../../js/carousel.js')
require('../../js/collapse.js')
require('../../js/dropdown.js')
require('../../js/modal.js')
require('../../js/tooltip.js')
require('../../js/popover.js')
require('../../js/scrollspy.js')
require('../../js/tab.js')
require('../../js/affix.js')
📄 list.js
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

let videoHtml = "";

  videoList.forEach((video) => {
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

  })


  
  
  document.querySelector("#video_container").innerHTML = videoHtml;

📄 list.css
#menu{
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

#menu_box{
    display: flex;
}

#search{
    margin: 10px;
}

#popular_movies{
    display: flex;
}

#video_container{
    display: flex;
    justify-content: center;
    width: 100%;
    margin: 0 50px;
    flex-wrap: wrap;
}


.card{
    margin: 10px;
}

#title{
    font-size: 30px;
    margin-left: 10px;
}

#popular_label, #filter_label{
    font-size: 20px;
    margin: 10px;
}

.btn-group{
    margin: 5px;
}

#to_home{
    text-align: center;
    padding: 5px;
}

📄 main.css

#menu{
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

#menu_box{
    display: flex;
}

#search{
    margin: 10px;
}

#popular_movies, #filtered_movies, #favorite_movies{
    display: flex;
}

#video_container, #filter_container, #favorite_container{
    display: flex;
    justify-content: center;
    width: 100%;
    margin: 0 50px;
}


.card{
    margin: 0 10px;
}

#title{
    font-size: 30px;
    margin-left: 10px;
}

#popular_label, #filter_label, #favorites_label{
    font-size: 20px;
    margin: 10px;
}

.btn-group{
    margin: 5px;
}


## 🔹구현방법

📒 main.js + index.html

기본 메인화면을 구성하였습니다.

상단에는 가장 조회수가 높은 영상 3개를 사용자에게 보여주었습니다.

중단에는 부위별로 운동을 Sorting해서 볼수 있게 하였습니다.

전체리스트 조회에서는 전체 영상을 사용자가 받아 볼수 있게 하였습니다.

회원가입시. 비밀번호 입력란에 사용자가 적당한 문자를 입력하도록 하였습니다.

로그인 후 찜버튼 클릭시, 찜리스트에 추가되고, 로그아웃시 찜이 사라지게 하였습니다. 



📒 review.html

영상에 대한 리뷰를 등록하는 화면을 구현 하였습니다.

해당 리뷰를 등록후 수정도 가능하도록 설계 하였습니다.

script와 관련 내용은 html내부에 넣었습니다. 


🙋🏻‍♀️ 느낀 점 

프로젝트를 통해 객체지향 화면 구성의 중요성을 깨닫고 JSON 데이터 처리와 css. js. html을 각각 연동시키는 법을 배웠습니다. 사용자 인터페이스(UI) 구현을 경험하며 파일 입출력과 JSON 라이브러리에 더 많은 학습이 필요하다는 것을 알게 되었습니다. 백엔드 개발자를 희망하지만, 프론트에 대한 이해를 높일수 있는 시간이었습니다. 