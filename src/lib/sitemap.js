const sitemap = [
  {
    caption: "홈",
    to: "/",
  },
  {
    caption: "영화",
    subnavs: [
      {
        caption: "상영 중",
        to: "/movies/now_playing",
      },
      {
        caption: "인기",
        to: "/movies/popular",
      },
      {
        caption: "평점 우수",
        to: "/movies/top_rated",
      },
      {
        caption: "개봉 예정",
        to: "/movies/upcoming",
      },
    ],
  },
  {
    caption: "나의 영화",
    subnavs: [
      {
        caption: "좋아요",
        to: "/my_movies/like",
      },
      {
        caption: "와치리스트",
        to: "/my_movies/watchlist",
      },
    ],
  },
  {
    caption: "소개",
    to: "/about",
  },
];

export default sitemap;
