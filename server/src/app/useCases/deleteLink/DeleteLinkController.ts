import { Request, Response } from "express";
import { container } from "tsyringe";

import { DeleteLinkUseCase } from "./DeleteLinkUseCase";

class DeleteLinkController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteLinkUseCase = container.resolve(DeleteLinkUseCase);

    await deleteLinkUseCase.execute({ id });

    return response.status(200).send();
  }
}

export { DeleteLinkController };
