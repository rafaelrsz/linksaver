import { mongoose } from "../../database";

interface IProvider {
  url: string;
  title: string;
}

const ProviderSchema = new mongoose.Schema<IProvider>({
  title: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
});

const Provider = mongoose.model("Providers", ProviderSchema);

export { IProvider, Provider };
