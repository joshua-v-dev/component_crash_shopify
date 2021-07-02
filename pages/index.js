import { Heading, Page } from "@shopify/polaris";
import React, { useState } from "react";

import ProductList from "../components/ProductList";
import { Provider, ResourcePicker } from "@shopify/app-bridge-react";

const index = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [products, setProducts] = useState([]);
  function handlerProductSelection(payload) {
    setIsOpen(false);
    setProducts(payload.selection);
  }
  return (
    <>
      <ResourcePicker
        resourceType="Product"
        open={isOpen}
        onCancel={() => setIsOpen(false)}
        onSelection={handlerProductSelection}
      />
    {products.length > 0 ? (
    <Page
      title="Product Selector"
      primaryAction={{
        content: "Select product",
        onAction: () => setIsOpen(true),
      }}
    >
    </Page> ) : (
    <EmptyState
    heading="Manage the products you want to display"
    action={{
      content="Select products",
      onAction: () => setIsOpen(true)
    }} >
      <p>Select the products you want to use on your banner</p>
    </EmptyState>
      
)},
   </> 
   )
};
{/* <ProductList products={products} /> */}
export default index;
