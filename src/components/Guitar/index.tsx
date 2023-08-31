'use client'
import guitarImage from '@/assets/guitar.png'
import Image from 'next/image'
import { GuitarContainer } from './styles'

export function Guitar(){
    return(
        <GuitarContainer>
            <Image style={{ width: '100%', height: '100%' }} src={guitarImage} alt='ilustração de um violão' />
        </GuitarContainer>
    )
}