import { Heading, Page } from "@shopify/polaris";
import React, { useState } from "react";

import { Provider, ResourcePicker } from "@shopify/app-bridge-react";

const index = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [products, setProducts] = useState([]);
  function handlerProductSelection(payload) {
    setIsOpen(false);
    setProducts(payload.selection);
  }
  return (
    <Page
      title="Product Selector"
      primaryAction={{
        content: "Select product",
        onAction: () => setIsOpen(true),
      }}
    >
      {products.map((product) => (
        <div>{product.title}</div>
      ))}
      <Heading>Joshua's Component Crash</Heading>
      <ResourcePicker
        resourceType="Product"
        open={isOpen}
        onCancel={() => setIsOpen(false)}
        onSelection={handlerProductSelection}
      />
      <ProductList products={products} />
    </Page>
  );
};

export default index;
