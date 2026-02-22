import ModalRouting from "@/app/@modal/(.)notes/[id]/NotePreview.client";
import { fetchNoteById } from "@/lib/api";

type Props = {
  params: Promise<{ id: string }>;
};

const NotePreview = async ({ params }: Props) => {
  const { id } = await params;
  const note = await fetchNoteById(id);

  return (
    <ModalRouting>
      <h2>{note.title}</h2>
      <p>{note.content}</p>
    </ModalRouting>
  );
};

export default NotePreview;
