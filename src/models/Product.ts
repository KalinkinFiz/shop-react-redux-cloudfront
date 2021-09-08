import * as Yup from "yup";

export type Product = {
  count: number;
  description: string;
  id: string;
  price: number;
  title: string;
};

export const ProductSchema = Yup.object().shape({
  title: Yup.string().required(),
  description: Yup.string(),
  price: Yup.number().required(),
  count: Yup.number(),
});
