export const SITE = {
  website: "https://ymblog.vercel.app", // replace this with your deployed domain
  author: "Yiming",
  profile: "",
  desc: "这里写一段给搜索引擎看的网站简介",
  title: "Yiming's Blog",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 6,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: false,
    text: "Edit page",
    url: "",
  },
  dynamicOgImage: false,
  dir: "ltr", // "rtl" | "auto"
  lang: "en", // html lang code. Set this empty and default will be "en"
  timezone: "PRC", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;
