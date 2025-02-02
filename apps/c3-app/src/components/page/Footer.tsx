import styled from "styled-components";

import { VSpace } from "../../routes/DashboardRoute";

import CampfireLogo from "./CampfireLogo";

const StyledFooter = styled.div`
  border-top: solid 1px ${(p) => p.theme?.inputBorderColor ?? "#ddd"};
  padding: 2rem 0;
  font-size: 1.1rem;
  color: #aaa;

  a {
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
`;

const StyledPlatformBadge = styled.a`
  display: inline-block;
  border: solid 1px ${(p) => p.theme?.inputBorderColor ?? "#ddd"};
  border-radius: 0.5rem;
  padding: 0.5rem;
  color: #777;
  font-size: 0.9em;
  transition:
    border-color 0.2s ease-in-out,
    opacity 0.2s ease-in-out;
  opacity: 0.6;

  &:hover {
    border-color: #006699;
    opacity: 1;
  }
`;
const StyledPlatformBadgeFlex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Footer = () => {
  return (
    <StyledFooter>
      <VSpace style={{ alignItems: "center" }}>
        <div>
          &copy; 2025 ExamSpark Inc. dba Campfire Learning. All rights reserved.
        </div>
        <div>
          <StyledPlatformBadge
            href="https://campfirelearning.com"
            target="_blank"
          >
            <StyledPlatformBadgeFlex>
              <div>
                <CampfireLogo width="112" alt="Campfire Learning Logo" />
              </div>
              {/* <div>Powered by Campfire</div> */}
            </StyledPlatformBadgeFlex>
          </StyledPlatformBadge>
        </div>
      </VSpace>
    </StyledFooter>
  );
};
