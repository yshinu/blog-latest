import {z }from 'zod'

export const signInSchema = z.object({
    // username:z.string({required_error:"用户名必填"}),
    email: z.string({ required_error: "邮箱为必填项" })
      .min(1, "请输入正确的邮箱")
      .email("这不是一个邮箱格式"),
    password: z.string({ required_error: "密码为必填项" })
      .min(1, "密码为必填项")
      .max(32, "密码太长了"),
  })