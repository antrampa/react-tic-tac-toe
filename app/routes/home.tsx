import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
//import { TicTacToe } from "../tictactoe/tictactoe";
import { TicTacToe } from "../tictactoe/tictactoe";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export function Home() {
  return <Welcome />;
}

export default function TicTacToePage() {
  return <TicTacToe />; 
}
