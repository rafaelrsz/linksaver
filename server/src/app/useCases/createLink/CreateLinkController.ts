import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateLinkUseCase } from "./CreateLinkUseCase";

class CreateLinkController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { title, url, site } = request.body;

    const createLinkUseCase = container.resolve(CreateLinkUseCase);

    const room = await createLinkUseCase.execute({ title, url, site });

    return response.status(201).json(room);
  }
}

export { CreateLinkController };
