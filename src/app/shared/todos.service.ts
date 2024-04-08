import { Injectable } from "@angular/core";

export interface Todo {
    id: number
    title: string
    completed: boolean
    date: any
}

@Injectable({providedIn: 'root'})

export class TodosService {
    public todos: Todo[] = [
        {id: 1, title: 'bread', completed: false, date: new Date()},
        {id: 2, title: 'milk', completed: true, date: new Date()},
        {id: 3, title: 'tea', completed: false, date: new Date()},
    ]

    onToggle(id: number) {
        console.log(id);
        const idx = this.todos.findIndex(t => t.id === id)
        this.todos[idx].completed = !this.todos[idx].completed
    }

    removeTodo(id: number) {
        this.todos = this.todos.filter(t => t.id !== id)
    }
}