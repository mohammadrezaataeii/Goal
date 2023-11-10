import { type FC, PropsWithChildren } from "react";
type CourseGoalProps = PropsWithChildren<{
  title: string;
  id: number;
  onPressDelete: (id: number) => void;
}>;

const CourseGoal: FC<CourseGoalProps> = ({
  title,
  id,
  onPressDelete,
  children,
}) => {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        {children}
      </div>

      <button onClick={() => onPressDelete(id)}>Delete</button>
    </article>
  );
};
export default CourseGoal;
