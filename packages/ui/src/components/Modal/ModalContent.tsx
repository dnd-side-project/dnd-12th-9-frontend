type ContentProps = {
  /**
   * optional, can be used to display a graphic in the modal.
   * @default false
   */
  graphic?: boolean;
  /**
   * The content to be displayed inside the modal.
   */
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

export function Content({ graphic, children }: ContentProps) {
  return (
    <div
      className={`relative z-50 w-80 rounded-2xl bg-white pb-6 pt-8 shadow-lg ${graphic ? 'px-5' : 'px-6'}`}
    >
      {children}
    </div>
  );
}
