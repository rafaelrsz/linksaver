import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListProvidersUseCase } from "./ListProvidersUseCase";

class ListProvidersController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listProvidersUseCase = container.resolve(ListProvidersUseCase);

    const providers = await listProvidersUseCase.execute();

    return response.status(200).json(providers);
  }
}

export { ListProvidersController };
