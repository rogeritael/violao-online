'use client'
import { Guitar } from '@/components/Guitar'
import { PageContainer } from './pageStyles'
import { Button } from '@/components/Button'
import { HeartIcon } from '@/assets/icons/heart'
import { Menu } from '@/components/Menu'
import { Actions } from '@/components/Actions'
import { Title } from '@/components/Title'

export default function Home() {
  return (
    <PageContainer>
        <span className="line" />

        <Title value="Violão Online" />
        <Menu />
        <Guitar />
        <Actions />
    </PageContainer>
  )
}
