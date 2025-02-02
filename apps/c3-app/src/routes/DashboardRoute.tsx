import styled from "styled-components";

import { VStack } from "../components";
import { LinkCard } from "../components/LinkCard";
import CenteredLayout from "../components/page/CenteredLayout";
import { Footer } from "../components/page/Footer";
import { PageTitle } from "../components/page/PageTitle";

export const HSpace = styled.div`
  display: flex;
  gap: 1rem;
`;

export const VSpace = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const DashboardRoute = () => {
  return (
    <CenteredLayout>
      <VStack gap="4rem">
        <PageTitle
          title="Sample Projects"
          subtitle="Begin your application building journey with Campfire by building your first sample projects here. The link to your first project is ready below."
        />
        <VStack gap="1.5rem">
          <LinkCard
            title="Item Authoring"
            to="/projects/item-authoring"
            description="A whimsical experience for authoring and previewing assessment items, and maybe other things?"
            icon={
              <div>
                <svg x="0px" y="0px" viewBox="0 0 512 512" width="24">
                  <g>
                    <g>
                      <path d="m455.1,137.9l-32.4,32.4-81-81.1 32.4-32.4c6.6-6.6 18.1-6.6 24.7,0l56.3,56.4c6.8,6.8 6.8,17.9 0,24.7zm-270.7,271l-81-81.1 209.4-209.7 81,81.1-209.4,209.7zm-99.7-42l60.6,60.7-84.4,23.8 23.8-84.5zm399.3-282.6l-56.3-56.4c-11-11-50.7-31.8-82.4,0l-285.3,285.5c-2.5,2.5-4.3,5.5-5.2,8.9l-43,153.1c-2,7.1 0.1,14.7 5.2,20 5.2,5.3 15.6,6.2 20,5.2l153-43.1c3.4-0.9 6.4-2.7 8.9-5.2l285.1-285.5c22.7-22.7 22.7-59.7 0-82.5z"></path>
                    </g>
                  </g>
                </svg>
              </div>
            }
          />
        </VStack>
        <Footer />
      </VStack>
    </CenteredLayout>
  );
};

export default DashboardRoute;
