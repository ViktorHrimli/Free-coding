import i18next from "https://deno.land/x/i18next/index.js";
import data from "./news.json" assert { type: "json" };

i18next.init(
  {
    lng: "en", // if you're using a language detector, do not define the lng option
    debug: true,
    resources: {
      en: {
        translation: {
          key: "привет",
        },
      },
    },
  },
  function (err, t) {
    data.map(async ({ title, description }) => {
      const translateTitle = await i18next.t("key", title);
      console.log(translateTitle);
      return {
        title: translateTitle,
      };
    });
  }
);
