import { ReactElement } from "react";
import { PageContentSection, StyledPageContent } from "./page-content.style";

interface PageContentProps {
  children: ReactElement;
}

export default function PageContent({children}: PageContentProps) {
  return (
    <StyledPageContent>
      <PageContentSection>
        {children}
      </PageContentSection>
    </StyledPageContent>
  );
}
