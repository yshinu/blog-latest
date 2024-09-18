import { AuthError } from "next-auth";

export class NofoundUser extends AuthError {
  static type = "NofoundUser";
  static message = "用户不存在！";
}

export class LoginFail extends AuthError {
  static type = "LoginFail";
  static message = "登陆失败！";
}