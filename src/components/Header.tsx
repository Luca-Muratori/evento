import Link from "next/link";
import React from "react";
import Logo from "./Logo";

export default function Header() {
  return (
    <header>
        <Logo/>
      <Link href='/'>homepage</Link>
      <Link href='/events/all'>All events</Link>
    </header>
  );
}
