'use client';
import { signInAction } from '@/action/authAction';
import { signInObjectType } from '@/lib/types';
import { signInSchema } from '@/lib/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { Slide, ToastContainer, toast } from 'react-toastify';
export function SignIn() {
  const {
    register,
    handleSubmit,
    watch,

    formState: { errors, isSubmitting },
  } = useForm<signInObjectType>({
    resolver: zodResolver(signInSchema),
  });
  const onSubmit: SubmitHandler<signInObjectType> = async (data) => {
    const res = await signInAction(data);
    toast.warn(res?.message, {
      position: 'top-center',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
      transition: Slide,
    });
    if (!res) {
      window.location.href = '/';
    }
  };
  return (
    <div className="mt-[200px] relative mx-auto w-full max-w-md bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:rounded-xl sm:px-10">
      <div className="w-full">
        <div className="text-center">
          <h1 className="text-3xl font-semibold text-gray-900">登录</h1>
          <p className="mt-2 text-gray-500">
            在下方输入信息登陆博客后台，暂不开放注册。
          </p>
        </div>
        <div className="mt-5">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="relative mt-6">
              <input
                {...register('email')}
                type="email"
                name="email"
                id="email"
                placeholder="邮箱地址"
                className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                autoComplete="NA"
              />
              <label
                htmlFor="email"
                className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
              >
                邮箱地址
              </label>
            </div>
            {errors.email && (
              <p className="text-red-400 mt-1">{errors.email.message}</p>
            )}
            <div className="relative mt-6">
              <input
                {...register('password')}
                type="password"
                name="password"
                id="password"
                placeholder="请输入密码"
                className="peer peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
              />
              <label
                htmlFor="password"
                className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
              >
                密码
              </label>
            </div>
            {errors.password && (
              <p className="text-red-400 mt-1">{errors.password.message}</p>
            )}
            <div className="my-6">
              <button
                disabled={isSubmitting}
                type="submit"
                className="w-full rounded-md bg-black px-3 py-4 text-white focus:bg-gray-600 focus:outline-none"
              >
                {isSubmitting ? '登陆中...' : '登录'}
              </button>
            </div>
            {/* <p className="text-center text-sm text-gray-500">
              Don&#x27;t have an account yet?
              <a
                href="#!"
                className="font-semibold text-gray-600 hover:underline focus:text-gray-800 focus:outline-none"
              >
                Sign up
              </a>
              .
            </p> */}
          </form>
        </div>
      </div>
      <ToastContainer
       
      />
    </div>
  );
}
