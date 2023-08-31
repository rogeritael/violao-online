'use client'
import { Guitar } from '@/components/Guitar'
import { PageContainer } from './pageStyles'
import { Button } from '@/components/Button'
import { HeartIcon } from '@/assets/icons/heart'
import { Menu } from '@/components/Menu'
import { Actions } from '@/components/Actions'

export default function Home() {
  return (
    <PageContainer>
        <span className="line" />

        <Menu />
        <Guitar />
        <Actions />
    </PageContainer>
  )
}
