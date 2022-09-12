import { IProvider, Provider } from "../../../app/schemas/Provider";
import { IProvidersRepository } from "../IProvidersRepository";

class ProvidersRepository implements IProvidersRepository {
  async listAllProviders(): Promise<IProvider[]> {
    const providers = await Provider.find();

    return providers;
  }
}

export { ProvidersRepository };
