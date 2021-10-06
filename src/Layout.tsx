import React from 'react'
import {Grid, Paper} from '@mui/material'
import styled from 'styled-components'
import {TTVEarningTable} from './components'
import earnings from './resources/earnigs.json'
import './Layout.css'

const StyledPaper = styled(Paper)`
  padding: 36px 0px 36px 0px;
  text-align: center;
`

const StyledGrid = styled(Grid)`
  background-color: #212121;
`

const Layout = () => (
  <StyledGrid container spacing={2}>
    <StyledGrid item xs={4} />
    <StyledGrid item xs={4}>
      <StyledPaper>Twitch earning leaderboard</StyledPaper>
      <TTVEarningTable rows={earnings} />
    </StyledGrid>
    <StyledGrid item xs={4} />
  </StyledGrid>
)

Layout.displayName = 'Layout'
export default Layout
