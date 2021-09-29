import { Product } from "../Types/product.interface";

const filterData = (
  data: Array<Product>,
  categories: Array<string | undefined>
): Array<Product> => {
  const productData: Product[] | any = categories.map((item) =>
    item
      ? data.filter((obj: Product) =>
          obj.category.toUpperCase().includes(item.toUpperCase())
        )
      : data
  );

  const arrayUnique = (array: Array<Product>) => {
    const a = array.concat();
    for (let i = 0; i < a.length; ++i) {
      for (let j = i + 1; j < a.length; ++j) {
        if (a[i].productId.value === a[j].productId.value) a.splice(j--, 1);
      }
    }
    return a;
  };

  const merge = (first: any, second: any) => {
    return arrayUnique(first.concat(second));
  };

  const filteredData =
    productData.length > 1 ? productData.reduce(merge) : productData[0];
  return filteredData;
};

export default filterData;
