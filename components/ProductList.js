import React from "react";

function ProductList(products) {
  return (
    <Card>
      <ResourceList
        showHeader
        resourceName={{ singular: "Product", plural: "Products" }}
        items={products}
      />
    </Card>
  );
}

export default ProductList;
