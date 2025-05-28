export interface ListItem {
  itemName: string
  authorName: string
  status: 'added' | 'pending' | 'completed'
}