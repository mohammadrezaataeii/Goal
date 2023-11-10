import { useRef, FormEvent } from "react";

type AddGoalProps = {
  onAddGoal: (goal: string, summary: string) => void;
};

export default function AddGoal({ onAddGoal }: AddGoalProps) {
  const goal = useRef<HTMLInputElement>(null);
  const summary = useRef<HTMLInputElement>(null);

  const handleSubmmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    const enteredGoal = goal.current!.value;
    const enteredSummary = summary.current!.value;
    event.currentTarget.reset();
    onAddGoal(enteredGoal, enteredSummary);
  };

  return (
    <form onSubmit={handleSubmmit}>
      <p>
        <label htmlFor="goal">Your Goal</label>
        <input id="goal" type="text" ref={goal} />
      </p>
      <p>
        <label htmlFor="summery">Short Summery</label>
        <input id="summery" type="text" ref={summary} />
      </p>
      <button type="submit">Add Goal</button>
    </form>
  );
}
