const sitemap = [
  {
    caption: "홈",
    to: "/",
  },
  {
    caption: "영화",
    submenus: [
      {
        caption: "상영 중",
        to: "/now_playing",
      },
      {
        caption: "인기",
        to: "/popular",
      },
      {
        caption: "평점 우수",
        to: "/top_rated",
      },
      {
        caption: "개봉 예정",
        to: "/upcoming",
      },
    ],
  },
  {
    caption: "나의 영화",
    submenus: [
      {
        caption: "좋아요",
        to: "/like",
      },
      {
        caption: "찜",
        to: "/wishlist",
      },
    ],
  },
  {
    caption: "소개",
    to: "/about",
  },
];

export default sitemap;
