import { Layout, Page, TextStyle } from "@shopify/polaris";
import React from "react";

function install() {
  return (
    <Page>
      <Layout.AnnotatedSection
        title="Install banner"
        description="Toggle banner installation on your shop"
      >
        <SectionToggle
          action={{
            content: "Install",
            onAction: handleAction,
          }}
          enabled={true}
        >
          The banner script is{" "}
          <TextStyle variation="strong">uninstalled</TextStyle>
        </SectionToggle>
      </Layout.AnnotatedSection>
    </Page>
  );
}

export default install;
