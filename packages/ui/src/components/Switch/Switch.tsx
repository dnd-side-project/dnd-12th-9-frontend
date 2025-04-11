import * as SwitchPrimitives from '@radix-ui/react-switch';

export function Switch({ ...props }) {
  return (
    <SwitchPrimitives.Root
      {...props}
      className="data-[state=checked]:bg-primary-500 h-8 w-[52px] rounded-full data-[state=unchecked]:bg-gray-100"
    >
      <SwitchPrimitives.Thumb className="block size-[26px] translate-x-1 rounded-full bg-white shadow-sm duration-100 data-[state=checked]:translate-x-[1.4rem]" />
    </SwitchPrimitives.Root>
  );
}
