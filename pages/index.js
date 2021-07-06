import React, { useState, useEffect } from "react";
import { ResourcePicker } from "@shopify/app-bridge-react";

function index() {
  const [isOpen, setIsOpen] = useState(false);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const ids = product.map((product) => {
      return {
        id: product.id,
      };
    });
    setProductsId(ids);
  }, [products]);

  function handleProductSelection(payload) {
    setIsOpen(false);
    setProducts(payload.selection);
  }
  return (
    <>
      <ResourcePicker
        resourceType="Product"
        open={isOpen}
        onCancel={() => setIsOpen(false)}
        onSelection={handleProductSelection}
        initialSelectionIds={productsId}
      />
      {products.length > 0 ? (
        <ProductPage setIsOpen={setIsOpen} products={products} />
      ) : (
        <ProductEmptyState setIsOpen={setIsOpen} />
      )}
      :
    </>
  );
}

export default index;
