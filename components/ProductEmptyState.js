/* eslint-disable shopify/jsx-no-hardcoded-content */
/* eslint-disable react/prop-types */
import React from "react";
import { Card, EmptyState } from "@shopify/polaris";

function ProductEmptyState({ setIsOpen }) {
  return (
    <Card sectioned>
      <EmptyState
        heading="Manage the products you want to display"
        action={{
          content: "Select products",
          onAction: () => setIsOpen(true),
        }}
        image="https://cdn.shopify.com/s/files/1/0262/4071/2726/files/emptystate-files.png"
      >
        <p>Select the products you want to use on your banner</p>
      </EmptyState>
    </Card>
  );
}

export default ProductEmptyState;
