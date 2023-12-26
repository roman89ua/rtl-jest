import { GreetingProps } from "@/app/types/greetingCP.type";
import React from "react";

function GreetingCP({ name = "" }: GreetingProps) {
  return <h1>Hello{name ? ` ${name}` : " Guest"}.</h1>;
}

export default GreetingCP;
