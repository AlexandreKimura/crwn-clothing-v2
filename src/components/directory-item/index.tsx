import { useNavigate } from 'react-router-dom'
import { DirectoryItemContainer, Body, BackgroundImage } from './styles'

import { DirectoryProps } from '../directory'
import { FC } from 'react'

type DirectoryItemProps = {
  category: DirectoryProps
}

const DirectoryItem: FC<DirectoryItemProps> = ({ category }) => {

  const { imageUrl, title, route } = category
  const navigate = useNavigate()

  const onNavigateHandler = () => navigate(route)

  return (
    <DirectoryItemContainer onClick={onNavigateHandler}>
      <BackgroundImage
        imageUrl={imageUrl}
      />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  )
}

export default DirectoryItem