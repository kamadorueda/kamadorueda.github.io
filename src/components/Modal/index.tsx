import { Dialog } from "@headlessui/react";
import { FC, PropsWithChildren } from "react";
import { ClassNameProp, tw } from "~/utils/tw";

export interface ModalProps extends PropsWithChildren, ClassNameProp {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
}

export const Modal: FC<ModalProps> = ({
  children,
  className,
  isOpen,
  onClose,
  title,
}) => {
  if (!isOpen) return null;

  return (
    <Dialog
      aria-labelledby={title ? "modal-title" : undefined}
      aria-modal="true"
      as="div"
      className="relative z-10"
      onClose={onClose}
      open={isOpen}
      role="dialog"
    >
      <div
        aria-hidden="true"
        className="bg-ctextdark/20 fixed inset-0 transition-opacity duration-300"
      />

      <div className="fixed inset-0 flex items-center justify-center p-2">
        <Dialog.Panel
          className={tw(
            "bg-cbgdefault flex h-[calc(100%-1rem)] w-[calc(100%-1rem)] max-w-4xl transform flex-col overflow-hidden rounded-lg text-left align-middle shadow-xl transition-all duration-300",
            className,
          )}
        >
          {title && (
            <div className="flex-shrink-0 border-b p-6">
              <Dialog.Title
                as="h3"
                className="text-lg font-medium"
                id="modal-title"
              >
                {title}
              </Dialog.Title>
            </div>
          )}
          <div className="flex-1 overflow-y-auto">{children}</div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};
