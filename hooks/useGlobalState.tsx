import queryClient from "@/libs/queryClient";
import { useQuery } from "@tanstack/react-query";

export const useGlobalState = (
  key: string,
  initialValue: boolean
): [boolean, (isShow: boolean) => void] => {
  return [
    useQuery<boolean>({
      queryKey: [key],
      queryFn: () => initialValue,
      enabled: false,
      initialData: initialValue,
    }).data,
    (value: boolean) => {
      queryClient.setQueryData<boolean>([key], value);
    },
  ];
};

export default useGlobalState;
