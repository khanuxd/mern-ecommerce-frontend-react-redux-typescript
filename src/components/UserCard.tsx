import React from 'react'

type UserCardProps = {
  name: string
  email: string
}

const UserCard = ({ name, email }: UserCardProps) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: '10px 0',
      }}
    >
      <div>{name}</div>
      <div>{email}</div>
    </div>
  )
}

export default UserCard
