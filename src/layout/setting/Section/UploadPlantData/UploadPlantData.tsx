import { Button } from "~/components/atoms/Button/Button";
import { ImageInput } from "~/components/atoms/File/ImageInput";
import Textfield from "~/components/atoms/Textfield/Textfield";

export const UploadPlantData = ({ onMoveToNextStep }: { onMoveToNextStep: () => void }) => {
  return (
    <div className="flex w-full max-w-[600px] flex-col justify-center gap-6">
      <span className="text-24/h3 text-gray-950">Update Plant Data</span>
      <div className="flex w-full flex-col items-start gap-4">
        <ImageInput label="Image File (Full Shot, Close-up of New Leaves)" required onChange={() => {}} />
        <ImageInput label="Plant Image" required onChange={() => {}} />
        <Textfield label="Planting Start Date" required />
      </div>
      <Button onClick={onMoveToNextStep}>Connect Device</Button>
    </div>
  );
};
