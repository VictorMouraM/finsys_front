'use client'
export type TransactionsType = {
    created_at: Date;
    id: number;
    description: string;
    title: string;
    type: "receipt" | "debit";
    user_id: number;
    categoryId: number;
    value: number;
    date: string;
    category_title: {
      String: string;
      Valid: boolean;
    }
};