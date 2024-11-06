'use client';
import React, { FC } from 'react';
import { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';

type SessionWrapperProps = {
  children: React.ReactNode;
  session: Session | null;
};

const SessionWrapper: FC<SessionWrapperProps> = ({ session, children }) => {
  return <SessionProvider session={session}>{children}</SessionProvider>;
};

export default SessionWrapper;
