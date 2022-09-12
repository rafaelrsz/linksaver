import "reflect-metadata";
import { inject, injectable } from "tsyringe";

import { ProvidersRepository } from "../../../database/repositories/implementations/ProvidersRepository";
import { IProvider } from "../../schemas/Provider";

@injectable()
class ListProvidersUseCase {
  constructor(
    @inject("ProvidersRepository")
    private providersRepository: ProvidersRepository
  ) {}

  async execute(): Promise<IProvider[]> {
    const providers = await this.providersRepository.listAllProviders();

    return providers;
  }
}

export { ListProvidersUseCase };
