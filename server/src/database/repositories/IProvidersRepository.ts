import { IProvider } from "../../app/schemas/Provider";

interface IProvidersRepository {
  listAllProviders(): Promise<IProvider[]>;
}

export { IProvidersRepository };
