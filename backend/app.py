from flask import Flask, jsonify, request

app = Flask(__name__)

tasks = [
    {"id": 1, "task": "Learn Python", "completed": False},
    {"id": 2, "task": "Build a React App", "completed": False},
]

# Route to get all tasks
@app.route("/tasks", methods=["GET"])
def get_tasks():
    return jsonify({"tasks": tasks})

# Route to add a new task
@app.route("/tasks", methods=["POST"])
def add_task():
    new_task = request.json
    new_task["id"] = len(tasks) + 1
    tasks.append(new_task)
    return jsonify({"task": new_task}), 201

# Route to update a task's completion status
@app.route("/tasks/<int:task_id>", methods=["PUT"])
def update_task(task_id):
    task = next((t for t in tasks if t["id"] == task_id), None)
    if task:
        task["completed"] = request.json.get("completed", task["completed"])
        return jsonify({"task": task})
    return jsonify({"error": "Task not found"}), 404

if __name__ == "__main__":
    app.run(debug=True)
