import axios from "axios";
import * as cheerio from "cheerio";
import { Request, Response } from "express";

interface IData {
  url: string;
  title: string;
}

class DevGoArticlesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const allData: IData[] = [];
    await axios("https://devgo.com.br")
      .then((res) => {
        const $ = cheerio.load(res.data);

        // eslint-disable-next-line func-names
        $(".blog-article-card").each(function () {
          const data: IData = {
            url: `https://devgo.com.br${$(this).find("a").attr("href").trim()}`,
            title: $(this).find("h1 a").text().trim(),
          };

          allData.push(data);
        });
      })
      .catch((err) => console.log(err));

    return response.json(allData);
  }
}

export { DevGoArticlesController };
