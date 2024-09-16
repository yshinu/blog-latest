import { z } from "zod";
import { signInSchema } from "./zod";

export type signInObjectType  = z.infer<typeof signInSchema>;