import { Stack } from '@mui/material'

import { categories } from '../utils/constants'

const Sidebar = () => {
  const selectedCategory = 'New'

  return (
    <Stack
      direction='row'
      sx={{
        overflowY: 'auto',
        height: { xs: 'auto', md: '95%' },
        flexDirection: { md: 'column' },
      }}
    >
      {categories.map(({ name, icon }) => (
        <button
          key={name}
          className='category-btn'
          style={{
            background: name === selectedCategory && '#fc1503',
            color: 'white',
          }}
        >
          <span
            style={{
              color: name === selectedCategory ? 'white' : 'red',
              marginRight: '15px',
            }}
          >
            {icon}
          </span>
          <span style={{ opacity: name === selectedCategory ? '1' : '0.8' }}>
            {name}
          </span>
        </button>
      ))}
    </Stack>
  )
}

export default Sidebar
