'use server';

import { z } from 'zod';
import { signInSchema } from '@/lib/zod';
import { signIn as authSignIn, signOut } from '@/auth';
import { signInObjectType } from '@/lib/types';
import { AuthError } from 'next-auth';
import { LoginFail, NofoundUser } from '@/lib/customError';

export async function signInAction(params: signInObjectType) {
  try {
    await authSignIn('credentials', { ...params, redirect: false });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'NofoundUser' as AuthError['type']:
          return {
            success: false,
            message: NofoundUser.message,
          };
        case 'LoginFail' as AuthError['type']:
          return {
            success: false,
            message: LoginFail.message,
          };
        default:
          return {
            message: '服务器内部错误',
          };
      }
    }
    throw error;
  }
}

export async function signOutAction() {
  await signOut();
}
