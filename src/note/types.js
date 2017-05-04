
export type Note = {
  id: number,
  message: string,
  createdAt: string,
  updatedAt: string,
  boardId: number,
}

export type NoteProps = {
  notes: Array<Note>,
  boardId: number,
}
