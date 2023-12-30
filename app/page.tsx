import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div>
        <Button asChild>
          <Link href="https://twitter.com/gia_sorairo">
            eironeia.net
          </Link>
        </Button>
      </div>
    </main>
  )
}
