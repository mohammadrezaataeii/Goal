import CourseGoal from "./CourseGoal";
import { CourseGoal as CGoal } from "../App";

interface CourseGoalListProps {
  goals: CGoal[];
  onDelete: (id: number) => void;
}

function CourseGoalList({ goals, onDelete }: CourseGoalListProps) {
  return (
    <ul>
      {goals.map((goal) => {
        return (
          <li key={goal.id}>
            <CourseGoal
              title={goal.title}
              id={goal.id}
              onPressDelete={onDelete}
            >
              <p>{goal.description}</p>
            </CourseGoal>
          </li>
        );
      })}
    </ul>
  );
}

export default CourseGoalList;
