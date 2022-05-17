export const formatTime = (t: Date) => {
    const d = new Date(t)
    return d.toLocaleTimeString()
  }