import useProModal from "@/hooks/useProModal";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";

const ProModal = () => {
  const { isOpen, onClose } = useProModal();

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex justify-center items-center flex-col gap-y-4 pb-2">
            Upgrade to Genius
          </DialogTitle>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default ProModal;
