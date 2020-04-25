export interface UserInterface {
    id: number;
    name: string;
    email: string;
    edit: string;
    delete: string;
}
  
export const USER_TABLE_DATA: UserInterface[] = [
    {id: 1, name: 'Triump', email: 'Trump@gmail.com', edit: 'EDIT', delete: 'DELETE'},
    {id: 2, name: 'Modi', email: 'modi@gmail.com', edit: 'EDIT', delete: 'DELETE'},
    {id: 3, name: 'Atal Bihari', email: 'atal@gmail.com', edit: 'EDIT', delete: 'DELETE'},
    {id: 4, name: 'Hafiz', email: 'hafizz@gmail.com', edit: 'EDIT', delete: 'DELETE'},
    {id: 5, name: 'Fatima', email: 'fatima@gmail.com', edit: 'EDIT', delete: 'DELETE'}
];