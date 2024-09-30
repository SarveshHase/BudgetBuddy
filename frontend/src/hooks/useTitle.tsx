import { useEffect } from "react";

function useTitle(title: string) {
  useEffect(() => {
    document.title = `${title} - BudgetBuddy`;
  }, [title]);
}
export default useTitle;
