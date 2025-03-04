/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Amplify } from "aws-amplify";
import awsExports from "../aws-exports"; // Ensure this file exists after Amplify initialization
import { PropsWithChildren } from "react";

Amplify.configure({ ...awsExports, ssr: true } as any);

export default function AmplifyProvider({ children }: PropsWithChildren) {
  return <>{children}</>;
}
