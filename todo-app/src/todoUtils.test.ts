import { createTodo, addTodo, countDone } from "./todoUtils";
import type { Todo } from "./todoUtils";
import { it, expect, describe } from "@jest/globals";

describe("createTodo statement coverage test", () => {
    it("creates a toDo object", () => {
        const item = createTodo("do homework");
        expect(item.text).toBe("do homework");
        expect(typeof item.id).toBe("number");
        expect(item.done).toBe(false);
    });
});

describe("addTodo branch coverage tests", () => {
    it("returns an empty list when text is blank", () => {
        const list: Todo[] = [];
        expect(addTodo(list, " ")).toEqual([]);
    });

    it("adds a new toDo item when text is not blank", () => {
        const empty: Todo[] = [];
        const list = addTodo(empty, "do homework");

        expect(list).toHaveLength(1);
        expect(list[0].text).toBe("do homework");
        expect(list[0].done).toBe(false);
        expect(typeof list[0].id).toBe("number");
    });
});

describe("countDone branch coverage over loops tests", () => {
    it("returns 0 for an empty list", () => {
        const empty: Todo[] = [];

        expect(countDone(empty)).toBe(0);
    });

    it("returns 1 for a list with one finished item", () => {
        const list: Todo[] = [{id: 1, text: "do homework", done: true}];

        expect(countDone(list)).toBe(1);
    });

    it("returns 2 for a list with two finished and one unfinished items", () => {
        const list: Todo[] = [
            {id: 1, text: "do homework", done: true},
            {id: 2, text: "have dinner", done: false},
            {id: 3, text: "take a nap", done: true}
        ];

        expect(countDone(list)).toBe(2);
    });
});