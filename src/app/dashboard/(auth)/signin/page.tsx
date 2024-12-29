import type { Metadata } from 'next';

import FormSignIn from './form';
// import { getUser } from '@/lib/auth';
// import { redirect } from 'next/navigation';
import { FC } from 'react';

interface SignInProps {}

export const metadata: Metadata = {
  title: 'Dashboard | Sign In',
};

const SignInPage: FC<SignInProps> = ({}) => {
  return <FormSignIn />;
};

export default SignInPage;
