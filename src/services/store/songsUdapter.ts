import { StoreType } from "./index";
import { useStore } from ".";
import { UseSongsService } from "./port";

export function useSongsStorage(): StoreType {
  return useStore();
}
