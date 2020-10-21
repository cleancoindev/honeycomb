import React, { useEffect, useState, useMemo } from 'react'

interface CountdownProps {
  deadline: number
}

const MINUTE = 60
const HOUR = MINUTE * 60
const DAY = HOUR * 24

const Countdown: React.FC<CountdownProps> = ({ deadline }) => {
  const [seconds, setSeconds] = useState(
    Math.max(deadline - Date.now() / 1000, 0)
  )

  useEffect(() => {
    let interval = setInterval(() => {
      setSeconds(Math.max(deadline - Date.now() / 1000, 0))
    }, 1000)

    return () => clearInterval(interval)
  })

  const pretty = useMemo(() => {
    if (seconds > DAY) {
      return (seconds / DAY).toFixed(0) + ' days'
    }

    if (seconds > HOUR) {
      return (seconds / HOUR).toFixed(0) + ' hours'
    }

    if (seconds > MINUTE) {
      return (seconds / MINUTE).toFixed(0) + ' minutes'
    }

    return seconds.toFixed(0) + ' seconds'
  }, [seconds])

  return (
    <div>
      {deadline && pretty}
    </div>
  )
}

export default Countdown
