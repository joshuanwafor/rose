import { Collection } from "../../src/sdk/storefront";

export const CollectionCard = ({ collection }: { collection: Collection }) => {
  return <p className="mt-2 text-center border p-2">{collection.name}</p>;
};
