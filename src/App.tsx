import { useState } from "react";
import Header from "./components/Header";
import goalImage from "./assets/goals.jpg";
import CourseGoalList from "./components/CourseGoalList";
import AddGoal from "./components/AddGoal";

export interface CourseGoal {
  id: number;
  title: string;
  description: string;
}

export default function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);

  const handleAddGoal = (goal: string, summary: string) => {
    setGoals((prevGoals) => {
      const newGoal: CourseGoal = {
        id: Math.random(),
        title: goal,
        description: summary,
      };
      return [...prevGoals, newGoal];
    });
  };

  const handleDeleteGoal = (id: number) => {
    setGoals((prevGoals) => {
      return prevGoals.filter((goal) => goal.id !== id);
    });
  };

  return (
    <main>
      <Header image={{ src: goalImage, alt: "A list of Goals" }}>
        <h1>Your Course Goal</h1>
      </Header>
      <AddGoal onAddGoal={handleAddGoal} />
      <CourseGoalList goals={goals} onDelete={handleDeleteGoal} />
    </main>
  );
}
