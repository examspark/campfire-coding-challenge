import { ItemEditor } from "@campfirelearning/c3-ui-editor";
import styled from "styled-components";

import { VStack } from "../../../components";
import CenteredLayout from "../../../components/page/CenteredLayout";
import { Footer } from "../../../components/page/Footer";
import { PageTitle } from "../../../components/page/PageTitle";

const StyledAuthoring = styled.div``;

export const ItemAuthoringRoute = () => {
  return (
    <CenteredLayout>
      <VStack gap="4rem">
        <PageTitle
          title="Item Authoring"
          subtitle="This example showcases authoring and previewing Multiple Choice items in Campfire."
        />
        <StyledAuthoring>
          <ItemEditor />
        </StyledAuthoring>
        <Footer />
      </VStack>
    </CenteredLayout>
  );
};
