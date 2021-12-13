import { useStore } from ".";
import { UseSongsService } from "./port";

export function useSongsStorage(): UseSongsService {
  return useStore();
}
