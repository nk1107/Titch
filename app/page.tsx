import { Button } from '@/components/ui/button'
import { UserButton } from "@clerk/nextjs";
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      hello there
      <Button variant="destructive" size="lg">Button</Button>
      <UserButton
      afterSignOutUrl='/'
      />
    </div>
  )
}
