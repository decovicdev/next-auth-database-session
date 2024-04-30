import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

export default function useZodForm<
  Schema extends z.Schema,
  Values extends z.infer<Schema>,
>(schema: Schema, defaultValues?: Values) {
  return useForm<Values>({
    resolver: zodResolver(schema),
    defaultValues,
  });
}
