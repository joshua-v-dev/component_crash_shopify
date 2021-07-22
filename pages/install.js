import { Layout, Page, TextStyle, SettingToggle } from "@shopify/polaris";
import React from "react";

function install() {
  function handleAction() {}
  return (
    <Page>
      <Layout.AnnotatedSection
        title="Install banner"
        description="Toggle banner installation on your shop"
      >
        <SettingToggle
          action={{
            content: "Install",
            onAction: handleAction,
          }}
          enabled
        >
          The banner script is{" "}
          <TextStyle variation="strong">uninstalled</TextStyle>
        </SettingToggle>
      </Layout.AnnotatedSection>
    </Page>
  );
}

export default install;
