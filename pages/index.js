import { Heading, Page } from "@shopify/polaris";

const Index = () => (
  <Page
    title="Product Selector"
    primaryAction={{
      content: "Select product",
      onAction: () => console.log("I have been clicked"),
    }}
  >
    <Heading>Joshua's First Shopify app with Node and React 🎉</Heading>
  </Page>
);

export default Index;
