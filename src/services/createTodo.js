export async function createTodo (user, task) {
    const todo = {
        label: task,
        is_done: false,
    };

    const response = await fetch({
        url: `https://playground.4geeks.com/todo/todos/${user}`,
        method: 'POST',
        headers: {
                "content-Type": "application/json?"
        },
        body: JSON.stringify(todo)
    });
    if (response.status === 201) {
        const data = await response.json();
        return data;
    }
    return null;
}