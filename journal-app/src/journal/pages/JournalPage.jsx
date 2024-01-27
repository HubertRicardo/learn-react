import { JournalLayout } from "../layout/JournalLayout";
import { NoteView, NothingSelectedView } from "../views";

export const JournalPage = () => {
  return (
    <>
      <JournalLayout>
        {/* <Typography>JournalPage</Typography> */}
        {/* <NothingSelectedView /> */}
        <NoteView />
      </JournalLayout>
    </>
  );
};
