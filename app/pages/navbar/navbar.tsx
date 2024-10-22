'use client'

import { LogoutOutlined } from '@mui/icons-material'
import { Avatar, Box, Link, Stack, Typography } from '@mui/material'

import Image from 'next/image'
import { usePathname } from 'next/navigation'
import profilePic from './assets/profilePic.jpeg'

export function Navbar() {
  const pathname = usePathname()
  const currentPath = pathname

  return (
    <Box sx={{ width: '100%', justifyContent: 'center', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)' }}>
      <Stack direction="row" spacing={2} sx={{ justifyContent: 'space-between', alignItems: 'center', width: '100%', height: '96px', padding: '0 16px' }}>
        <Box display="flex" alignItems="center" sx={{ justifyContent: 'flex-start' }}>
          <Link href="/" underline="none">
            <Typography display="inline" sx={{ color: '#40bfb3', fontWeight: 'bolder' }} variant="h4" gutterBottom>
              DTX
            </Typography>
            <Typography display="inline" sx={{ color: '#c076cb', fontWeight: 'bolder' }} variant="h4" gutterBottom>
              +
            </Typography>
          </Link>
        </Box>
        <Box display="flex" alignItems="center" gap={2} sx={{ justifyContent: 'center', whiteSpace: 'nowrap' }}>
          <Link href="/" underline="none">
            <Typography sx={currentPath === '/' ? { fontWeight: 'bolder', color: '#00b9b5' } : { color: '#000' }}>Minhas assinaturas</Typography>
          </Link>
          <Typography sx={currentPath === '/pages/subscription' ? { fontWeight: 'bolder', color: '#00b9b5' } : {}}>Nova assinatura</Typography>
        </Box>
        <Box display="flex" alignItems="center" gap={2} sx={{ justifyContent: 'flex-end' }}>
          <Box display="flex" flexDirection="column" sx={{ whiteSpace: 'nowrap', textAlign: 'right' }}>
            <Typography sx={{ fontWeight: 'bolder' }} variant="h6">
              Joaquina Ramalho
            </Typography>
            <Typography variant="caption">Empresa do parceiro ltda</Typography>
          </Box>
          <Avatar sx={{ border: '2px solid #691f74', marginRight: '10px' }}>
            <Image src={profilePic} alt="Profile Picture" fill style={{ objectFit: 'cover' }} priority />
          </Avatar>
          <LogoutOutlined sx={{ color: '#691F7480', margin: '5px' }} />
        </Box>
      </Stack>
    </Box>
  )
}
