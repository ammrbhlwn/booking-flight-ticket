type ChooseSeatLayoutProps = {
    readonly leftPanel: React.ReactNode;
    readonly rightPanel: React.ReactNode;
};

export const ChooseSeatLayout = ({ leftPanel, rightPanel }: ChooseSeatLayoutProps) => (
    <section
        id="Choose-Seat"
        className="container flex flex-col sm:flex-row items-center sm:items-start justify-between sm:w-[904px] pt-10 mx-auto sm:pb-0 min-h-screen"
    >
        {leftPanel}
        {rightPanel}
    </section>
);