import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdateLinkUseCase } from "./UpdateLinkUseCase";

class UpdateLinkController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { title, url, site } = request.query;

    const updateLinkUseCase = container.resolve(UpdateLinkUseCase);

    await updateLinkUseCase.execute({
      id,
      title: title as string,
      url: url as string,
      site: site as string,
    });

    return response.status(204).send();
  }
}

export { UpdateLinkController };
