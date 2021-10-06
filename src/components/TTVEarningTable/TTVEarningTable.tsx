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
} from '@mui/material'

type TTVEarningTablePropType = {
  rows: any
}

const TTVEarningTable = ({rows}: TTVEarningTablePropType) => {
  const [rowsPerPage, setRowsPerPage] = useState<number>(200)
  const [page, setPage] = useState<number>(0)

  return (
    <>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Ranking</TableCell>
              <TableCell align='center'>Channel name</TableCell>
              <TableCell align='right'>Total earning</TableCell>
              <TableCell align='right'>Earning from Aug 2019</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row: any) => (
                <TableRow
                  key={row.ranking}
                  sx={{'&:last-child td, &:last-child th': {border: 0}}}>
                  <TableCell component='th' scope='row'>
                    {row.ranking}
                  </TableCell>
                  <TableCell align='center'>{row.channelName}</TableCell>
                  <TableCell align='right'>{`$${row.totalEarning}`}</TableCell>
                  <TableCell align='right'>{`$${row.partialEarning}`}</TableCell>
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
