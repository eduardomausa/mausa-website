'use client'

import Link from "next/link";
import { PrismicProvider } from "@prismicio/react";

export default function PrismicProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <PrismicProvider internalLinkComponent={(props) => <Link {...props} />}>
        {children}
    </PrismicProvider>
  );
}