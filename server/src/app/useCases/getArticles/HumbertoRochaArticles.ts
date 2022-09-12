import axios from "axios";
import * as cheerio from "cheerio";
import { Request, Response } from "express";

interface IData {
  url: string;
  title: string;
}

class HumbertoRochaArticlesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const allData: IData[] = [];
    // eslint-disable-next-line no-plusplus
    await axios("https://humberto.io/blog/")
      .then((res) => {
        const $ = cheerio.load(res.data);

        // eslint-disable-next-line func-names
        $("article ").each(function () {
          const data: IData = {
            url: $(this).find("h2 a").attr("href").trim(),
            title: $(this).find("h2 a").text().trim(),
          };

          allData.push(data);
        });
      })
      .catch((err) => console.log(err));

    await axios("https://humberto.io/blog/page/2")
      .then((res) => {
        const $ = cheerio.load(res.data);

        // eslint-disable-next-line func-names
        $("article ").each(function () {
          const data: IData = {
            url: $(this).find("h2 a").attr("href").trim(),
            title: $(this).find("h2 a").text().trim(),
          };

          allData.push(data);
        });
      })
      .catch((err) => console.log(err));

    await axios("https://humberto.io/blog/page/3")
      .then((res) => {
        const $ = cheerio.load(res.data);

        // eslint-disable-next-line func-names
        $("article ").each(function () {
          const data: IData = {
            url: $(this).find("h2 a").attr("href").trim(),
            title: $(this).find("h2 a").text().trim(),
          };

          allData.push(data);
        });
      })
      .catch((err) => console.log(err));

    return response.json(allData);
  }
}

export { HumbertoRochaArticlesController };
