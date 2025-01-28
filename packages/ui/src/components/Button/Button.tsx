export type ButtonProps = {
  children: string;
  appName?: string;
};

export function Button({ children, appName = 'HI' }: ButtonProps) {
  return (
    <button className="text-blue-500" onClick={() => alert(`Hello from your ${appName} app!`)}>
      {children}
    </button>
  );
}
