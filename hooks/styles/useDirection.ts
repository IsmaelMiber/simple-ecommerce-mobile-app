import { useSelector } from "react-redux";
import { RootStateType } from "../../types";

export default function useDirection() {
  var direction = useSelector(
    (state: RootStateType) => state.localization.direction
  );

  return direction;
}
