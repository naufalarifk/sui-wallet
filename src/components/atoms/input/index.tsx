import { Input } from "@heroui/input";

export const AppInput = () => {
  const placements = ["inside", "outside", "outside-left"];
  type Placement = "inside" | "outside" | "outside-left";

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <h3 className="text-default-500 text-small">Without placeholder</h3>
        <div className="flex w-full flex-wrap items-end md:flex-nowrap mb-6 md:mb-0 gap-4">
          {placements.map((placement) => (
            <Input
              key={placement}
              description={placement}
              label="Email"
              labelPlacement={placement as Placement}
              type="email"
              classNames={{
                base: "focus:outline-none",
                input: "focus:outline-none",
              }}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-default-500 text-small">With placeholder</h3>
        <div className="flex w-full flex-wrap items-end md:flex-nowrap mb-6 md:mb-0 gap-4">
          {placements.map((placement) => (
            <Input
              key={placement}
              description={placement}
              label="Email"
              labelPlacement={placement as Placement}
              placeholder="Enter your email"
              type="email"
            />
          ))}
        </div>
      </div>
    </div>
  );
};
