import React from 'react'
import Paper from '@mui/material/Paper'
import TextField from '@mui/material/TextField'

export type SearchKeywordProps = {
  keyword: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Search = ({ keyword, onChange }: SearchKeywordProps) => {
  return (
    <Paper
      sx={{
        p: '2px 4px',
        display: 'flex',
        alignItems: 'center',
      }}
      style={{
        margin: '16px',
      }}
    >
      <TextField
        style={{ minWidth: '100%' }}
        type="search"
        fullWidth
        className="search"
        placeholder="Search here"
        aria-label="Search"
        value={keyword}
        onChange={onChange}
      />
    </Paper>
  )
}

export default Search
