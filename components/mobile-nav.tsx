import { siteConfig } from "@/config/site";
import {NavItem} from "@/types";
import Link from 'next/link'

interface MobileNavProps {
  items: NavItem[];
}

export default function MobileNav ( {items}: MobileNavProps ) {
  return(
    <div>
      <div>
        <Link href={"/"} className="font-bold">
          {siteConfig.name}
        </Link>
      </div>
    </div>
  )
}
