import { ImageInput } from "~/components/atoms/File/ImageInput";
import { Label } from "~/components/atoms/Label/Label";
import Textarea from "~/components/atoms/Textfield/Textarea";
import Textfield from "~/components/atoms/Textfield/Textfield";

export const RegisterStep2 = () => {
  return (
    <div className="flex w-full flex-col items-start gap-4 p-6">
      <span className="mb-3 text-24/h3 text-gray-950">Plant Information</span>
      <Textfield label="Plant Name" placeholder="e.g. Monstera Albo Borsigiana Variegata" required className="w-full" />
      <Textarea
        label="Introduction"
        placeholder="e.g. Rare, highly sought-after plant with striking variegation. Known for its rapid growth in optimal conditions."
        required
        className="w-full"
      />
      <ImageInput required label="Upload Certification" onChange={() => {}} />
      <span className="mb-3 mt-8 text-24/h3 text-gray-950">Budget</span>
      <div className="flex w-full flex-col items-start gap-3">
        <div className="flex w-full items-center justify-between gap-6">
          <Label label="Plant Purchase" required className="flex-1" />
          <Textfield placeholder="e.g. $3,600" required className="flex-1" />
        </div>
        <div className="flex w-full items-center justify-between gap-6">
          <Label label="Pot and Soil" className="flex-1" />
          <Textfield placeholder="e.g. $150" className="flex-1" />
        </div>
        <div className="flex w-full items-center justify-between gap-6">
          <Label label="Humidity & Temperature Control   " className="flex-1" />
          <Textfield placeholder="e.g. $375" className="flex-1" />
        </div>
        <div className="flex w-full items-center justify-between gap-6">
          <Label label="Growth Lights" className="flex-1" />
          <Textfield placeholder="e.g. $225" className="flex-1" />
        </div>
        <div className="flex w-full items-center justify-between gap-6">
          <Label label="Additional Maintenance Supplies" className="flex-1" />
          <Textfield placeholder="e.g. $75" className="flex-1" />
        </div>
        <span className="mb-3 mt-8 text-20/h4 text-gray-950">Total Budget: $0</span>
      </div>
    </div>
  );
};
