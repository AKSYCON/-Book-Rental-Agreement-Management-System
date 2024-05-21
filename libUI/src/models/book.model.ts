export interface book{
    id: number;
    userid: number;
    name: string;
    rating: number;
    author: string;
    genre: string;
    available: string;
    description: string;
    lentById: number;
    currentlyBorrowById: number;
    lenderName: string; 
}