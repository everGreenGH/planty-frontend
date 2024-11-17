import Image from "next/image";
import { Modal } from "~/components/popup/Modal/Modal";
import ValueImage from "~/public/value_image.png";

export const TokenValueModal = () => {
  return (
    <Modal>
      <div className="absolute left-1/2 top-1/2 w-[504px] -translate-x-1/2 -translate-y-1/2">
        <div className="flex flex-col items-center gap-6 rounded-3xl bg-gray-50 p-6">
          <span className="text-24/h3 text-gray-950">Estimated Plant Value</span>
          <Image src={ValueImage} alt="token value" height={300} />
        </div>
      </div>
    </Modal>
  );
};
