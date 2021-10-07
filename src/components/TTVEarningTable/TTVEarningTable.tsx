import React, {useState} from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  Paper,
  Grid,
  TextField,
} from '@mui/material'
import styled from 'styled-components'
import {numberFormatter} from '../../utils'

type TTVEarningTablePropType = {
  rows: any
}

const StyledGrid = styled(Grid)`
  margin-bottom: 16px;
`

const TTVEarningTable = ({rows}: TTVEarningTablePropType) => {
  const [rowsPerPage, setRowsPerPage] = useState<number>(200)
  const [page, setPage] = useState<number>(0)
  const [filter, setFilter] = useState<string>('')
  const handleFilter = (name: string) => {
    if (name.toLowerCase().includes(filter.toLowerCase())) {
      return true
    }
    return false
  }

  return (
    <>
      <StyledGrid>
        <TextField
          label='Search for channel name'
          variant='standard'
          onChange={(e) => setFilter(e.target.value)}
          fullWidth
        />
      </StyledGrid>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Ranking</TableCell>
              <TableCell align='center'>Channel name</TableCell>
              <TableCell align='center'>Total earning</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .filter((item: any) => handleFilter(item.channelName))
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row: any) => (
                <TableRow
                  key={row.ranking}
                  sx={{'&:last-child td, &:last-child th': {border: 0}}}>
                  <TableCell component='th' scope='row'>
                    {row.ranking}
                  </TableCell>
                  <TableCell align='center'>{row.channelName}</TableCell>
                  <TableCell align='center'>
                    {`$${numberFormatter(row.partialEarning)}`}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25, 50, 100, 200]}
        component='div'
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={(e, newPage) => setPage(newPage)}
        onRowsPerPageChange={(e) => {
          setRowsPerPage(parseInt(e.target.value, 10))
          setPage(0)
        }}
      />
    </>
  )
}

TTVEarningTable.displayName = 'TTVEarningTable'
export default TTVEarningTable
