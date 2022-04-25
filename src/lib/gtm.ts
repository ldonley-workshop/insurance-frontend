import { flagStore } from "./flags";

export const event = ({
  action,
  category,
  label,
}: {
  action: string;
  category: string;
  label: string;
}) => {
  const transformedFlagStore: { [key: string]: any } = {};
  for (const [key, value] of Object.entries(flagStore)) {
    transformedFlagStore[key.split(".")[1]] = value;
  }
  // @ts-ignore
  window.analytics.track(action, {
    ...transformedFlagStore,
  });
};
