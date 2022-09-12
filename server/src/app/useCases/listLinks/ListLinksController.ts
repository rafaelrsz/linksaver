import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListLinksUseCase } from "./ListLinksUseCase";

class ListLinksController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listLinksUseCase = container.resolve(ListLinksUseCase);

    const links = await listLinksUseCase.execute();

    return response.status(200).json(links);
  }
}

export { ListLinksController };
