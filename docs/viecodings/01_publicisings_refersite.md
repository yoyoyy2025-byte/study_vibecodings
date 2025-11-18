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
            font-size: