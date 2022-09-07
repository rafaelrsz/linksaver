import { mongoose } from "../../database";

interface ILink {
  title: string;
  url: string;
  site: string;
  updatedAt?: Date;
  id?: string;
}

const LinkSchema = new mongoose.Schema<ILink>(
  {
    title: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    site: {
      type: String,
      required: false,
    },
  },
  { timestamps: { updatedAt: "updated_at" } }
);

const Link = mongoose.model("Links", LinkSchema);

export { Link, ILink };
