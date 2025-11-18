### 프롬프트
[내용]의 카테고리를 서양음식분류로 바꾸고 화면 구성을 핑크색과 하얀색을 메인으로 알록달록한 분위기로 바꿔죠
[내용]
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Food Mark - 나만의 웨스턴 테이블</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
    <style>
        :root {
            --main-pink: #FF8DA1;       /* 메인 핑크 */
            --sub-pink: #FFE6EA;        /* 연한 배경 핑크 */
            --accent-mint: #81ECEC;     /* 알록달록함을 더할 민트 포인트 */
            --text-dark: #555555;
        }

        body {
            background-color: #FFFBFB; /* 아주 연한 핑크빛 흰색 배경 */
            font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, system-ui, Roboto, sans-serif;
            color: var(--text-dark);
        }

        /* 네비게이션 바 */
        .navbar {
            background-color: #ffffff;
            box-shadow: 0 4px 15px rgba(255, 141, 161, 0.15);
        }
        .navbar-brand {
            color: var(--main-pink) !important;
            font-weight: bold;
            font-size: 1.5rem;
        }
        .nav-link.active {
            color: var(--main-pink) !important;
            font-weight: 600;
        }

        /* 히어로 섹션 (점보트론 대체) */
        .hero-section {
            background: linear-gradient(120deg, var(--main-pink), #FFB7B2, var(--accent-mint));
            color: white;
            border-radius: 20px;
            border: none;
            box-shadow: 0 10px 20px rgba(255, 141, 161, 0.3);
        }

        /* 카드 디자인 */
        .card {
            border: none;
            border-radius: 15px;
            overflow: hidden;
            background-color: white;
            box-shadow: 0 5px 15px rgba(0,0,0,0.05);
            transition: transform 0.3s ease;
        }
        .card:hover {
            transform: translateY(-10px);
            box-shadow: 0 15px 30px rgba(255, 141, 161, 0.2);
        }
        .card-title {
            color: var(--main-pink);
            font-weight: bold;
        }

        /* 버튼 스타일 */
        .btn-primary {
            background-color: var(--main-pink);
            border: none;
            border-radius: 50px;
            padding: 10px 25px;
            font-weight: 600;
            box-shadow: 0 4px 10px rgba(255, 141, 161, 0.4);
            transition: all 0.3s;
        }
        .btn-primary:hover {
            background-color: #FF5C7C;
            transform: scale(1.05);
        }
        .btn-outline-success {
            color: var(--main-pink);
            border-color: var(--main-pink);
        }
        .btn-outline-success:hover {
            background-color: var(--main-pink);
            color: white;
            border-color: var(--main-pink);
        }

        /* 푸터 */
        footer {
            background-color: var(--sub-pink);
            color: var(--text-dark);
        }
    </style>
</head>
<body>
    <nav class="navbar navbar-expand-lg navbar-light sticky-top">
        <div class="container-fluid">
            <a class="navbar-brand" href="index.html">🌸 Food Mark</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="index.html">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="recipes.html">Western Menu</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="ingredients.html">Market</a>
                    </li>
                </ul>
                <form class="d-flex">
                    <input class="form-control me-2" type="search" placeholder="파스타, 스테이크..." aria-label="Search" style="border-radius: 20px;">
                    <button class="btn btn-outline-success" type="submit" style="border-radius: 20px;">Search</button>
                </form>
            </div>
        </div>
    </nav>

    <main class="container my-4">
        <section class="hero-section text-center p-5 mb-5">
            <h1 class="display-4 fw-bold">나만을 위한 로맨틱 식탁</h1>
            <p class="lead">혼자서도 근사하게! 집에서 즐기는 호텔급 서양식 레시피를 만나보세요.</p>
            <a href="recipes.html" class="btn btn-light text-danger fw-bold btn-lg mt-3">💖 추천 메뉴 보러가기</a>
        </section>

        <section class="mb-5">
            <h2 class="text-center mb-4 fw-bold" style="color: #555;">Weekly Best Pick</h2>
            <div class="row">
                <div class="col-md-4 mb-4">
                    <div class="card h-100">
                        <img src="https://via.placeholder.com/400x250/FFC0CB/FFFFFF?text=Shrimp+Rose+Pasta" class="card-img-top" alt="로제 파스타">
                        <div class="card-body">
                            <h5 class="card-title">쉬림프 로제 파스타</h5>
                            <p class="card-text">부드러운 크림과 상큼한 토마토의 만남! 통통한 새우까지 더해진 완벽한 한 끼.</p>
                            <div class="text-center mt-3">
                                <a href="recipe-detail.html" class="btn btn-primary">레시피 보기</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 mb-4">
                    <div class="card h-100">
                        <img src="https://via.placeholder.com/400x250/FFD1DC/FFFFFF?text=Cube+Steak" class="card-img-top" alt="찹스테이크">
                        <div class="card-body">
                            <h5 class="card-title">갈릭 큐브 스테이크</h5>
                            <p class="card-text">와인 한 잔과 딱 어울리는 메뉴. 야채와 함께 볶아내 영양까지 챙기세요.</p>
                            <div class="text-center mt-3">
                                <a href="recipe-detail.html" class="btn btn-primary">레시피 보기</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 mb-4">
                    <div class="card h-100">
                        <img src="https://via.placeholder.com/400x250/FFB7B2/FFFFFF?text=Berry+Pancakes" class="card-img-top" alt="팬케이크">
                        <div class="card-body">
                            <h5 class="card-title">스윗 베리 팬케이크</h5>
                            <p class="card-text">주말 아침 브런치로 딱! 폭신한 팬케이크 위에 달콤한 시럽과 과일을 듬뿍.</p>
                            <div class="text-center mt-3">
                                <a href="recipe-detail.html" class="btn btn-primary">레시피 보기</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>

    <footer class="text-center text-lg-start mt-auto">
        <div class="container p-4">
            <div class="row justify-content-center">
                <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
                    <h5 class="text-uppercase fw-bold" style="color: var(--main-pink);">Food Mark</h5>
                    <p>
                        당신의 식탁을 화사하게 밝혀줄<br>
                        쉽고 예쁜 서양식 레시피 큐레이션 서비스
                    </p>
                </div>
            </div>
        </div>
        <div class="text-center p-3" style="background-color: rgba(255, 255, 255, 0.5);">
            © 2025 Food Mark. Sweet & Romantic.
        </div>
    </footer>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>