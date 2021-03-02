import React from 'react'
import { TwitchEmbed } from 'react-twitch-embed'

const TwitchStream = ({ setShowMessage, setWasPaused }) => {
  return (
    <TwitchEmbed
      channel="icarusquack"
      id="icarusquack"
      width="100%"
      theme="dark"
      muted
      onVideoPause={() => {
        setShowMessage(true)
        setWasPaused(true)
      }}
      onVideoPlay={() => {
        setShowMessage(false)
      }}
    />
  )
}

export default React.memo(TwitchStream)
