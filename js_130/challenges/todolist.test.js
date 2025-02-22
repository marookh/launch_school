const Todo = require('./todo');
const TodoList = require('./todolist');

describe('TodoList', () => {
  let todo1;
  let todo2;
  let todo3;
  let list;

  beforeEach(() => {
    todo1 = new Todo('Buy milk');
    todo2 = new Todo('Clean room');
    todo3 = new Todo('Go to the gym');

    list = new TodoList("Today's Todos");
    list.add(todo1);
    list.add(todo2);
    list.add(todo3);
  });

  test('todolist has a size of 3', () => {
    expect(list.size()).toBe(3);
  });

  test('todolist converted to an array', () => {
    expect(list.toArray()).toEqual([todo1, todo2, todo3]);
  })

  test("first todo", () => {
    expect(list.first()).toEqual(todo1);
  })

  test("last todo", () => {
    expect(list.last()).toEqual(todo3);
  })

  test("shift in list", () => {
    expect(list.shift()).toEqual(todo1);
    expect(list.size()).toBe(2);
  })

  test("pop removes and returns the last element", () => {
    let todo = list.pop();
    expect(todo).toEqual(todo3);
    expect(list.toArray()).toEqual([todo1, todo2]);
  })

  test("isDone returns false if not all todos in the list are done", () => {
    expect(list.isDone()).toBe(false);
  })

  test("add raises an error if the item is not a todo object", () => {
    expect(() => list.add("object")).toThrow(TypeError);
    expect(() => list.add(true)).toThrow(TypeError);
    expect(() => list.add(1)).toThrow(TypeError);
  })

  test("itemAt raises a referenceError if the index doesn't exist", () => {
    expect(() => list.itemAt(4)).toThrow(ReferenceError);
  })

  test("markDoneAt raises an error if index is not specified", () => {
    expect(() => list.markDoneAt()).toThrow(ReferenceError);

    list.markDoneAt(1);
    expect(todo1.isDone()).toBe(false);
    expect(todo2.isDone()).toBe(true);
    expect(todo3.isDone()).toBe(false);
  })

  test("markUnDoneAt", () => {
    list.markDoneAt(1);
    expect(todo1.isDone()).toBe(false);
    expect(todo2.isDone()).toBe(true);
  })

  test('markAllDone marks all todos in list done', () => {
    list.markAllDone();
    expect(todo1.isDone()).toBe(true);
    expect(todo2.isDone()).toBe(true);
    expect(todo3.isDone()).toBe(true);
    expect(list.isDone()).toBe(true);
  });

  test("removeAt raises a referenceError if the item is not a todo", () => {
    expect(() => list.removeAt(5)).toThrow(ReferenceError);

    list.removeAt(1);
    expect(list.toArray()).toEqual([todo1, todo3]);
  })

  test('toString returns string representation of the list', () => {
    let string = `---- Today's Todos ----
[ ] Buy milk
[ ] Clean room
[ ] Go to the gym`;

    expect(list.toString()).toBe(string);
  });

  test('toString returns string representation of the list', () => {
    list.markAllDone();
    let string = `---- Today's Todos ----
[X] Buy milk
[X] Clean room
[X] Go to the gym`;

    expect(list.toString()).toBe(string);
  });

  test("forEach iterates over all elements", () => {
    let newList = []
    list.forEach((todo) => newList.push(todo));
    expect(newList).toEqual([todo1, todo2, todo3]);
  });

  test('filter returns new TodoList object with filtered todos', () => {
    todo1.markDone();
    let newList = new TodoList(list.title);
    newList.add(todo1);
  
    expect(newList.title).toBe(list.title);
  
    let doneItems = list.filter(todo => todo.isDone());
    expect(doneItems.toString()).toBe(newList.toString());
  });
});