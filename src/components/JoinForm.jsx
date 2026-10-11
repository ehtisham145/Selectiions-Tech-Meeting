import { useState } from 'react'

const ROOM_PATTERN = /^[a-zA-Z0-9-]+$/
const NAME_PATTERN = /^[a-zA-Z\s'.-]+$/

function validateRoom(value) {
  if (!value) return 'Room name is required.'
  if (value.length < 3) return 'Room name must be at least 3 characters.'
  if (value.length > 40) return 'Room name must be under 40 characters.'
  if (!ROOM_PATTERN.test(value)) return 'Only letters, numbers, and hyphens are allowed.'
  return ''
}

function validateName(value) {
  if (!value) return 'Please enter your name.'
  if (value.length < 2) return 'Name must be at least 2 characters.'
  if (value.length > 30) return 'Name must be under 30 characters.'
  if (!NAME_PATTERN.test(value)) return 'Name contains invalid characters.'
  return ''
}

function fieldClass(touched, value, message) {
  if (!touched || !value) return ''
  return message ? 'invalid' : 'valid'
}

export default function JoinForm() {
  const [room, setRoom] = useState('')
  const [name, setName] = useState('')
  const [roomTouched, setRoomTouched] = useState(false)
  const [nameTouched, setNameTouched] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const roomMessage = validateRoom(room)
  const nameMessage = validateName(name)

  function handleRoomChange(e) {
    setRoom(e.target.value.replace(/[^a-zA-Z0-9-]/g, ''))
    setRoomTouched(true)
  }

  function handleSubmit() {
    setRoomTouched(true)
    setNameTouched(true)
    if (roomMessage || nameMessage) return

    setSubmitting(true)
    const roomId = 'SelectionsTechMeet-' + room.trim()
    const jitsiUrl =
      'https://meet.jit.si/' +
      encodeURIComponent(roomId) +
      '#userInfo.displayName=%22' + encodeURIComponent(name.trim()) + '%22'
    window.location.href = jitsiUrl
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter') handleSubmit()
  }

  return (
    <div id="landing">
      <div className="field">
        <label htmlFor="roomName">Meeting Room Name</label>
        <input
          id="roomName"
          className={fieldClass(roomTouched, room, roomMessage)}
          placeholder="e.g. team-standup"
          autoComplete="off"
          maxLength={40}
          value={room}
          onChange={handleRoomChange}
          onKeyDown={handleKeyDown}
        />
        <span className="error-msg">{roomTouched ? roomMessage : ''}</span>
      </div>

      <div className="field">
        <label htmlFor="displayName">Your Name</label>
        <input
          id="displayName"
          className={fieldClass(nameTouched, name, nameMessage)}
          placeholder="e.g. Rizwan"
          autoComplete="off"
          maxLength={30}
          value={name}
          onChange={(e) => { setName(e.target.value); setNameTouched(true) }}
          onKeyDown={handleKeyDown}
        />
        <span className="error-msg">{nameTouched ? nameMessage : ''}</span>
      </div>

      <button id="joinBtn" disabled={submitting} onClick={handleSubmit}>
        <span>{submitting ? 'Redirecting to your meeting…' : 'Join / Start Meeting'}</span>
      </button>

      <p className="hint">No account needed — share the room name with your team to meet.</p>
    </div>
  )
}
