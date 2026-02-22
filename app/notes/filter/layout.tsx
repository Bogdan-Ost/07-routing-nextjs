type Props = {
  children: React.ReactNode;
  sidebar: React.ReactNode;
};

const NotesLayout = ({ children, sidebar }: Props) => {
  return (
    <div style={{ display: "flex", gap: "20px" }}>
      {sidebar}
      {children}
    </div>
  );
};

export default NotesLayout;
