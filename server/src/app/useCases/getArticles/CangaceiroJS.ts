import axios from "axios";
import * as cheerio from "cheerio";
import { Request, Response } from "express";
import { inject, injectable } from "tsyringe";

import { IArticlesRepository } from "../../../database/repositories/IArticlesRepository";

interface IData {
  url: string;
  title: string;
}

@injectable()
class CangaceiroJSController {
  constructor(
    @inject("ArticlesRepository")
    private articlesRepository: IArticlesRepository
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const allData: IData[] = [];
    // eslint-disable-next-line no-plusplus
    await axios("http://cangaceirojavascript.com.br/")
      .then((res) => {
        const $ = cheerio.load(res.data);

        // eslint-disable-next-line func-names
        $(".post-list li").each(function () {
          const data: IData = {
            url: `http://cangaceirojavascript.com.br/${$(this)
              .find("h2 a")
              .attr("href")}`,
            title: $(this).find("h2 a").text().trim(),
          };

          allData.push(data);
        });
      })
      .catch((err) => console.log(err));

    return response.json(allData);
  }
}

export { CangaceiroJSController };
