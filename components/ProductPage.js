/* eslint-disable react/prop-types */
import { Page } from "@shopify/polaris";
import ProductList from "../components/ProductList";
import React from "react";

function ProductPage({ setIsOpen, products }) {
  return (
    <Page
      title="Product Selector"
      primaryAction={{
        content: "Select product",
        onAction: () => setIsOpen(true),
      }}
    >
      <ProductList products={products} />
    </Page>
  );
}

export default ProductPage;
